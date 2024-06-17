import type { PassengerTicketBuyParams, PassengerTicketFlightParams, PassengerTicketInfo } from '@/types/passenger';
import type { BuyTicketView } from '@/types/ticket';
import http, { type Data } from '@/utils/axios'

export const passengerFindTicketAPI = (data: PassengerTicketFlightParams): Promise<Data<PassengerTicketInfo[]>> => {
  return http({
    url: "/passenger/ticket/find",
    method: "POST",
    data: data
  }).then((res) => res.data as Data<PassengerTicketInfo[]>);
}

export const passengerTicketCountAPI = (data: PassengerTicketFlightParams): Promise<Data<number>> => {
  return http({
    url: "/passenger/ticket/count",
    method: "POST",
    data: data
  }).then((res) => res.data as Data<number>);
}

export const passengerTicketBuyAPI = (data: PassengerTicketBuyParams): Promise<Data<string>> => {
  return http({
    url: "/passenger/ticket/buy",
    method: "POST",
    data: data
  }).then((res) => res.data as Data<string>);
}

export const passengerTicketHistoryAPI = (data: BuyTicketView): Promise<Data<BuyTicketView[]>> => {
  return http({
    url: "/passenger/ticket/history",
    method: "POST",
    data: data
  }).then((res) => res.data as Data<BuyTicketView[]>);
}

export const passengerTicketHisotryCountAPI = (data: BuyTicketView): Promise<Data<number>> => {
  return http({
    url: "/passenger/ticket/history/count",
    method: "POST",
    data: data
  }).then((res) => res.data as Data<number>);
}