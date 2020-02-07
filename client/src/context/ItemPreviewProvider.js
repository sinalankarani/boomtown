import React from "react";

export const ItemPreviewContext = React.createContext();

const initialState = {
  title: "Dummy",
  description: "Black",
  tags: [],
  itemowner: {},
  created: new Date(),
  imageurl: `https://i.redd.it/54awv7jxe4e41.jpg`
};

const ItemPreviewProvider = props => {
  // React hook 'item' uses 'setItem' to update its state
  const [item, setItem] = React.useState(initialState);

  const resetPreview = () => {
    setItem(initialState);
  };

  const updatePreview = itemInput => {
    const newItem = { ...item, ...itemInput };
    setItem(newItem);
  };

  return (
    <ItemPreviewContext.Provider
      value={{
        state: item,
        resetPreview: resetPreview,
        updatePreview: updatePreview
      }}
    >
      {props.children}
    </ItemPreviewContext.Provider>
  );
};

export default ItemPreviewProvider;
