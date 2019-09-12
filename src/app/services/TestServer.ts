import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TestServer {
	constructor(private http: HttpClient ) {};
	getContent(){
		return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
	}
}  