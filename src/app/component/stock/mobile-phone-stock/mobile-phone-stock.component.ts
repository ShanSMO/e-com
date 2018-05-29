import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BrandService} from '../../../service/brand.service';
import {ProductService} from '../../../service/product.service';
import {MobilePhoneService} from '../../../service/mobile-phone.service';
import {ModelService} from '../../../service/model.service';

@Component({
  selector: 'app-mobile-phone-stock',
  templateUrl: './mobile-phone-stock.component.html',
  styleUrls: ['./mobile-phone-stock.component.css'],
  providers: [BrandService , ModelService , MobilePhoneService]
})
export class MobilePhoneStockComponent implements OnInit {

  mobilePhoneCreateForm: FormGroup = new FormGroup({
    brand: new FormControl(),
    modal: new FormControl(),
    buyingPrice: new FormControl(0),
    profit: new FormControl(0),
    imei: new FormControl(0),
    discount: new FormControl(0),
    barcode: new FormControl(0),
  });

  selectedCategory: any = {};
  buyingPrice: number;
  profit: number;
  brandList: any[] = [];
  modalList: any[] = [];

  constructor(private productService: ProductService,
              private brandService: BrandService,
              private modelService: ModelService,
              private mobilePhoneService: MobilePhoneService) { }

  ngOnInit() {
    this.loadBrands();
  }

  loadBrands() {
    this.brandService.loadAllBrands().subscribe(data => {
      this.brandList = data.objects;
    });
  }

  loadModelsForBrand() {
    const requestBody = {
      brandDto: {
        id: this.mobilePhoneCreateForm.get('brand').value
      }
    };
    this.modelService.loadModelsForBrand(requestBody).subscribe(data => {
      this.modalList = data.objects;
    });
  }

  createMobilePhone() {
    const requestBody = {
      categoryDto: {
        id: 1
      },
      brandDto: {
        id: this.mobilePhoneCreateForm.get('brand').value
      },
      modelDto: {
        id: this.mobilePhoneCreateForm.get('modal').value
      },
      unitPrice: (this.mobilePhoneCreateForm.get('buyingPrice').value * 1) + (this.mobilePhoneCreateForm.get('profit').value * 1),
      buyingPrice: this.mobilePhoneCreateForm.get('buyingPrice').value,
      sellingPrice: (this.mobilePhoneCreateForm.get('buyingPrice').value * 1) + (this.mobilePhoneCreateForm.get('profit').value * 1),
      profitMargin: this.mobilePhoneCreateForm.get('profit').value,
      discount: this.mobilePhoneCreateForm.get('discount').value,
      imei: this.mobilePhoneCreateForm.get('imei').value,
      createdDate: '2018-05-17',
      barcode: this.mobilePhoneCreateForm.get('barcode').value,
    };
    this.mobilePhoneService.create(requestBody).subscribe(data => {
      if (data.status) {
        this.mobilePhoneCreateForm.reset();
      }
    });
  }

}
