import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestConfigRoutingModule } from './test-config-routing.module';
import { TestConfigComponent } from './test-config.component';


@NgModule({
  declarations: [TestConfigComponent],
  imports: [
    CommonModule,
    TestConfigRoutingModule
  ]
})
export class TestConfigModule { }
