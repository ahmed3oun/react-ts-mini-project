/* mport React from 'react'
//import PropTypes from 'prop-types'

const Profile = props => {
    return (
        <div>
            <h1> Profile name is : {props.first_name} {props.last_name} </h1>
            <h2> {props.children}  </h2>
        </div>
    )
}

Profile.propTypes = {
    first_name: String,
    last_name: String
}

export default Profile */
/* import { Component, useState } from 'react';

class Profile extends Component {
  constructor(
    props:
      | { first_name: string; last_name: string }
      | Readonly<{ first_name: string; last_name: string }>
  ) {
    super(props);
  }

  render() {
    console.log({
      props: this.props,
    });

   
  }
} */

import { useState } from "react";

const Profile = (props: any) => {
  const [fullname, setFullname] = useState("");

  const changeFullname = (fullname: string) => {
    setFullname(fullname);
  };

  return (
    <div>
      <h1>
        Profile name is : {props.first_name} {props.last_name}
        Fullname : {fullname}
      </h1>{" "}
      <input
        type="text"
        name="fullname"
        id=""
        onChange={(event) => changeFullname(event?.target.value)}
      />
    </div>
  );
};

Profile.propTypes = {
  first_name: String,
  last_name: String,
};

export default Profile;
