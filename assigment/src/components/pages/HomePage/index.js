import React from 'react'
import Albums from '../../Albums'
import Banner from '../../Banner'
import VideoIntro from '../../VideoIntro'

const HomePage = ({albums, addCartPr}) => {
    return (
        <div>
          <Banner />
          <Albums data = {albums} addCartPr={addCartPr} />
          <VideoIntro />
            
        </div>
    )
}

export default HomePage
