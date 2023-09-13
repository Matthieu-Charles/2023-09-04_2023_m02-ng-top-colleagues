import { TestBed } from '@angular/core/testing';

import { CompteurService } from './compteur.service';

describe('CompteurService', () => {
  let service: CompteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompteurService);
  });

  it('le premier appel à incrementer() retourne 1', () => {
    const resultat = service.incrementer();
    expect(resultat).toBe(1);
  });

  it('le deuxième appel à incrementer() retourne 2', () => {
    service.incrementer();
    const resultat = service.incrementer();
    expect(resultat).toBe(2);
  });

});
