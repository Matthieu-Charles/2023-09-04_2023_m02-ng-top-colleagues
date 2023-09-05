import { Component } from '@angular/core';
import { Colleague } from './../../../models/colleague';
import { ScorePipe } from '../../pipes/score.pipe';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
})
export class ColleagueListComponent {

  colleaguesArray: Array<Colleague> = [
    {
      pseudo:'Franck',
      score: 0,
      photo: 'https://www.programme-tv.net/imgre/fit/~2~providerPerson~401f26e0b72ceedc.jpeg/140x140/quality/80/franck-ribery.jpeg'
    },
    {
      pseudo:'Jéremy',
      score: 0,
      photo: 'https://www.voici.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2F572d8f33-3e63-4f74-9768-c5fccee4acf0.2Ejpeg/200x200/quality/80/jeremy-menez.jpg'
    },
    {
      pseudo:'Nicolas',
      score: 0,
      photo: 'https://img.a.transfermarkt.technology/portrait/header/3226-1683728957.jpg?lm=1'
    },
    {
      pseudo:'Franck',
      score: 0,
      photo: 'https://www.programme-tv.net/imgre/fit/~2~providerPerson~401f26e0b72ceedc.jpeg/140x140/quality/80/franck-ribery.jpeg'
    },
    {
      pseudo:'Jéremy',
      score: 0,
      photo: 'https://www.voici.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2F572d8f33-3e63-4f74-9768-c5fccee4acf0.2Ejpeg/200x200/quality/80/jeremy-menez.jpg'
    },
    {
      pseudo:'Nicolas',
      score: 0,
      photo: 'https://img.a.transfermarkt.technology/portrait/header/3226-1683728957.jpg?lm=1'
    },
  ]

}
