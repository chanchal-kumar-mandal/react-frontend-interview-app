import {React} from 'react';

const UserProfile = (props) => {
    return (
        <>
            <p><b>Name : </b> {props.name}</p>
            <p><b>Age : </b> {props.age}</p>
            <p><b>Designation : </b> {props.desgination}</p>
        </>
    )
}

export default UserProfile;