import React from 'react'
import PropTypes from "prop-types";
function About({fullname,location,phone,email,dateOfBirth,experience,careerLevel}) {
    return (
        <div className="about">
        <h2>About Me</h2>
        <hr />
        <div className="Details">
          <p className="title">FullName: <br /> Location: <br />  Phone: <br /> Email: </p>
          <p >{fullname} <br /> {location} <br /> {phone} <br /> {email} </p>
          <p className="title">Date of Birth: <br /> Experience: <br /> Career Level: </p>
          <p >{dateOfBirth} <br /> {experience} <br /> {careerLevel} </p>
        </div>
      </div>
    )
}

About.defaultProps = {
fullname:"Your Name",
location:"Your location",
phone:"Your phone",
email:"Your email",
dateOfBirth:"Your Date Of Birth",
experience:"Your Experience Years",
careerLevel:"Your Career Level"
};
About.ProtoTypes={
fullname:PropTypes.string,
location:PropTypes.string,
phone:PropTypes.string,
email:PropTypes.string,
dateOfBirth:PropTypes.string,
experience:PropTypes.string,
careerLevel:PropTypes.string
}

export default About
