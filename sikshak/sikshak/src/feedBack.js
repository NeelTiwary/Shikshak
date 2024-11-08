// src/components/Feedback.js
import React, { useState } from 'react';

const Feedback = () => {
    const [feedbackData, setFeedbackData] = useState(null);

    const handleFileUpload = async (e) => {
        const formData = new FormData();
        formData.append('audio', e.target.files[0]);
        formData.append('image', e.target.files[1]);

        const response = await fetch('http://localhost:8000/feedback/', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        setFeedbackData(data);
    };

    return (
        <div>
            <h1>Upload Classroom Data</h1>
            <input type="file" multiple onChange={handleFileUpload} />
            {feedbackData && <pre>{JSON.stringify(feedbackData, null, 2)}</pre>}
        </div>
    );
};

export default Feedback;