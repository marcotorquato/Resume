
interface MyCarouselProps {
  imageSrc: string;
  altText: string;
}

export function Projects({imageSrc, altText }: MyCarouselProps) {

  return (
    <>
      
        <img className="d-block w-50"src={imageSrc} alt={altText} /> 

    </>
  )
}



