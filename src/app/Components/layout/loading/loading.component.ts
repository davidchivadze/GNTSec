import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {LoadingService} from './loading.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {
  @Input() hostName: string = 'main';
  public loadingHostClassName: string = 'loading-host-not-blurry';
  public loadingHostAnimClassName: string = 'loading-host-anim-hidden';

  constructor(private loadingService: LoadingService,
              private changeDetector: ChangeDetectorRef) {
    loadingService.subscription.pipe(filter(a => a.hostName === this.hostName))
      .subscribe(value => {
        if (value.loading) {
          this.loadingHostClassName = 'loading-host-blurry';
          this.loadingHostAnimClassName = 'loading-host-anim';
        } else {
          this.loadingHostClassName = 'loading-host-not-blurry';
          this.loadingHostAnimClassName = 'loading-host-anim-hidden';
        }
        this.changeDetector.markForCheck();
      });
  }
}
