import { Directive, Host } from '@angular/core';
import { EngineService } from '../../services/engine.service';

@Directive({
  selector: '[test]'
})
export class TestDirective {

    constructor(@Host() engine: EngineService) {
        console.log('[test]directive', engine);
    }

}
