import React from 'react';
import classes from "../../../styles/past.module.scss";
import MiniBanner from "../../../components/MiniBanner";
import ImageGallery from "react-image-gallery";

type Props = {}

const images = [
    {
        original: "/assets/img/developments/past/east_street/1-east-street-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/east_street/1-east-street-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/east_street/2-east-street-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/east_street/2-east-street-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/east_street/3-east-street-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/east_street/3-east-street-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/past/east_street/4-east-street-1000x627.jpg",
        thumbnail: "/assets/img/developments/past/east_street/4-east-street-1000x627.jpg",
    },
    {
        original: "/assets/img/developments/past/east_street/5-east-street-1000x627.jpg",
        thumbnail: "/assets/img/developments/past/east_street/5-east-street-1000x627.jpg",
    },
    {
        original: "/assets/img/developments/past/east_street/6-east-street-1132x627.jpg",
        thumbnail: "/assets/img/developments/past/east_street/6-east-street-1132x627.jpg",
    },
];

const EastStreet: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.house_name}>
            <MiniBanner main_header={"East Street"} link={"/past"} menu_item={"Past"} sub_menu={"east-street"}/>
            <div className={classes.container}>
                <div className={classes.image_gallery}>
                    <ImageGallery slideDuration={1000} items={images} thumbnailPosition={"right"}
                                  autoPlay={true} showPlayButton={false}/>;
                </div>
                <div className={classes.content}>
                    <div className={classes.side_one}>St. Ives, Cambridgeshire, PE27 5PD</div>
                    <div className={classes.side_two}>
                        <p>East Street was a mixed development of Town houses, apartments and the refurbishment of
                            period cottages set in the Town centre of St Ives within commutable distance to Cambridge
                            City Centre and Milton Business Park. It comprised of: A terrace of three, three-storey,
                            three bed town houses with allocated parking and garden’s. A stunning block of 4 apartments,
                            two one-bed and two two-bed’s all with allocated parking and 2 completely refurbished three
                            bed cottages with off road parking and garden area.
                        </p>
                        <p>For more information on this development, please contact us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EastStreet;