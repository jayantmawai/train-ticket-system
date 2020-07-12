import { BookingTicketModule } from './booking-ticket.module';

describe('BookingTicketModule', () => {
  let bookingTicketModule: BookingTicketModule;

  beforeEach(() => {
    bookingTicketModule = new BookingTicketModule();
  });

  it('should create an instance', () => {
    expect(bookingTicketModule).toBeTruthy();
  });
});
