import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../service/category.service';
import {ProductService} from '../../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {BrandService} from '../../../service/brand.service';
import {ModelService} from '../../../service/model.service';
import {MobilePhoneService} from '../../../service/mobile-phone.service';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';
import {PhotoCopyService} from '../../../service/photo-copy.service';

@Component({
  selector: 'app-product-setting',
  templateUrl: './product-setting.component.html',
  styleUrls: ['./product-setting.component.css'],
  providers: [CategoryService , ProductService, BrandService , ModelService , MobilePhoneService, PhotoCopyService]
})
export class ProductSettingComponent implements OnInit {

  productCreateForm: FormGroup = new FormGroup({
    category: new FormControl(0),
    brand: new FormControl(),
    modal: new FormControl(),
    createdOn: new FormControl(),
    buyingPrice: new FormControl(0),
    profit: new FormControl(0),
    sheetSize: new FormControl(0),
    medium: new FormControl(0),
    mode: new FormControl(0),
    unitPrice: new FormControl(0),
    cardType: new FormControl(0),
    imei: new FormControl(0),
    discount: new FormControl(0),
    singleSidePrice: new FormControl(0),
    doubleSidePrice: new FormControl(0),
  });

  photocopyCreateForm: FormGroup = new FormGroup({
    sheetSize: new FormControl(0),
    doubleSideColorPrice: new FormControl(0),
    doubleSideBlackPrice: new FormControl(0),
    singleSideColorPrice: new FormControl(0),
    singleSideBlackPrice: new FormControl(0),
    printType: new FormControl(0),
    category: new FormControl(0),
  });

  phonePartCreateForm: FormGroup = new FormGroup({});
  rechargeCardCreateForm: FormGroup = new FormGroup({});

  selectedCategory: any = {};
  categoryList: any[] = [];
  pageSizes: any[] = [];
  savedPhotoCopies: any[] = [];


  constructor(private categoryService: CategoryService,
              private photoCopyService: PhotoCopyService) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    const requestBody = {};
    this.categoryService.loadAllCategories(requestBody).subscribe(data => {
      this.categoryList = data.objects;
    });
  }

  createProduct() {

    console.log(this.productCreateForm.get('category').value.code);

    if (this.productCreateForm.get('category').value.code === 'MP') {
      // this.createMobilePhone();
    } else if (this.productCreateForm.get('category').value.code === 'PC') {
      this.createPhotoCopy();

    }
  }

  createPhotoCopy() {
    const requestBody = {
      pageSize: {
        id: this.photocopyCreateForm.get('sheetSize').value
      },
      singleSideColorPrice: this.photocopyCreateForm.get('singleSideColorPrice').value,
      singleSideBlackPrice: this.photocopyCreateForm.get('singleSideBlackPrice').value,
      doubleSideColorPrice: this.photocopyCreateForm.get('doubleSideColorPrice').value,
      doubleSideBlackPrice: this.photocopyCreateForm.get('doubleSideBlackPrice').value,
      printType: this.selectedCategory.code === 'PC' ? 'PHOTO_COPY' : 'PRINT',
      categoryDto: {
        id: this.selectedCategory.id
      }
    };

    this.photoCopyService.create(requestBody).subscribe(data => {
      if (data.status) {
        this.loadSavedPhotoCopy();
        this.photocopyCreateForm.reset();
      }
    });

  }

  createRechargeCard() {

  }

  createPhonePart() {

  }

  loadPageSizes() {
    this.photoCopyService.loadPageSizes().subscribe(data => {
        this.pageSizes = data.objects;
    });
  }

  loadDataForCategory() {
    if (this.selectedCategory.code != null) {
      if (this.selectedCategory.code === 'PC') {
        this.loadPageSizes();
        this.loadSavedPhotoCopy();
      } else {
        this.savedPhotoCopies = [];
      }
    }
  }

  loadSavedPhotoCopy() {
    this.savedPhotoCopies = [];
    this.photoCopyService.loadSavedAll().subscribe(data => {
      this.savedPhotoCopies = data.objects;
    });
  }

}
