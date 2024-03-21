import React from "react";
import Container from "../Container";
import { articleItems } from "@/constants";
import ArticleItem from "./ArticleItem";

const Articles = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <h2 className="heading_two mb-8 text-center sm:text-left">
          Latest Articles
        </h2>
        {/* ARTICLE LIST */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-sm:place-items-center ">
          {articleItems.map((article) => (
            <ArticleItem key={article.title} {...article} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Articles;
