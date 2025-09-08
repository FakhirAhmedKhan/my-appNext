import React from 'react'

export const EduCenterLineStyle = () => {
    return (<>
        <div className="absolute left-1/2 top-24 bottom-0  md:block w-[4px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform -translate-x-1/2 rounded-full" />
    </>
    )
}
export const EduCenterDotStyle = () => {
    return (<>
        <span className="hidden md:block absolute top-6 left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 border-4 border-white shadow-md transform -translate-x-1/2 z-10" />
    </>
    )
}

