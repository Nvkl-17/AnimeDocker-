// Wishlist.js
import React from 'react';

function Wishlist({ wishlist }) {
    return (
        <div className="wishlist">
            <h3>Wishlist</h3>
            <ul>
                {wishlist.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Wishlist;
