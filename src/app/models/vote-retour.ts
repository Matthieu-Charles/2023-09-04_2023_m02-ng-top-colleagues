import { DetailedColleague } from "./detailed-colleague";
import { LikeHate } from "./like-hate";

export interface VoteRetour {

  pseudo: string,
  first: string,
  last: string,
  photo: string,
  likeHate: LikeHate;
  score: number;
  created_date: string;

}
