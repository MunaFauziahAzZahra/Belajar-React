import React from 'react'

export default function Image({image, width, height}) {
  return (
    <>
    <img src={image} width={width} height={height} />
    </>
  )
}
