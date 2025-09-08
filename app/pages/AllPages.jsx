import React from 'react'
import Aboutpage from "./EduJounery/page";
import Footerpage from "./Footer/page";
import ProjecPage from "./Projects/page";
import Homepage from "./home/page";
const AllPages = () => {
    return (
        <div>
            <Homepage />
            <ProjecPage />
            <Aboutpage />
            <Footerpage />
        </div>
    )
}

export default AllPages
