import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {BeatLoader} from "react-spinners";

import {ArrowNext} from "../../assets/icons/ArrowNext";
import {ArrowPrev} from "../../assets/icons/ArrowPrev";
import {HomeBlockTemplate} from "../../components/HomeBlockTemplate";
import {useGetGalleryQuery} from "../../reduxTools/requests/apiRequests";

import {ToFormButton} from "./../../components/buttons/toFormButton/ToFormButton";

import styles from "./NewGallery.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../reduxTools/store";
import {
    setCurrentPage,
    setEmptyArrayItems,
    setPerPage,
} from "../../reduxTools/gallery/actions";
import {createPages} from "../../utils/pagesCreator";
import Carousel from "../../components/Carousel";
import Slider, {Settings} from "react-slick";
import {newGetImgSize3} from "../../utils/imgSize";

export const NewGallery = () => {
    const dispatch = useDispatch();
    const {data} = useGetGalleryQuery();
    const [value, setValue] = useState<string | undefined>("");
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const items = useSelector((state: AppState) => state.gallery.items);
    const currentPage = useSelector((state: AppState) => state.gallery.currentPage);
    const perPage = useSelector((state: AppState) => state.gallery.perPage);

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(perPage);
    const [totalCount, setTotalCount] = useState(data && data[0].photos.length);

    const gallerySliderSettings: Settings = {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        infinite: true,
        touchMove: true,
        rows: 4,
        initialSlide: 0,
        speed: 900,
        dots: true,
    };

    useEffect(() => {
        dispatch(setEmptyArrayItems([]));
        if (data && data.length > 0) {
            setValue(data[0].title);
        }
        ;
        data && newGetImgSize3(data[0].photos, dispatch);
        data && setTotalCount(data[0].photos.length);
        dispatch(setCurrentPage(1))

    }, [data]);

    useEffect(() => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 768) {
            dispatch(setPerPage(6))
        }
    }, [perPage]);


    useEffect(() => {
        setStart(perPage * (currentPage - 1))
        setEnd(perPage * currentPage)
    }, [currentPage, perPage]);

    const windowWidth = window.innerWidth;

    const openImageViewer = useCallback((index: number) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const pagesCount = totalCount && Math.ceil(totalCount / perPage);

    const pages: number[] = [];

    createPages(pages, pagesCount, currentPage);

    let photosData: string[] = [];

    if (!value && data && data.length > 0) {
        data[0].photos.map((el) => photosData.push(el))
    } else {
        data && data.map((el) => {

            if (value === el.title) {
                el.photos.map((el) => photosData.push(el))
            }
        })
    }
    ;

    function handleEsc(event: KeyboardEvent) {
        if (event.keyCode === 27) {
            setIsViewerOpen(false);
        }
    };

    let slider = useRef<Slider | null>(null);

    useEffect(() => {
        slider.current?.slickGoTo(0)
    }, [slider.current])


    useEffect(() => {
        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);
    if (data && data.length === 0) {
        return (
            <div className={styles.cap}>
                Скоро здесь будут наши фотографии
            </div>
        )
    } else if (!data) {
        return (
            <div className={styles.preload}>
                <BeatLoader color="#583711"/>
            </div>
        )
    }
    ;

    return (
        <>
            <HomeBlockTemplate title="">
                <div className={styles["tabs-grid"]}>
                    {data && data.length > 0 &&
                        data.map((el) => {

                            return (
                                <div
                                    key={el.id}
                                    className={
                                        value === el.title
                                            ? `${styles["tab-item"]} ${styles.active}`
                                            : styles["tab-item"]
                                    }
                                    onClick={
                                        () => {
                                            slider.current?.slickGoTo(0)
                                            setValue(el.title);
                                            setTotalCount(el.photos.length)
                                            dispatch(setEmptyArrayItems([]))
                                            newGetImgSize3(el.photos, dispatch)
                                            dispatch(setCurrentPage(1));
                                        }
                                    }
                                >
                                    {el.title}
                                </div>
                            );
                        })}
                </div>

                <div className={styles["images-grid"]}>
                    {windowWidth > 420 ?
                        items.length <= perPage ?
                            items.map((el, index) => {

                                return <div className={styles.imageBlock}
                                            key={index.toString()}
                                            onClick={() => openImageViewer(index)}
                                >
                                    <img src={el.url} alt={"photo"}
                                         className={(el.width - el.height) > 0 ?
                                             `${styles.image} ${styles.cover}`
                                             : `${styles.image} ${styles.contain}`}
                                    />
                                </div>

                            }) :
                            items.slice(start, end).map((el, index) => {
                                return <div className={styles.imageBlock}
                                            key={index.toString()}
                                            onClick={() => openImageViewer(index)}
                                >
                                    <img src={el.url} alt={"photo"}
                                         className={(el.width - el.height) > 0 ?
                                             `${styles.image} ${styles.cover}`
                                             : `${styles.image} ${styles.contain}`}
                                    />
                                </div>
                            })
                        :
                        <Carousel settings={gallerySliderSettings} slider={slider}>
                            {photosData.map((el, index) => {

                                let newImg = new Image();
                                newImg.src = el;
                                let height = newImg.height;
                                let width = newImg.width;
                                let dif = width - height;

                                return <div className={styles.imageBlock}
                                            key={index.toString()}
                                            onClick={() => openImageViewer(index)}>
                                    <img src={el} alt={"photo"}
                                         className={dif > 0 ?
                                             `${styles.image} ${styles.cover}`
                                             : `${styles.image} ${styles.contain}`}
                                    />
                                </div>
                            })}
                        </Carousel>
                    }
                </div>
                <div className={styles.pages}>
                    {pages.map((page: number, index: number) => {
                        return <div
                            key={index}
                            className={currentPage === page ? styles.currentPage : styles.page}
                            onClick={() => {
                                dispatch(setCurrentPage(page))
                            }}
                        >{page}
                        </div>
                    })}
                </div>
            </HomeBlockTemplate>
            <HomeBlockTemplate title="">
                <ToFormButton className={styles.form}/>
            </HomeBlockTemplate>
            {isViewerOpen && (
                <div className={styles["image-viewer"]}>
                    <div className={styles["photo-view"]}>
                        <img src={photosData && photosData[currentImage]} alt=""/>
                        <ArrowPrev
                            onClick={() => {
                                if (currentImage > 0) {
                                    setCurrentImage((prev) => --prev);
                                }
                            }}
                            className={styles["arrow-prev"]}
                        />
                        <ArrowNext
                            onClick={() => {
                                if (photosData && currentImage < photosData.length - 1) {
                                    setCurrentImage((prev) => ++prev);
                                }
                            }}
                            className={styles["arrow-next"]}
                        />
                        <div
                            onClick={() => setIsViewerOpen(false)}
                            className={styles["close"]}
                        >
                            &#10006;
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
