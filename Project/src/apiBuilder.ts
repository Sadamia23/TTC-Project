export class APIBuilder {
  // For Authorization and Registration
  private static DOMAIN_URL = 'https://api.escuelajs.co/';
  private static API_POSTFIX = 'api/';
  private static API_VERSION = 'v1/';

  public static getEndpoint(endpoint: string) {
    return this.DOMAIN_URL + this.API_POSTFIX + this.API_VERSION + endpoint;
  }

  //For Proxy Server
  private static PROXY_SERVER = 'http://localhost:3000/proxy?targetUrl=';

  public static useProxy(apiURL: string) {
    return this.PROXY_SERVER + apiURL;
  }

  // For news api

  private static NEWS_DOMAIN_URL = 'https://newsapi.org/';
  private static NEWS_API_VERSION = 'v2/';
  private static NEWS_API_ENDPOINT =
    '/top-headlines?country=us&category=business&apiKey=';

  public static getNews(apiKey: string) {
    return (
      this.NEWS_DOMAIN_URL +
      this.NEWS_API_VERSION +
      this.NEWS_API_ENDPOINT +
      apiKey
    );
  }
}


// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1ede808a052e43da86b324e66d7051b6