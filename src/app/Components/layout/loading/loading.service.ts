import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubscription = new BehaviorSubject<{ hostName: string, loading: boolean }>({hostName: 'main', loading: false});

  get subscription(): BehaviorSubject<{ hostName: string, loading: boolean }> {
    return this.loadingSubscription;
  }

  public showLoader(hostName: string = 'main') {
    this.loadingSubscription.next({ hostName, loading: true });
  }

  public hideLoader(hostName: string = 'main') {
    this.loadingSubscription.next({ hostName, loading: false });
  }
}
