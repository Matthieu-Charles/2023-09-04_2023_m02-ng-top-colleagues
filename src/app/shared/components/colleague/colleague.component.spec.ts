import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ColleagueComponent } from "./colleague.component";
import { VoteService } from "src/app/providers/vote.service";
import { of, Subject, Observable } from 'rxjs';
import { UpperCasePipe } from "@angular/common";
import { ScorePipe } from "../../pipes/score.pipe";
import { LikeHateComponent } from "../like-hate/like-hate.component";
import { LikeHate } from "src/app/models/like-hate";
import { VoteRetour } from "src/app/models/vote-retour";
import { AppRoutingModule } from "src/app/app-routing.module";

describe("ColleagueComponent", () => {

  let component: ColleagueComponent;
  let fixture: ComponentFixture<ColleagueComponent>;
  let action = new Subject<VoteRetour>();
  let voteRetour = of({
    pseudo: "JEANJEAN",
    first: "Jean",
    last: "Valjean",
    photo: "www.photoTest.com",
    score: 300,
    likeHate: LikeHate.LIKE,
    created_date: "12-5-2023"
  });

  let voteServiceStub = {

    emettre: (voteRetour: VoteRetour) => {
      action.next(voteRetour)
    },

    abonner: action.asObservable(),

    ajouterUnNouveauVote: () => voteRetour
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        ColleagueComponent,
        ScorePipe,
        LikeHateComponent
      ],
      imports: [
        UpperCasePipe,
        AppRoutingModule
      ],
      providers: [{ provide: VoteService, useValue: voteServiceStub }]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleagueComponent);
    component = fixture.componentInstance;
    component.colleague = {
      pseudo: "JEANJEAN",
      photo: "www.photoTest.com",
      score: 200
    }
    fixture.detectChanges();
  })

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("à l'initialisation le composant affiche le score de 200", () => {
    fixture.detectChanges();
    const scoreAffichage: HTMLElement = fixture.nativeElement;
    const phrase = scoreAffichage.querySelector("p");
    expect(phrase?.textContent).toEqual("+200");
  });

  it("après un vote, le composant affiche le score de 300", () => {
    component.traiter(LikeHate.LIKE);
    fixture.detectChanges();
    const scoreAffichage: HTMLElement = fixture.nativeElement;
    const phrase = scoreAffichage.querySelector("p");
    expect(phrase?.textContent).toEqual("+300");
  });

})
