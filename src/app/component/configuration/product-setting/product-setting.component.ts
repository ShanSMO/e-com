import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../service/category.service';
import {ProductService} from '../../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-setting',
  templateUrl: './product-setting.component.html',
  styleUrls: ['./product-setting.component.css'],
  providers: [CategoryService , ProductService]
})
export class ProductSettingComponent implements OnInit {

  productCreateForm: FormGroup = new FormGroup({
    category: new FormControl(2),
    brand: new FormControl(),
    modal: new FormControl(),
    createdOn: new FormControl(),
    buyingPrice: new FormControl(0),
    profit: new FormControl(0),
    sheetSize: new FormControl(0),
    medium: new FormControl(0),
    mode: new FormControl(0),
  });

  buyingPrice: number;
  profit: number;

  categoryList: any[] = [];
  brandList: any[] = [];
  modalList: any[] = [];


  constructor(private categoryService: CategoryService,
              private productService: ProductService) { }

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
    const requestBody = {
      category: {
        id: this.productCreateForm.get('category').value.id
      },
      brand: this.productCreateForm.get('brand').value,
      modal: this.productCreateForm.get('modal').value,
      unitPrice: this.productCreateForm.get('buyingPrice').value,
      buyingPrice: this.productCreateForm.get('buyingPrice').value,
      sellingPrice: this.productCreateForm.get('buyingPrice').value,
      createdDate: '2018-05-17',
    };
    this.productService.createProduct(requestBody).subscribe(data => {

    });
  }

}
