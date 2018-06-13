import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from "rxjs/Rx";
import { SampleTest } from '../models/sample-test';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SampleTestService {

  constructor(private http: HttpClient) {}

  public getSampleTestData(): Observable<any> {
    return this.http.get("./assets/data-file/sample-test-data.json")
    .map(response => response)
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.of(error);
  }
}
