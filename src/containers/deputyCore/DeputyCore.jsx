import React from "react";
import "./DeputyCore.scss";
import deputyCore from "../../assets/deputyCore.svg";
import { data } from "../../constants";
import { Person } from "../../components";

const DeputyCore = () => {
  return (
    <div className="core section__padding">
      <div className="logo">
        <img src={deputyCore} alt="core-logo" />
      </div>
      <div className="core-team">
        {data.deputyCore.map((person) => (
          <div className="hello">
            <Person
              name={person.name}
              post={person.post}
              imgUrl={person.imgUrl}
              linkedin={person.linkedin}
              instagram={person.instagram}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeputyCore;
