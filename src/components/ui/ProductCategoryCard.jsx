const ProductCategoryCard = ({ product }) => {
  const { 
    title = "Product Title", 
    image, 
    category,
    link = "#"
  } = product || {};

  return (
    <div className="product-category-card">
      <div className="product-category-card__image-container">
        <img 
          src={image || '/api/placeholder/300/200'}
          alt={title}
          className="product-category-card__image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/api/placeholder/300/200';
          }}
        />
      </div>
      
      <div className="product-category-card__content">
        <h3 className="product-category-card__title">{title}</h3>
        
        {category && (
          <div className="product-category-card__category">{category}</div>
        )}
        
        <a href={link} className="product-category-card__see-more">
          see more
        </a>
      </div>
    </div>
  );
};
export default ProductCategoryCard;