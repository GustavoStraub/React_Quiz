import React from 'react'
import App from './App'
import {useState, useContext} from 'react'
import Store, { LinkContext } from './Store'

export default function index() {

  // const [Link, setLink] = useContext(LinkContext)

  return (
    <div>
      <Store>
        <App />
      </Store>
    </div>
  )
}
