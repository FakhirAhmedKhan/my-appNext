import React from 'react'
import Aboutpage from "./EduJounery/page";
import Footerpage from "./Footer/page";
import ProjecPage from "./Projects/page";
import Homepage from "./home/page";
import SkillPages from './Skills/ToolsKillts';
const AllPages = () => {
    return (
        <div>
            <Homepage />
            <ProjecPage />
            <Aboutpage />
            <SkillPages />
            <Footerpage />
        </div>
    )
}

export default AllPages
