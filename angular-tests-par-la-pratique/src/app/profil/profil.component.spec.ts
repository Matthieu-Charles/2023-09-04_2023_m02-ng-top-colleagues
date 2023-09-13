import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilComponent } from './profil.component';
import { By } from '@angular/platform-browser';
import { Personne } from '../personne';

describe("ProfilComponent", () => {

  let component: ProfilComponent;
  let fixture: ComponentFixture<ProfilComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ProfilComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // test avec valorisation de @Input()
  it("avec une personne ayant un nom et un prénom", () => {
    const p = new Personne("Hugues", "Paul");
    // valorisation de l'input
    component.personne = p;
    fixture.detectChanges();
    // récupération du template
    const hostEl: HTMLElement = fixture.nativeElement;
    // recherche du premier élément <label></label>
    const phrase = hostEl.querySelector("label");
    // vérification du libellé
    expect(phrase?.textContent).toEqual("Hugues - Paul");
  });

  // test sur l'émission d'événement @Output()
  it("un clic sur J'aime émet true", () => {
    // abonnement à l'émetteur d'événement
    let avis = false;
    component.avis.subscribe((av: boolean) => (avis = av));
    // simulation du click sur le bouton `aimer`
    const hostDe = fixture.debugElement;
    const btnDe = hostDe.query(By.css("button#aimer"));
    btnDe.triggerEventHandler("click", null);
    // vérification de l'avis
    expect(avis).toEqual(true);
  });

});
