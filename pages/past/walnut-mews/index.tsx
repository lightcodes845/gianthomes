import React from 'react';
import classes from '../../../styles/past.module.scss'
import MiniBanner from "../../../components/MiniBanner";
import ImageGallery from "react-image-gallery";

type Props = {}

const images = [
    {
        original: "/assets/img/developments/past/walnut_mews/1-walnutmews-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/walnut_mews/1-walnutmews-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/walnut_mews/2-walnutmews-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/walnut_mews/2-walnutmews-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/walnut_mews/3-walnutmews-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/walnut_mews/3-walnutmews-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/walnut_mews/4-walnutmews-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/walnut_mews/4-walnutmews-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/walnut_mews/5-walnutmews-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/walnut_mews/5-walnutmews-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/walnut_mews/6-walnutmews-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/walnut_mews/6-walnutmews-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/walnut_mews/7-walnutmews-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/walnut_mews/7-walnutmews-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/walnut_mews/8-walnutmews-1000x627.jpg",
        thumbnail: "/assets/img/developments/past/walnut_mews/8-walnutmews-1000x627.jpg",
    },
    {
        original: "/assets/img/developments/past/walnut_mews/9-walnutmews-1000x627.jpg",
        thumbnail: "/assets/img/developments/past/walnut_mews/9-walnutmews-1000x627.jpg",
    },
    {
        original: "/assets/img/developments/past/walnut_mews/10-walnutmews-1000x627.jpg",
        thumbnail: "/assets/img/developments/past/walnut_mews/10-walnutmews-1000x627.jpg",
    },
    {
        original: "/assets/img/developments/past/walnut_mews/11-walnutmews-1000x627.jpg",
        thumbnail: "/assets/img/developments/past/walnut_mews/11-walnutmews-1000x627.jpg",
    },
    {
        original: "/assets/img/developments/past/walnut_mews/12-walnutmews-1000x627.jpg",
        thumbnail: "/assets/img/developments/past/walnut_mews/12-walnutmews-1000x627.jpg",
    },
    {
        original: "/assets/img/developments/past/walnut_mews/13-walnutmews-1000x627.jpg",
        thumbnail: "/assets/img/developments/past/walnut_mews/13-walnutmews-1000x627.jpg",
    }
];

const WalnutMews: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.house_name}>
            <MiniBanner main_header={"Walnut Mews"} link={"/past"} menu_item={"Past"} sub_menu={"walnut-mews"}/>
            <div className={classes.container}>
                <div className={classes.image_gallery}>
                    <ImageGallery slideDuration={1000} items={images} thumbnailPosition={"right"}
                                  autoPlay={true} showPlayButton={false}/>;
                </div>
                <div className={classes.content}>
                    <div className={classes.side_one}>Peterborough, Cambridgeshire, PE3 6GJ</div>
                    <div className={classes.side_two}>
                        <h3>The Waterville, The Elton and Walnut House</h3>
                        <p>A prestigious city centre development of apartments and townhouses in the popular area of
                            Thorpe Road, Peterborough. Offering well proportioned homes in a central location with
                            excellent road and rail links. Consisting of: A terrace of three, three storey, 5–bed town
                            houses with garages and off road parking. Two pairs of three storey, five-bed town houses
                            with garages, off road parking and large secluded gardens. Three, 3 bed semi-detached double
                            fronted houses and two blocks of six luxury apartments all with off road parking. Other
                            features such as gorgeous Entrance Hall, Underfloor heating, Individually designed quality
                            kitchens, Bosch appliances, A-rated integrated appliances, dining and family area, living
                            room, en-suites, study, garage and allocated parking.
                        </p>
                        <p>For more information on this development, please contact us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalnutMews;