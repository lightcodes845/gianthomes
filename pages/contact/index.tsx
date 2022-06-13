import React from 'react';
import classes from "./index.module.scss";
import {NextPage} from "next";
import {FaPhoneSquareAlt} from "react-icons/fa";
import {FaMailBulk} from "react-icons/fa";
import {FaMapMarked} from "react-icons/fa";
import Banner from "../../components/Banner";

type Props = {}

const ContactPage: NextPage = (props: Props) => {
    return (
        <div className={classes.contact_page}>
            <Banner main_text={"Contact Us"} background_image={"/assets/img/land.jpeg"}/>
            <div className={classes.container}>
                <div className={classes.contact_content}>
                    <div className={classes.box}>
                        <FaPhoneSquareAlt/>
                        <h3>Phone</h3>
                        <p>+44 7459 106979</p>
                    </div>
                    <div className={classes.box}>
                        <FaMailBulk/>
                        <h3>Email</h3>
                        <p>info@gianthomes.co.uk</p>
                    </div>
                    <div className={classes.box}>
                        <FaMapMarked/>
                        <h3>Address</h3>
                        <p>14b Connaught Road, Ilford, England, IG1 1RN</p>
                    </div>
                </div>
                <div className={classes.maps}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.486404388581!2d0.08303041598717174!3d51.55931611472656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a687a9fbcf75%3A0x9ab088937a670747!2s14b%20Connaught%20Rd%2C%20Ilford%20IG1%201RN%2C%20UK!5e0!3m2!1sen!2sng!4v1654791001077!5m2!1sen!2sng"
                        width="100%" height="100%"
                        style={{
                        border: 0,
                    }} allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;