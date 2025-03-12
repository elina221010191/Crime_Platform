import React from "react";

const Blog= [
  {
    id: 1,
    title: "Rising Crime Rates in Urban Areas",
    description: "An analysis of the factors leading to increased crime in cities and potential solutions."
  },
  {
    id: 2,
    title: "Cybercrime: A Growing Threat",
    description: "How cybercriminals are exploiting digital vulnerabilities and ways to stay protected."
  },
  {
    id: 3,
    title: "Understanding Organized Crime",
    description: "A deep dive into the world of organized crime and its global impact."
  }
];

const BlogCard = ({ title, description }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg mb-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Read More</button>
    </div>
  );
};

const BlogList = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Crime Blog</h1>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} title={blog.title} description={blog.description} />
      ))}
    </div>
  );
};

export default Blog;