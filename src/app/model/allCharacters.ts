import { CharacterInfo } from "./characterInfo";
import { PageInfo } from "./pageInfo";

export interface AllCharacters {
  info: PageInfo;
  results: CharacterInfo[];
}
