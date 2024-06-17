import type { Page } from '@/types/page';
import type { BuyGoodsView, PassengerGoodsBuyParams, PassengerLuggageInfo, PassengerTicketBuyParams, PassengerTicketFlightParams, PassengerTicketInfo } from '@/types/passenger';
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

export const passengerFindBuyGoodsAPI = (params: Page): Promise<Data<BuyGoodsView[]>> => {
  return http({
    url: "/passenger/goods/find",
    method: "GET",
    params: params
  }).then((res) => res.data as Data<BuyGoodsView[]>);
}

export const passengerFindBuyGoodsCountAPI = (): Promise<Data<number>> => {
  return http({
    url: "/passenger/goods/count",
    method: "GET",
  }).then((res) => res.data as Data<number>);
}

export const passengerBuyGoodsAPI = (data: PassengerGoodsBuyParams): Promise<Data<string>> => {
  return http({
    url: "/passenger/goods/buy",
    method: "POST",
    data: data
  }).then((res) => res.data as Data<string>);
}

export const passengerLuggageCountAPI = (): Promise<Data<number>> => {
  return http({
    url: "/passenger/luggage/count",
    method: "GET",
  }).then((res) => res.data as Data<number>);
}

export const passengerLuggageAPI = (params: Page): Promise<Data<PassengerLuggageInfo[]>> => {
  return http({
    url: "/passenger/luggage/find",
    method: "GET",
    params: params
  }).then((res) => res.data as Data<PassengerLuggageInfo[]>);
}