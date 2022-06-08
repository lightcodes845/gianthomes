import React from 'react';
import classes from "../../../styles/past.module.scss";
import MiniBanner from "../../../components/MiniBanner";
import ImageGallery from "react-image-gallery";

type Props = {}

const images = [
    {
        original: "/assets/img/developments/past/kingsland/kingsland_close_1_of_24-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/kingsland/kingsland_close_1_of_24-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/kingsland/kingsland_close_1_of_24-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/kingsland/kingsland_close_1_of_24-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/kingsland/kingsland_close_2_of_24-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/kingsland/kingsland_close_2_of_24-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/kingsland/kingsland_close_3_of_24-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/kingsland/kingsland_close_3_of_24-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/kingsland/kingsland_close_4_of_24-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/kingsland/kingsland_close_4_of_24-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/kingsland/kingsland_close_5_of_24-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/kingsland/kingsland_close_5_of_24-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/kingsland/kingsland_close_6_of_24-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/kingsland/kingsland_close_6_of_24-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/kingsland/kingsland_close_7_of_24-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/kingsland/kingsland_close_7_of_24-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/kingsland/kingsland_close_8_of_24-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/kingsland/kingsland_close_8_of_24-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/kingsland/kingsland_close_9_of_24-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/kingsland/kingsland_close_9_of_24-1132x627.jpg",
    },
];

const KingsLand: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.house_name}>
            <MiniBanner main_header={"Kingsland"} link={"/past"} menu_item={"Past"} sub_menu={"kingsland"}/>
            <div className={classes.container}>
                <div className={classes.image_gallery}>
                    <ImageGallery slideDuration={1000} items={images} thumbnailPosition={"right"}
                                  autoPlay={true} showPlayButton={false}/>;
                </div>
                <div className={classes.content}>
                    <div className={classes.side_one}>Newgate Street, Doddington, Cambridgeshire, PE15 0SR</div>
                    <div className={classes.side_two}>
                        <p>Kingsland was a prestigious development of 8 homes, built in Doddington. With our custom
                            build option, customers were able to truly make their homes their own. The specification
                            could be upgraded and altered to suit and accommodate individual requirements, ranging from
                            the finish of the door hinges right through to the paint that goes on the wall. The
                            Kingsland developments were all built with excellent build ethics in mind. With traditional
                            brick and block wall construction, to unique touches added by our clients, we ensured dream
                            homes became a reality. All homes on the Kingsland development were available through custom
                            build.
                        </p>
                        <p>For more information on this development, please contact us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KingsLand;