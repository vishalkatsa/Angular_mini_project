import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { SinglepostComponent } from './singlepost/singlepost.component';

export const routes: Routes = [
    {"path":"",component:HomeComponent},
    {"path":"post",component:PostComponent},
    {"path":"post/:id",component:SinglepostComponent},

    // {"path":"",component:AppComponent},
];
