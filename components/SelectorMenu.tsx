import React, { useRef, useState } from "react";
import useOutsideClickListener from "../hooks/useOutsideClickListener";
import { MenuItem } from "../types";

interface SelectorMenuItemProps {
  name: string;
  onClick: () => void;
}

const SelectorMenuItem: React.FC<SelectorMenuItemProps> = ({
  name,
  onClick,
}) => (
  <div
    className="block px-4 cursor-pointer py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    role="menuitem"
    onClick={onClick}
  >
    {name}
  </div>
);

interface SelectorMenuProps {
  menuTitle: string;
  current: MenuItem;
  update: (newValue: MenuItem) => void;
  items: MenuItem[];
}

const SelectorMenu: React.FC<SelectorMenuProps> = ({
  menuTitle,
  current,
  update,
  items,
}) => {
  const [toggled, setToggled] = useState(false);
  const ref = useRef(null);
  useOutsideClickListener(ref, () => {
    setToggled(false);
  });

  return (
    <div className="relative inline-block text-left">
      <p className="text-sm text-center font-medium text-gray-700 m-2">
        {menuTitle}
      </p>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setToggled(!toggled)}
        >
          {current?.name || "No Value"}
        </button>
      </div>
      {!toggled || (
        <div
          className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          ref={ref}
        >
          <div className="py-1" role="none">
            {items.map((item) => (
              <SelectorMenuItem
                name={item.name}
                onClick={() => {
                  update(item);
                  setToggled(false);
                }}
                key={item.value}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectorMenu;
export { SelectorMenuItem };
