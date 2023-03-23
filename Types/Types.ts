import { ImageSourcePropType, ImageURISource } from "react-native"

export type INewsSource = {
  id: string | null,
  name: string
}  
export type INewsItem = {
  source: INewsSource,
  author: string | null,
  title: string,
  description: string | null, 
  url: string | null,
  urlToImage: string | null,
  publishedAt: string | null,
  content: string | null,
}