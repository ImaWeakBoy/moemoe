import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FramesComponent } from './frames/frames.component';
import { GlassesComponent } from './glasses/glasses.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';
import { AddressComponent } from './address/address.component';
import { WordsComponent } from './words/words.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FramesComponent,
    GlassesComponent,
    ZipcodeComponent,
    AddressComponent,
    WordsComponent
  ],
  exports: [WordsComponent]
})
export class WordsModule {}
