const LoadingIcon = () => {
  return (
    <svg
      style={{
        margin: "auto",
        background: "rgb(255, 255, 255)",
        display: "block",
        shapeRendering: "auto",
      }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M28 50A22 22 0 0 0 72 50A22 24 0 0 1 28 50"
        fill="#ec1e24"
        stroke="none"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 51;360 50 51"
        ></animateTransform>
      </path>
    </svg>
  );
};

export default LoadingIcon;
