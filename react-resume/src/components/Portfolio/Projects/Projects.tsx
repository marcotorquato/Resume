
import ScrollCarousel from 'scroll-carousel';

interface MyCarouselProps {
  imageSrc: string;
  altText: string;
}

export function Projects({imageSrc, altText }: MyCarouselProps) {

  new ScrollCarousel(".my-carousel", {smartSpeed: true, direction: "ltr"});

  return (
    <>

<div className="my-carousel gallery ">
  <img className="img-projects" src={imageSrc} alt={altText} /> 
</div>
    
    </>
  )
}



