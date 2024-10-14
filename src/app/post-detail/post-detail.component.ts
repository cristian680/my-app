import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule,MatListModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'] 
})
export class PostDetailComponent implements OnInit {
  post: any;

  constructor(private postsService: PostsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postsService.getPostById(id).subscribe((data) => {
      this.post = data;
    });
  }
  
  goBack(): void {
    this.router.navigate(['/']);
  }
}

