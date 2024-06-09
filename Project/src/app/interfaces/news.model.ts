// export interface INewsRoot{

// }

export interface INewsData {
  status: string;
  totalResults: number;
  articles: INews[];
}

export interface INews {
  source: ISource;
  author: null;
  title: string;
  description: string;
  url: string;
  urlToImage: null;
  publishedAt: Date;
  content: string;
}

export interface ISource {
  id: null;
  name: string;
}
