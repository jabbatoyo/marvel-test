import heart from "../../assets/like.png";
import { HeartProp } from "./HeartRedIcon";

const HeartWhiteIcon = (props: HeartProp) => {
  return (
    <span
      style={{ cursor: "pointer", width: "25px", height: "25px" }}
      data-testid="heart-removed-favourite"
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

export default HeartWhiteIcon;
