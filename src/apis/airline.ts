import type { AirlineFindFlightParams, FlightInfo } from '@/types/airline';
import http, { type Data } from '@/utils/axios';

export const airlineFindFlightAPI = (
  params: AirlineFindFlightParams,
): Promise<Data<FlightInfo>> => {
  return http({
    url: "/flight/find",
    method: "POST",
    data: params,
  }).then((res) => res.data as Data<FlightInfo>);
};