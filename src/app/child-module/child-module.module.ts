import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ChildExportedComponent } from './child-exported/child-exported.component';
import { GrandChildModule } from './grand-child/grand-child.module';


@NgModule({
  declarations: [ ChildComponent, ChildExportedComponent ],
  imports: [
    CommonModule,
    GrandChildModule
  ],
  exports: [
    GrandChildModule,
    ChildExportedComponent,
    ChildComponent
  ]
})
export class ChildModuleModule {
}
