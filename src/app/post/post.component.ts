import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [HttpClientModule,RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  API = `https://jsonplaceholder.typicode.com/photos`;
  data:any[]=[];
  isLoading: boolean = false;

  httpClient = inject(HttpClient);
  ngOnInit(): void {
      this.fetchData()
  };
  fetchData(){
    this.isLoading = true;

    this.httpClient.get(this.API).subscribe((data:any)=>{
      this.data = data;
      console.log(data);
      
    },
    (error) => {
      console.error('Error fetching data:', error);
    },
    () => {
      this.isLoading = false; 
    }
    )
  }
}
