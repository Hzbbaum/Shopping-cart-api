import React from 'react'

export default function TotalCount(props) {
  return (
    <h3 className='my-4'>סך המוצרים בעגלה הוא: {props.itemsCount??0}</h3>
  )
}
