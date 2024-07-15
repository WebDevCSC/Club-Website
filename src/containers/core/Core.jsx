import React from "react";
import "./Core.scss";
import core from "../../assets/core.svg";
import { data } from "../../constants";
import { Person } from "../../components";

const Core = () => {
  return (
    <div className="core section__padding">
      <div className="core-logo">
        <img src={core} alt="core-logo" />
      </div>
      <div className="core-team">
        {data.core.map((person) => (
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

export default Core;
