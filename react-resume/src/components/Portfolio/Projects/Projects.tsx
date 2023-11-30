
interface MyCarouselProps {
  imageSrc: string;
  altText: string;
}

export function Projects({imageSrc, altText }: MyCarouselProps) {

  return (
    <>

    <div className="my-carousel gallery ">
      <img className="img-projects" src={imageSrc} alt={altText} /> 
    </div>
    
    </>
  )
}



