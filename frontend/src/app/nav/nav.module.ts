import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FooterComponent, ToolbarComponent],
  exports: [HeaderComponent, FooterComponent, ToolbarComponent]
})
export class NavModule {}
