import { Component, OnInit } from '@angular/core';
import {PhotoCopyService} from '../../../../service/photo-copy.service';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-photo-copy',
  templateUrl: './photo-copy.component.html',
  styleUrls: ['./photo-copy.component.css'],
  providers: [PhotoCopyService]
})
export class PhotoCopyComponent implements OnInit {

  availableList: any[] = [];
  unitPrice: any = 0;
  discount = 0;
  pCopySellForm: FormGroup = new FormGroup({
    sheetSize: new FormControl(),
    medium: new FormControl(),
    side: new FormControl(),
    qty: new FormControl(),
    discount: new FormControl(0),
    date: new FormControl('5544544')
  });

  bulk: any[] = [];
  totalPrice: any = 0;

  constructor(private photoCopyService: PhotoCopyService) { }

  ngOnInit() {
    this.loadAvailableSheets();

  }

  loadAvailableSheets() {
    this.photoCopyService.loadSavedAll().subscribe(data => {
      this.availableList = data.objects;
    });
  }

  getPrices() {
    switch (this.pCopySellForm.get('side').value) {
      case 'SINGLE_SIDE':
        switch (this.pCopySellForm.get('medium').value) {
          case 'BLACK_AND_WHITE': this.unitPrice = this.pCopySellForm.get('sheetSize').value.singleSideBlackPrice; break;
          case 'COLOR': this.unitPrice = this.pCopySellForm.get('sheetSize').value.singleSideColorPrice; break;
        } break;
      case 'DOUBLE_SIDE':
        switch (this.pCopySellForm.get('medium').value) {
          case 'BLACK_AND_WHITE': this.unitPrice = this.pCopySellForm.get('sheetSize').value.doubleSideBlackPrice; break;
          case 'COLOR': this.unitPrice = this.pCopySellForm.get('sheetSize').value.doubleSideColorPrice; break;
        } break;
    }
  }

  process() {
    const bulkItem = {
      printType: 'PHOTO_COPY',
      pageSizeDto: this.pCopySellForm.get('sheetSize').value.pageSize ,
      qty: this.pCopySellForm.get('qty').value,
      printingSides: this.pCopySellForm.get('side').value,
      printingMedium: this.pCopySellForm.get('medium').value,
      // date: this.pCopySellForm.get('date').value,
      date: new Date(),
      unitPrice: this.unitPrice,
      total: this.pCopySellForm.get('qty').value * this.unitPrice - this.pCopySellForm.get('discount').value,
      hasDiscount: false,
      discount: 0
    };

    this.totalPrice = this.totalPrice + bulkItem.total;
    this.bulk.push(bulkItem);
    this.pCopySellForm.reset();
  }

  finish() {
    this.photoCopyService.sellPhotoCopy(this.bulk).subscribe(data => {
      this.bulk = [];
    });

  }
}
