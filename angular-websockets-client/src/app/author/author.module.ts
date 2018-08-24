import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorPageComponent } from './author-page/author-page.component';
import { AuthorInfoComponent } from './author-info/author-info.component';
import { Route, RouterModule } from '@angular/router';
import { PostModule } from '../post/post.module';

const routes: Route[] = [
  {path: 'author/:username', component: AuthorPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PostModule
  ],
  declarations: [AuthorPageComponent, AuthorInfoComponent]
})
export class AuthorModule { }
