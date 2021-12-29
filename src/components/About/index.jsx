import React from 'react';
import styles from './about.module.css';
import { useState } from 'react';
import picStructure from '../../assets/Image/About.png';

export function BoxAbout() {

    const [showing, setShowing] = useState(false);
    const [typeBox, setTypeBox] = useState("register");
    const [orange, setOrange] = useState("#5A5A5A");
    let hStyle = { color: orange };
    const handleDisplay = (type, color) => {
        setTypeBox(type);
        setShowing(true);
        setOrange(color);
        if (showing === true && typeBox === type) {
            setShowing(false);
            setOrange("#5A5A5A");
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.boxFlex}>
                <div className={styles.navBox}>
                    <a className={styles.structure} onClick={() => { handleDisplay("management", "#FF725E") }}>Management <br />structure</a>
                    <a className={styles.structure} onClick={() => { handleDisplay("mission", "#FF725E") }}>Mission and <br />Vision</a>
                    <a className={styles.structure} onClick={() => { handleDisplay("core", "#FF725E") }}>Core values</a>
                    <a className={styles.structure} onClick={() => { handleDisplay("cultural", "#FF725E") }}>Cultural identity</a>
                </div>
                <div className={styles.content}>
                    {typeBox === "management" && showing === true &&
                        <figure className={styles.picStructure}>
                            <img src={picStructure} alt="Picture Structure" />
                        </figure>
                    }
                    {typeBox === "mission" && showing === true &&
                        <div>
                            <h3 className={styles.vision}> Vision to 2030: </h3>
                            <p className={styles.p__content}><i> The best bank in Viet Nam, 1 in 100 biggest bank in Asian, 1 in 300 biggest financial corporation in the World. </i></p>
                            <h3 className={styles.vision}>Strategic goals to 2025:  </h3>
                            <ul className={styles.p__content}>
                                <li>Leading in profit size and
                                    non-credit revenue </li>
                                <li> Leading in customer experience </li>
                                <li> Leading in retail and investment banking </li>
                                <li> Leading in the quality of human resources</li>
                                <li> Leading in digital banking </li>
                                <li> Leading in risk management </li>
                            </ul>
                        </div>
                    }
                    {typeBox === "core" && showing === true &&
                        <div>
                            <p className={styles.p__content}><b>Innovative:</b>  <i>to bring practical value to customers</i></p>
                            <p className={styles.p__content}><b>Continuous:</b>  <i>towards the goal of expanding the customer portfolio, which is the most valuable and proudest asset of us</i></p>
                            <p className={styles.p__content}><b>Caring:</b>  <i>taking Care - Dedication to customers as a striving criterion</i></p>
                            <p className={styles.p__content}><b>Connected:</b>  <i>Widely connected to build a national bank compare to the region and the world</i></p>
                            <p className={styles.p__content}><b>Individual:</b>  <i>Always strive to find the difference on the basis of the highest quality and value</i></p>
                            <p className={styles.p__content}><b>Secure:</b>  <i>Promote safety and security to maximize the interests of customers and shareholders</i></p>
                        </div>
                    }
                    {typeBox === "cultural" && showing === true &&
                        <div>
                            <p className={styles.p__content}><b>Trust</b>  <i>- Keep Faith and Skill</i></p>
                            <p className={styles.p__content}><b>Standards</b>  <i>- Respect for principles and standard behavior</i></p>
                            <p className={styles.p__content}><b>Ready to innovate</b>  <i>- Always aiming for the new, modern and civilized</i></p>
                            <p className={styles.p__content}><b>Sustainability</b>  <i>- For long-term benefits</i></p>
                            <p className={styles.p__content}><b>Humanity</b>  <i>- Trong virtue, closeness and sympathy, sharing</i></p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

