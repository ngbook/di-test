import { Injectable } from '@angular/core';
import { EngineService } from './engine.service';

@Injectable()
export class CarService {
    color = 'white';

    constructor(public engine: EngineService) { }

}
