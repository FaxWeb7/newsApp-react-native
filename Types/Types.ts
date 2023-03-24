import { Href } from "expo-router/src/link/href"

export interface INewsSource {
  id: string | null,
  name: string
}  
export interface INewsItem {
  source: INewsSource,
  author: string | null,
  title: string,
  description: string | null, 
  url: Href | null,
  urlToImage: Href | null,
  publishedAt: string | null,
  content: string | null,
}