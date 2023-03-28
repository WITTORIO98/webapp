import {Injectable} from '@angular/core';
import {HttpClient, HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

const URL: string = "http://localhost:8080"

export enum GET {
  surveyQuestions = '/surveyQuestions',
}

export enum POST {
  spawnTask = '/spawnTask',
  despawnTask = '/despawnTask',
  spawnPrivacy = '/spawnPrivacy',
  despawnPrivacy = '/despawnPrivacy',
  clickButton = '/clickButton',
  surveyAnswers = '/surveyAnswers',
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

  public options = {
    headers: this.headers,
  };

  constructor(public http: HttpClient) {
  }

  //get pezzotta in survey.component.ts constructor todo

  public post(endpoint: string, component: any, extra?: any): any {
    if (extra == null) {
      extra = {};
    }

    let finalBody = {
      timestamp: new Date().getTime(),
      component: component,
      extra: extra
    };

    let out;
    this.http.post(this.getUrl(endpoint), finalBody, this.options).subscribe(data => {
      console.debug(data);
      out = data;
    });
    return out;
  }

  public getUrl(endpoint: string): string {
    let out: string = "";
    out = out.concat(URL, endpoint);
    console.log(out);

    return out;
  }

  public spawnTask(name: string) {
    this.post(POST.spawnTask, name);
  }

  public despawnTask(name: string) {
    this.post(POST.despawnTask, name);
  }

  public spawnPrivacy(name: string) {
    this.post(POST.spawnPrivacy, name);
  }

  public despawnPrivacy(name: string) {
    this.post(POST.despawnPrivacy, name);
  }


}
