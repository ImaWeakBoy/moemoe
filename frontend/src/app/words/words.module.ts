import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FramesComponent } from './frames/frames.component';
import { GlassesComponent } from './glasses/glasses.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FramesComponent,
    GlassesComponent,
    ZipcodeComponent,
    AddressComponent
  ],
  exports: [
    FramesComponent,
    GlassesComponent,
    ZipcodeComponent,
    AddressComponent
  ]
})
export class WordsModule {}
