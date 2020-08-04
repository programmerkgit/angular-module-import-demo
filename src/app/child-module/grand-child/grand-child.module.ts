import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { GrandChildExportedComponent } from './grand-child-exported/grand-child-exported.component';


@NgModule({
  declarations: [
    GrandChildComponent,
    GrandChildExportedComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [ GrandChildExportedComponent ]
})
export class GrandChildModule {
}
