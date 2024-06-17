import type { BuyGoodsView, GoodsDeleteParams } from '@/types/merchant';
import type { Page } from '@/types/page';
import http, { type Data } from '@/utils/axios';

export const merchantGoodsCountAPI = (): Promise<Data<number>> => {
  return http({
    url: "/merchant/goods/count",
    method: "GET"
  }).then((res) => res.data as Data<number>);
}

export const merchantGoodsListAPI = (params: Page): Promise<Data<BuyGoodsView[]>> => {
  return http({
    url: "/merchant/goods/find",
    method: "GET",
    params: params
  }).then((res) => res.data as Data<BuyGoodsView[]>);
}

export const merchantGoodsDeleteAPI = (data: GoodsDeleteParams): Promise<Data<string>> => {
  return http({
    url: "/merchant/goods/delete",
    method: "DELETE",
    data: data
  }).then((res) => res.data as Data<string>);
}

export const merchantGoodsAddAPI = (data: BuyGoodsView): Promise<Data<string>> => {
  return http({
    url: "/merchant/goods/add",
    method: "POST",
    data: data
  }).then((res) => res.data as Data<string>);
}

export const merchantGoodsUpdateAPI = (data: BuyGoodsView): Promise<Data<string>> => {
  return http({
    url: "/merchant/goods/update",
    method: "PUT",
    data: data
  }).then((res) => res.data as Data<string>);
}