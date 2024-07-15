import React from "react";
import "./Executive.scss";
import executive from "../../assets/executive.svg";
import { data } from "../../constants";
import { Person } from "../../components";

const Executive = () => {
  return (
    <div className="executive section__padding">
      <div className="executive-logo">
        <img src={executive} alt="Executive-logo" />
      </div>
      <div className="executive-team">
        {data.executive.map((person) => (
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

export default Executive;
