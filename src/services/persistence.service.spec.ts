/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersistenceService } from './persistence.service';

describe('Service: Persistence', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersistenceService]
    });
  });

  it('should ...', inject([PersistenceService], (service: PersistenceService) => {
    expect(service).toBeTruthy();
  }));
});
