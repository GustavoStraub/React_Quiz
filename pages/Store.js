import React, {useState, useContext} from 'react'

export const LinkContext = React.createContext()

export default function Store({children}) {
  const [Link, setLink] = useState(0)
  return (
    <div>
       <LinkContext.Provider value={[Link, setLink]}>
    {children}
    </LinkContext.Provider>
    </div>
  )
}
