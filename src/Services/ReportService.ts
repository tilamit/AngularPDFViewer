import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService  {

  srvURL: string = "";

  constructor(private httpClient: HttpClient) { }


  getSampleReport(): Observable<any> {
    this.srvURL  = 'http://192.168.100.72:8090/api/values/GetSampleReport';

    return this.httpClient.get(this.srvURL, {responseType: "blob"});
  }
}