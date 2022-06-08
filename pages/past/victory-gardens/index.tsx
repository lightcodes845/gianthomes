import React from 'react';
import classes from '../../../styles/past.module.scss'
import MiniBanner from "../../../components/MiniBanner";
import ImageGallery from "react-image-gallery";

type Props = {}

const images = [
    {
        original: "/assets/img/developments/past/victory_gardens/1-victorygardens-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/victory_gardens/1-victorygardens-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/victory_gardens/2-victorygardens-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/victory_gardens/2-victorygardens-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/victory_gardens/3-victorygardens-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/victory_gardens/3-victorygardens-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/victory_gardens/4-victorygardens-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/victory_gardens/4-victorygardens-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/victory_gardens/5-victorygardens-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/victory_gardens/5-victorygardens-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/victory_gardens/6-victorygardens-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/victory_gardens/6-victorygardens-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/victory_gardens/7-victorygardens-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/victory_gardens/7-victorygardens-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/victory_gardens/8-victorygardens-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/victory_gardens/8-victorygardens-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/victory_gardens/9-victorygardens-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/victory_gardens/9-victorygardens-1132x627.jpg",
    },
];

const VictoryGardens: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.house_name}>
            <MiniBanner main_header={"Victory Gardens"} link={"/past"} menu_item={"Past"} sub_menu={"victory-gardens"}/>
            <div className={classes.container}>
                <div className={classes.image_gallery}>
                    <ImageGallery slideDuration={1000} items={images} thumbnailPosition={"right"}
                                  autoPlay={true} showPlayButton={false}/>;
                </div>
                <div className={classes.content}>
                    <div className={classes.side_one}>Cloot Drove, Crowland, Peterborough, Lincolnshire, PE6 0JN</div>
                    <div className={classes.side_two}>
                        <p>Victory Gardens was a development of 23 homes within the town of Crowland, featuring a
                            variety of homes ranging from 2 bedroom semi-detached houses to 4 bedroom detached houses,
                            within walking distance of the town’s amenities. The development was centered around a green
                            area, a perfect center piece for local residents. All homes were completed to standard
                            specification.
                        </p>
                        <p>For more information on this development, please contact us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VictoryGardens;