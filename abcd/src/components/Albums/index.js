import React from 'react'
import AlbumItem from '../AlbumItem'

const Albums = ({data, onDelete}) => {
  // console.log(data)
    return (
        <div>
            <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {data.map((album, index)=>{
                  return <AlbumItem key={index} item={album} onDelete={onDelete} />
                })}
              </div>
            </div>
          </div>
        </div>
    )
}

export default Albums




// import React from 'react'
// import AlbumItem from '../AlbumItem'

// const Albums = (data) => {
//   console.log(data)
//     return (
//         <div>
//             <div className="album py-5 bg-light">
//             <div className="container">
//               <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
//                  {data.map((album, index)=>{
//                    return <AlbumItem key={index} item={album} />
//                  })}
//               </div>
//             </div>
//           </div>
//         </div>
//     )
// }

// export default Albums



















