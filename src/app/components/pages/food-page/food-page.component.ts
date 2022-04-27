import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Foods } from 'src/app/shared/models/Food';
import { faHouse } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  faHouse = faHouse;
  food!: Foods;
  constructor(private activatedRoute: ActivatedRoute, private fs: FoodService,
    private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.food = fs.getFoodById(params['id'])
    })
  }

  ngOnInit(): void {
  }
  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
