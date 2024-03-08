import heart from "../../assets/heart.png";

export type HeartProp = {
  onClick?: () => void;
};
const HeartRedIcon = (props: HeartProp) => {
  return (
    <span
      style={{ cursor: "pointer", width: "22px", height: "22px" }}
      data-testid="heart-added-favourite"
      {...props}
    >
      <img
        style={{ width: "100%", height: "100%" }}
        src={heart}
        alt="heartRed"
      />
    </span>
  );
};

export default HeartRedIcon;
