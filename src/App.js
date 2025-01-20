
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimeItem from './Components/AnimeItem';
import Gallery from './Components/Gallery';
import Homepage from './Components/Homepage';
import UserProfile from './Components/UserProfile';
import Navigation from './Components/Navigation'; // Import Navigation component
import { WishlistProvider } from './Wishlist';

function App() {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
    });

    return (
        <BrowserRouter>
            <WishlistProvider>
                <Navigation /> {/* Include Navigation component */}
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/anime/:id" element={<AnimeItem />} />
                    <Route path="/character/:id" element={<Gallery />} />
                    <Route path="/profile" element={<UserProfile user={user} />} />
                </Routes>
            </WishlistProvider>
        </BrowserRouter>
    );
}

export default App;
