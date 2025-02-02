import { Routes } from '@angular/router';
import { SuperheroeComponent } from './component/superheroe/superheroe.component';
import { StoreComponent } from './component/store/store.component';
import { LocationComponent } from './component/location/location.component';
import { EpisodeComponent } from './component/episode/episode.component';
import { PersonajeRMComponent } from './component/personaje-rm/personaje-rm.component';
import { SuperheroeONEComponent } from './component/superheroe-one/superheroe-one.component';

export const routes: Routes = [
  {
    path: 'superheroes',
    component: SuperheroeComponent
  },
  {
    path: 'superheroe/:index',
    component: SuperheroeONEComponent
  },
  {
    path: 'personajes',
    component: StoreComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'episode',
    component: EpisodeComponent
  },
  {
    path: 'personaje/:parametro',
    component: PersonajeRMComponent
  }
];
