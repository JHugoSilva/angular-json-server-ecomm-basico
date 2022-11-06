import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  updateProductMessage: string | undefined
  productData: undefined | Product
  constructor(private router:ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.router.snapshot.paramMap.get('id');
    productId && this.product.getProdut(productId).subscribe((data)=>{
      this.productData = data
    })
  }

  update(data:Product){
    if (this.productData) {
      data.id = this.productData.id
    }
    this.product.updateProduct(data).subscribe((result)=>{
      if (result) {
        this.updateProductMessage = 'Product Updated'
      }
    })

    setTimeout(()=>{
      this.updateProductMessage = undefined
    }, 3000);

  }
}
