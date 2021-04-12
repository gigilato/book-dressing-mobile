import React, { memo, forwardRef, useMemo, useCallback, useState, MutableRefObject } from 'react'
import { FlatList } from 'react-native'
import Animated, { interpolate, Extrapolate, useAnimatedStyle } from 'react-native-reanimated'
import BottomSheet from '@gorhom/bottom-sheet'
import { useTranslation } from 'react-i18next'
import { View, Button, ButtonProps } from '@components/ui'
import { theme } from '@theme'
import { useSafeAreaInsets } from '@hooks'
import { ActionSheetBackdropProps, ActionSheetProps } from './ActionSheet.props'
import { styles } from './ActionSheet.styles'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'

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
      () => (ref as MutableRefObject<BottomSheetMethods>)?.current?.collapse(),
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
