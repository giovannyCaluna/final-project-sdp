import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public myData: any;

  constructor() { }
}
