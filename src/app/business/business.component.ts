import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {

  constructor(private api:NewsapiService) {}

  businessNewsData:any = [];

  ngOnInit(): void {
    this.api.getBusiness().subscribe((result)=>{
      console.log(result.articles);
      this.businessNewsData = result.articles;
    })
  }
}
