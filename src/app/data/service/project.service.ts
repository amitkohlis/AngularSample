import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from '../schema/project';
import { AppService } from './app-service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly APIUrl = environment.APIUrl;
  constructor(private appService: AppService) {}

  getAll(): Observable<Array<Project>> {
    return this.appService.get(this.APIUrl + '/projects',1);
  }
}
