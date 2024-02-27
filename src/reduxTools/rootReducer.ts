import { combineReducers } from "redux";

import { burgerMenuReducer } from "./burgerMenu/burgerMenuReducer";
import { formReducer } from "./formForOrderHouse/formReducer";
import { apiRate } from "./requests/apiRate";
import { api } from "./requests/apiRequests";
import {galleryReducer} from "./gallery/galleryReducer";

export const rootReducer = combineReducers({
  burgerMenu: burgerMenuReducer,
  form: formReducer,
  gallery: galleryReducer,
  [api.reducerPath]: api.reducer,
  [apiRate.reducerPath]: apiRate.reducer,
});
