import { useState } from "react";
const OpenedMultiple = () => {
  const [index, setIndex] = useState([]);
  const data = [
    {
      title: "JavaScript",
      content:
        "JavaScript is a lightweight language that makes web pages interactive and dynamic.",
    },
    {
      title: "React",
      content:
        "React is a JavaScript library used to build fast and reusable user interfaces using components.",
    },
    {
      title: "HTML",
      content:
        "HTML is the standard markup language used to structure content on the web.",
    },
    {
      title: "CSS",
      content:
        "CSS is used to style and design web pages, including layout, colors, and fonts.",
    },
  ];
  const handleOpen = (title) => {
    setIndex((prev) =>
      prev?.includes(title)
        ? prev?.filter((item) => item != title)
        : [...prev, title],
    );
  };

  return data?.length > 0
    ? data?.map((item) => {
        return (
          <div key={item?.title}>
            <button onClick={() => handleOpen(item?.title)}>
              {item?.title}
            </button>
            {index?.includes(item?.title) && <span>{item?.content}</span>}
          </div>
        );
      })
    : "No Item Found";
};

export default OpenedMultiple;
