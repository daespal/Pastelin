import { TestBed } from '@angular/core/testing';

import { SesionDbService } from './sesion-db.service';

describe('SesionDbService', () => {
  let service: SesionDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SesionDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
