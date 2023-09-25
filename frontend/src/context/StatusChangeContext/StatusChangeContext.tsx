import React, {
  ReactElement,
  createContext,
  FC,
  PropsWithChildren,
  useState,
} from "react";

export const StatusChangeContext = createContext({
  updated: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
});

export const StatusChangeContextProvider: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  const [updated, setUpdated] = useState<boolean>(false);

  const toggleHandler = () => {
    updated ? setUpdated(false) : setUpdated(true);
  };

  return (
    <StatusChangeContext.Provider
      value={{
        updated: updated,
        toggle: toggleHandler,
      }}
    >
      {children}
    </StatusChangeContext.Provider>
  );
};
