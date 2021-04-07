import React from 'react'

const DetailAlbum = ({data}) => {
    return (
        <div>
            Name: {data.name}
            <br/>
            Avatar: <img src={data.avatar} alt=""/>
        </div>
    )
}

export default DetailAlbum
