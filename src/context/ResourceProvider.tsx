import { useNuiEvent } from 'fivem-nui-react-lib';
import React, { useState, useContext, createContext } from 'react';

interface Context {
  visibility: boolean;
  setVisibility: (show: boolean) => void;
}

const ResourceContext = createContext<Context>(undefined);

export default function ResourceProvider({ children }) {
  const [visibility, setVisibility] = useState<boolean>(false);

  useNuiEvent('RESOURCE', 'setVisibility', setVisibility);

  const value = {
    visibility,
    setVisibility
  }

  return <ResourceContext.Provider value={value}>{children}</ResourceContext.Provider>
}

export const useVisibility = () => {
  const { visibility, setVisibility } = useContext(ResourceContext);
  return { visibility, setVisibility }
}