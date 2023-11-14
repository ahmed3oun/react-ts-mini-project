import { useEffect, useState } from "react";

type PostBodyProps = {
  id: number;
};

function Posts() {
  const [id, setId] = useState<number>(1);

  const handleClick = () => {
    setId(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Show another post
      </button>

      <PostBody id={id} />
    </div>
  );
}

export function PostBody({ id }: PostBodyProps) {
  const [text, setText] = useState("");

  // This is a side effect that will run every time the component mounts or updates
  // It'll fetch data and update our state with it
  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setText(data.body));
  }, [id]);
  
  return <>{text}</>;
}

export default Posts;
