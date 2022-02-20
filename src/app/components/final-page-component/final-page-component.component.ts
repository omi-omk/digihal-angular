import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';


@Component({
  selector: 'app-final-page-component',
  templateUrl: './final-page-component.component.html',
  styleUrls: ['./final-page-component.component.css']
})
export class FinalPageComponentComponent implements OnInit {
  public product: any;
  
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
specs:any[] =[]

headings=['General','Display','Hardware','Camera','Software','Connectivity','Sensors']
key_specs_keys=['Display','Processor','Front Camera','Rear Camera','RAM','Storage','Battery','OS'];
key_specs_values:any[]=[];
pros = [];
cons = [];
//ratings=[8,8,9,10,9,9];
//ratings_headings=['Design','Display','Software','Performance','Battery','Camera'];


counter(i: number) {
  return new Array(i);
}
  constructor(private _service: ProductDataService) { }

  ngOnInit(): void {
    
    this.product = this._service.getProduct()
    this.pros = this.product.Pros.split(";")
    this.cons = this.product.Cons.split(";")

    for(let key of this.key_specs_keys)
    {
      key = key.split(' ').join('_');
      key = 'k_'+key;
      //console.log(key);
      this.key_specs_values.push(this.product[key]);
    }
    //console.log(this.key_specs_values);

    for(let key of this.category)
    {
      key = key.split(' ').join('_');
      //console.log(key);
      this.specs.push(this.product[key]);
    }
    
    
  }

}
