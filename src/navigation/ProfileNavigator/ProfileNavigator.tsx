import React, { memo } from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { HeaderStyleInterpolators } from '@react-navigation/stack'
import { MyProfile, ProfileBookDetail } from '@screens'
import { theme } from '@theme'
import { defaultStackScreenOptions, HeaderTitle } from '@navigation/navigation.utils'
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
    </Stack.Navigator>
  )
})
