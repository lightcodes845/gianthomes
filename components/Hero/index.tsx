import React from 'react';
import {FaHome} from "react-icons/fa";
import { Slide, Fade, Zoom } from "react-awesome-reveal";
import classes from "./index.module.scss"

type Props = {}

const Hero: React.FC<Props> = (props: Props) => {


    return (
        <section className={classes.Hero}>
            <div className={classes.container}>
                <div className={classes.hero_content}>
                    <div className={classes.image_side}><img src="/assets/img/sitting_room.jpeg" alt="Image One"/></div>
                    <div className={classes.backdrop}>&nbsp;</div>
                    <div className={classes.text_side}>
                        <Slide direction={"up"} triggerOnce >
                            <div className={classes.name}>
                                <FaHome/> <span>Giant Homes Firm</span>
                            </div>
                        </Slide>
                        <Zoom triggerOnce delay={500}>
                            <h1 className={classes.main_text}>Find Your Dream House By Us</h1>
                        </Zoom>
                        {/*<p className={classes.sub_text}>*/}
                        {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur fugit odit*/}
                        {/*    praesentium provident vero.*/}
                        {/*</p>*/}
                        <Fade triggerOnce delay={800}>
                            <button className={classes.cta}>Learn More</button>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;