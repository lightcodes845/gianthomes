import React from 'react';
import classes from "../../../styles/past.module.scss";
import MiniBanner from "../../../components/MiniBanner";
import ImageGallery from "react-image-gallery";

type Props = {}

const images = [
    {
        original: "/assets/img/developments/past/hermitage_gardens/hermitage_1_of_14-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/hermitage_gardens/hermitage_1_of_14-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/hermitage_gardens/hermitage_2_of_14-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/hermitage_gardens/hermitage_2_of_14-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/hermitage_gardens/hermitage_3_of_14-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/hermitage_gardens/hermitage_3_of_14-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/hermitage_gardens/hermitage_4_of_14-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/hermitage_gardens/hermitage_4_of_14-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/hermitage_gardens/hermitage_5_of_14-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/hermitage_gardens/hermitage_5_of_14-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/hermitage_gardens/hermitage_6_of_14-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/hermitage_gardens/hermitage_6_of_14-1132x627.jpg",
    },
];

const Hermitage: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.house_name}>
            <MiniBanner main_header={"Hermitage Gardens"} link={"/past"} menu_item={"Past"} sub_menu={"hermitage-gardens"}/>
            <div className={classes.container}>
                <div className={classes.image_gallery}>
                    <ImageGallery slideDuration={1000} items={images} thumbnailPosition={"right"}
                                  autoPlay={true} showPlayButton={false}/>;
                </div>
                <div className={classes.content}>
                    <div className={classes.side_one}>Benwick Road, Doddington, Cambridgeshire, PE15 0TG</div>
                    <div className={classes.side_two}>
                        <p>The Hermitage is a luxury development of four unique homes, each one crafted to the highest
                            specification. Boasting three to four bedrooms, these properties are spacious and
                            contemporary. The featured homes are the Waverley, Wenlock, Boxley and the Dunstable. Each
                            home is constructed using traditional block and brick methods incorporating high levels of
                            insulation to ensure your energy costs are kept to a minimum. External finishes such as
                            Cottage Blend bricks complemented with good detailing, give these homes a distinct and
                            attractive finish. Situated in the picturesque village of Doddington, the development is in
                            the ideal setting for a peaceful living experience.
                        </p>
                        <p>For more information on this development, please contact us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hermitage;