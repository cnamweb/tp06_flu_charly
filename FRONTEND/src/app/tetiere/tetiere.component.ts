import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PanierState } from '../states/panier.state';

@Component({
    selector: 'app-tetiere',
    imports: [RouterLink, CommonModule],
    templateUrl: './tetiere.component.html',
    styleUrl: './tetiere.component.css'
})
export class TetiereComponent {
  nbProduits$: Observable<number>;

  constructor(private store: Store) {
    this.nbProduits$ = this.store.select(PanierState.getNbProduits);
  }
}