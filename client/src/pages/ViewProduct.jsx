import React from 'react'
import { useParams } from 'react-router-dom'

const ViewProduct = () => {
    const { productID } = useParams()
  return (
    <div>ViewProduct: {productID}</div>
  )
}

export default ViewProduct