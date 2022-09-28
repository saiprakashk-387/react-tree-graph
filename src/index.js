import React, { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import Tree from 'react-tree-graph'
import 'react-tree-graph/dist/style.css'

import './styles.css'
import rootNode, { result } from './data'
import File from './File'



const App = () => {

 
  return (
    <>
    <File/>
    </>
   
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
