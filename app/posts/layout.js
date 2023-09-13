import React from 'react'

const page =({children}) => {

    return (
        <div>
            <h1> Navigate to top</h1>
            {children}
            <h1> Navigate to buttom</h1>
        </div>
    )
}

export default page;