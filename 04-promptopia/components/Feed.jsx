"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("/api/prompt");
    const data = await res.json();
    setPosts(data);
  };

  const handleSearchChange = async (e) => {
    e.preventDefault();
    let newSearchText = e.target.value;
    setSearchText(newSearchText);

    const res = await fetch(`/api/prompt/search?search=${newSearchText}`);
    const data = await res.json();
    setPosts(data);
  };

  const handleTagClick = async (tag) => {
    const res = await fetch(`/api/prompt/search/${tag.substring(1)}`);
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form
        className="relative w-full flex-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Search for a prompt, a tag or a username"
          required
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>
      <button
        type="button"
        onClick={() => {
          if (searchText !== "") {
            setSearchText("");
            fetchPosts();
          }
        }}
        className="outline_btn mt-2 text-lg font-semibold "
      >
        Clear
      </button>

      <PromptCardList data={posts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;

const PromptCardList = ({ data = [], handleTagClick }) => {
  return (
    <div className="prompt_layout mt-">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
