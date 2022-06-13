import React from 'react';
import {NextPage} from "next";
import MiniBanner from "../../components/MiniBanner";
import HouseList from "../../components/HouseList";

type Props = {}

const houses = [
    {
        link: "/current/frithville",
        image: "/assets/img/developments/current/frithville/frithville_004.jpeg",
        address: "Frithville",
        short_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur ipsum praesentium, quos ut vitae!",
        date: "June 9, 2022"
    }
]

const CurrentPage: NextPage<Props> = (props: Props) => {
    return (
        <div>
            <MiniBanner main_header={"Current Development"} menu_item={"Development"} sub_menu={"Current"}/>
            <HouseList houses={houses}/>
        </div>
    );
};

export default CurrentPage;