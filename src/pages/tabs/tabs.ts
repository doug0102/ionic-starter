import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = HomePage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
