import React from 'react'
import PropTypes from "prop-types";
function Profile(props) {
    return (
        <div className="profile">
            <img src={props.children} alt="Myphoto"></img>
            <h2>{props.fullname}</h2>
            <p>{props.bio}</p>
            <p className="prof">{props.profession}</p>
            <div className="logos">
                <a href="https://github.com/louaybenz" target="blanc">
                    <img src="github.png" alt="github"></img>
                </a>
                <a href="https://www.instagram.com/louay_benz/?hl=fr" target="blanc"> <img src="instalogo.jpg"></img> </a>
                <a href="https://www.facebook.com/louay.mgk/" target="blanc"><img src="facebook.png" alt="facebook"></img></a>
            </div>
            <button onClick={() => props.handleName(props.fullname)}>My name</button>
        </div>
    )
}
// Deffault props
Profile.defaultProps = {
    fullname: "Your Name",
    profession: "Your Profession",
    children: "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg"
};
Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
};


export default Profile
