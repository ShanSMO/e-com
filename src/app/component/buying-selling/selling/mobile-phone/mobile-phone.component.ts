import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MobilePhoneService} from '../../../../service/mobile-phone.service';

@Component({
  selector: 'app-mobile-phone',
  templateUrl: './mobile-phone.component.html',
  styleUrls: ['./mobile-phone.component.css'],
  providers: [MobilePhoneService]
})
export class MobilePhoneComponent implements OnInit {

  scannedDetials: any = null;
  mobileSellForm: FormGroup = new FormGroup({
    barcodeId: new FormControl(null, [Validators.required]),
    issueType: new FormControl('CASH'),
    leaseType: new FormControl('FR'),
    downPayment: new FormControl(0),
    discount: new FormControl(0),
    paymentPeriod: new FormControl(6),
    monthlyInstalment: new FormControl(),
    interestRate: new FormControl(4),
    deviceDetail: new FormControl(null)
  });

  itemList: any[] = [1];
  intRate: any = 0;
  remainPrice: any;
  remainTotalPrice: any;
  minimubDownPayment: any;


  constructor(private mobilePhoneService: MobilePhoneService) { }

  ngOnInit() {
  }

  loadMoreDetails() {
    const requestBody = {
      barcode: this.mobileSellForm.get('barcodeId').value
    };
    this.mobilePhoneService.loadByBarcode(requestBody).subscribe(data => {
      this.scannedDetials = data.object;
      this.mobileSellForm.get('deviceDetail').setValue(this.scannedDetials);
      this.setSellingPrices();
    });
  }

  setSellingPrices() {
    const sellingType = this.mobileSellForm.get('issueType').value;
    if(sellingType == 'LEASE') {
      this.intRate = this.mobileSellForm.get('interestRate').value;
      this.minimubDownPayment = this.scannedDetials.buyingPrice * 30 / 100;
      this.remainPrice = (this.scannedDetials.buyingPrice - this.mobileSellForm.get('downPayment').value * 1);

      // Fixed Installment Type
      if (this.mobileSellForm.get('leaseType').value === 'FR') {
        const interest = ((this.remainPrice * this.intRate) /  100 ) * this.mobileSellForm.get('paymentPeriod').value;
        this.remainTotalPrice = (this.remainPrice * 1) + (this.mobileSellForm.get('downPayment').value * 1) + interest;
      } else {

      }

      // Reduce Balance Type
    }
  }

  process() {
    const requestBody = {
      mobilePhoneDto: this.mobileSellForm.get('deviceDetail').value,
      brand: this.mobileSellForm.get('deviceDetail').value.brandDto.brandName,
      customerDto: null,
      sellingPrice: this.mobileSellForm.get('deviceDetail').value.sellingPrice,
      discount: this.mobileSellForm.get('discount').value,
      date: '2018-05-28',
      userDto: {
        id: 1
      }
    };

    this.mobilePhoneService.leaseOrSell(requestBody).subscribe(data => {
      console.log(data);
    });
  }

}
