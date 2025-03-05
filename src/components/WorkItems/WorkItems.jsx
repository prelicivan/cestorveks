import React, {useEffect, useState} from 'react';
import './WorkItems.css'
import { FaFilePdf } from "react-icons/fa";
import { motion } from 'framer-motion';

function WorkItems({
    img1, title1, desc1, img2, title2, desc2, img3, title3, desc3, img4, title4, desc4, img5, title5, desc5, img6, title6, desc6, img7, title7, desc7,
    img8, title8, desc8, img9, title9, desc9, img10, title10, desc10, img11, title11, desc11, img12, title12, desc12, img13, title13, desc13, img14,
    title14, desc14, img15, title15, desc15
}) {
    const [selectedCategory, setSelectedCategory] = useState("clips");

    return (
        <div className="work-items-component" id="work-items">
            <div className="component-title">
                Delatnost
            </div>

            <div className="category-buttons">
                <button onClick={() => setSelectedCategory("clips")} className={selectedCategory === "clips" ? "active" : ""}>Klipni Kompresori</button>
                <button onClick={() => setSelectedCategory("hidraulics")} className={selectedCategory === "hidraulics" ? "active" : ""}>Hidraulicni Kompresori</button>
                <button onClick={() => setSelectedCategory("cng")} className={selectedCategory === "cng" ? "active" : ""}>CNG Komponente</button>
            </div>

            <div className="work-items-footer">
                Za više informacija o ponudi preuzmite dokument: 
                <a href="/documents/Katalog.pdf" target="_blank" rel="noopener noreferrer">
                    <FaFilePdf className='pdf-icon'/>   
                    Katalog_ponude.pdf
                </a>
            </div>
        
            {selectedCategory === "clips" && (
                <div className="clips">
                    {[{ img: img1, title: title1, desc: desc1 },
                    { img: img2, title: title2, desc: desc2 },
                    { img: img3, title: title3, desc: desc3 },
                    { img: img4, title: title4, desc: desc4 },
                    { img: img5, title: title5, desc: desc5 }].map((item, index) => (
                        <div key={index} className="work-item">
                            <h3>{item.title}</h3>
                            <div className="work-item-container">
                                <img src={item.img} alt={item.title} />
                                {/* <p>{item.desc}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {selectedCategory === "hidraulics" && (
                <div className="hidraulics">
                    {[{ img: img6, title: title6, desc: desc6 },
                    { img: img7, title: title7, desc: desc7 }].map((item, index) => (
                        <div key={index} className="work-item">
                            <h3>{item.title}</h3>
                            <div className="work-item-container">
                                <img src={item.img} alt={item.title} />
                                {/* <p>{item.desc}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {selectedCategory === "cng" && (
                <div className="cng-components">
                    {[{ img: img8, title: title8, desc: desc8 },
                    { img: img9, title: title9, desc: desc9 },
                    { img: img10, title: title10, desc: desc10 },
                    { img: img11, title: title11, desc: desc11 },
                    { img: img12, title: title12, desc: desc12 },
                    { img: img13, title: title13, desc: desc13 },
                    { img: img14, title: title14, desc: desc14 },
                    { img: img15, title: title15, desc: desc15 }].map((item, index) => (
                        <div key={index} className="work-item">
                            <h3>{item.title}</h3>
                            <div className="work-item-container">
                                <img src={item.img} alt={item.title} />
                                {/* <p>{item.desc}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default WorkItems;