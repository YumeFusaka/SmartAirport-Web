import type { AirlineFindFlightParams, FlightInfo } from '@/types/airline';
import type { FlightDeleteParams, FlightView } from '@/types/flight';
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