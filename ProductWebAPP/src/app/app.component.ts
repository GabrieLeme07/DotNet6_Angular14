import { Component } from '@angular/core';
import configurl from '../assets/config/config.json'
import { DemoService } from './demo.service';
import { Product } from './Model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  config = {
    ApiUrl: configurl.apiServer.url,
  };
  title = 'Product App';
  response: any = [];
  constructor(private sharedService: DemoService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.refreshProductList();
    }, 1000);
  }
  refreshProductList() {
    this.sharedService.getData().subscribe(data => {
      this.response = data;
      console.log(this.response);
    });
  }
}