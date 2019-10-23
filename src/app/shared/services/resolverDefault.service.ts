import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export abstract class ResolverDefault implements Resolve<any | string> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.resolver(route.params);
  }

  abstract resolver(pParams);
}
