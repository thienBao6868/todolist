import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <div>
         <h1 className ={style.title}> Todo List
            <span> Get one item done at a time.</span>
        </h1>
    </div>
  )
}

export default Header
