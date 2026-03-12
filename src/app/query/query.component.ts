import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class QueryService {
    private BASE_URL = 'http://192.168.1.99:3000/'
    constructor(private http: HttpClient) { }

    public getQuery(message: string) {
        console.log(message)
        return this.http.get<any>(this.BASE_URL + 'query_api')
    }
}
