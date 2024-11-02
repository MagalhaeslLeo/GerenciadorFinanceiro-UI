import { APP_INITIALIZER, DEFAULT_CURRENCY_CODE, ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { EnvService } from './core/env.service';
import { User } from './core/user';
import { Utils } from './core/utils';
import { ServiceUtil } from './core/serviceUtil';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule
 
   
  ],
  providers: [
    EnvService,
    User,
    Utils,
    ServiceUtil,
    {provide: MatDialog, useValue: {}},
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {hasBackDrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 