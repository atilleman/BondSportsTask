import { GetPlayersInfoUsingGETRequestParams } from "../services/players.serviceinterface";

export enum ActionTypes {
  GetPlayersInfo = 'Get Players Info'
}

export class GetPlayersInfo {
  public static readonly type = ActionTypes.GetPlayersInfo;

  constructor(public readonly params: GetPlayersInfoUsingGETRequestParams) {}

}
