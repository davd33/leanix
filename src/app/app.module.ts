import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubListComponent } from './github-list/github-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { GraphQLService } from './graphql.service';
import { AppEffects } from './app.effects';
import { reducers } from './app.state';
import { GithubDetailComponent } from './github-list/github-detail/github-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        GithubListComponent,
        GithubDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, {  }),
        EffectsModule.forRoot([AppEffects]),
        StoreDevtoolsModule.instrument()
    ],
    providers: [Location, GraphQLService],
    bootstrap: [AppComponent]
})
export class AppModule { }
