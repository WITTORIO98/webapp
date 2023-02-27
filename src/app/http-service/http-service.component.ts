import {HttpClient, HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";
import {Component} from '@angular/core';

const URL: string = "http://localhost:8080"

export enum GET {
  hello = '/hello'
}

export enum POST {
  test = 'test'
}

@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.scss']
})
export class HttpServiceComponent {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  private params = new HttpParams({
    fromObject: {
      param1: 'value1',
      param2: 'value2'
    }
  });

  private options = {
    headers: this.headers,

  };



  constructor(private http: HttpClient) {
  }

  public get(en: string) {
    this.http.get(this.getUrl(en),this.options).subscribe(data => {
      console.log(data);
    });

  }

  private getUrl(en: string): string {
    let out: string = "";
    out=out.concat(URL, en);
    console.log(out);

    return out;
  }


}
