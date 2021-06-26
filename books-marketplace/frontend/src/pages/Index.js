import React from 'react'
import {Link} from "react-router-dom"

const Index = () => {
    return (
        <div>
            I am index Page
<Link to="./books"> Go To Books Page</Link>
        </div>
    )
}

export default Index
