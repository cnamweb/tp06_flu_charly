import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { NgxsModule } from '@ngxs/store';
import { PanierState } from './states/panier.state';
import { ProduitState } from './states/produits.state';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(routes),
      provideHttpClient(),
      ApiService,
      importProvidersFrom(NgxsModule.forRoot([PanierState, ProduitState])) 
    ]
};