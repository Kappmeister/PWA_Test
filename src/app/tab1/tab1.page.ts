import { Component } from '@angular/core';
import { BarcodeScanner, SupportedFormat } from '@capacitor-community/barcode-scanner';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  async ionViewWillEnter() {
    // await BarcodeScanner.prepare();
  }

  async startScan() {
    // Check camera permission
  // This is just a simple example, check out the better checks below
  await BarcodeScanner.checkPermission({ force: true });

  // make background of WebView transparent
  // note: if you are using ionic this might not be enough, check below
  BarcodeScanner.hideBackground();

  const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // if the result has content
    if (result.hasContent) {
      const rawQrData = result.content.split(',');
      // const parsedQrData = rawQrData.
      console.log('RAWDATA', rawQrData); // log the raw scanned content
      console.log(result); // log the raw scanned content
    }
  };

}
