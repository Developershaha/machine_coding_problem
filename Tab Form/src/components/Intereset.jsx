const Interest = ({ data, setData, error }) => {
  const { interest } = data ?? {};

  const handleDataChange = (e) => {
    console.log("e", e.target.name, e.target.checked);

    const { checked, name } = e.target ?? {};
    setData((prevData) => ({
      ...prevData,
      interest: checked
        ? [...prevData.interest, name]
        : prevData?.interest.filter((item) => item !== name),
    }));
  };

  return (
    <div>
      <div>
        <label>
          {" "}
          <input
            type="checkbox"
            name="coding"
            checked={interest?.includes("coding")}
            onChange={handleDataChange}
          />
          coding
        </label>
      </div>
      <div>
        <label>
          {" "}
          <input
            type="checkbox"
            name="music"
            checked={interest?.includes("music")}
            onChange={handleDataChange}
          />
          music
        </label>
      </div>
      <div>
        <label>
          {" "}
          <input
            type="checkbox"
            name="javascript"
            checked={interest?.includes("javascript")}
            onChange={handleDataChange}
          />
          javascript
        </label>
      </div>
      {error?.interest && <span className="error">{error.interest}</span>}
    </div>
  );
};

export default Interest;
