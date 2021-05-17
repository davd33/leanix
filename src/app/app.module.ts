import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubListComponent } from './github-list/github-list.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    declarations: [
        AppComponent,
        GithubListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GraphQLModule,
        HttpClientModule,
        StoreModule.forRoot([], {}),
        //StoreDevtoolsModule.instrument({})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
