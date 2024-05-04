import { NBATeams } from "./nbaTeams";

export interface NBAPlayers {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  height: string;
  weight: string;
  jersey_number: string;
  college: string;
  country: string;
  draft_year: string;
  draft_round: string;
  draft_number: string;
  team: NBATeams;
}
