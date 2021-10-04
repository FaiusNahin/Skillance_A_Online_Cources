import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();
    const handleToHome = () => {
        history.push("/home");
    }

    return (
        <div className="text-center my-32">
            <h1 className="text-9xl text-gray-400 font-semibold">404</h1>
            <p className="text-2xl py-12 text-indigo-900">THE PAGE YOU'VE REQUESTED IS NOT AVAILABLE.</p>

            <button onClick={handleToHome} className="text-xl text-white bg-heading py-3 px-10 rounded">Back to Home</button>
        </div>
    );
};

export default NotFound;