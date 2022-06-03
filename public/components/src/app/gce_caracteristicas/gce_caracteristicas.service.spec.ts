import { TestBed } from '@angular/core/testing';

import { GceCaracteristicasService } from './gce_caracteristicas.service';

describe('GceCaracteristicasService', () => {
  let service: GceCaracteristicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GceCaracteristicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
