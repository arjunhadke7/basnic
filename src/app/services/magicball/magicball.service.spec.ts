import { TestBed } from '@angular/core/testing';

import { MagicballService } from './magicball.service';

describe('MagicballService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagicballService = TestBed.get(MagicballService);
    expect(service).toBeTruthy();
  });
});
