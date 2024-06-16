import type { Page } from './page'

export type FlightView = {
  flight_number: string;
  departure_city: string;
  arrival_city: string;
  date_of_departure: string;
  estimated_travel_time: number;
  capacity: number;
}

export type FlightCountParams = Page & {
  flight_number: string;
  departure_city: string;
  arrival_city: string;
  date_of_departure: string;
  estimated_travel_time: number;
  capacity: number;
}

export type FlightDeleteParams = {
  flightIds: number[]
}