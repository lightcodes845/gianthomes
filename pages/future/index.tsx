import React from 'react';
import MiniBanner from "../../components/MiniBanner";
import HouseList from "../../components/HouseList";

type Props = {}

const Future: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <MiniBanner main_header={"Future Developments"} link={"/"} menu_item={"Development"} sub_menu={"future"}/>
            <HouseList houses={[]} />
        </div>
    );
};

export default Future;