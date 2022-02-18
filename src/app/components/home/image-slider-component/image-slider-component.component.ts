import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-image-slider-component',
  templateUrl: './image-slider-component.component.html',
  styleUrls: ['./image-slider-component.component.css']
})
export class ImageSliderComponentComponent implements OnInit {
  showNavigationIndicators = true;
  showNavigationArrows = false;
  myInterval=3000;
  images = ['https://www.businessinsider.in/photo/85400970/Master.jpg',
          'https://m.media-amazon.com/images/I/71uuDYxn3XL._SL1500_.jpg',
          'https://1.bp.blogspot.com/-4EUqkzfV19E/YQ6Nc2Bo3YI/AAAAAAAAPYc/ZtjWjWlvdnQtLxF7QSsNFPiwtL3RrtVxwCLcBGAsYHQ/s1500/61WKnlPcilL._SL1500_.jpg',
          'http://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto/in-resources/7f703506-689d-4b4e-b482-c32d60769d33/Images/ProductImages/Source/sw1pro-hd-display.png'];

  constructor() { }

  ngOnInit(): void {
  }

}
