import React from "react";
import "./FacultyCoordinator.scss";
import facultyCoordinator from "../../assets/facultyCoordinator.svg";
import facultyCoordinatorStraight from "../../assets/facultyCoordinatorStraight.svg";
import { data } from "../../constants";
import { Person } from "../../components";

const FacultyCoordinator = () => {
  return (
    <>
      <div className=" team__faculty section__padding">
        <div className="team__faculty-logo">
          <img src={facultyCoordinator} alt="FacultyCoordinator Text" />
        </div>
        <div className="team__faculty-logo-mobile">
          <img
            src={facultyCoordinatorStraight}
            alt="facultyCoordinatorStraightfacultyCoordinatorStraight Text"
          />
        </div>
        <div className="team__faculty-all">
          {data.facultyCoordinator.map((person) => (
            <div className="hello">
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
      </div>
    </>
  );
};

export default FacultyCoordinator;
