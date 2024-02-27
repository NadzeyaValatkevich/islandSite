import {GalleryActions, SET_CURRENT_PAGE, SET_EMPTY_ARRAY, SET_PER_PAGE, SET_PHOTOS, SET_TOTAL_COUNT} from "./actions";

interface ItemState {
    url: string,
    width: number,
    height: number,
};

interface GalleryState {
    items: ItemState[],
    totalCount: number,
    currentPage: number,
    perPage: number
};

const defaultState: GalleryState = {
    items: [],
    totalCount: 0,
    currentPage: 1,
    perPage: 15
};

export const galleryReducer = (
    state: GalleryState = defaultState,
    action: GalleryActions,
): GalleryState => {
    switch (action.type) {
        case SET_PHOTOS:
            const newItem = {url: action.payload.url, width: action.payload.width, height: action.payload.height}
            return {
                ...state,
                items: [...state.items, newItem]
            }
            case SET_EMPTY_ARRAY:
                return {
                    ...state,
                    items: action.payload.array
                }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload.totalCount
            }
        case SET_PER_PAGE:
            return {
                ...state,
                perPage: action.payload.perPage
            }
        default:
            return state
    }
}