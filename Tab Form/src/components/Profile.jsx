const Profile = ({ data, setData, error }) => {
  const { name, age, email } = data ?? {};

  const handleDataChange = (e, item) => {
    setData((prevData) => ({ ...prevData, [item]: e.target.value }));
  };
  return (
    <div>
      <div>
        <label>name :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        />
        {error?.name && <span className="error">{error.name}</span>}
      </div>
      <div>
        <label>Age :</label>
        <input
          type="text"
          value={age}
          onChange={(e) => handleDataChange(e, "age")}
        />{" "}
        {error?.age && <span className="error">{error.age}</span>}
      </div>
      <div>
        <label>Email :</label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        />
        {error?.email && <span className="error">{error.email}</span>}
      </div>
    </div>
  );
};

export default Profile;
