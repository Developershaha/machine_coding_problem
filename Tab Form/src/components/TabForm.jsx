import { useState } from "react";
import Profile from "./Profile";
import Settings from "./Settings";
import Interest from "./Intereset";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "shahaji",
    age: 27,
    email: "shahajikokane@gmail.com",
    interest: ["coding", "javascript"],
    theme: "dark",
  });

  const [error, setError] = useState({});
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data?.name || data?.name?.length < 2) {
          err.name = "name is not valid";
        }
        if (!data?.age || data?.age < 18) {
          err.age = "age is not valid";
        }
        if (!data?.email || data?.email?.length < 2) {
          err.email = "email is not valid";
        }
        console.log("err", err);
        setError(err);

        console.log("dsfsfd", err?.name || err?.age || err?.email, err);
        return Object.keys(err).length === 0;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (!data?.interest || data.interest.length < 1) {
          err.interest = "select at least one interest";
        }

        setError(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      name: "Setting",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  console.log("error", error);
  const ActiveTabComponent = tabs[activeTab].component;
  const handePreviousTab = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };
  const handeNextTab = () => {
    if (tabs[activeTab].validate()) {
      console.log("first", tabs[activeTab].validate());
      setActiveTab((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    // make api call
    console.log("data", data);
  };
  return (
    <div>
      <div className="heading-continer">
        {tabs?.map((tab, index) => (
          <div
            key={tab?.name}
            className="heading"
            onClick={() => setActiveTab(index)}
          >
            {tab?.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} error={error} />
      </div>
      <div className="button-next">
        {activeTab > 0 && (
          <button onClick={handePreviousTab}>previous</button>
        )}{" "}
      </div>
      <div className="button-next">
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmit}>submit</button>
        )}{" "}
      </div>
      <div className="button-next">
        {activeTab < tabs.length - 1 && (
          <button onClick={handeNextTab}>next</button>
        )}{" "}
      </div>
    </div>
  );
};

export default TabForm;
