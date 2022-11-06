import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productList: undefined | Product[]
  productMessage: undefined | string
  trash = faTrash
  pencil = faEdit

  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.list()
  }

  deleteProduct(id:number) {
    this.product.deleteProduct(id).subscribe((result)=>{
      if (confirm('Deseja excluir o produto')) {
        if (result) {
          this.productMessage = 'Product is deleted';
        }
      }
      this.list()
    })
    setTimeout(()=>{
      this.productMessage = undefined
    }, 3000);
  };

  updateProduct(id:number) {
    console.warn('teste ID:', id)

  }

  list() {
    this.product.productList().subscribe((result:any)=>{
      this.productList = result;
    })
  }

}
