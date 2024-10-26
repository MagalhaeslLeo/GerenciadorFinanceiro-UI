import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatInputModule,} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {  MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatChipsModule} from '@angular/material/chips';
import {  MatDividerModule} from "@angular/material/divider";
import {MatTreeModule} from "@angular/material/tree";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CdkTreeModule } from '@angular/cdk/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  imports: [
   
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,   
    MatFormFieldModule, 
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatSelectModule,
    MatDatepickerModule,
    MatChipsModule,
    MatDividerModule,
    CdkTreeModule,
    MatTreeModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatTooltipModule,    
    MatCardModule,
    MatBadgeModule,
    MatButtonToggleModule,    
    DragDropModule,
    MatSlideToggleModule,
    MatExpansionModule,
    ClipboardModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatTabsModule,
    
  ],
  providers: [
        
  ]
})
export class MaterialModule {
}