import {
    Component, OnInit,
    Injector
} from '@angular/core';
import { CarService } from '../../services/car.service';
import { EngineService } from '../../services/engine.service';
import { BENZEngineService } from '../../services/benz-engine.service';
import { BMWEngineService } from '../../services/bmw-engine.service';
import { UserService } from '../../services/user.service';

function serviceFactory(engines: EngineService[], user: UserService) {
    console.log('inside serviceFactory', user.prefer, engines);
    const engine = engines.filter(
        eng => eng.manufacturer === user.prefer)[0];
    return new CarService(engine);
}

@Component({
    selector: 'component-1',
    template: '<component-2></component-2>',
    styleUrls: ['./component-1.component.scss'],
    providers: [
        UserService,
        {provide: EngineService, useClass: EngineService, multi: true},
        {provide: EngineService, useClass: BENZEngineService, multi: true},
        {provide: EngineService, useClass: BMWEngineService, multi: true},
        {provide: 'specailCar', useFactory: serviceFactory, deps: [EngineService, UserService]},
    ]
})
export class Component1Component {
    constructor(private user: UserService) {
        console.log('component-1 constructor');
        this.user.prefer = 'bmw';
    }
    // constructor(injector: Injector) {
    //     const car = injector.get(CarService);
    //     car.color = 'black';
    //     console.log(car);
    // }

}
