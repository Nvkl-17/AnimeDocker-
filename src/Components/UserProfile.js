// UserProfile.js
import React, { useContext } from 'react';
import { WishlistContext } from '../Wishlist';

function UserProfile({ user }) {
    const { wishlist } = useContext(WishlistContext);

    return (
        <div>
            <h2>User Profile</h2>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <h3>Wishlist</h3>
            <ul>
                {wishlist.map((anime) => (
                    <li key={anime.id}>{anime.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserProfile;
