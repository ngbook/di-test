import { Component, OnInit, Host, Optional, Inject } from '@angular/core';
import { EngineService } from '../../services/engine.service';

@Component({
    selector: 'component-2',
    templateUrl: './component-2.component.html',
    styleUrls: ['./component-2.component.scss'],
})
export class Component2Component {
    constructor(@Host() engine: EngineService) {
        console.log('[component-2]', engine);
    }
}
