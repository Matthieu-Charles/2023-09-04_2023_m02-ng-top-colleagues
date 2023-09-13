import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  @Input() personne: Personne | undefined;
  @Output() avis = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  donnerAvis(avis: boolean) {
    this.avis.emit(avis);
  }

}
