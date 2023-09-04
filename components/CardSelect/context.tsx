import React, { createContext, useState } from 'react'

export const Context = createContext<any>({})

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [ids, setIds] = useState<(string | number)[]>([])


  const setSelectedIds = (ids: (string | number)[]) => {
    setIds(ids)
  }

  return (
    <Context.Provider value={{ selectedIds: ids, setSelectedIds }}>
      {children}
    </Context.Provider>
  )
}