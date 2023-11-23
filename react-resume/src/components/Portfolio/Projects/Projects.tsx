interface PortfolioItemProps {
  category: string;
  imageUrl: string;
  galleryLink: string;
  externalLink: string;
}
export function Projects({category, imageUrl, galleryLink, externalLink }: PortfolioItemProps) {

  return (
    <>
     <div className="col-lg-4 col-md-6 portfolio-item filter-web">
      <div className="portfolio-wrap">
        <img src={imageUrl} className="img-fluid" alt="" />
        <div className="portfolio-info">
          <p>{category}</p>
          <div className="portfolio-links">
            <a href={galleryLink} data-gallery="portfolioGallery" className="portfolio-lightbox">
              <i className="bx bx-plus"></i>
            </a>
            <a href={externalLink} className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details">
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}



