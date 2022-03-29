import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { IconsModule } from '../icons/icons.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    RadioButtonComponent,
  ],
  imports: [
    CommonModule,
    IconsModule,
    FontAwesomeModule
  ],
  exports:[
    RadioButtonComponent,
  ]
})
export class SharedModule { }
