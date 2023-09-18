import React from 'react'
import Layout from '../layout'
const page =({params,postId: any}) => {
    return (
        <div> 
        
            <h1> Dynamic ID here {params.postId}</h1>
        
        </div>
    )
}

export default page;