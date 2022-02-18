import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery-component',
  templateUrl: './image-gallery-component.component.html',
  styleUrls: ['./image-gallery-component.component.css']
})
export class ImageGalleryComponentComponent implements OnInit {
  changeText : boolean;

  images : string [][]=[
                         ['https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
                         'https://images.unsplash.com/photo-1594360101822-8d8b11816576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGVhcnBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'],
                         ['https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNtYXJ0cGhvbmVzJTIwb24lMjB0YWJsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=331&q=80',
                         'https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtZXJhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'],
                         ['https://images.unsplash.com/photo-1601944177325-f8867652837f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177&q=80',
                         'https://images.unsplash.com/photo-1618442767238-0c2cc9203d58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'],
                         ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                         'https://connectedmag.com.au/wp-content/uploads/2020/09/iStock-1170073827.jpg']
                      ];
  captions : string[][]=[['Smartwatches','Earphones'],
                          ['Smartphones','Cameras'],
                          ['Televisions','Desktops'],
                          ['Laptops','Accessories']

  ]
  constructor() {
    this.changeText=false;
   }

  ngOnInit(): void {
  }

}
