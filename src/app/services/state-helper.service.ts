import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable()
export class StateHelperService {

  constructor(
    private store: Store
  ) {
   }

  async runAction(action, errorSelector) {
    await this.store.dispatch(action).toPromise();
    return this.store.selectSnapshot(errorSelector);
  }

  async runTypedAction<T>(action, errorSelector) {
    await this.store.dispatch(action).toPromise();
    return this.getSnapshot<T>(errorSelector);
  }

  async runActionWithoutError(action) {
    await this.store.dispatch(action).toPromise();
  }

  runActionWithoutErrorWithObservable(action): Observable<any> {
    return this.store.dispatch(action);
  }

  resetObject(snapShotSelector) {
    return this.store.reset(snapShotSelector);
  }

  getSnapshot<T>(snapShotSelector): T {
    return this.store.selectSnapshot<T>(snapShotSelector);
  }
}
