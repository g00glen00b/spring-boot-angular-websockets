import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { PostModule } from './post/post.module';
import { CoreModule } from './core/core.module';

const routes: Route[] = [
  {path:'', redirectTo: 'posts', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(routes),
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
