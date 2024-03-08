//types
import { ComicDto } from "../../../api";

//styles
import { CommicContainer } from "./detail.styles";

const ComicCards = ({ comics }: { comics?: ComicDto[] }) => {
  return (
    <CommicContainer data-testid="comics-container">
      <div className="comics-body-container">
        <h2>COMICS</h2>
        <div className="comics-body-content">
          {comics && comics?.length < 0 && (
            <h3 className="results-text">{comics?.length} RESULTS</h3>
          )}
          {comics?.map((comic) => (
            <div
              data-testid="comics-card-content"
              className="commics-content"
              key={comic.id}
            >
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              <h2>{comic.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </CommicContainer>
  );
};

export default ComicCards;
