import React, {useState, useEffect} from 'react'

function News(){
    
    
    const [data, setData] = useState(null)
    

    useEffect(() => {

        fetch('/api')
        .then(response => response.json())
        .then(response => setData(response.message))
    
      }, [])
    
    
    return( 
        <div>
            {
           !data ? "Loading..." : data
         }
        </div>
    )
}

export default News;