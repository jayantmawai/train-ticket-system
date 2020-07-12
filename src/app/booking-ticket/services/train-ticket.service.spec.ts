import { TestBed } from '@angular/core/testing';

import { TrainTicketService } from './train-ticket.service';

describe('TrainTicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainTicketService = TestBed.get(TrainTicketService);
    expect(service).toBeTruthy();
  });
});
