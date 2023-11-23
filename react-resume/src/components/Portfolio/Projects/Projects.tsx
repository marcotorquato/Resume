import { Icon } from '@iconify/react';

interface PortfolioItemProps {
  category: string;
  imageUrl: string;
  externalLink: string;
}
export function Projects({category, imageUrl, externalLink }: PortfolioItemProps) {

  return (
    <>
     <div className="col-lg-4 col-md-6 portfolio-item filter-web filter-app">
      <div className="portfolio-wrap">
        <img src={imageUrl} className="img-fluid" alt="" />
        <div className="portfolio-info">
          <p>{category}</p>
          <div className="portfolio-links">
            <a href={externalLink} className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details">
              <Icon icon="fluent-mdl2:website" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}



