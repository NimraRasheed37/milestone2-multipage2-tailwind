import Image from "next/image";

interface CustomImagesProps {
  imgSrc: string;
  pt: string;
}

export default function CustomImages({ imgSrc }: CustomImagesProps) {
  return (
    <div className="custom-image" >
      <Image
        src={imgSrc}
        alt="Custom"
        width={500} 
        height={300} 
        objectFit="fill" 
        />
    </div>
  );
}
