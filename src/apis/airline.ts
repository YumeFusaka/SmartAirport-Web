import type { AirlineFindFlightParams, AirlineTicketFlightParams, AirlineTicketInfo, FlightInfo } from '@/types/airline';
import type { FlightDeleteParams, FlightView } from '@/types/flight';
import type { AddTicketParams, TicketDeleteParams } from '@/types/ticket';
import http, { type Data } from '@/utils/axios';

export const airlineFindFlightAPI = (
  params: AirlineFindFlightParams,
): Promise<Data<FlightInfo[]>> => {
  return http({
    url: "/airline/flight/find",
    method: "POST",
    data: params,
  }).then((res) => res.data as Data<FlightInfo[]>);
};

export const airlineFlightCountAPI = (data: FlightView): Promise<Data<number>> => {
  return http({
    url: "/airline/flight/count",
    method: "POST",
    data: data
  }).then((res) => res.data as Data<number>);
}

export const airlineAddFlightAPI = (data: FlightInfo): Promise<Data<string>> => {
  return http({
    url: "/airline/flight/add",
    method: "POST",
    data: data
  }).then((res) => res.data as Data<string>);
}

export const airlineUpdateFlightAPI = (data: FlightInfo): Promise<Data<string>> => {
  return http({
    url: "/airline/flight/update",
    method: "PUT",
    data: data
  }).then((res) => res.data as Data<string>);
}

export const airlineDeleteFlightAPI = (data: FlightDeleteParams): Promise<Data<string>> => {
  return http({
    url: "/airline/flight/delete",
    method: "DELETE",
    data: data
  }).then((res) => res.data as Data<string>);
}

export const airlineAddTicketAPI = (data: AddTicketParams): Promise<Data<string>> => {
  return http({
    url: "/airline/ticket/add",
    method: "POST",
    data: data
  }).then((res) => res.data as Data<string>);
}

export const airlineFindTicketAPI = (data: AirlineTicketFlightParams): Promise<Data<AirlineTicketInfo[]>> => {
  return http({
    url: "/airline/ticket/find",
    method: "POST",
    data: data
  }).then((res) => res.data as Data<AirlineTicketInfo[]>);
}

export const airlineTicketCountAPI = (data: AirlineTicketFlightParams): Promise<Data<number>> => {
  return http({
    url: "/airline/ticket/count",
    method: "POST",
    data: data
  }).then((res) => res.data as Data<number>);
}

export const airlineTicketDeleteAPI = (data: TicketDeleteParams): Promise<Data<string>> => {
  return http({
    url: "/airline/ticket/delete",
    method: "DELETE",
    data: data
  }).then((res) => res.data as Data<string>);
}

export const airlineTicketUpdateAPI = (data: AirlineTicketInfo): Promise<Data<string>> => {
  return http({
    url: "/airline/ticket/update",
    method: "PUT",
    data: data
  }).then((res) => res.data as Data<string>);
}