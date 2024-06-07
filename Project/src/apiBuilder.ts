export class APIBuilder {
  private static DOMAIN_URL = 'https://api.escuelajs.co/';
  private static API_POSTFIX = 'api/';
  private static API_VERSION = 'v1/';
  private static PROXY_SERVER = 'http://localhost:3000/proxy?targetUrl=';

  public static getEndpoint(endpoint: string) {
    return this.DOMAIN_URL + this.API_POSTFIX + this.API_VERSION + endpoint;
  }

  public static useProxy(apiURL: string) {
    return this.PROXY_SERVER + apiURL;
  }
}
