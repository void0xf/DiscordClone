import React, { ReactNode } from "react";

interface DropDownProps {
  items: ReactNode[] | ReactNode;
  onSelectHandler: (selectedValue: string) => void;
}

const DropDownn: React.FC<DropDownProps> = ({ items, onSelectHandler }) => {
  const handleItemClick = (element: ReactNode) => {
    // Check if the element is a React element
    if (React.isValidElement(element)) {
      // Now TypeScript knows element is a ReactElement, so it allows access to props
      const children = element.props.children;
      if (typeof children === "string" || typeof children === "number") {
        // If the children is a string or number, use it directly
        onSelectHandler(String(children).trim());
      } else if (Array.isArray(children)) {
        // If the children is an array, concatenate the string elements
        const concatenatedChildrenText = children
          .filter(
            (child) => typeof child === "string" || typeof child === "number"
          )
          .join("");
        onSelectHandler(concatenatedChildrenText.trim());
      }
      // Add more logic here if needed for other types of children
    } else if (typeof element === "string" || typeof element === "number") {
      // If the element itself is a string or number, use it directly
      onSelectHandler(String(element).trim());
    }
    // Add more conditions here if you need to handle other types (e.g., arrays)
  };

  return (
    <div>
      <div
        className="dropDown overflow-x-hidden w-[95%] h-[215px] bg-zinc-700 border-stone-900 shadow-sm shadow-zinc-900 border absolute my-[-215px] rounded-md
                          scrollbar-thin scrollbar-webkit -webkit-scrollbar-track"
      >
        <div className="box overflow-hidden w-[125px] h-auto bg-zinc-700">
          {Array.isArray(items) ? (
            items.map((Element, index) => {
              if (Element) {
                return (
                  <div
                    key={index} // Make sure to provide a unique key
                    onClick={() => handleItemClick(Element)}
                    className="item"
                  >
                    {Element}
                  </div>
                );
              }
              return null;
            })
          ) : items ? (
            <div onClick={() => handleItemClick(items)}>{items}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DropDownn;
