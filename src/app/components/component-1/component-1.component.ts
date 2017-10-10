import {
    Component, OnInit,
    Injector
} from '@angular/core';
import { EngineService } from '../../services/engine.service';
import { BMWEngineService } from '../../services/bmw-engine.service';

@Component({
    selector: 'component-1',
    template: `
        <ng-content></ng-content>
        <component-2></component-2>
        `,
    styleUrls: ['./component-1.component.scss'],
    viewProviders: [
        {provide: EngineService, useClass: BMWEngineService},
    ],
    providers: [
        {provide: EngineService, useClass: EngineService},
    ],
})
export class Component1Component {
    constructor(engine: EngineService) {
        console.log('[component-1]', engine);
    }
}
