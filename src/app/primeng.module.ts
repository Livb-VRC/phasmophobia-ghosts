import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, MegaMenuModule],
  exports: [ButtonModule, MegaMenuModule],
})
export class PrimengModule {}
