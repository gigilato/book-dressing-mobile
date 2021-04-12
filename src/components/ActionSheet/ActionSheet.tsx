import React, { memo, forwardRef, useMemo, useCallback, useState, MutableRefObject } from 'react'
import { FlatList, Alert } from 'react-native'
import Animated, { interpolate, Extrapolate, useAnimatedStyle } from 'react-native-reanimated'
import BottomSheet from '@gorhom/bottom-sheet'
import * as ImagePicker from 'expo-image-picker'
import { useTranslation } from 'react-i18next'
import { View, Button, ButtonProps } from '@components/ui'
import { theme } from '@theme'
import { useSafeAreaInsets } from '@hooks'
import { openAppSettings } from '@utils/intent'
import {
  ActionSheetBackdropProps,
  ActionSheetProps,
  MediaPickerActionSheetProps,
} from './ActionSheet.props'
import { styles } from './ActionSheet.styles'

const { spacings, sizes } = theme
const ActionSheetItemHeight = 50

const ActionSheetItem = memo<ButtonProps>(({ title, onPress, ...props }) => {
  return (
    <Button
      bg="secondaryBackground"
      justifyContent="center"
      borderRadius={0}
      title={title}
      h={ActionSheetItemHeight}
      pressOpacity={0.9}
      pressScale={1}
      onPress={onPress}
      {...props}
    />
  )
})

const ActionSheetBackdrop = memo<ActionSheetBackdropProps>(({ animatedIndex, style, visible }) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(animatedIndex.value, [0, 1], [0, 0.4], Extrapolate.CLAMP),
  }))
  return (
    <Animated.View
      pointerEvents={!visible ? 'none' : undefined}
      style={[style, styles.backdrop, containerAnimatedStyle]}
    />
  )
})

export const ActionSheet = memo<ActionSheetProps>(
  forwardRef<BottomSheet, ActionSheetProps>(({ title, options, ...props }, ref) => {
    const { t } = useTranslation()
    const { bottom } = useSafeAreaInsets()

    const [visible, setVisibility] = useState(false)
    const onChange = useCallback((index: number) => setVisibility(index !== 0), [])
    const onPressCancel = useCallback(
      () => (ref as MutableRefObject<BottomSheet>)?.current?.collapse(),
      [ref]
    )

    const actionSheetHeight = useMemo(
      () =>
        ActionSheetItemHeight * (options.length + 2) +
        spacings.m +
        sizes.hairline * options.length +
        bottom,
      [options.length, bottom]
    )
    const snapPoints = useMemo(() => [0, actionSheetHeight], [actionSheetHeight])
    return (
      <BottomSheet
        ref={ref}
        style={styles.container}
        snapPoints={snapPoints}
        enableOverDrag={false}
        enableContentPanningGesture={false}
        enableHandlePanningGesture={false}
        handleComponent={null}
        backdropComponent={(backdropProps) => (
          <ActionSheetBackdrop {...backdropProps} visible={visible} />
        )}
        backgroundComponent={(backgroundProps) => <View bg="transparent" {...backgroundProps} />}
        onChange={onChange}
        {...props}>
        <View>
          <View overflow="hidden" borderRadius="default">
            <FlatList
              data={options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <ActionSheetItem {...item} />}
              scrollEnabled={false}
              ListHeaderComponent={() => (
                <>
                  <ActionSheetItem title={title} textProps={{ fontFamily: 'poppins700' }} />
                  <View h="hairline" bg="ternaryBackground" />
                </>
              )}
              ItemSeparatorComponent={() => <View h="hairline" bg="ternaryBackground" />}
            />
          </View>
          <ActionSheetItem
            mt="m"
            mb={bottom}
            borderRadius="default"
            title={t('cancel')}
            onPress={onPressCancel}
          />
        </View>
      </BottomSheet>
    )
  })
)

export const MediaPickerActionSheet = memo<MediaPickerActionSheetProps>(
  forwardRef<BottomSheet, MediaPickerActionSheetProps>(({ title, onPress }, ref) => {
    const { t } = useTranslation()
    const onPressOption = useCallback(
      async (option: 'camera' | 'library') => {
        ;(ref as MutableRefObject<BottomSheet>)?.current?.collapse()
        const { granted } =
          option === 'camera'
            ? await ImagePicker.requestCameraPermissionsAsync()
            : await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!granted)
          return Alert.alert(
            t('errors:permissionsMissingTitle'),
            t(
              option === 'camera'
                ? 'errors:cameraPermissionsMissingContent'
                : 'errors:libraryPermissionsMissingContent'
            ),
            [
              {
                text: t('cancel'),
                onPress: () => (ref as MutableRefObject<BottomSheet>)?.current?.collapse(),
                style: 'cancel',
              },
              {
                text: t('settings'),
                onPress: () => openAppSettings(),
              },
            ]
          )
        const pickerOptions = { mediaTypes: ImagePicker.MediaTypeOptions.Images }
        const result =
          option === 'camera'
            ? await ImagePicker.launchCameraAsync(pickerOptions)
            : await ImagePicker.launchImageLibraryAsync(pickerOptions)
        if (result.cancelled) return
        onPress(result.uri)
      },
      [onPress, ref, t]
    )
    const options = useMemo(
      () => [
        {
          title: t('updatePictureFromCamera'),
          onPress: async () => onPressOption('camera'),
        },
        {
          title: t('updatePictureFromLibrary'),
          onPress: async () => onPressOption('library'),
        },
      ],
      [t, onPressOption]
    )
    return <ActionSheet ref={ref} title={title} options={options} />
  })
)
