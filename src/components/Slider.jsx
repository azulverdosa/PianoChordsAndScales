import { useEffect, useState } from 'react';

const Slider = ({ value: propsValue, onChange: propsOnChange, options, step }) => {
  const [value, setValue] = useState(propsValue);

  const slideHandler = (event) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    propsOnChange?.(newValue);
  };

  useEffect(() => {
    propsValue === value || setValue(propsValue);
  }, [propsValue, value]);

  return (
    <div style={{ display: 'flex', margin: '20px' }}>
      <div className="slider">
        <input
          type="range"
          min={options[0]}
          max={options.slice(-1)}
          value={value}
          id="fader"
          step={step}
          list="timesettings"
          onInput={slideHandler}
        />
        <datalist id="timesettings">
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </datalist>
        <p id="rangeValue">{value} seconds</p>
      </div>
    </div>
  );
};

export default Slider;
