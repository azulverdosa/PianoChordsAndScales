const Button = ({ disabled, handleStartClick, start }) => {
  return (
    <div style={{ display: 'flex', margin: '20px' }}>
      <button
        className="ui grey basic button"
        disabled={disabled}
        onClick={() => {
          handleStartClick();
          console.log('button start value :>> ', start);
        }}
      >
        {start ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default Button;
