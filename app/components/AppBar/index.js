/**
 *
 * AppBar
 *
 */

import React from 'react'
import { Appbar } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'

import PropTypes from 'prop-types'
import For from 'app/components/For'
import NavigationService from 'app/services/NavigationService'

export const getAppBarWithBack = (title, rightItems = []) => (
  <AppBar
    leftItems={[
      {
        type: 'arrow-left',
        onPress: NavigationService.goBack
      }
    ]}
    title={title}
    rightItems={rightItems}
  />
)

export const getAppBarWithMenu = (title, rightItems = []) => (
  <AppBar
    leftItems={[
      {
        type: 'menu',
        onPress: NavigationService.toggleDrawer
      }
    ]}
    title={title}
    rightItems={rightItems}
  />
)

function AppBar({ title, leftItems, rightItems }) {
  const renderAppBarAction = items => (
    <For
      flexDirection="row"
      parent={<View />}
      of={items}
      renderItem={item => (
        <Appbar.Action color="white" icon={item.type} onPress={item.onPress} />
      )}
    />
  )

  return (
    <Appbar.Header style={styles.appbar} testID="app-bar">
      {renderAppBarAction(leftItems)}
      <Appbar.Content title={title} />
      {renderAppBarAction(rightItems)}
    </Appbar.Header>
  )
}

AppBar.propTypes = {
  leftItems: PropTypes.array,
  rightItems: PropTypes.array,
  title: PropTypes.string
}

const styles = StyleSheet.create({
  appbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  icon: {
    color: 'white'
  }
})

export default AppBar
