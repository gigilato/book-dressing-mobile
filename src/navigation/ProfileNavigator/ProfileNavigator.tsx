import React, { memo } from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { HeaderStyleInterpolators, TransitionPresets } from '@react-navigation/stack'
import { MyProfile, ProfileBookDetail, UpdateProfile, UpdatePassword } from '@screens'
import { theme } from '@theme'
import {
  DefaultCancelHeaderLeft,
  DefaultFinishHeaderRight,
  defaultStackScreenOptions,
  HeaderTitle,
} from '@navigation/navigation.utils'
import { ProfileNavigatorParamList } from './ProfileNavigator.types'

const Stack = createSharedElementStackNavigator<ProfileNavigatorParamList>()
const {
  timings: { sharedElementClose, sharedElementOpen },
} = theme

export const ProfileNavigator = memo(() => {
  return (
    <Stack.Navigator
      initialRouteName="MyProfile"
      headerMode="screen"
      screenOptions={{
        ...defaultStackScreenOptions,
      }}>
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={({ route }) => ({
          headerTitle: ({ onLayout }) => (
            <HeaderTitle onLayout={onLayout}>{route.params?.data?.username ?? ''}</HeaderTitle>
          ),
        })}
      />
      <Stack.Screen
        name="ProfileBookDetail"
        component={ProfileBookDetail}
        options={{
          headerShown: false,
          gestureEnabled: false,
          transitionSpec: {
            open: { animation: 'timing', config: { duration: sharedElementOpen } },
            close: { animation: 'timing', config: { duration: sharedElementClose } },
          },
          headerStyleInterpolator: HeaderStyleInterpolators.forFade,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return { cardStyle: { opacity: progress } }
          },
        }}
        // @ts-ignore
        sharedElements={(route: RouteProp<ProfileNavigatorParamList, 'ProfileBookDetail'>) => {
          return [{ id: `book.${route.params.data.uuid}` }]
        }}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={({ route }) => {
          const { loading, onPressHeaderRight } = route.params
          return {
            headerLeft: (props) => <DefaultCancelHeaderLeft {...props} />,
            headerRight: () => (
              <DefaultFinishHeaderRight onPress={onPressHeaderRight} loading={loading} />
            ),
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }
        }}
      />
      <Stack.Screen
        name="UpdatePassword"
        component={UpdatePassword}
        options={({ route }) => {
          const { loading, onPressHeaderRight } = route.params
          return {
            headerLeft: (props) => <DefaultCancelHeaderLeft {...props} />,
            headerRight: () => (
              <DefaultFinishHeaderRight onPress={onPressHeaderRight} loading={loading} />
            ),
          }
        }}
      />
    </Stack.Navigator>
  )
})
