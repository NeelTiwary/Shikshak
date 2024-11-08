// src/components/Feedback.js
import React, { useState } from 'react';

const Feedback = () => {
    const [feedbackData, setFeedbackData] = useState(null);

    const handleFileUpload = async (e) => {
        const formData = new FormData();
        
        // Get the video file from the input
        const files = e.target.files;

        if (files.length < 1) {
            // Handle error if no video file is uploaded
            alert('Please upload a video.');
            return;
        }

        // Append the video file to the FormData object
        formData.append('video', files[0]);

        try {
            const response = await fetch('http://127.0.0.1:8000', {
                method: 'POST',
                body: formData,
            });

            // Assuming the response is JSON
            const data = await response.json();
            setFeedbackData(data);  // Update state with the server response
        } catch (error) {
            console.error('Error uploading video:', error);
        }
    };

    return (
        <div>
            <h1>Upload Video</h1>
            <input 
                type="file" 
                accept="video/*" 
                onChange={handleFileUpload} 
            />
            {feedbackData && <pre>{JSON.stringify(feedbackData, null, 2)}</pre>}
        </div>
    );
};

export default Feedback;
