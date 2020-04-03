import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CronOptions} from './cron-editor/CronOptions';
import {CronGenComponent} from './cron-editor/cron-editor.component'
import {CronFlavor} from './cron-editor/enums';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private routeQueryParamsSubscription: Subscription;
  public cronExpression = '0 0 1/1 * *';
  public isCronDisabled = false;
  public cronOptions: CronOptions = {
    formInputClass: 'form-control cron-editor-input',
    formSelectClass: 'form-control cron-editor-select',
    formRadioClass: 'cron-editor-radio',
    formCheckboxClass: 'cron-editor-checkbox',

    defaultTime: '00:00:00',

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: false,
    hideSpecificWeekDayTab: false,
    hideSpecificMonthWeekTab: false,

    use24HourTime: true,
    hideSeconds: false,

    cronFlavor: CronFlavor.standard
  };

  cronFlavorValues = CronFlavor;
  cronFlavorKeys: string[];

  @ViewChild('cronEditorDemo', {static: false})
  cronEditorDemo: CronGenComponent;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.cronFlavorKeys = Object.keys(this.cronFlavorValues);
  }

  cronFlavorChange() {
    this.cronEditorDemo.options = this.cronOptions;
    this.cronEditorDemo.regenerateCron();
  }

  ngOnInit(): void {
    this.routeQueryParamsSubscription = this.route.queryParams.subscribe(params => {
      if (params['cron'] && params['cron'].length > 0) {
        this.cronExpression = params['cron'];
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeQueryParamsSubscription) {
      this.routeQueryParamsSubscription.unsubscribe();
    }
  }
}
