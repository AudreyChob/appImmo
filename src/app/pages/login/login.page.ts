import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formModel: {login: string, password: string} = {
    login: '',
    password: ''
  };
  loginForm: FormGroup;


  constructor(
    private routeur: Router,
    private menuCtrl : MenuController
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false); 

  }

  login(){
    console.debug("Connexion réussi");
    this.routeur.navigate(['accueil']);
  }
}
