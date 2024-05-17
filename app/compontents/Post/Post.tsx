export const Post = ({ title, body }) => {
  return (
    <article className=" shadow-lg p-4">
      <h2 className=" text-gray-800 font-bold">{title}</h2>
      <p>{body}</p>
    </article>
  );
};
