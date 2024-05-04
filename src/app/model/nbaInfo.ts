import { NBAPlayerStats } from "./nbaPlayerStats"
import { NBAPlayers } from "./nbaPlayers"

export interface NBAInfo {
  perPage?: number;
  nextPage?: number;
  players?: NBAPlayers[];
  playerStats?: NBAPlayerStats[];
}
