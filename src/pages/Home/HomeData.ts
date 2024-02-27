import {
  useGetDishesQuery,
  useGetEntertainmentsQuery,
  useGetMainPageQuery,
  useGetObjectsQuery,
} from "../../reduxTools/requests/apiRequests";
import { useDatas } from "../../services/useDatas";


export const useHomeData = () => {
  const { data: houses } = useGetObjectsQuery();
  const { data: dishes } = useGetDishesQuery();
  const { data: entertainments } = useGetEntertainmentsQuery();
  const { data: mainPage } = useGetMainPageQuery();
  const datas = useDatas();
  
  return { houses, dishes, entertainments, mainPage, datas };
};
