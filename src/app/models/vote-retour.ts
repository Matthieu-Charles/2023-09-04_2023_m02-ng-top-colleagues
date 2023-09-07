import { DetailedColleague } from "./detailed-colleague";
import { LikeHate } from "./like-hate";

export interface VoteRetour {

  detailedColleague: DetailedColleague;
  likeHate: LikeHate;
  score: number;
  created_date: string;

}
