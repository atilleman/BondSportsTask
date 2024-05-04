import { NBAInfo } from "../model/nbaInfo";

export interface GetPlayersInfoUsingGETRequestParams {
  cursor: number;
  per_page: number;
  search: string; 
  first_name: string;
  last_name: string; 
  team_ids: number[]; 
  player_ids: number[];
  existingData: NBAInfo[];
}
