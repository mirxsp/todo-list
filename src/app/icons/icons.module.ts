import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';



@NgModule({
  declarations: [],
  imports: []
})
export class IconsModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab, far);
}
}
