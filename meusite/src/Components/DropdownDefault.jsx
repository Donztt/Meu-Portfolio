import React, { useState, useEffect, useRef } from "react";
import "../CSS/DropdownDefault.css";
import { IoMdArrowDropdown } from "react-icons/io";

function DropdownDefault({ options, onSelect, value }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item.label);
    setDropdownOpen(false);
    onSelect && onSelect(item.value);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const findItemByValue = (value) => {
    return options.find(item => item.value === value);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <button onClick={toggleDropdown} className="DropdownButton">
        {selectedItem || (value? findItemByValue(value).label :options[0].label)}{" "}
        <IoMdArrowDropdown className="DropdownIcon" />
      </button>
      {isDropdownOpen && (
        <ul className="DropdownItens">
          {options.map((item) => (
            <li onClick={() => handleItemClick(item)} className="DropdownItem">
              <img src={item.img} className="DropdownItemImage" alt=""></img>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownDefault;
