import React, { memo } from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { RouteProp } from '@react-navigation/native'
import { Explorer, ExplorerBookDetail } from '@screens'
import { theme } from '@theme'
import { defaultStackScreenOptions } from '@navigation/navigation.utils'
import { ExplorerNavigatorParamList } from './ExplorerNavigator.types'
import { HeaderStyleInterpolators } from '@react-navigation/stack'

const Stack = createSharedElementStackNavigator<ExplorerNavigatorParamList>()
const {
  timings: { sharedElementClose, sharedElementOpen },
} = theme

HeaderStyleInterpolators

export const ExplorerNavigator = memo(() => {
  return (
    <Stack.Navigator headerMode="screen" screenOptions={{ ...defaultStackScreenOptions }}>
      <Stack.Screen
        name="Explorer"
        component={Explorer}
        options={{ headerStyleInterpolator: HeaderStyleInterpolators.forFade }}
      />
      <Stack.Screen
        name="ExplorerBookDetail"
        component={ExplorerBookDetail}
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
        sharedElements={(route: RouteProp<ExplorerNavigatorParamList, 'ExplorerBookDetail'>) => {
          return [{ id: `book.${route.params.data.uuid}` }]
        }}
      />
    </Stack.Navigator>
  )
})
