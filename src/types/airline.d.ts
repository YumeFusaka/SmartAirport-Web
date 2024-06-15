import type { Page } from '@/types/page'
export type AirlineFindFlightParams = Page & {
  flight_number: string;
  departure_city: string;
  arrival_city: string;
  date_of_departure: string;
  estimated_travel_time: number;
  capacity: number;
}

export type FlightInfo = {
  id: number;
  flight_number: string;
  departure_city: string;
  arrival_city: string;
  date_of_departure: string;
  estimated_travel_time: number;
  capacity: number;
}