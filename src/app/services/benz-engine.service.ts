import { Injectable } from '@angular/core';
import { EngineService } from './engine.service';

@Injectable()
export class BENZEngineService extends EngineService {
    manufacturer = 'benz';
}
