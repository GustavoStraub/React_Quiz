import React, {useContext} from 'react'
import  { LinkContext } from '../pages/Store'

import styled from 'styled-components'

const Button = styled.button`
 background: #3D94F6;

   border-radius: 20px;
   color: #FFFFFF;
   font-family: Open Sans;
   font-size: 16px;
   padding: 10px;
   box-shadow: 1px 1px 20px 0px #000000;
   text-shadow: 1px 1px 20px #000000;
   border: solid #337FED 1px;
   text-decoration: none;
   display: inline-block;
   cursor: pointer;
   text-align: center;
`
  const Pergunta = styled.h1`
  font-family: Georgia, serif;
font-size: 23px;
letter-spacing: 2.8px;
word-spacing: 1.8px;
color: #000000;
font-weight: 700;
text-decoration: none solid rgb(68, 68, 68);
font-style: italic;
font-variant: small-caps;
text-transform: none;
color: #53c1de;
  `


export default function Fourth() {
  const [Link, setLink] = useContext(LinkContext)
  return (
    <div>
      <Pergunta>Em Javascript, como passamos uma mensagem ao console?</Pergunta>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Button onClick={()=>setLink(30)}>Print(menssagem)</Button>
      <Button onClick={()=>setLink(30)}>System.out.println(mensagem)</Button>
      <Button onClick={()=>setLink(30)}>Printf(menssgem)</Button>
      <Button onClick={()=>setLink(5)}>console.log(menssagem)</Button>
      </div>
    </div>
  )
}


