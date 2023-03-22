import { ActivityIndicator, StyleSheet, View, useColorScheme } from 'react-native'
import React, { FC } from 'react'
import { Text } from './Themed'

const LoadingSpinner: FC<{size: 'small' | 'large'}> = ({size}) => {
  const colorScheme = useColorScheme()

  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={colorScheme === 'light' ? "#000000" : "#ffffff"} />
      {size === 'large' ? <Text style={{fontSize: 16}}>Загрузка...</Text> : <Text style={{fontSize: 12}}>Загрузка...</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3
  }
})

export default LoadingSpinner