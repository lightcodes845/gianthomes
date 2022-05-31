import React from 'react';
import classes from "./index.module.scss";

type Props = {}

const Services: React.FC<Props> = (props: Props) => {
    return (
        <section className={classes.services}>
            <div className={classes.container}>
                <div className={classes.our_services}><span>Our Services</span></div>
                <h1 className={classes.main_text}>Our Main Focus</h1>
                <div className={classes.services_row}>
                    <div className={classes.service_box}>
                        <div className={classes.icon_logo}><img src="/assets/img/21.png" alt="icon"/></div>
                        <h2 className={classes.sub_heading}>Buy a home</h2>
                        <p className={classes.sub_text}>
                            Over 1million+ homes for sale available, we can match you with a house you will want to call
                            a home. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, natus!
                        </p>
                        <div className={classes.button}>Buy a Home &rarr;</div>
                    </div>
                    <div className={classes.service_box}>
                        <div className={classes.icon_logo}><img src="/assets/img/22.png" alt="icon"/></div>
                        <h2 className={classes.sub_heading}>Rent a home</h2>
                        <p className={classes.sub_text}>
                            Over 1million+ homes for sale available, we can match you with a house you will want to call
                            a home. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, natus!
                        </p>
                        <div className={classes.button}>Rent a Home &rarr;</div>
                    </div>
                    <div className={classes.service_box}>
                        <div className={classes.icon_logo}><img src="/assets/img/23.png" alt="icon"/></div>
                        <h2 className={classes.sub_heading}>Sell a home</h2>
                        <p className={classes.sub_text}>
                            Over 1million+ homes for sale available, we can match you with a house you will want to call
                            a home. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, natus!
                        </p>
                        <div className={classes.button}>Sell a Home &rarr;</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;