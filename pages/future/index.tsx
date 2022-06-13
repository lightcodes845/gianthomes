import React from 'react';
import MiniBanner from "../../components/MiniBanner";
import HouseList from "../../components/HouseList";

type Props = {}

const houses = [
    {
        link: "/future/kirton",
        image: "/assets/img/developments/future/kirton/kirton_001.jpeg",
        address: "Kirton",
        short_text: "A development of 31 houses by Giant Homes. The site is in the middle of a viable city - Kirton...",
        date: "June 13, 2022"
    },
    {
        link: "/future/boston",
        image: "/assets/img/developments/current/frithville/frithville_012.jpeg",
        address: "Boston",
        short_text: "Coming Soon...",
        date: "June 13, 2022"
    },
    {
        link: "/future/bicker",
        image: "/assets/img/developments/current/frithville/frithville_012.jpeg",
        address: "Bicker",
        short_text: "Coming Soon...",
        date: "June 13, 2022"
    },
    {
        link: "/future/furtherhold",
        image: "/assets/img/developments/current/frithville/frithville_012.jpeg",
        address: "Futherhold",
        short_text: "Coming Soon...",
        date: "June 13, 2022"
    },
]

const Future: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <MiniBanner main_header={"Future Developments"} link={"/"} menu_item={"Development"} sub_menu={"future"}/>
            <HouseList houses={houses} />
        </div>
    );
};

export default Future;