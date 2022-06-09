import React from 'react';
import classes from "../../../styles/current.module.scss";
import MiniBanner from "../../../components/MiniBanner";
import ImageGallery from "react-image-gallery";
import { FaBuilding } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaGripfire } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";

type Props = {}

const images = [
    {
        original: "/assets/img/developments/current/minuet_village/1-1132x627.jpg",
        thumbnail: "/assets/img/developments/current/minuet_village/1-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/current/minuet_village/2-1132x627.jpg",
        thumbnail: "/assets/img/developments/current/minuet_village/2-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/current/minuet_village/3-1132x627.jpg",
        thumbnail: "/assets/img/developments/current/minuet_village/3-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/current/minuet_village/4-1132x627.jpg",
        thumbnail: "/assets/img/developments/current/minuet_village/4-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/current/minuet_village/5-1132x627.jpg",
        thumbnail: "/assets/img/developments/current/minuet_village/5-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/current/minuet_village/6-1132x627.jpg",
        thumbnail: "/assets/img/developments/current/minuet_village/6-1132x627.jpg",
    },
    {
        original: "/assets/img/developments/current/minuet_village/7-1132x627.jpg",
        thumbnail: "/assets/img/developments/current/minuet_village/7-1132x627.jpg",
    },
];

const ThePaddocks: React.FC<Props> = (props: Props) => {
    return (
        <div className={classes.house_name}>
            <MiniBanner main_header={"Minuet Village"} link={"/current"} menu_item={"Current"}
                        sub_menu={"minuet-village"}/>
            <div className={classes.container}>
                <div className={classes.image_gallery}>
                    <ImageGallery slideDuration={1000} items={images} thumbnailPosition={"right"}
                                  autoPlay={true} showPlayButton={false}/>;
                </div>
                <div className={classes.content}>
                    <div className={classes.side_one}>162 Coates Road, Coates, Cambridgeshire, PE7 2BD</div>
                    <div className={classes.side_two}>
                        <p>Minuet Village is a select development of 12 homes, ranging from 3 to 6 bedrooms, built
                            within a village theme. All homes are built to standard specification and have a variety of
                            upgrades available. All homes have been internally designed by a local interior designer and
                            customers have a range of choices available. The village of Coates is a beautiful farm
                            village situated in Cambridgeshire. With only a 20 minute drive from Peterborough and 10
                            minutes from Whittlesey, it is a wonderful location for the development, to be surrounded in
                            country life but close enough to surrounding cities. Local amenities including a small shop
                            which includes a post office. Coates also has a church, a chapel, a village hall and a
                            primary school.
                        </p>
                        <p>To register your interest in this development, please contact us.</p>
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
                            <div className={classes.box}>
                                <div className={classes.heading}>
                                    <FaMoneyBillAlt />
                                    <h3>Warranty</h3>
                                </div>
                                <p>All homes come with a 10-year warranty</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThePaddocks;