import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparison-component',
  templateUrl: './comparison-component.component.html',
  styleUrls: ['./comparison-component.component.css']
})
export class ComparisonComponentComponent implements OnInit {
  product1:any = (JSON.parse(localStorage.getItem('dataSource')!))[0];
  product2:any = (JSON.parse(localStorage.getItem('dataSource')!))[1];
  category=['Alternate names','Brand','Model','Price in India','Release date','Launched in India','Form factor','Thickness','Body type',
        'Dimensions (mm)','Weight (g)','IP rating','Battery capacity (mAh)','Removable battery','Fast charging','Wireless charging','Colours',
        'SAR value','Refresh Rate','Screen size (inches)','Touchscreen','Resolution','Protection type','Aspect ratio','Pixels per inch (PPI)',
        'Processor','Processor make','RAM','Internal storage','Expandable storage','Expandable storage type','Expandable storage up to (GB)',
        'Dedicated microSD slot','Rear camera','No. of Rear Cameras','Rear autofocus','Rear flash','Front camera','No. of Front Cameras',
        'Front autofocus','Front flash','Pop-Up Camera','Operating system','Skin','Face unlock','3D face recognition',
        'Fingerprint sensor','In-Display Fingerprint Sensor','Compass/ Magnetometer','Proximity sensor','Accelerometer',
        'Ambient light sensor','Gyroscope','Barometer','Temperature sensor','Wi-Fi','Wi-Fi standards supported',
        'GPS','Bluetooth','NFC','Infrared','USB OTG','USB Type-C','Micro-USB','Lightning','Headphones','FM','Number of SIMs',
        'Wi-Fi Direct','Mobile High-Definition Link (MHL)','Active 4G on both SIM cards','SIM 1 SIM Type','GSM/CDMA','3G','4G/ LTE',
        '5G','Supports 4G in India (Band 40)','SIM 2 SIM Type']
  specs1:any[] =[]
  specs2:any[] =[]
  counter(i: number) {
    return new Array(i);
  }
  constructor() { }

  ngOnInit(): void {
    for(let key of this.category)
    {
      key = key.split(' ').join('_');
      //console.log(key);
      this.specs1.push(this.product1[key]);
    }
    for(let key of this.category)
    {
      key = key.split(' ').join('_');
      //console.log(key);
      this.specs2.push(this.product2[key]);
    }
    
  }

}
