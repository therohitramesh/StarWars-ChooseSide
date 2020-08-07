import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';

const routes = [
  {path: 'characters', component: TabsComponent, children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'}, /*pathMatch: 'full' means the path should exactly match*/
    {path: ':side', component: ListComponent}
  ]},
  { path: 'new-characters', loadChildren: () => import('./create-character/create-character.module').then(m => m.CreateCharacterModule) },
  {path: '**', redirectTo: '/characters'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

