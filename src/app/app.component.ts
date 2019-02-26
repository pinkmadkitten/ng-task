import {Component} from '@angular/core';
import {FactsService} from './facts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-task';
  showCats = false;

  constructor(private factService: FactsService) {
    this.factService.getRandomFact('scottish').subscribe((data) => {
      console.log(data);
    });
    this.factService.getAllBreeds().subscribe((breeds) => {
      console.log(breeds);
      this.factService.getRandomFact(breeds[1]).subscribe((fact) => {
        console.log(fact);
        this.factService.getRandomFact(breeds[breeds.length - 1]).subscribe((lastFact) => {
          console.log(lastFact);
        });
      });
    });
  }

  toggleCats() {
    this.showCats = !this.showCats;
  }
}
