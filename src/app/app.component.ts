import { Component } from '@angular/core';
import { EngineService } from './services/engine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
//   providers: [
//       {provide: EngineService, useClass: EngineService},
//   ]
})
export class AppComponent {
  title = 'app';
}
