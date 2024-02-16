import React, { useEffect, useState } from 'react'

import { ApiGif } from '../helpers/Apigif'

export const Gifblock = ({props1}) => {

  const [itemgif, setItemgif] = useState([])

  const getImages = async() =>{

    const newImages = await ApiGif({props1});
    setItemgif(newImages);

    console.log(props1);

  }

  useEffect(() => {
    getImages()
  }, [props1])
  


  return (
    <>

    <div className="container" style={{ display: 'flex', flexWrap: 'wrap'}}>


        {itemgif.map(
          category =>(
            <>

            <img className="col" style={{ display: 'flex', flexWrap: 'wrap' }} src={category.url}/>
            </>
            )
            )}
 
    </div>
    </>
  )
}
