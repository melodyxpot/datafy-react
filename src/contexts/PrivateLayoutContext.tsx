import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState
} from "react";

export type PrivateLayoutContextValueType = {
  slideOpened: boolean;
};

export type PrivateLayoutContextProps = {
  store: PrivateLayoutContextValueType;
  setStore: Dispatch<SetStateAction<PrivateLayoutContextValueType>>;
};

const initStore: PrivateLayoutContextValueType = {
  slideOpened: false
};

const PrivateLayoutContext = createContext<PrivateLayoutContextProps>({
  store: initStore,
  setStore: () => {
    return null;
  }
});

export const PrivateLayoutContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [store, setStore] = useState<PrivateLayoutContextValueType>(initStore);

  return (
    <PrivateLayoutContext.Provider value={{ store, setStore }}>
      {children}
    </PrivateLayoutContext.Provider>
  );
};

export const PrivateLayoutContextConsumer: React.FC<{
  childrenNodes: (store: PrivateLayoutContextProps) => React.ReactNode;
}> = ({ childrenNodes }) => {
  return (
    <PrivateLayoutContext.Consumer>
      {store => {
        return childrenNodes(store);
      }}
    </PrivateLayoutContext.Consumer>
  );
};

export const usePrivateLayoutContext = () => {
  const store = useContext(PrivateLayoutContext);
  return store;
};
