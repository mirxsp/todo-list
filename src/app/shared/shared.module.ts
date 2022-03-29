import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { IconsModule } from '../icons/icons.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './button/button.component';
import { DateComponent } from './date/date.component';
import { DropdownComponent } from './dropdown/dropdown.component';

const COMPONENTS = [RadioButtonComponent, ButtonComponent, DateComponent,DropdownComponent];

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    IconsModule,
    FontAwesomeModule
  ],
  exports:[
    COMPONENTS
  ]
})
export class SharedModule { }
