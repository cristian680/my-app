import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

export const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'post/:id', component: PostDetailComponent },
];

