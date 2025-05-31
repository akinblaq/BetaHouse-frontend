import React from "react";
import "../styles/SkeletonCard.css";

const SkeletonCard = () => {
  return (
    <div className="property-card skeleton">
      <div className="image-div-skeleton shimmer" />
      <div className="texts-below">
        <div className="text-blow-2">
          <div className="skeleton-title shimmer" />
          <div className="skeleton-info shimmer" />
          <div className="skeleton-meta shimmer" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
