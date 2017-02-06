import React from 'react'

const List = ({items, callback, className}) => {

if (!items || items.constructor !== Array)
    return console.warn('List expects items to be an array.') || null


  return (

    <div className={className}>

      {items.map( item => {

        return React.createElement(callback, {...item, key: item.id})

      })}

    </div>

  )

}

export default List