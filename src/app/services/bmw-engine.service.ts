import { Injectable } from '@angular/core';
import { EngineService } from './engine.service';

@Injectable()
export class BMWEngineService extends EngineService {
    manufacturer = 'bmw';
}
