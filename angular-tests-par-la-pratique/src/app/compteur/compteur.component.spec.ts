import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteurComponent } from './compteur.component';
import { CompteurService } from '../compteur.service';

describe("CompteurComponent", () => {

  let component: CompteurComponent;
  let fixture: ComponentFixture<CompteurComponent>;
  // Ceci est un test unitaire
  // Il ne doit tester que le composant

  let compteurServiceStub = {
    // ici la méthode incrémenter renvoie
    // systématiquement la valeur 14
    incrementer: () => 14
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CompteurComponent],
      providers: [{ provide: CompteurService, useValue: compteurServiceStub }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // ajouter un cas de test
  it("à l'initialisation le composant affiche l'incrément initial (ici 14)", () => {
    // récupération du template
    const compteurEl: HTMLElement = fixture.nativeElement;
    // recherche du premier élément <p></p>
    const phrase = compteurEl.querySelector("p");
    // vérification du texte
    // le nombre 14 fourni par le service bouchon est bien affiché dans la vue
    expect(phrase?.textContent).toEqual("le compteur est à 14");
  });
});
