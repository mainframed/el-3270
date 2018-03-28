import { RouterModule, Routes } from '@angular/router';

import { BarrelModule } from './barrel';
import { HelpPageComponent } from './pages/help/page';
import { HelpPageModule } from './pages/help/module';
import { LU3270PageComponent } from './pages/lu3270/page';
import { LU3270PageModule } from './pages/lu3270/module';
import { NgModule } from '@angular/core';
import { RootPageComponent } from './pages/root/page';
import { RootPageModule } from './pages/root/module';

/**
 * el-3270 module definition
 */

const COMPONENTS = [ ];

const MODULES = [
  BarrelModule,
  HelpPageModule,
  RootPageModule,
  LU3270PageModule
];

const ROUTES: Routes = [
  {path: '',       component: HelpPageComponent},
  {path: 'help',   component: HelpPageComponent},
  {path: 'lu3270', component: LU3270PageComponent},
  {path: '**',     component: HelpPageComponent}
];

const SERVICES = [ ];

@NgModule({

  bootstrap: [RootPageComponent],

  declarations: [
    ...COMPONENTS
  ],

  imports: [
    ...MODULES,
    RouterModule.forRoot(ROUTES)
  ],

  providers: [
    ...SERVICES
  ]

})

export class EL3270Module { }
