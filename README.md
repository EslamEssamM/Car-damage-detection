# Boilerplate Example Repo

## Stack - TW + Shadcn-ui + Vite + React + TS + Tanstack Router

- This template provides a minimal setup to get React working in Vite + Tailwind + Tanstack Router + Shadcn UI
- Tanstack Devtools has been intentionally included in demo


🚗 Car Damage Detection Frontend
Welcome to the Car Damage Detection frontend repository! This React application allows users to upload images of their cars and detect damages using advanced AI technology.

<p align="center"> <img src="https://img.shields.io/badge/React-%5E18.0.0-blue.svg" alt="React"> <img src="https://img.shields.io/badge/TypeScript-%5E4.0.0-blue.svg" alt="TypeScript"> <img src="https://img.shields.io/badge/Vite-%5E4.0.0-blue.svg" alt="Vite"> <img src="https://img.shields.io/badge/Gradio%20Client-%5E0.1.4-blue.svg" alt="Gradio Client"> </p> <p align="center"> <img src="https://user-images.githubusercontent.com/yourusername/your-repo/preview.gif" alt="App Preview" width="600"> </p>
🚀 Features
Image Upload: Users can upload images of their cars for analysis.
AI-Powered Detection: Utilizes a Hugging Face Gradio API for damage detection.
Real-Time Results: Displays predictions with confidence scores and severity levels.
User-Friendly Interface: Clean and responsive design with Arabic support.
Tech Stack: Built with React, TypeScript, Vite, and integrates the Gradio client.
🛠 Technologies Used
React: For building the user interface.
TypeScript: Provides static typing for safer and more robust code.
Vite: A fast build tool for frontend development.
Gradio Client: To interact with the Gradio API deployed on Hugging Face Spaces.
Axios: For making HTTP requests.
Tailwind CSS: Utility-first CSS framework for styling.
Lucide React: Icon library for React.
Shadcn UI Components: Pre-built UI components.
📋 Table of Contents
Features
Technologies Used
Getting Started
Prerequisites
Installation
Usage
Project Structure
What We Did
Contributing
License
Acknowledgements
🎉 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
Node.js (>=14.x)
npm or yarn
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/car-damage-detection-frontend.git
cd car-damage-detection-frontend
Install Dependencies

bash
Copy code
npm install
# or
yarn install
Set Up Environment Variables

If you need to set any environment variables, create a .env file in the root directory.

Run the Development Server

bash
Copy code
npm run dev
# or
yarn dev
Open in Browser

Visit http://localhost:3000 to view the application.

📖 Usage
Upload an Image

Click on "تحميل ملف" or drag and drop an image of your car.
Detect Damages

Click on "كشف الأضرار" to start the analysis.
View Results

Switch to the "نتائج الكشف" tab to see the detected damages, confidence scores, and insights.
📁 Project Structure
plaintext
Copy code
src/
├── components/
│   ├── ui/
│   │   ├── alert.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── progress.tsx
│   │   ├── scroll-area.tsx
│   │   ├── separator.tsx
│   │   └── tabs.tsx
│   └── DetectionPage.tsx
├── App.tsx
├── main.tsx
├── index.css
└── ...
📝 What We Did
Integration with Gradio API
Gradio Client Library: We utilized the @gradio/client library to interact with the Gradio API hosted on Hugging Face Spaces.
AI Model: Connected to the eslamESssamM/car-damage-api Space, which runs a machine learning model for car damage detection.
Async API Calls: Implemented asynchronous functions to handle image uploads and retrieve predictions from the API.
Error Handling: Added comprehensive error handling to manage API errors and inform the user.
Frontend Enhancements
Loading State: Incorporated loading indicators to improve user experience during API calls.
Responsive Design: Ensured the application is responsive and accessible on various devices.
Arabic Support: Designed the interface to support right-to-left (RTL) languages, specifically Arabic.
Icons and Visuals: Used lucide-react icons and Tailwind CSS to create a visually appealing UI.
Custom Components
UI Components: Leveraged custom UI components from Shadcn UI for consistency and reusability.
Progress Bars: Displayed confidence scores using progress bars for better visualization.
Severity Badges: Calculated overall severity levels and displayed them with color-coded badges.
🤝 Contributing
We welcome contributions! Please read our contributing guidelines before getting started.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgements
Hugging Face: For providing the platform to deploy our AI model.
Gradio: For the easy-to-use interface and client library.
Shadcn UI: For the beautifully crafted UI components.
Lucide Icons: For the open-source icon library.
Made with ❤️ by Your Name

<p align="center"> <a href="https://github.com/yourusername/car-damage-detection-frontend/issues">Report Bug</a> · <a href="https://github.com/yourusername/car-damage-detection-frontend/issues">Request Feature</a> </p>
📬 Contact
For any inquiries or feedback, please reach out at your.email@example.com.