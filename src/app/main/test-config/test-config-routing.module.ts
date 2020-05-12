import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestConfigComponent } from './test-config.component';

const routes: Routes = [{ path: '', component: TestConfigComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestConfigRoutingModule { }
