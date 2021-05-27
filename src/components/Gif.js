import React from 'react'

function Gif({id,key,title,url}) {
    return (
        <div className="row" >
          <h2 className="text-center">{title}</h2>
          <img  alt={title} src = {url} />
        </div> 
    )
}

export default Gif
