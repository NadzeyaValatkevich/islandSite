export const SET_PHOTOS = "SET_PHOTOS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_PER_PAGE = "SET_PER_PAGE";
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
export const SET_EMPTY_ARRAY = "SET_EMPTY_ARRAY";

 export type GalleryActions = {
     type: "SET_PHOTOS" | "SET_CURRENT_PAGE" | "SET_PER_PAGE" | "SET_TOTAL_COUNT" | "SET_EMPTY_ARRAY",
     payload: any
}

// interface SetPhotosActionType {
//     type: "SET_PHOTO",
//     payload: { totalCount: number }
// }
// interface SetCurrentPageActionType {
//     type: "SET_CURRENT_PAGE",
//     payload: { currentPage: number }
// }

export const setPhotos = (url: string, width: number, height: number):GalleryActions =>  {
    return {
        type: SET_PHOTOS,
        payload: {url, width, height}
    }
};

export const setCurrentPage = (currentPage: number):GalleryActions =>  {
    return {
        type: SET_CURRENT_PAGE,
        payload: {currentPage}
    }
};

export const setPerPage = (perPage: number):GalleryActions =>  {
    return {
        type: SET_PER_PAGE,
        payload: {perPage}
    }
};
export const setTotalCount = (totalCount: number):GalleryActions =>  {
    return {
        type: SET_PER_PAGE,
        payload: {totalCount}
    }
};

export const setEmptyArrayItems = (array: []):GalleryActions =>  {
    return {
        type: SET_EMPTY_ARRAY,
        payload: {array}
    }
};

