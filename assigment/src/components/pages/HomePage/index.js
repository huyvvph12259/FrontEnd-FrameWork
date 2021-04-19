import React from 'react'
import Albums from '../../Albums'
import Banner from '../../Banner'
import VideoIntro from '../../VideoIntro'

const HomePage = ({albums}) => {
    return (
        <div>
            
            
           
          <Banner />
          <Albums data = {albums} />
          <VideoIntro />
            
        </div>
    )
}

export default HomePage
