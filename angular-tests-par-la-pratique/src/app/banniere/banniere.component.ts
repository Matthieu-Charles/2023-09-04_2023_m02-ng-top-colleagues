import { Component } from '@angular/core';

@Component({
  selector: 'app-banniere',
  templateUrl: './banniere.component.html',
  styleUrls: ['./banniere.component.css']
})
export class BanniereComponent {

  titre = '';

  constructor() {
  }

  ngOnInit(): void {
    this.titre = "Super titre";
  }

}
