import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRippleModule } from '@angular/material/core';

const material = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatSidenavModule,
  MatRippleModule
]

@NgModule({
  exports: [material]
})
export class AngularMaterialModule { }
