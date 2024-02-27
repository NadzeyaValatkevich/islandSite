import {
  useGetBackPhotosQuery,
  useGetMainPageQuery,
} from "../reduxTools/requests/apiRequests";

export const useDatas = () => {
  const { data: main } = useGetMainPageQuery();
  const { data: backPhotos } = useGetBackPhotosQuery();

  //Общие для страниц названия и фоновые фотографии
  const title = main ? main[0].title : "Заповедный остров";
  const titleHouse = main ? main[0].house_title : "Домики";
  const titleKitchen = main ? main[0].kitchen_title : "Домашняя кухня";
  const titleEntertainment = main ? main[0].entertainment_title : "Развлечения";

  const main_back = backPhotos ? backPhotos[0].photo_m : "";
  const house_back = backPhotos ? backPhotos[0].photo_h : "";
  const kitchen_back = backPhotos ? backPhotos[0].photo_k : "";
  const entertainments_back = backPhotos ? backPhotos[0].photo_e : "";

  // Название для кнопки поиска объекта
  const nameForSearchButton = "Забронировать";

  return {
    title,
    titleHouse,
    titleKitchen,
    titleEntertainment,
    main_back,
    house_back,
    kitchen_back,
    entertainments_back,
    nameForSearchButton,
  };
};
