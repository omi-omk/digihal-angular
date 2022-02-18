import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-page-component',
  templateUrl: './final-page-component.component.html',
  styleUrls: ['./final-page-component.component.css']
})
export class FinalPageComponentComponent implements OnInit {
  phone={'img':'https://i.gadgets360cdn.com/products/large/1536782796_635_iphone_xr.jpg',
        'title':'Apple iPhone XR',
        'buy':'https://pricee.com/api/redirect/t.php?utm_source=PRICE-IN-INDIA&itemid=2-b09b3q11h1&pgtyp=product&pgcat=Mobiles'}
  
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
specs =['-','Apple','iPhone XR','40,999','Sep-18','Yes ','Touchscreen','-','-','150.90 x 75.70 x 8.30 ','194','IP67',
'2942','No','Proprietary','Yes','Black, Blue, Coral, Red, White, Yellow','-','-',	'6.1','Yes', 	'828x1792 pixels',
' 	Other','19.5:9','326','hexa-core' ,'Apple A12 Bionic','3GB','64GB','No','-','-','-','12-megapixel (f/1.8)',
 	'-','Yes','Yes','7-megapixel (f/2.2)','-','-','-','-','iOS 12','-','Yes','Yes','No','-','Yes','Yes', 'Yes',
  'Yes','Yes','Yes','-','Yes','802.11 a/b/g/n/ac','Yes','Yes, v 5.00 ','Yes','-','-','-','-','Yes','Lightning',
  '-','2','-','-','Yes','Nano-SIM','GSM','Yes','Yes','-','Yes','eSIM']

headings=['General','Display','Hardware','Camera','Software','Connectivity','Sensors']
key_specs_keys=['Display','Process','FrontCamera','RearCamera','RAM','Storage','Battery','OS'];
key_specs_values=['6.10-inch (828x1792)','Apple A12 Bionic ','7MP','12MP', '3GB','64GB','2942mAh','iOS 12'];
//key_specs_values=['6.70-inch (1284x2778)','Apple A15 Bionic','12MP','12MP + 12MP + 12MP','-','128GB','-','iOS 15']

summary = "Apple iPhone XR mobile was launched in September 2018. The phone comes with a 6.10-inch touchscreen display with a resolution of  828x1792 pixels at a pixel density of 326 pixels per inch (ppi) and an aspect ratio of 19.5:9. Apple iPhone XR is powered by  a hexa-core Apple A12 Bionic processor. It comes with 3GB of RAM. The Apple iPhone XR runs iOS 12 and  is powered by a 2942mAh non-removable battery.  The Apple iPhone XR supports wireless charging, as well as proprietary fast charging."

pros = "Best-in-class performance ;Excellent cameras ;Dual SIM is finally an option ;Great battery life ;Regular, timely software updates".split(";")
cons = "Low-resolution display ;Dual SIM support is limited ;First-party apps not great in India ;Fast charger not bundled".split(";")
ratings=[8,8,9,10,9,9]
ratings_headings=['Design','Display','Software','Performance','Battery','Camera'];
counter(i: number) {
  return new Array(i);
}
  constructor() { }

  ngOnInit(): void {
  }

}
