import React, { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({
        gender: '',
        race: '',
        gpa: '',
        satScore: '',
        actScore: '',
        college: '',
        major: ''
    });
    const [loading, setLoading] = useState(false);
    const [probability, setProbability] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Mock API call
        setTimeout(() => {
            setProbability(Math.random().toFixed(2) * 100); // Mock probability
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-2xl mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">College Admission Predictor</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="gender">Gender</label>
                        <input className="w-full border-2 rounded-lg p-2 outline-none focus:border-blue-500" type="text" name="gender" onChange={handleChange} />
                    </div>
                    {/* Repeat input fields for other data */}
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4" type="submit">
                        {loading ? 'Calculating...' : 'Submit'}
                    </button>
                </form>

                {probability !== null && (
                    <div className="mt-8 p-4 bg-blue-100 rounded-lg">
                        <h3 className="text-2xl font-semibold text-center text-blue-800">
                            Probability of Admission
                        </h3>
                        <p className="text-center text-blue-800 text-6xl font-bold mt-4">
                            {probability}%
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
