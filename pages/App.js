import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import First from '../components/First'
import Store, { LinkContext } from './Store'
import Welcome from '../components/Welcome'
import GameOver from '../components/GameOver'
import Second from '../components/Second'
import Third from '../components/Third'
import Fourth from '../components/Fourth'
import Fifth from '../components/Fifth'

import Win from '../components/Win'


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Titulo = styled.h1`
  color: #61DBFB;
`



export default function app() {
  const [Link, setLink] = useContext(LinkContext)
 function renderSwitch(Link) {
   
  switch(Link) {
      case 0:
        return <Welcome/>;
        case 1:
         return <First />

          case 2:
           return <Second />;

           case 3: 
            return <Third />

            case 4: 
            return <Fourth/>

            case 5: 
            return <Fifth/>

            case 6: 
            return <Win />

            case 30:
             return <GameOver />;

      default:
        return 'deu ruim';
    }
  }
  
  return (
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#282c34', height: '100vh'}}>
      
        {renderSwitch(Link)}
        <style global jsx>{`
        body {
          margin: 0;
          pading: 0;  
        }
      `}</style>
    </div>
  )
}
