import { TestBed } from '@angular/core/testing';
import {ChildInputService} from "./child.input.service";


describe('Child.InputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChildInputService = TestBed.get(ChildInputService);
    expect(service).toBeTruthy();
  });
});
