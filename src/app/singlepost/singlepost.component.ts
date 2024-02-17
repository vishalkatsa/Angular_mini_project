import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlepost',
  standalone: true,
  imports: [],
  templateUrl: './singlepost.component.html',
  styleUrl: './singlepost.component.css'
})
export class SinglepostComponent implements OnInit{
  userId:any={}
  constructor(private route:ActivatedRoute){

  }
  ngOnInit(): void {
        this.userId = this.route.snapshot.paramMap.get('id');
  }
}
