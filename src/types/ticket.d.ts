export type BuyTicketInfo = {
  id: number;
  flight_id: number;
  seat_class: string;
  seat_number: string;
  status: string;
  price: number;
  created_time: string;
  updated_time: string;
  flight_number: string;
  departure_city: string;
  arrival_city: string;
  date_of_departure: string;
  estimated_travel_time: number;
}

export type BuyTicketView = {
  price: number;
  seat_class: string;
  seat_number: string;
  flight_number: string;
  departure_city: string;
  arrival_city: string;
  date_of_departure: string;
  estimated_travel_time: number;
  updated_time: string;
}
