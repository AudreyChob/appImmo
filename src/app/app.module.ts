
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { LocalStorage } from '@ngx-pwa/local-storage';


//import pages : 
import {LoginPage} from '../app/pages/login/login.page';
import {ChecklistPage} from '../app/pages/checklist/checklist.page';
import {AccueilPage} from '../app/pages/accueil/accueil.page';
import {RecPage} from '../app/pages/rec/rec.page';


//import components : 
import { TableauComponent } from './components/tableau/tableau.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

//import Providers 
import { VisitesProvider } from './providers/visites/visites.provider';


@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    ChecklistPage,
    AccueilPage,
    RecPage,
    TableauComponent,
    FormulaireComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    VisitesProvider,

  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
