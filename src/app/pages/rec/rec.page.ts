import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rec',
  templateUrl: './rec.page.html',
  styleUrls: ['./rec.page.scss'],
})
export class RecPage implements OnInit {

  matches: String[];
  isRecording = false;
  showMenu : boolean = false;


  constructor( 
    private speechReco: SpeechRecognition,
    private plt: Platform,
    private cd: ChangeDetectorRef,
    private menuCtrl : MenuController,
    private router : Router,
  ) { }

  ngOnInit() {
  }

  stopListening(){
    this.speechReco.stopListening().then(() => {
      this.isRecording = false;
      console.debug("rec stop");
    });
  }

  startListening(){
    let options = {
      language: 'en-US',
    }
    this.speechReco.startListening(options).subscribe(matches => {
      this.matches = matches;
      this.cd.detectChanges();
      console.debug("rec en cours");
    });
    this.isRecording = true; 
    console.debug("rec ok");
  }
  getPermission(){
    this.speechReco.hasPermission()
    .then((hasPermision: boolean) => {
      if(!hasPermision){
        this.speechReco.requestPermission();
      }
    })
  }

  isIos(){
    return this.plt.is('ios');
  }

  displayMenu(){
    if (this.showMenu === false){
    console.debug(this.showMenu)
      this.showMenu = true;
      this.menuCtrl.enable(this.showMenu);
    }
    else {
      this.showMenu = false;
      this.menuCtrl.enable(this.showMenu);
    }
  }


}
