import {HttpClient} from "@angular/common/http";
import {Component} from '@angular/core';

export enum GET {
  hello = 'hello'
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
  private readonly URL: string = "http://localhost:8090/"

  constructor(private http: HttpClient) {
  }

  public get(en: string) {
    this.http.get(this.getUrl(en)).subscribe(data => {
      console.log(data);
    });

  }

  private getUrl(en: string): string {
    let out: string = "";
    out.concat(this.URL, en);

    return out;
  }


}
