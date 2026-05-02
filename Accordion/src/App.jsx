import { useState } from "react";

function App() {
  const [index, setIndex] = useState(null);

  console.log("index", index);
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
  const handleOpenAccordion = (i) => {
    setIndex((prev) => (prev === i ? null : i));
  };
  return (
    <div>
      <h1>Accordion problem </h1>
      {data.length > 0
        ? data?.map((item, i) => {
            return (
              <>
                <div>
                  {" "}
                  <button
                    key={item?.title}
                    onClick={() => handleOpenAccordion(i)}
                  >
                    {item?.title} {index === i ? "expand" : "collapes"}
                  </button>{" "}
                </div>
                {index === i && <span>{item?.content}</span>}
              </>
            );
          })
        : "no items found"}
    </div>
  );
}

export default App;
