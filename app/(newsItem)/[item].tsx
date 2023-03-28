import { Image, Linking, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'expo-router'
import { INewsItem } from '../../Types/Types'
import axios from 'axios'
import { Text, View } from '../../components/Themed'
import LoadingSpinner from '../../components/LoadingSpinner'
import ExternalLink from '../../components/ExternalLink'

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
        <>
          <Text style={{fontSize: 32, fontFamily: 'mtSemibold'}}>{item.title}</Text>
          <View style={styles.details}>
            <ExternalLink href={item.url}><Text style={{fontSize: 15, color: '#2f95dc'}}>Link to the oficcial resource</Text></ExternalLink>
            <Text style={{fontSize: 13, marginTop: 2, marginLeft: 'auto'}} lightColor='rgba(0,0,0,0.7)' darkColor='rgba(255,255,255,0.7)'>{item.source.name} - </Text>
            <Text style={{fontSize: 13, marginTop: 2}} lightColor='rgba(0,0,0,0.7)' darkColor='rgba(255,255,255,0.7)' >{item.publishedAt?.replace('T', ' ')?.replace("Z", '')?.replaceAll('-', '.').split(' ')[0] + ' ' + item.publishedAt?.replace('T', ' ')?.replace("Z", '')?.replaceAll('-', '.').split(' ')[1].substring(0, 5)}</Text>
          </View>
          <Image source={{uri: item.urlToImage}} resizeMode='stretch' style={{width: '100%', height: 225, borderRadius: 6}} />
          <Text style={{fontSize: 22}}>{item.content}</Text>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 15,
    paddingTop: 15,
    paddingHorizontal: 8
  },
  details: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  }
})

export default NewsItem;