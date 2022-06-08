import React from 'react';
import classes from '../../../styles/past.module.scss'
import MiniBanner from "../../../components/MiniBanner";
import ImageGallery from "react-image-gallery";

type Props = {}

const images = [
    {
        original: "/assets/img/developments/past/sunrise_gardens_phase_2/eastlands_1_of_16-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gardens_phase_2/eastlands_1_of_16-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/sunrise_gardens_phase_2/eastlands_2_of_16-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gardens_phase_2/eastlands_2_of_16-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/sunrise_gardens_phase_2/eastlands_3_of_16-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gardens_phase_2/eastlands_3_of_16-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/sunrise_gardens_phase_2/eastlands_4_of_16-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gardens_phase_2/eastlands_4_of_16-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/sunrise_gardens_phase_2/eastlands_5_of_16-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gardens_phase_2/eastlands_5_of_16-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/sunrise_gardens_phase_2/eastlands_6_of_16-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gardens_phase_2/eastlands_6_of_16-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/sunrise_gardens_phase_2/eastlands_7_of_16-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/sunrise_gardens_phase_2/eastlands_7_of_16-1132x627.jpg",
    },
];

const SunriseGardens2: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.house_name}>
            <MiniBanner main_header={"Sunrise Gardens Phase 2"} link={"/past"} menu_item={"Past"}
                        sub_menu={"sunrise-gardens-phase-2"}/>
            <div className={classes.container}>
                <div className={classes.image_gallery}>
                    <ImageGallery slideDuration={1000} items={images} thumbnailPosition={"right"}
                                  autoPlay={true} showPlayButton={false}/>;
                </div>
                <div className={classes.content}>
                    <div className={classes.side_one}>Eastlands, Crowland, Peterborough, Lincolnshire, PE6 0JF</div>
                    <div className={classes.side_two}>
                        <p>Sunrise Gardens is our second phase of 6 beautiful detached bungalows. Situated alongside
                            Phase 1 of four bungalows. The six new homes are crafted to the highest quality to ensure a
                            relaxed and modern living. Boasting three to four spacious bedrooms, modern kitchens
                            (complete with integrated appliances), bathrooms and en-suites. These properties have been
                            designed with style and comfort in mind. Throughout the properties, integrated storage
                            provides practical convenience and the stunning French doors offer easy outdoor access. Two
                            of the six bungalows also feature a double garage as well as increased living space. All
                            homes on the Sunrise Gardens development are available with our custom build. There is also
                            a wide range of upgrades available all plots.
                        </p>
                        <p>For a detailed plot specific specification and more information on or custom build process,
                            please refer to our sales team.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SunriseGardens2;