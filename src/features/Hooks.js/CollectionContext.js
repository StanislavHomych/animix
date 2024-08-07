import { createContext, useContext } from 'react';

export const CollectionContext = createContext();

export const useCollection = () => {
  return useContext(CollectionContext);
};
