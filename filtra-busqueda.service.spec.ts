/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FiltraBusquedaService } from './filtra-busqueda.service';

describe('FiltraBusquedaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiltraBusquedaService]
    });
  });

  it('should ...', inject([FiltraBusquedaService], (service: FiltraBusquedaService) => {
    expect(service).toBeTruthy();
  }));
});
