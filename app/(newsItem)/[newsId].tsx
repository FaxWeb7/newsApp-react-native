import { View, Text } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router'

const NewsItem = () => {
  const { newsTitle } = useSearchParams()

  return (
    <View>
      <Text>{newsTitle}</Text>
    </View>
  )
}

export default NewsItem;