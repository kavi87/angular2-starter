import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { Config, NameListService, NavbarComponent, ToolbarComponent } from './shared/index';

/**
 * This class represents the main application component.
 *
 * Toolbar (top) and Navbar (side) components are instantiated inside this component to provide them in all routes.
 * The application have one router. When the browser's URL changes, the router looks for a corresponding Route from
 * which it can determine the component to display.
 */
@Component({
  moduleId: module.id,
  selector: 'ctd-root',
  viewProviders: [NameListService, HTTP_PROVIDERS],
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
