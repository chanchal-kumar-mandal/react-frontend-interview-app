import {React} from 'react';
import UserProfile from './UserProfile';

const User = () => {
    const user = {
        "name": "Chanchal",
        "age" : "37",
        "desgination" : "Software Developer"
    };

    return (
        <UserProfile name={user.name} age={user.age} desgination={user.desgination} />
        // Optimized code
        //<UserProfile {...user} />
    )
}

export default User;