import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() {}
  getData() {
    return [
      {
        itemImageSrc:
          'https://ttc.com.ge/sites/default/files/2019-07/Metro%208_0.jpg',
        thumbnailImageSrc:
          'https://ttc.com.ge/sites/default/files/2019-07/Metro%208_0.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc:
          'https://ttc.com.ge/sites/default/files/2019-07/%E1%83%90%E1%83%AE%E1%83%90%E1%83%9A%E1%83%98%20%E1%83%90%E1%83%95%E1%83%A2%E1%83%9D%E1%83%91%E1%83%A3%E1%83%A1%E1%83%981_0.jpg',
        thumbnailImageSrc:
          'https://ttc.com.ge/sites/default/files/2019-07/%E1%83%90%E1%83%AE%E1%83%90%E1%83%9A%E1%83%98%20%E1%83%90%E1%83%95%E1%83%A2%E1%83%9D%E1%83%91%E1%83%A3%E1%83%A1%E1%83%981_0.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        itemImageSrc:
          'https://ttc.com.ge/sites/default/files/2019-07/Rope%206_0.jpg',
        thumbnailImageSrc:
          'https://ttc.com.ge/sites/default/files/2019-07/Rope%206_0.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
      {
        itemImageSrc:
          'https://ttc.com.ge/sites/default/files/2019-07/30653252_2103556359660953_891262678071246848_o_0.jpg',
        thumbnailImageSrc:
          'https://ttc.com.ge/sites/default/files/2019-07/30653252_2103556359660953_891262678071246848_o_0.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4',
      },
      {
        itemImageSrc:
          'https://ttc.com.ge/sites/default/files/2019-07/60193804_2723415367675046_1321816356173119488_o_0.jpg',
        thumbnailImageSrc:
          'https://ttc.com.ge/sites/default/files/2019-07/60193804_2723415367675046_1321816356173119488_o_0.jpg',
        alt: 'Description for Image 5',
        title: 'Title 5',
      },
      {
        itemImageSrc:
          'https://ttc.com.ge/sites/default/files/2019-07/Metro%2011.jpg',
        thumbnailImageSrc:
          'https://ttc.com.ge/sites/default/files/2019-07/Metro%2011.jpg',
        alt: 'Description for Image 6',
        title: 'Title 6',
      },
      {
        itemImageSrc:
          'https://ttc.com.ge/sites/default/files/2019-07/Rope%204_0.jpg',
        thumbnailImageSrc:
          'https://ttc.com.ge/sites/default/files/2019-07/Rope%204_0.jpg',
        alt: 'Description for Image 7',
        title: 'Title 7',
      },
    ];
  }

  getImages() {
    return Promise.resolve(this.getData());
  }
}
