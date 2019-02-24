import {Component, OnDestroy, OnInit} from '@angular/core';
import {FactInterface, FactsService} from '../facts.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit, OnDestroy {
  breedsAsync: Observable<string[]>;
  factsAsync: Observable<FactInterface[]>;
  randomFact: FactInterface;

  constructor(private ourFacts: FactsService) {
  }

  ngOnInit() {
    /* this.factsSubscr = this.ourFacts.getAllFacts().subscribe((data: FactInterface[]) => {
       this.facts = data;
     });*/
    this.factsAsync = this.ourFacts.getAllFacts();
    this.breedsAsync = this.ourFacts.getAllBreeds();
  }

  getRandomFact(breed: string) {
    this.ourFacts.getRandomFact(breed).subscribe((data: FactInterface) => {
      this.randomFact = data;
      });
  }

  ngOnDestroy() {
    // this.factsSubscr.unsubscribe();
  }

}

