import React from "react";
import "./DSW.scss";
import dsw from "../../assets/dsw.svg";
import dswStraight from "../../assets/dswStraight.svg";
import { data } from "../../constants";
import { Person } from "../../components";

const DSW = () => {
  return (
    <div className="dsw section__padding">
      <div className="dsw-logo-mobile">
        <img src={dswStraight} alt="dswStraight" />
      </div>
      <div className="faculty">
        {data.dsw.map((person) => (
          <div>
            <Person
              name={person.name}
              post={person.post}
              imgUrl={person.imgUrl}
              linkedin={person.linkedin}
              website={person.website}
            />
          </div>
        ))}
      </div>
      <div className="dsw-logo">
        <img src={dsw} alt="dsw" />
      </div>
    </div>
  );
};

export default DSW;
