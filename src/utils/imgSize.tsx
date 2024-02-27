import {Dispatch} from "redux";
import {setPhotos} from "../reduxTools/gallery/actions";

export const newGetImgSize3 = (photos: string[], dispatch: Dispatch) => {
    photos.map((el:string) => {
        return new Promise((resolve) => {
            let newImg = new Image();
            newImg.src = el;
            newImg.onload = function () {
                let height = newImg.height;
                let width = newImg.width;
                resolve({width: width, height: height})
            };
        }).then((res: any) => {
            dispatch(setPhotos(el, res.width, res.height))
        })
    })
};