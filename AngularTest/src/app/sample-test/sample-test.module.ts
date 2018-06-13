import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SampleTestRoutingModule } from './sample-test-routing.module';
import { SampleTestComponent } from './components/sample-test.component';
import { SampleTestService } from './services/sample-test.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SampleTestRoutingModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [
    SampleTestComponent
  ], 
  providers: [
    SampleTestService
  ]
})
export class SampleTestModule { }
