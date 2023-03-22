export interface INewsSource {
  id: string | null,
  name: string | null
}  
export interface INewsItem {
  source: INewsSource,
  author: string | null,
  title: string | null,
  description: string | null, 
  url: string | null,
  urlToImage: string | null,
  publishedAt: string | null,
  content: string | null,
}