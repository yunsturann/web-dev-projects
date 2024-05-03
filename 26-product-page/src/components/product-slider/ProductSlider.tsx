"use client";
// ** React Imports
import React, { FC, useState } from "react";

// ** Nextjs Imports
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductSliderProps {
  images: {
    thumbnail: string;
    full: string;
  }[];
}

const ProductSlider: FC<ProductSliderProps> = (props) => {
  const { images } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex-1 flex flex-col px-0 md:px-8 xl:px-12 2xl:px-20 gap-y-6">
      <div className=" h-[360px] lg:h-[420px] xl:h-[500px] relative rounded-lg">
        <Image
          src={images[currentIndex].full}
          alt="product-full"
          fill
          className="rounded-lg cursor-pointer"
        />
      </div>
      <div className="hidden md:flex gap-4 justify-between items-center">
        {images.map((image, index) => (
          <div key={index} onClick={() => setCurrentIndex(index)}>
            <Image
              src={image.thumbnail}
              alt="image-thumbnail"
              width={120}
              height={120}
              className={cn(
                "object-contain rounded-lg cursor-pointer hover:opacity-50 transition",
                {
                  "opacity-50": currentIndex === index,
                }
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
