import { TestBed } from '@angular/core/testing';
import { CaddyService } from './caddy.service';

describe('CaddyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaddyService = TestBed.get(CaddyService);
    expect(service).toBeTruthy();
  });
});
