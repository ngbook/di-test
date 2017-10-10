import { Component, OnInit, Host, Optional, Inject } from '@angular/core';
import { CarService } from '../../services/car.service';
// import { EngineService } from '../../services/engine.service';
// import { BMWEngineService } from '../../services/bmw-engine.service';
// import { UserService } from '../../services/user.service';

@Component({
    selector: 'component-2',
    templateUrl: './component-2.component.html',
    styleUrls: ['./component-2.component.scss'],
})
export class Component2Component {
    constructor(@Inject('specailCar') car: CarService) {
        console.log(car.engine); // 结果是: bmw
    }
}
