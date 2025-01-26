/* eslint-disable no-unused-vars */
import { useState } from "react";
import { icon } from "@fortawesome/fontawesome-svg-core";
// import { useIconsNumber } from "../../features/iconsnumber/useIconsNumber";
// import { services } from "../../utils/vars";

// style
import "./Icons.scss";

// data
import { iconscomponents } from "../../data/variablesdata";

// components
import IconCom from "./IconCom";

// ui
// import Spinner from "../spinner/Spinner";
import Empty from "../error/Empty";

function IconsCom() {
    // const [iconsnumber, setIconsnumber] = useState([
    //     { id: 1, icon: "", title: "" },
    // ]);
    // dataupdate, icon, number, title, username, emil, user_Id

    // const { isLoading, iconsnumber } = useIconsNumber();
    // const { isLoading, iconsnumber } = useState({});

    // if (isLoading) return <Spinner />;
    if (!iconscomponents) return <Empty resourceName="iconsnumber" />;

    return (
        <>
            <section className="icons" id="iconsnumber">
                <div className="waves">
                    <div className="wave" id="wave1" />
                    <div className="wave" id="wave2" />
                    <div className="wave" id="wave3" />
                    <div className="wave" id="wave4" />
                </div>

                <div className="container">
                    {iconscomponents?.length > 0 &&
                        iconscomponents?.map((iconnumber, index) => (
                            <IconCom iconnumber={iconnumber} key={index} />
                        ))}
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default IconsCom;
