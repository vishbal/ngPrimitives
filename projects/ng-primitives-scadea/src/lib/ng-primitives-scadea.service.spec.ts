import { TestBed } from '@angular/core/testing';

import { NgPrimitivesScadeaService } from './ng-primitives-scadea.service';

describe('NgPrimitivesScadeaService', () => {
  let service: NgPrimitivesScadeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPrimitivesScadeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
