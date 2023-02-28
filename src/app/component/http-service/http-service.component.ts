import {HttpClient, HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";
import {Component} from '@angular/core';
/*  usage: this.http.post(POST.example, "ciao caio");  */
const URL: string = "http://localhost:8080"

export enum GET {
  example = '/example'
}

export enum POST {
  example = '/example'
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

  public get(endpoint: string, useless?: any) {
    this.http.get(this.getUrl(endpoint), this.options).subscribe(data => {
      console.log(data);
    });

  }

  public post(endpoint: string, body: any) {
    this.http.post(this.getUrl(endpoint), body, this.options).subscribe(data => {
      console.log(data);
    });
  }

  private getUrl(endpoint: string): string {
    let out: string = "";
    out = out.concat(URL, endpoint);
    console.log(out);

    return out;
  }


}
