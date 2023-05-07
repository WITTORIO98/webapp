import {Injectable} from '@angular/core';
import {HttpClient, HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

const URL: string = "http://localhost:4444"

export enum GET {
  newRandomIDExperiment = '/newRandomIDExperiment',
  surveyQuestions = '/surveyQuestions',
  triviaQuestions = '/triviaQuestions',
  engineer1 = '/engineer1',
  engineer2 = '/engineer2',
  engineer3 = '/engineer3',
}

export enum POST {
  spawnTask = '/spawnTask',
  despawnTask = '/despawnTask',
  spawnPrivacy = '/spawnPrivacy',
  despawnPrivacy = '/despawnPrivacy',
  surveyAnswers = '/surveyAnswers',
  engineerAnswers = '/engineerAnswers',
}

@Injectable({
  providedIn: 'root'
})
export class Http2Service {
  public static idExperiment: string = "1";

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

  public post(endpoint: string, name: any, extra: any): any {
    if (extra == null) {
      extra = {};
    }

    let finalBody = {
      idExperiment: Http2Service.idExperiment,
      body: {
        timestamp: Date.now(),
        name: name,
        extra: extra
      }
    };

    let out;
    this.http.post(this.getUrl(endpoint), finalBody, this.options).subscribe(data => {
      out = data;
    });
    return out;
  }

  public getUrl(endpoint: string): string {
    let out: string = "";
    out = out.concat(URL, endpoint);

    return out;
  }

  public spawnTask(name: string, extra?: any) {
    this.post(POST.spawnTask, name, extra);
  }

  public despawnTask(name: string, extra?: any) {
    this.post(POST.despawnTask, name, extra);
  }

  public spawnPrivacy(name: string, extra?: any) {
    this.post(POST.spawnPrivacy, name, extra);
  }

  public despawnPrivacy(name: string, extra?: any) {
    this.post(POST.despawnPrivacy, name, extra);
  }


}
