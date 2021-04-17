import React, { memo, useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { useTranslation } from 'react-i18next'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { Screen, Text, View } from '@components/ui'
import { LoanList } from '@components'
import { useMeQuery } from '@api/hooks/generated'
import { LoansProps } from './Loans.props'
import { styles } from './Loans.styles'

const routes = [{ key: 'loans' }, { key: 'requests' }]

const LoanRoute = memo(() => {
  const { data } = useMeQuery({ fetchPolicy: 'cache-first' })
  return (
    <LoanList
      ListHeaderComponent={() => <View h="s" />}
      onPressLoan={(loan) => console.log(loan)}
      queryOptions={{ variables: { where: { userUuid: data?.me.uuid } } }}
      style={styles.loanList}
      variant="loan"
    />
  )
})

const RequestRoute = memo(() => {
  const { data } = useMeQuery({ fetchPolicy: 'cache-first' })
  return (
    <LoanList
      ListHeaderComponent={() => <View h="s" />}
      onPressLoan={(loan) => console.log(loan)}
      queryOptions={{ variables: { where: { ownerUuid: data?.me.uuid } } }}
      style={styles.loanList}
      variant="request"
    />
  )
})

const renderScene = SceneMap({
  loans: LoanRoute,
  requests: RequestRoute,
})

export const Loans = memo<LoansProps>(() => {
  const { t } = useTranslation('loans')
  const layout = useWindowDimensions()

  const [index, setIndex] = useState(0)
  return (
    <Screen noPadding>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabbar}
            renderLabel={({ route }) => (
              <Text variant="title" py="xs">
                {t(route.key)}
              </Text>
            )}
          />
        )}
      />
    </Screen>
  )
})
