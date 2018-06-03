import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MobilePhoneService} from '../../../../service/mobile-phone.service';
import {StockService} from '../../../../service/stock.service';
import {LeaseMobileRequest} from '../../../../Models/LeaseMobileRequest';

@Component({
  selector: 'app-mobile-phone',
  templateUrl: './mobile-phone.component.html',
  styleUrls: ['./mobile-phone.component.css'],
  providers: [MobilePhoneService, StockService]
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
    deviceDetail: new FormControl(null),
    customer: new FormControl()
  });

  customerForm: FormGroup = new FormGroup({
    fullName: new FormControl(),
    nic: new FormControl(),
    phone: new FormControl(),
    addressDto: new FormGroup({
      addressLine1: new FormControl(),
      street: new FormControl(),
      city: new FormControl(),
    })
  });

  guarantee1Form: FormGroup = new FormGroup({
    fullName: new FormControl(),
    nic: new FormControl(),
    phone: new FormControl(),
    addressDto: new FormGroup({
      addressLine1: new FormControl(),
      street: new FormControl(),
      city: new FormControl(),
    })
  });

  guarantee2Form: FormGroup = new FormGroup({
    fullName: new FormControl(),
    nic: new FormControl(),
    phone: new FormControl(),
    addressDto: new FormGroup({
      addressLine1: new FormControl(),
      street: new FormControl(),
      city: new FormControl(),
    })
  });

  itemList: any[] = [1];
  availableCount: any = 0;
  intRate: any = 0;
  remainPrice: any;
  remainTotalPrice: any;
  minimubDownPayment: any;
  leaseMobileRequest: LeaseMobileRequest;

  constructor(private mobilePhoneService: MobilePhoneService,
              private stockService: StockService) { }

  ngOnInit() {
    this.checkStock();
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
    if (sellingType == 'LEASE') {
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
    const lease = 'LS';
    if (lease === 'LS') {
      this.leaseMobile();
    } else {
      this.sellMobile();
    }
  }

  leaseMobile() {
    this.leaseMobileRequest = new LeaseMobileRequest();
    this.leaseMobileRequest.category = {id: 1};
    this.leaseMobileRequest.date = '2018-05-30';
    this.leaseMobileRequest.deductionType = 'REDUCE_BALANCE';
    this.leaseMobileRequest.downPayment = 12500;
    this.leaseMobileRequest.interestRate = 4.00;
    this.leaseMobileRequest.mobilePhone = {
      id: this.scannedDetials.id
    };
    this.leaseMobileRequest.remainBalance = 22500;
    this.leaseMobileRequest.guaranteesDto1 = this.guarantee1Form.value;
    this.leaseMobileRequest.guaranteesDto2 = this.guarantee2Form.value;
    this.leaseMobileRequest.customerDto = this.customerForm.value;

    this.mobilePhoneService.leaseMobile(this.leaseMobileRequest).subscribe(data => {
      this.checkStock();
    });
  }

  sellMobile() {
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

    this.mobilePhoneService.sellMobile(requestBody).subscribe(data => {
      this.checkStock();
    });
  }

  checkStock() {
    this.stockService.loadMobileStockCount({}).subscribe(data => {
      this.availableCount = data.object.count;
    });
  }
}
