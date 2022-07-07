import { Menu, MenuItem } from "@mui/material";
import React, { useState, useContext, useEffect, useRef } from "react";

export const ContextMenuContext = React.createContext(null);
export const useContextMenu = () => useContext(ContextMenuContext);

const initalState = {
  isOpen: false,
  top: 0,
  left: 0,
  component: null,
  selectedValue: null,
};

const defaultOptions = {
  documentDefaultContext: true,
  topOffset: 0,
  leftOffset: 0,
};

export const ContextMenuProvider = ({ options = defaultOptions, children }) => {
  const [contextMenu, setContextMenu] = useState(initalState);
  const resultPromise = useRef(null);

  // to prevent naming confilict
  const providerOptions = options;

  const makeNewPromise = () => {
    resultPromise.current?.terminate();
    return new Promise((resolve, reject) => {
      resultPromise.current = {
        resolve,
        reject,
        terminate: () => resolve({ selectedValue: null }),
      };
    });
  };

  // disable default right click
  useEffect(() => {
    const handleBodyContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleBodyContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleBodyContextMenu);
    };
  }, []);

  const render = (component) => {
    const renderAt = (top, left) => {
      setContextMenu({
        component,
        top,
        left,
        selectedValue: null,
        isOpen: true,
      });
      return makeNewPromise();
    };

    const renderByEvent = (
      event,
      options = {
        topOffset: providerOptions.topOffset,
        leftOffset: providerOptions.leftOffset,
      }
    ) => {
      event.preventDefault();
      const top = event.clientY + options.topOffset;
      const left = event.clientX + options.leftOffset;

      setContextMenu({
        component,
        top,
        left,
        selectedValue: null,
        isOpen: true,
      });
      return makeNewPromise();
    };
    const renderRelativeTo = (DOMElement) => {};
    return {
      at: renderAt,
      byEvent: renderByEvent,
      relativeTo: renderRelativeTo,
    };
  };

  const select = (selectedValue) => {
    setContextMenu({ ...contextMenu, selectedValue, isOpen: false });
    resultPromise.current?.resolve({ selectedValue });
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ ...contextMenu, isOpen: false });
    resultPromise.current?.terminate();
  };

  const handleClose = (e) => {
    setContextMenu({ ...contextMenu, isOpen: false });
    resultPromise.current?.terminate();
  };

  const value = {
    render,
    select,
  };

  return (
    <ContextMenuContext.Provider value={value}>
      {children}
      <Menu
        onContextMenu={handleContextMenu}
        open={contextMenu.isOpen}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: contextMenu.top, left: contextMenu.left }}
      >
        {contextMenu.component}
      </Menu>
    </ContextMenuContext.Provider>
  );
};

export const ContextMenuItem = ({
  value,
  onSelect = (value) => {},
  children,
  ...props
}) => {
  const contextMenu = useContextMenu();
  const handleClick = () => {
    contextMenu.select(value);
    onSelect(value);
  };
  return (
    <MenuItem onClick={handleClick} {...props}>
      {children}
    </MenuItem>
  );
};
