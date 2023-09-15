import { TestBed, inject } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ColleagueService } from "./colleague.service";

describe("ColleagueService", () => {

  let httpTestingController: HttpTestingController;
  let colleagueService: ColleagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ColleagueService]
    })

    httpTestingController = TestBed.inject(HttpTestingController);
    colleagueService = TestBed.inject(ColleagueService);
  })

  it('listColleagues() envoie une requête http vers https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/colleagues',
    () => {
      colleagueService.listColleagues.subscribe(colleagues => {
        expect(colleagues.length).toBe(2);
        expect(colleagues[0].score).toBe(-4300);
        expect(colleagues[1].pseudo).toBe("matt01");
      })

      const requete = httpTestingController.expectOne(
        "https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/colleagues"
      );

      expect(requete.request.method).toEqual("GET");
      requete.flush([{
        "pseudo": "jor01",
        "photo": "https://randomuser.me/api/portraits/men/82.jpg",
        "score": -4300
      }, {
        "pseudo": "matt01",
        "photo": "https://randomuser.me/api/portraits/men/83.jpg",
        "score": -600
      }]);

    })

  it('getColleagueByPseudo(matt01) envoie une requête http vers https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/colleagues/matt01', () => {

    colleagueService.getColleagueByPseudo('matt01').subscribe(colleague => {
      expect(colleague.pseudo).toBe("matt01");
      expect(colleague.first).toBe("Matthieu");
    })

    const requete = httpTestingController.expectOne(
      "https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/colleagues/matt01"
    );

    expect(requete.request.method).toEqual("GET");
    requete.flush({
      "pseudo": "matt01",
      "last": "CHARLES",
      "first": "Matthieu",
      "photo": "https://randomuser.me/api/portraits/men/83.jpg",
      "score": -600
    });

  })

  afterEach(() => {
    httpTestingController.verify();
  });

});
