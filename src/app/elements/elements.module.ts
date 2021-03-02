import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { TimesDirective } from './times.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ElementsHomeComponent, PlaceHolderComponent, TimesDirective],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ElementsModule { }
