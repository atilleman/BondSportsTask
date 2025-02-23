import { AddressInfo } from "./addressInfo";

export interface CharacterInfo {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: AddressInfo;
  location?: AddressInfo;
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
}
