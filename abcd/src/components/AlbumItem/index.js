import React from 'react'

const AlbumItem = ({item: {avatar, name}}) => {
    return (
        <div className="col">
                  <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top" width="100%" height={225} src={avatar} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" />
                    <div className="card-body">
                      <p className="card-text">{name}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div> 
    )
    
}
export default AlbumItem;