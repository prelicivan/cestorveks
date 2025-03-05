import React, {useEffect, useState} from 'react';
import './Work.css'
import Footer from '../Footer/FooterContact';
import WorkItems from '../WorkItems/WorkItems';
import { workDataObjOne } from '../Home/Data'; 

function Work() {
    return (
        <div className="work-component">
            <WorkItems {...workDataObjOne}/>
            <Footer />
        </div>
    )
}

export default Work;