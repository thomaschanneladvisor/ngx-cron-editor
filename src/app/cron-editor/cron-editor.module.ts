import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CronGenComponent } from './cron-editor.component';
import { TimePickerComponent } from './cron-time-picker.component';
import { MatTabsModule, MatSelectModule, MatOptionModule, MatFormFieldModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [CommonModule, FormsModule, MatTabsModule, MatSelectModule, MatOptionModule, MatFormFieldModule, BrowserAnimationsModule],
    exports: [CronGenComponent, TimePickerComponent],
    declarations: [CronGenComponent, TimePickerComponent]
})
export class CronEditorModule {
}
