import React from "react";
import "./Person.scss";
import { BsLinkedin } from "react-icons/bs";
import web from "../../assets/web.svg";
import insta from "../../assets/instagram.svg";

const Person = ({ imgUrl, name, post, linkedin, website, instagram }) => {
  return (
    <div className="team__person">
      <div className="person__image">
        <img src={imgUrl} alt={name} />
      </div>
      <div className="person__info">
        <div className="person__name">
          <p>{name}</p>
        </div>
        <div className="person__post">
          <p>{post}</p>
        </div>
        <div className="person__social">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer">
              <BsLinkedin color="#0A66C2" size={27} />
            </a>
          )}

          {website ? (
            <a href={website} target="_blank" rel="noreferrer">
              <img src={web} alt="Web" />
            </a>
          ) : (
            <a href={instagram} target="_blank" rel="noreferrer">
              <img src={insta} alt="Web" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Person;
