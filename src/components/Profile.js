import React from 'react';
import User from './User';
import Palette from './Palette';


const Profile = () => {
    return(
        <div className = "container profile">
            <User
                  src ="https://instagram.fiev13-1.fna.fbcdn.net/vp/5876a15ae528c71d4c73842aaf0e4136/5E3EFD0B/t51.2885-19/s320x320/31016754_582776438766098_2411421397067759616_n.jpg?_nc_ht=instagram.fiev13-1.fna.fbcdn.net"
                  alt ="man"
                  name = "romzesovicc"
            />
            <Palette/>
        </div>
    )
};

export default Profile;