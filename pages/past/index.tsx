import React from 'react';
import {NextPage} from "next";
import MiniBanner from "../../components/MiniBanner";
import HouseList from "../../components/HouseList";

type Props = {}

export type House = {
    link: string;
    image: string;
    address: string;
    short_text: string;
    date: string;
}

const houses = [
    {
        link: "/past/sunrise-gardens-phase-1",
        image: "/assets/img/developments/past/sunrise_gradens_phase1/7-sunrise-phase1-1132x627.jpg",
        address: "Sunrise Gardens (Phase 1)",
        short_text: "Sunrise Gardens is a select development of bungalows and Chalet bungalows. Ranging from 3 to 4 bedrooms, they were...",
        date: "June 8, 2022"
    },
    {
        link: "/past/victory-gardens",
        image: "/assets/img/developments/past/victory_gardens/9-victorygardens-1132x627.jpg",
        address: "Victory Gardens",
        short_text: "Victory Gardens was a development of 23 homes within the town of Crowland, featuring  a variety of  homes...",
        date: "June 8, 2022"
    },
    {
        link: "/past/walnut-mews",
        image: "/assets/img/developments/past/walnut_mews/2-walnutmews-1132x627.jpg",
        address: "Walnut Mews",
        short_text: "The Waterville, The Elton and Walnut House. A prestigious city centre development of apartments and townhouses in the...",
        date: "June 8, 2022"
    },
    {
        link: "/past/sunrise_gardens_phase_2",
        image: "/assets/img/developments/past/sunrise_gardens_phase_2/eastlands_3_of_16-1132x627.jpg",
        address: "Sunrise Gardens (Phase 2)",
        short_text: "Sunrise Gardens is our second phase of 6 beautiful detached bungalows. Situated alongside Phase 1 of four bungaloww...",
        date: "June 8, 2022"
    },
    {
        link: "/past/the-hermitage",
        image: "/assets/img/developments/past/hermitage_gardens/hermitage_3_of_14-1132x627.jpg",
        address: "Hermitage Gardens",
        short_text: "The Hermitage is a luxury development of four unique homes, each one crafted to the highest specification...",
        date: "June 8, 2022"
    },
    {
        link: "/past/east-street",
        image: "/assets/img/developments/past/east_street/2-east-street-1132x627.jpg",
        address: "East Street",
        short_text: "East Street was a mixed development of Town houses, apartments and the refurbishment of period cottages set in...",
        date: "June 8, 2022"
    },
    {
        link: "/past/newboults-lane",
        image: "/assets/img/developments/past/newboults_lane/1-newboultslane-1132x627.jpg",
        address: "Newboults Lane",
        short_text: "Newboults lane was a gorgeous mews development of 5 properties within walking distance of the Town Centre...",
        date: "June 8, 2022"
    },
    {
        link: "/past/kingsland",
        image: "/assets/img/developments/past/kingsland/kingsland_close_1_of_24-1132x627.jpg",
        address: "Kingsland",
        short_text: "Kingsland was a prestigious development of 8 homes, built in Doddington. With our custom build option, customers were able...",
        date: "June 8, 2022"
    }
]

const PastPage: NextPage<Props> = (props: Props) => {
    return (
        <div>
            <MiniBanner main_header={"Past Development"} menu_item={"Development"} sub_menu={"Past"}/>
            <HouseList houses={houses} />
        </div>
    );
};

export default PastPage;