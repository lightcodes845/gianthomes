import React from 'react';
import classes from '../../../styles/past.module.scss'
import ImageGallery from 'react-image-gallery';
import MiniBanner from "../../../components/MiniBanner";

type Props = {}

const images = [
    {
        original: "/assets/img/developments/past/sunrise_gradens_phase1/1-sunrise-phase1-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gradens_phase1/1-sunrise-phase1-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/sunrise_gradens_phase1/2-sunrise-phase1-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gradens_phase1/2-sunrise-phase1-1132x627.jpg"
    },
    {
        original: "/assets/img/developments/past/sunrise_gradens_phase1/3-sunrise-phase1-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gradens_phase1/3-sunrise-phase1-1132x627.jpg"
    },
    {
        original: "/assets/img/developments/past/sunrise_gradens_phase1/4-sunrise-phase1-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gradens_phase1/4-sunrise-phase1-1132x627.jpg"
    },
    {
        original: "/assets/img/developments/past/sunrise_gradens_phase1/5-sunrise-phase1-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gradens_phase1/5-sunrise-phase1-1132x627.jpg"
    },
    {
        original: "/assets/img/developments/past/sunrise_gradens_phase1/6-sunrise-phase1-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gradens_phase1/6-sunrise-phase1-1132x627.jpg"
    },
    {
        original: "/assets/img/developments/past/sunrise_gradens_phase1/7-sunrise-phase1-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gradens_phase1/7-sunrise-phase1-1132x627.jpg"
    },
    {
        original: "/assets/img/developments/past/sunrise_gradens_phase1/8-sunrise-phase1-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gradens_phase1/8-sunrise-phase1-1132x627.jpg"
    },
    {
        original: "/assets/img/developments/past/sunrise_gradens_phase1/9-sunrise-phase1-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gradens_phase1/9-sunrise-phase1-1132x627.jpg"
    },
    {
        original: "/assets/img/developments/past/sunrise_gradens_phase1/10-sunrise-phase1-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gradens_phase1/10-sunrise-phase1-1132x627.jpg"
    },
    {
        original: "/assets/img/developments/past/sunrise_gradens_phase1/11-sunrise-phase1-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gradens_phase1/11-sunrise-phase1-1132x627.jpg"
    },
];

const SunriseGarden: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.house_name}>
            <MiniBanner main_header={"Sunrise Gardens"} link={"/past"} menu_item={"Past"} sub_menu={"sunrise-gardens"}/>
            <div className={classes.container}>
                <div className={classes.image_gallery}>
                    <ImageGallery slideDuration={1000} items={images} thumbnailPosition={"right"}
                                  autoPlay={true} showPlayButton={false}/>;
                </div>
                <div className={classes.content}>
                    <div className={classes.side_one}>Eastlands, Crowland, Peterborough, Lincolnshire, PE6 0JF</div>
                    <div className={classes.side_two}>
                        <p>Sunrise Gardens is a select development of bungalows and Chalet bungalows. Ranging from 3 to
                            4 bedrooms, they were created to fulfill a need in the town of Crowland. Two types were on
                            offer the Tulip and Iris. The Tulip has three bedrooms and the Iris has four. Two of these
                            bedrooms, one being a master with en-suite, were accommodated within the roof space. The
                            bathrooms on each bungalow type were fitted with an Ideal Standard Playa suite. Wall tiling
                            and floor finishes added to the finishing touches. The kitchen was finished in a traditional
                            shaker style with a selected range of integrated appliances fitted as standard. Outside,
                            each bungalow received landscaping treatment to the boundaries with turfed gardens to the
                            front. A block paved drive sufficient for two vehicles formed part of the front entrance.
                         </p>
                        <p>For more information on these properties, please refer to our sales team.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SunriseGarden;