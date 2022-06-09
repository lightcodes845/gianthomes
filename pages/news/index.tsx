import React from 'react';
import classes from "./index.module.scss";
import {NextPage} from "next";
import Banner from "../../components/Banner";

type Props = {}

const NewsPage: NextPage = (props: Props) => {
    return (
        <div className={classes.news_page}>
            <Banner main_text={"News"} background_image={"/assets/img/news.jpeg"} />
            <div className={classes.container}>
                <div className={classes.text_content}>
                    <p>No posts found!</p>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;