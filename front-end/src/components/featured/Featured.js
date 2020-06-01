import React from 'react'

import '../../page/blog/style.css'

function Featured({ image, title, text, horizontal = true, imageVertical = true }) {
  return (
    <div className={horizontal ? 'featured-item-list-horizontal' : 'featured-item-list-vertical'}>
      <img className={imageVertical ? 'featured-image' : 'featured-image-vertical'} src={image} />
      <div className='text-featured-item'>
        <p className='title-feature-list-item'>{title}</p>
        <p className='link-more'>{text}</p>
      </div>
    </div>
  )
}

export default Featured