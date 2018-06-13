import { Component, OnInit } from '@angular/core';
import { SampleTestService } from '../services/sample-test.service';
import { SampleTest } from '../models/sample-test';

@Component({
  selector: 'app-sample-test',
  templateUrl: './sample-test.component.html',
  styleUrls: ['./sample-test.component.css']
})
export class SampleTestComponent implements OnInit {

  sampleTestData: SampleTest[];

  constructor(private sampleTestService: SampleTestService) { }

  ngOnInit() {
    this.sampleTestService.getSampleTestData().subscribe(data => {
      this.sampleTestData = data;
    });
  }

}
