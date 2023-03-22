import { ActivityIndicator, FlatList, StyleSheet, useColorScheme } from 'react-native';

import { Text, View } from '../../components/Themed';
import { FC, useEffect, useState } from 'react';
import { INewsItem } from '../../Types/Types';
import axios from 'axios';

const NewsList: FC = () => {
  const [newsList, setNewsList] = useState<Array<INewsItem>>([{} as INewsItem])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const colorScheme = useColorScheme()

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cd4f6ec6a1fa4e91b336748a2e0feff4',
    })
    .then(({data}) => {setNewsList(data.articles); setIsLoading(false)})
    .catch((e) => console.log(e))
  }, [])

  return (
    <View style={isLoading ? {flex: 1, alignItems: 'center', justifyContent: 'center'} : styles.container}>
      {isLoading && <ActivityIndicator size={'large'} color={colorScheme === 'light' ? "#000000" : "#ffffff"} />}
      {!isLoading && (
        <FlatList data={newsList} renderItem={({ item }) => (
          <Text>{item.author}</Text>
        )} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingHorizontal: 8
  },
});

export default NewsList;