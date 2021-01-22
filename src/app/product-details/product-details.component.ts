import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../model/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    window.alert('Your product added to the cart!');
    this.cartService.addToCart(product);
  }

}
