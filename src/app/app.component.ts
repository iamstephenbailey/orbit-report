import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];

  constructor(){
    this.sourceList = []
    let satellitesURL = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesURL).then(function(response) {
      response.json().then(function(data) {

        let fetchedSatellites = data.satellites;
        // need to loop over satellites
        for (let i = 0; i < fetchedSatellites.length; i++){
          let samuraiCheese = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, 
            fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
            this.sourceList.push(samuraiCheese);
            samuraiCheese.isDebris();
        }
      }.bind(this));
    }.bind(this));
  }
}

