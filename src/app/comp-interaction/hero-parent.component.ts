import { Component } from '@angular/core';


import { HEROES } from '../hero';

@Component({
    selector:'hero-parent',
    // template:`
    // <h2>{{master}} controls {{heroes.length}} heroes</h2>
    // <hero-child *ngFor="let hero of heroes"
    // [hero]="hero"
    // [master]="master">
    // </hero-child>
    // `
//     template:`
//     <h2>Master controls {{names.length}} names</h2>
//   <name-child *ngFor="let name of names" [name]="name"></name-child>
//     `
        template: `
    <h2>Source code version</h2>
    <button (click)="newMinor()">New minor version</button>
    <button (click)="newMajor()">New major version</button>
    <version-child [major]="major" [minor]="minor"></version-child>
  `
})

export class HeroParentComponent {
    heroes = HEROES;
    master = 'Master';
    names = ['Mr. IQ', '   ', '  Bombasto  '];

    major = 1;
    minor = 23;

    newMinor() {
    this.minor++;
  }
 
  newMajor() {
    this.major++;
    this.minor = 0;
  }
}