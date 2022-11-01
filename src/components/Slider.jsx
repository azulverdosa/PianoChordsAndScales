import { useState } from 'react';

const Slider = ({ value: propsValue, onChange: propsOnChange }) => {
  const [value, setValue] = useState(propsValue);

  const slideHandler = (event) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    propsOnChange?.(newValue);
  };

  return (
    <div style={{ display: 'flex', margin: '20px' }}>
      <div className="slider">
        {/* <label htmlFor="fader">Timer</label> */}
        <input
          type="range"
          min="5"
          max="30"
          value={value}
          id="fader"
          step="5"
          list="timesettings"
          onInput={slideHandler}
        />
        <datalist id="timesettings">
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
          <option>25</option>
          <option>30</option>
        </datalist>
        <p id="rangeValue">{value} seconds</p>
      </div>
    </div>
  );
};

export default Slider;
