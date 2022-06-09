import React from 'react';
import classes from "../../../styles/current.module.scss";
import MiniBanner from "../../../components/MiniBanner";
import ImageGallery from "react-image-gallery";
import {FaBoxOpen, FaBuilding, FaDoorOpen, FaGripfire, FaLightbulb, FaMoneyBillAlt} from "react-icons/fa";

type Props = {}

const images = [
    {
        original: "/assets/img/developments/current/the_martins/oundle-rd_1-1132x627.jpg",
        thumbnail: "/assets/img/developments/current/the_martins/oundle-rd_1-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/current/the_martins/oundle-rd_2-1132x627.jpg",
        thumbnail: "/assets/img/developments/current/the_martins/oundle-rd_2-1132x627.jpg",
    }
];

const TheMartins: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.house_name}>
            <MiniBanner main_header={"The Martins"} link={"/current"} menu_item={"Current"}
                        sub_menu={"the-martins"}/>
            <div className={classes.container}>
                <div className={classes.image_gallery}>
                    <ImageGallery slideDuration={1000} items={images} thumbnailPosition={"right"}
                                  autoPlay={true} showPlayButton={false}/>;
                </div>
                <div className={classes.content}>
                    <div className={classes.side_one}>145 Oundle Road, Peterborough, Cambridgeshire, PE2 9PW</div>
                    <div className={classes.side_two}>
                        <p>The Martins is a development of two blocks of beautifully crafted apartments boasting one to
                            three bedrooms. With no affordable housing and within the city of Peterborough, The Martins’
                            development is one not to miss out on. Within walking distance to the centre and the city’s
                            train station, this development offers the client an apartment built to the utmost quality,
                            with close proximity to local amenities. The apartments are made up of two blocks, Augustine
                            and Benedict. With a total of 10 apartments, ranging in size, the development offers a range
                            of bedrooms and all come with allocated parking.
                        </p>
                        <p>Please note, there are now only 5 flats remaining on this development. Please contact us for
                            more information.</p>
                    </div>
                </div>
            </div>
            <div className={classes.specification}>
                <div className={classes.container}>
                    <div className={classes.spec_content}>
                        <h2>Standard Specifications</h2>
                        <div className={classes.content}>
                            <div className={classes.box}>
                                <div className={classes.heading}>
                                    <FaBuilding />
                                    <h3>Traditionally Built</h3>
                                </div>
                                <p>Brick and block construction</p>
                            </div>
                            <div className={classes.box}>
                                <div className={classes.heading}>
                                    <FaLightbulb />
                                    <h3>Energy Efficient</h3>
                                </div>
                                <p>All homes are built well insulated to maximise efficiency</p>
                            </div>
                            <div className={classes.box}>
                                <div className={classes.heading}>
                                    <FaGripfire />
                                    <h3>Heating</h3>
                                </div>
                                <p>Temperature controlled, zoned heating</p>
                            </div>
                            <div className={classes.box}>
                                <div className={classes.heading}>
                                    <FaMoneyBillAlt />
                                    <h3>Warranty</h3>
                                </div>
                                <p>All homes come with a 10-year warranty</p>
                            </div>
                            <div className={classes.box}>
                                <div className={classes.heading}>
                                    <FaBoxOpen />
                                    <h3>Windows</h3>
                                </div>
                                <p>UPVC windows</p>
                            </div>
                            <div className={classes.box}>
                                <div className={classes.heading}>
                                    <FaDoorOpen />
                                    <h3>Doors</h3>
                                </div>
                                <p>UPVC French doors. Composite front door and frame</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default TheMartins;