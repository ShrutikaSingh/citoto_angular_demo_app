//for template driven form 
//it uses form model to track value changes between angular forms & form input elememts

import { Component } from '@angular/core';

@Component({
  selector: 'app-reactive-favorite-color',
  template: `
    Favorite Color: <input type="text" [(ngModel)]="favoriteColor">
  `
})
export class ReactiveFavoriteColorComponent {
  favoriteColor = 'blue';
}  

//for reactive forms
//The source of truth provides the value and status of the form element at a given point in time. In reactive forms, the form model is the source of truth. In the example above, the form model is the FormControl instance.

