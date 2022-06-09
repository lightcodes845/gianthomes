import React from 'react';
import {NextPage} from "next";
import MiniBanner from "../../components/MiniBanner";
import HouseList from "../../components/HouseList";

type Props = {}

const houses = [
    {
        link: "/current/the-paddocks",
        image: "/assets/img/developments/current/minuet_village/7-1132x627.jpg",
        address: "Minuet Village",
        short_text: "Minuet Village is a select development of 12 homes, ranging from 3 to 6 bedrooms, built within...",
        date: "June 9, 2022"
    },
    {
        link: "/current/the-martins",
        image: "/assets/img/developments/current/the_martins/oundle-rd_1-1132x627.jpg",
        address: "The Martins",
        short_text: "The Martins is a development of two blocks of beautifully crafted apartments boasting one to three bedrooms. With...",
        date: "June 9, 2022"
    }
]

const CurrentPage:  NextPage<Props> = (props: Props) => {
    return (
        <div>
            <MiniBanner main_header={"Past Development"} menu_item={"Development"} sub_menu={"Current"}/>
            <HouseList houses={houses} />
        </div>
    );
};

export default CurrentPage;