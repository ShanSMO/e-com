import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../service/category.service';
import {ProductService} from '../../../service/product.service';

@Component({
  selector: 'app-product-setting',
  templateUrl: './product-setting.component.html',
  styleUrls: ['./product-setting.component.css'],
  providers: [CategoryService , ProductService]
})
export class ProductSettingComponent implements OnInit {

  categoryList: any[] = [];
  brandList: any[] = [];
  modalList: any[] = [];


  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    const requestBody = {};
    this.categoryService.loadAllCategories(requestBody).subscribe(data => {
      this.categoryList = data.objects;
    });
  }

}
