import React from 'react';
import './CustomSwitch.scss';
const CustomSwitch = ({ value, onChange }) => {
  return (
    <label class='switch'>
      <input
        type='checkbox'
        checked={value}
        value={value}
        onChange={onChange}
      />
      <div>
        <span></span>
      </div>
    </label>
  );
};

export default CustomSwitch;
