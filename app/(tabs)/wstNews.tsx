import { FlatList, Image, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { Text, View } from '../../components/Themed';
import { FC, useEffect, useState } from 'react';
import { INewsItem } from '../../Types/Types';
import axios from 'axios';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useRouter } from 'expo-router';

const NewsList: FC = () => {
  const [newsList, setNewsList] = useState<Array<INewsItem>>([{} as INewsItem])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async (): Promise<void> => {
    try{
      const response = await axios({
        method: 'get',
        url: 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=cd4f6ec6a1fa4e91b336748a2e0feff4',
      })
      const filteredNews = await response.data.articles.filter((el: INewsItem) => el.urlToImage !== null && el.content !== null && el.source.name !== null)
      setNewsList(filteredNews)
      setIsLoading(false)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <View style={isLoading ? {flex: 1, alignItems: 'center', justifyContent: 'center'} : styles.container}>
      {isLoading && <LoadingSpinner size='large' />}
      {!isLoading && (
        <FlatList showsHorizontalScrollIndicator={false} contentContainerStyle={styles.newsList} data={newsList} renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.newsItem} onPress={() => router.push({ pathname: '/(newsItem)/[item.tsx]', params: { newsTheme: 'wst', itemTitle: item.title } })}>
            <Image key={index} source={{uri: String(item.urlToImage)}} style={{width: 100, height: 100, borderRadius: 8}} />
            <View style={styles.details}>
                <Text style={{fontSize: 16}}>{item.title?.length >= 114 ? item.title?.substring(0,114) + '...' : item.title}</Text>
              <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                <Text style={{fontSize: 14}} lightColor='rgba(0,0,0,0.7)' darkColor='rgba(255,255,255,0.7)' >{item.source.name.length >= 15 ? item?.source.name.substring(0,15) + '...' : item.source.name}</Text>
                <Text style={{fontSize: 14}} lightColor='rgba(0,0,0,0.7)' darkColor='rgba(255,255,255,0.7)' >{item.publishedAt?.replace('T', ' ')?.replace("Z", '')?.replaceAll('-', '.').split(' ')[0] + ' ' + item.publishedAt?.replace('T', ' ')?.replace("Z", '')?.replaceAll('-', '.').split(' ')[1].substring(0, 5)}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  newsList: {
    marginTop: 35,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 15,
    paddingBottom: 70
  },
  newsItem: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 10, 
  },
  details: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 6,
    flexShrink: 1
  }
});

export default NewsList;