import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PhotoModule} from './photo/photo.module';
import {StoreModule} from '@ngrx/store';
import {photoReducer} from './store/photo.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PhotoModule,
    StoreModule.forRoot({
        photo: photoReducer
      },
      {}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
