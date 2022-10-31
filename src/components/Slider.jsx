const Slider = () => {
  return (
    <div style={{ display: 'flex', margin: '20px' }}>
      <div className="slider">
        <label for="fader">Time</label>
        <input
          type="range"
          min="0"
          max="30"
          defaultValue="15"
          id="fader"
          step="5"
          list="timesettings"
          onInput="rangeValue.innerText = this.value"
        />
        <datalist id="timesettings">
          <option>0</option>
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
          <option>25</option>
          <option>30</option>
        </datalist>
        <p id="rangeValue">15 seconds</p>
      </div>
    </div>
  );
};

export default Slider;
