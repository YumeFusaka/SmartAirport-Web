import type { Page } from '@/types/page'

export type PassengerTicketFlightParams = Page & {
  flight_number: string;
  departure_city: string;
  arrival_city: string;
  date_of_departure: string;
  estimated_travel_time: number;
  seat_number: number;
  seat_class: string;
  price: number;
}

export type PassengerTicketInfo = {
  id: number;
  flight_number: string;
  departure_city: string;
  arrival_city: string;
  date_of_departure: string;
  estimated_travel_time: number;
  seat_number: number;
  seat_class: string;
  price: number;
}

export type PassengerTicketBuyParams = {
  ticketIds: number[]
}