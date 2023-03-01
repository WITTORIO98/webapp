import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

const URL: string = "http://localhost:8080"

export enum GET {
  example = '/example'
}

export enum POST {
  example = '/example',
  newTask = '/newTask'
}

@Injectable({
  providedIn: 'root'
})
export class Http2Service {

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

  public get(endpoint: string, useless?: any): any {
    let out;
    this.http.get(this.getUrl(endpoint), this.options).subscribe(data => {
      console.log(data);
      out = data;
    });
    return out;
  }

  public post(endpoint: string, body: any): any {
    let out;
    let finalBody = {
      timestamp: new Date().getTime(),
      body: body
    };

    this.http.post(this.getUrl(endpoint), finalBody, this.options).subscribe(data => {
      console.debug(data);
      out = data;
    });
    return out;
  }

  private getUrl(endpoint: string): string {
    let out: string = "";
    out = out.concat(URL, endpoint);
    console.log(out);

    return out;
  }
}