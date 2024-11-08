// src/components/Feedback.js
import React, { useState } from 'react';

const Feedback = () => {
    const [feedbackData, setFeedbackData] = useState(null);

    const handleFileUpload = async (e) => {
        const formData = new FormData();

        // Get files from input (ensure the input allows multiple files)
        const files = e.target.files;

        if (files.length < 1) {
            // Handle error if no video is uploaded
            alert('Please upload a video.');
            return;
        }

        // Append video file to FormData
        formData.append('video', files[0]);  // Assuming first file is video

        try {
            const response = await fetch('http://127.0.0.1:8000', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            setFeedbackData(data);  // Update the state with the response
        } catch (error) {
            console.error('Error uploading video:', error);
        }
    };

    return (
        <div>
            <h1>Upload Video</h1>
            <input type="file" accept="video/*" onChange={handleFileUpload} />
            {feedbackData && <pre>{JSON.stringify(feedbackData, null, 2)}</pre>}
        </div>
    );
};

export default Feedback;
