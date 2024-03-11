//images
import { useNavigate } from "react-router-dom";
import ErrorImage from "../../assets/notFound.png";

//styles
import { Container } from "./NotFoundPage.styles";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="notFound-content">
        <img src={ErrorImage} alt="notFound-marvel-route" />
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Return to home
        </button>
      </div>
    </Container>
  );
};

export default NotFoundPage;
