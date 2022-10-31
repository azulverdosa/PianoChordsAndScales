const Button = ({ handleStartClick, start }) => {
  return (
    <div style={{ display: 'flex', margin: '20px' }}>
      <button
        onClick={() => {
          handleStartClick();
          console.log('button start value :>> ', start);
        }}
        className="ui grey basic button"
      >
        Start/Stop
      </button>
    </div>
  );
};

export default Button;
