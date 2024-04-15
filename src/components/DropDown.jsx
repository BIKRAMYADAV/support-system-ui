import React, { useState } from 'react';

const Dropdown = ({text}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='font-serif'>
      <button onClick={toggleDropdown}>{text}</button>
      {isOpen && (
        <div>
          <p>Explaining in detail how to do so...</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;