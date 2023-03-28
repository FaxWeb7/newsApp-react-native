import { Href } from "expo-router/src/link/href"
import { ImageURISource } from "react-native"

export interface INewsSource {
  id: string | null,
  name: string
}  
export interface INewsItem {
  source: INewsSource,
  author: string | null,
  title: string,
  description: string | null, 
  url: Href,
  urlToImage: string | undefined,
  publishedAt: string | null,
  content: string | null,
}