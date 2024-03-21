import Image from "next/image";
import React, { FC } from "react";

interface ArticleItemProps {
  title: string;
  description: string;
  img: string;
  author: string;
}

const ArticleItem: FC<ArticleItemProps> = ({
  author,
  description,
  img,
  title,
}) => {
  return (
    <li className="min-h-[500px] w-full max-w-[320px] shadow-md rounded-lg">
      {/* IMAGE */}
      <div className="min-h-[250px] h-1/2 relative">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      {/* CONTENT */}
      <div className="space-y-2 p-6">
        <p className="text-grayish-blue text-sm">By {author}</p>
        <h3 className="text-dark-blue text-lg leading-6">{title}</h3>
        <p className="text-grayish-blue">{description}</p>
      </div>
    </li>
  );
};

export default ArticleItem;
