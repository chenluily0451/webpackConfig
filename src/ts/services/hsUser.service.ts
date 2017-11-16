
/**
 * Created by jin on 8/10/17.
 */

import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'


import {apiPath} from './apiPath'


@Injectable()
export class HSUserService {

    constructor(
        private http: HttpClient
    ) {
    }


}
