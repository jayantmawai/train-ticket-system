import { BookTicketResponseModel, TrainSeatInfoModel } from '../models/book-ticket.model';

export const mockResponse: BookTicketResponseModel = {
	type: "train",
	seats: [{
    "seatNo": 1,
    "status": "booked",
		"category": 3,
    "bookedBy": "xyz",
    "gender": "",
    "row": 1
  },
  {
    "seatNo": 2,
    "status": "booked",
    "category": 3,
    "bookedBy": "xyz",
    "gender": "",
    "row": 1
  },
  {
    "seatNo": 3,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 1
  },
  {
    "seatNo": 4,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 1
  },
  {
    "seatNo": 5,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 1
  },
  {
    "seatNo": 6,
    "status": "available",
    "category": 4,
    "bookedBy": "vinod",
    "gender": "",
    "row": 1
  },
  {
    "seatNo": 7,
    "status": "booked",
    "category": 4,
    "bookedBy": "vinod",
    "gender": "",
    "row": 1
  },
  {
    "seatNo": 8,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 2
  },
  {
    "seatNo": 9,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 2
  },
  {
    "seatNo": 10,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 2
  },
  {
    "seatNo": 11,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 2
  },
  {
    "seatNo": 12,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 2
  },
  {
    "seatNo": 13,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 2
  },
  {
    "seatNo": 14,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 2
  },
  {
    "seatNo": 15,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 3
  },
  {
    "seatNo": 16,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 3
  },
  {
    "seatNo": 17,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 3
  },
  {
    "seatNo": 18,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 3
  },
  {
    "seatNo": 19,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 3
  },
  {
    "seatNo": 20,
    "status": "booked",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 3
  },
  {
    "seatNo": 21,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 3
  },
  {
    "seatNo": 22,
    "status": "booked",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 4
  },
  {
    "seatNo": 23,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 4
  },
  {
    "seatNo": 24,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 4
  },
  {
    "seatNo": 25,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 4
  }
  {
    "seatNo": 26,
    "status": "booked",
    "category": 4,
    "bookedBy": "xyz",
    "gender": "",
    "row": 4
  },
  {
    "seatNo": 27,
    "status": "booked",
    "category": 4,
    "bookedBy": "xyz",
    "gender": "",
    "row": 4
  },
  {
    "seatNo": 28,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 4
  },
  {
    "seatNo": 29,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 5
  },
  {
    "seatNo": 30,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 5
  },
  {
    "seatNo": 31,
    "status": "available",
    "category": 3,
    "bookedBy": "vinod",
    "gender": "",
    "row": 5
  },
  {
    "seatNo": 32,
    "status": "booked",
    "category": 4,
    "bookedBy": "vinod",
    "gender": "",
    "row": 5
  },
  {
    "seatNo": 33,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 5
  },
  {
    "seatNo": 34,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 5
  },
  {
    "seatNo": 35,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 5
  },
  {
    "seatNo": 36,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 6
  },
  {
    "seatNo": 37,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 6
  },
  {
    "seatNo": 38,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 6
  },
  {
    "seatNo": 39,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 6
  },
  {
    "seatNo": 40,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 6
  },
  {
    "seatNo": 41,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 6
  },
  {
    "seatNo": 42,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 6
  },
  {
    "seatNo": 43,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 7
  },
  {
    "seatNo": 44,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 7
  },
  {
    "seatNo": 45,
    "status": "booked",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 7
  },
  {
    "seatNo": 46,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 7
  },
  {
    "seatNo": 47,
    "status": "booked",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 7
  },
  {
    "seatNo": 48,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 7
  },
  {
    "seatNo": 49,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 7
  },
  {
    "seatNo": 50,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 8
  },
  {
    "seatNo": 51,
    "status": "available",
    "category": 3,
    "bookedBy": "vinod",
    "gender": "",
    "row": 8
  },
  {
    "seatNo": 52,
    "status": "booked",
    "category": 3,
    "bookedBy": "vinod",
    "gender": "",
    "row": 8
  },
  {
    "seatNo": 53,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 8
  },
  {
    "seatNo": 54,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 8
  },
  {
    "seatNo": 55,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 8
  },
  {
    "seatNo": 56,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 8
  },
  {
    "seatNo": 57,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 9
  },
  {
    "seatNo": 58,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 9
  },
  {
    "seatNo": 59,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 9
  },
  {
    "seatNo": 60,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 9
  },
  {
    "seatNo": 61,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 9
  },
  {
    "seatNo": 62,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 9
  },
  {
    "seatNo": 63,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 9
  },
  {
    "seatNo": 64,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 10
  },
  {
    "seatNo": 65,
    "status": "booked",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 10
  },
  {
    "seatNo": 66,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 10
  },
  {
    "seatNo": 67,
    "status": "booked",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 10
  },
  {
    "seatNo": 68,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 10
  },
  {
    "seatNo": 69,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 10
  },
  {
    "seatNo": 70,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 10
  },
  {
    "seatNo": 71,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 11
  },
  {
    "seatNo": 72,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 11
  },
  {
    "seatNo": 73,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 11
  },
  {
    "seatNo": 74,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 11
  },
  {
    "seatNo": 75,
    "status": "booked",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 11
  },
  {
    "seatNo": 76,
    "status": "available",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 11
  },
  {
    "seatNo": 77,
    "status": "booked",
    "category": 4,
    "bookedBy": "",
    "gender": "",
    "row": 11
  },
  {
    "seatNo": 78,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 12
  },
  {
    "seatNo": 79,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 12
  },
  {
    "seatNo": 80,
    "status": "available",
    "category": 3,
    "bookedBy": "",
    "gender": "",
    "row": 12
  }



	]
};
