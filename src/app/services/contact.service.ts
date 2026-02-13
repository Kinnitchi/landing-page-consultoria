import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactResponse } from '../interfaces/Contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private endpointUrl = 'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) {}

  sendData(name: string, email: string): Observable<ContactResponse> {
    const data = { name, email };

    return this.http.post<ContactResponse>(this.endpointUrl, data);
  }
}
