import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export abstract class ResolverDefault implements Resolve<any | string> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.resolver(route.queryParams);
  }

  abstract async resolver(pParams);
}
