import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //display headlines data
  headlinesData:any = [];

  constructor(private api:NewsapiService) {}

  ngOnInit(): void {
    this.api.getHeadlines().subscribe((result)=>{
      console.log(result.articles);
      this.headlinesData = result.articles;
    })
  }
}
