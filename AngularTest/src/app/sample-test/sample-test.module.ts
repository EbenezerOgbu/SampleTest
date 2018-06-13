import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SampleTestRoutingModule } from './sample-test-routing.module';
import { SampleTestComponent } from './components/sample-test.component';
import { SampleTestService } from './services/sample-test.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SampleTestRoutingModule
  ],
  exports: [
    HttpModule
  ],
  declarations: [
    SampleTestComponent
  ], 
  providers: [
    SampleTestService
  ]
})
export class SampleTestModule { }
