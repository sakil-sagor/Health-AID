import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import './ProfileShortcut.css'

// profile area 

const ProfileShortcut = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="profile-shortcut bg-blue-700 shadow-2xl">
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                {
                    user.displayName ? <h1 className="text-lg font-semibold text-blue-500">{user.displayName}</h1> : ''
                }
                <button className="py-2 px-3 bg-blue-500 text-white rounded-full my-4 hover:bg-blue-700" >View Profile</button>
                <br />
            </div>
            <hr />
            <div>
                <button className="text-blue-500 text-white mt-3" onClick={logOut}>Log Out</button>
            </div>
        </div>
    )
};

export default ProfileShortcut;