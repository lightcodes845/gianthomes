import React from 'react';
import classes from "../../../styles/past.module.scss";
import MiniBanner from "../../../components/MiniBanner";
import ImageGallery from "react-image-gallery";

type Props = {}

const images = [
    {
        original: "/assets/img/developments/past/newboults_lane/1-newboultslane-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/newboults_lane/1-newboultslane-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/newboults_lane/2-newboultslane-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/newboults_lane/2-newboultslane-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/newboults_lane/3-newboultslane-1000x627.jpg",
        thumbnail: "/assets/img/developments/past/newboults_lane/3-newboultslane-1000x627.jpg",
    },
    {
        original: "/assets/img/developments/past/newboults_lane/4-newboultslane-1000x627.jpg",
        thumbnail: "/assets/img/developments/past/newboults_lane/4-newboultslane-1000x627.jpg",
    },
    {
        original: "/assets/img/developments/past/newboults_lane/5-newboultslane-1000x627.jpg",
        thumbnail: "/assets/img/developments/past/newboults_lane/5-newboultslane-1000x627.jpg",
    }
];

const NewboultsLane: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.house_name}>
            <MiniBanner main_header={"Newboults Lane"} link={"/past"} menu_item={"Past"} sub_menu={"newboults-lane"}/>
            <div className={classes.container}>
                <div className={classes.image_gallery}>
                    <ImageGallery slideDuration={1000} items={images} thumbnailPosition={"right"}
                                  autoPlay={true} showPlayButton={false}/>;
                </div>
                <div className={classes.content}>
                    <div className={classes.side_one}>Stamford, Lincolnshire, PE9 1AY</div>
                    <div className={classes.side_two}>
                        <p>Newboults lane was a gorgeous mews development of 5 properties within walking distance of the
                            Town Centre. It consisted of: A terrace of three, three storey, four-bed town houses with a
                            garage and parking. Other features include an en-suite to main bedroom, feature glass roof
                            to kitchen/dining area and under floor heating. Two, two-bed mews style cottages with off
                            road parking and underfloor heating.The development was situated in the beautiful town of
                            Stamford, perfect for a rural living experience.
                        </p>
                        <p>For more information on this development, please contact us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewboultsLane;