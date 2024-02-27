import { CLOSE_FORM,FormAction, OPEN_FORM } from "./actions";

interface FormState {
  isFormOpen: boolean;
}

const defaultState: FormState = {
  isFormOpen: false,
};

export const formReducer = (
  state: FormState = defaultState,
  action: FormAction,
): FormState => {
  switch (action.type) {
    case OPEN_FORM:
      return {
        ...state,
        isFormOpen: true,
      };
    case CLOSE_FORM:
      return {
        ...state,
        isFormOpen: false,
      };
    default:
      return state;
  }
};
