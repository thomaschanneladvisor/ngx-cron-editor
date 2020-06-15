import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {CronEditorModule} from './cron-editor/cron-editor.module';

import {AppComponent} from './app.component';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([]),
    CronEditorModule
  ],
  declarations: [AppComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
