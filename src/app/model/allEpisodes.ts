import { EpisodeInfo } from "./episodeInfo";
import { PageInfo } from "./pageInfo";

export interface AllEpisodes {
  info: PageInfo;
  results: EpisodeInfo[];
}
