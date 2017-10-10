import { Injectable } from '@angular/core';

type PreferType = 'default' | 'bmw' | 'benz' | string;

@Injectable()
export class UserService {
    prefer: PreferType = 'default';
}
