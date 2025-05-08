import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
} from '@angular/router';
import { DataService } from '../services/data.service';
import { effect, Injectable, Signal, untracked } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class URLGuard implements CanActivate {
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  async canActivate(): Promise<boolean> {
    return true;
    // const snapshot = this.route.snapshot;
    // try {
    //   await this.waitForSignal(this.dataService.dataLoaded);
    //   const type: 'experiences' | 'projects' | 'skills' = snapshot.data['type'];
    //   const data = untracked(() => this.dataService.data());
    //   if (data && data[type]) {
    //     let param;
    //     if (type === 'skills') {
    //       param = snapshot.params['skillName'];
    //     } else if (type === 'projects') {
    //       param = snapshot.params['projectName'];
    //     } else if (type === 'experiences') {
    //       param = snapshot.params['experienceName'];
    //     }
    //     if (param) {
    //       const hasEntry = data[type].some((entry) => {
    //         return entry.name.toLowerCase() === param.toLowerCase();
    //       });
    //       if (hasEntry) {
    //         return true;
    //       }
    //     }
    //   }
    //   this.router.navigate(['/']);
    //   return false;
    // } catch (error) {
    //   this.router.navigate(['/']);
    //   return false;
    // }
  }

  private waitForSignal(signal: Signal<boolean>): Promise<void> {
    return new Promise<void>((resolve) => {
      const stop = effect(
        () => {
          if (signal()) {
            stop.destroy(); // stop the effect when done
            resolve();
          }
        },
        { manualCleanup: true }
      );
    });
  }
}
