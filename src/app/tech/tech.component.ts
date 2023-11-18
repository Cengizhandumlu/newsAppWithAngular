import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent {

  techNewsData: any = []
  constructor(private api: NewsapiService) { }

  ngOnInit(): void {
    this.api.getTech().subscribe((result) => {
      console.log(result.articles);
      this.techNewsData = result.articles;
    })
  }
}
