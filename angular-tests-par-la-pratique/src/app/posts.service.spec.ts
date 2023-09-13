import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostsService } from './posts.service';

describe('PostsService', () => {

  let httpTestingController: HttpTestingController;

  let postsService: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    postsService = TestBed.inject(PostsService);
  });

  it('recupererTousLesPosts() envoie une requête HTTP vers https://jsonplaceholder.typicode.com/posts',
    () => {
      // invocation de la méthode recupererTousLesPosts()
      // vérification du corps de la réponse HTTP
      postsService.recupererTousLesPosts().subscribe(posts => {
        // le résultat contient exactement 2 posts
        expect(posts.length).toBe(2);
        // vérification des résultats des titres
        expect(posts[0]["title"]).toBe("Titre 1");
        expect(posts[1]["title"]).toBe("Titre 2");
      });
      // vérifie qu'un appel HTTP vers https://jsonplaceholder.typicode.com/posts
      // a été émis une seule fois
      const requete = httpTestingController.expectOne(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // vérifie que la requête émise à la méthode GET
      expect(requete.request.method).toEqual("GET");
      // déclenchement de la réponse HTTP
      // les observateurs sont alors notifiés
      requete.flush([{ id: 1, title: "Titre 1" }, { id: 2, title: "Titre 2" }]);
    })

  afterEach(() => {
    // vérifie qu'il n'y aucune requête HTTP non prévue déclenchée
    httpTestingController.verify();
  });

});
