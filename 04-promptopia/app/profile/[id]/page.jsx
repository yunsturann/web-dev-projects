"use client";

import { useState, useEffect } from "react";

import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";

const MyProfile = ({ params }) => {
  const name = useSearchParams().get("name");

  const { id } = params;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${id}/posts`);
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <Profile
      name={name}
      desc={`Welcome to ${name} personalized profile page. Explore ${name}'s exceptional prompts and be inspired by the power of their imagination `}
      data={posts}
    />
  );
};

export default MyProfile;
