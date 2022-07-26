import { useNavigate } from "react-router-dom";
import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();
  const { imageUrl, title, route } = category;

  return (
    <div className="category-container" onClick={() => navigate(route)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
