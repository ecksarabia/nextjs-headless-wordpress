import fetch from "isomorphic-unfetch";
import Navigation from "../components/Navigation";

const Posts = ({ posts }) => (
  <>
    <Navigation />
    <h1>Our Posts Page!</h1>
    {posts.length > 0 &&
      posts.map((post) => {
        return (
          <div>
            <h2>{`${post.id} ${post.title.rendered}`}</h2>
            <span>{`Autor: ${post.author}`}</span>
            <div
              dangerouslySetInnerHTML={{
                __html: post.content.rendered,
              }}
            ></div>
          </div>
        );
      })}
  </>
);

export const getStaticProps = async () => {
  const res = await fetch(
    "https://www.citaconemprendedores.com/wp-json/wp/v2/posts"
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};

export default Posts;
