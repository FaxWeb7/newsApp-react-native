import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'expo-router'
import { INewsItem } from '../../Types/Types'
import axios from 'axios'
import { Text, View } from '../../components/Themed'
import LoadingSpinner from '../../components/LoadingSpinner'

const NewsItem = () => {
  const { itemTitle } = useSearchParams()
  const [item, setItem] = useState<INewsItem>({} as INewsItem)
  const [isLoading, setIsLoading] = useState<boolean>(true)


  useEffect(() => {
    setItemData()
  }, [])

  const setItemData = async (): Promise<void> => {
    try{
      const response = await axios({
        method: 'get',
        url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cd4f6ec6a1fa4e91b336748a2e0feff4',
      })
      await response.data.articles.map((item: INewsItem) => {
        if (item.title == itemTitle){
          setItem(item)
        }
      })
      setIsLoading(false)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <View style={isLoading ? {flex: 1, alignItems: 'center', justifyContent: 'center'} : styles.container}>
      {isLoading && <LoadingSpinner size='large' />}
      {!isLoading && (
        <Text>{item.author}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,

  }
})

export default NewsItem;