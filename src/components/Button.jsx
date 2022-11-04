const Button = ({ disabled, handleStartClick, start, style }) => {
  return (
    <button
      className="ui grey basic button"
      disabled={disabled}
      onClick={() => {
        handleStartClick();
      }}
      style={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 0,
        justifyContent: 'center',
        ...style,
      }}
    >
      {start ? 'Stop' : 'Start'}
    </button>
  );
};

export default Button;
