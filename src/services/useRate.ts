
import { useEffect, useState } from "react";

import { useGetRateQuery } from "../reduxTools/requests/apiRate";
import { useGetInfoQuery } from "../reduxTools/requests/apiRequests";

type Answer = {
  currency:string,
  cur_scale: number,
  cur_rate: number,
}

export function  useRate () {
  const [isSkip, setIsSkip] = useState(true);
  const { data } = useGetInfoQuery();
  
  const currency =  data ? data[0].currency.toUpperCase() : "BYN";
  useEffect(() => {
    if (data && currency!=="BYN") {
      setIsSkip(false);
    }
  }, [currency, data]);
  const { data: rate } = useGetRateQuery(currency, {skip:isSkip});
  
  const defaultAnswer:Answer = {
    currency:"BYN",
        cur_scale: 1,
        cur_rate: 1
  }
  const answer:Answer = (rate && currency==="BYN")
    ?  defaultAnswer : rate? {
        currency:currency,
        cur_scale: rate?.Cur_Scale,
        cur_rate: rate?.Cur_OfficialRate,
      } : defaultAnswer 
      
  return answer;
};