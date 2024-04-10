import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {
  api = "http://example.com"
  constructor(private http: HttpClient) { }

  sendForm(body: any) {
    console.log(body)
    this.http.post(this.api, body).subscribe();
  }
}
