import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import { Observable } from "rxjs/Rx";
import { SampleTest } from '../models/sample-test';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SampleTestService {

  constructor(private http: Http) {}

  public getSampleTestData(): Observable<SampleTest[]> {
    return this.http.get("./assets/data-file/sample-test-data.json")
    .map(response => response.json())
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.of(error);
  }
}
