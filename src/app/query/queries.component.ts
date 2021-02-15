import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class QueryService {
    private BASE_URL = 'http://www.randomtext.me/api/'
    constructor(private http: HttpClient) { }

    public getRoot() {
        return this.http.get<any>(this.BASE_URL)
    }

    public getHealthCheck() {
        return this.http.get<any>(this.BASE_URL + 'heartbeat')
    }
}
