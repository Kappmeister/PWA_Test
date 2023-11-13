import { Component } from '@angular/core';
import { BarcodeScanner, SupportedFormat, CameraDirection } from '@capacitor-community/barcode-scanner';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  scanData:any;

  constructor(cameraDirection: CameraDirection) {}
  
  startScan = async () => {
    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan({ targetedFormats: [SupportedFormat.QR_CODE], cameraDirection: CameraDirection.BACK});
    if (result.hasContent) {
      console.log(result.content);
      this.scanData = JSON.stringify(result);
    }
  };
  
  stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };
  
  askUser = () => {  
    const c = confirm('Do you want to scan a barcode?');
  
    if (c) {
      this.startScan();
    } else {
      this.stopScan();
    }
  };

}
