import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, PaginationComponent, MatButtonModule, MatCardModule,MatListModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'] 
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  paginatedPosts: any[] = [];
  totalItems = 0;
  itemsPerPage = 10;
  currentPage = 1;

  constructor(private postsService: PostsService, private router: Router) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data) => {
      this.posts = data;
      this.totalItems = data.length;
      this.updatePaginatedPosts();
    });
  }

  updatePaginatedPosts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedPosts = this.posts.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePaginatedPosts();
  }

  onSelectPost(postId: number): void {
    this.router.navigate(['/post', postId]);
  }
}

