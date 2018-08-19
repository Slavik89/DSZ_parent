import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CatalogComponent } from "./catalog/catalog.component";
import { TestPageComponent } from "./test-page/test-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { DomofonComponent } from "./catalog/domofon/domofon.component";
import { YydComponent } from "./catalog/yyd/yyd.component";
import {ContactsComponent} from "./contacts/contacts.component"

export const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "catalog", component: CatalogComponent},
  {path: "form1", component: TestPageComponent},
  {path: "catalog/mav", component: DomofonComponent},
  {path: "catalog/yyd", component: YydComponent},
  {path: "contacts", component: ContactsComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = 
  [ CatalogComponent,
    TestPageComponent,
    HomePageComponent,
    DomofonComponent,
    YydComponent,
    ContactsComponent
  ]