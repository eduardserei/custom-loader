import { Component } from '@angular/core';

declare const STABLE_FEATURE: boolean;
declare const EXPERIMENTAL_FEATURE: boolean;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  stableFeature = '';
  experimentalFeature = '';
  constructor() {}
  ngOnInit() {
    console.log('inited');

    this.stableFeature = STABLE_FEATURE
      ? 'Stable feature enabled'
      : 'Stable feature disabled';
    this.experimentalFeature = EXPERIMENTAL_FEATURE
      ? 'Experimental feature enabled'
      : 'Experimental feature disabled';
  }
}
