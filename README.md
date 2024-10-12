# 🚗 **Car Damage Detection**

Welcome to the **Car Damage Detection** project! This application is built to detect damages on cars using a pre-trained model. The aim is to make damage assessment easier, more efficient, and accessible to everyone using AI.

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10-blue.svg" alt="Python Version">
  <img src="https://img.shields.io/badge/FastAPI-0.103.1-green.svg" alt="FastAPI">
  <img src="https://img.shields.io/badge/React-18.2.0-blue.svg" alt="React">
  <img src="https://img.shields.io/badge/License-MIT-lightgrey.svg" alt="License">
</p>

<p align="center">
  <img src="https://github.com/EslamEssamM/Car-damage-detection/blob/main/preview.gif" alt="App Preview" width="600">
</p>

## 📋 **Table of Contents**

- [About the Project](#about-the-project)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## 📖 **About the Project**

The **Car Damage Detection** project provides a simple way for users to upload an image of a car and receive instant feedback on any detected damages. The application is equipped with a machine learning model trained on car damage datasets, enabling it to classify damage types such as scratches, dents, and shattered glass.

### 🎯 **Features**

- **Image Upload**: Upload images of your car for damage detection.
- **Damage Identification**: Detects damage types like scratches, cracks, dents, and more.
- **Insights**: Provides actionable insights for each detected damage.
- **Frontend & API**: A complete, user-friendly interface powered by a FastAPI backend.

### 🛠 **Tech Stack**

- **Backend**: FastAPI, Uvicorn, Python, Transformers
- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **AI Model**: Hugging Face Transformers, Gradio integration for image analysis
- **Deployment**: Hugging Face Spaces (for Gradio UI)

## 🚀 **Getting Started**

### **Prerequisites**

- **Python** 3.10+
- **Node.js** (for the frontend)
- **Git**

### **Installation**

#### **Backend Setup**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/EslamEssamM/Car-damage-detection.git
   cd Car-damage-detection
   ```

2. **Create a Virtual Environment**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Backend Server**

   ```bash
   uvicorn app:app --reload
   ```

#### **Frontend Setup**

1. **Navigate to the Frontend Directory**

   ```bash
   cd frontend
   ```

2. **Install Frontend Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Frontend Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in Browser**

   Visit `http://localhost:3000` to view the application.

## 🎉 **Usage**

1. **Upload an Image**: Click "تحميل ملف" or drag and drop an image of your car.
2. **Detect Damages**: Click on "كشف الأضرار" to start the analysis.
3. **View Results**: Switch to the "نتائج الكشف" tab to see damage detection results, confidence scores, and suggestions.

## 📡 **API Endpoints**

### **POST** `/predict-damage`

- **Description**: Accepts an image file and returns detected damages.
- **Response**:
  
  ```json
  {
    "predictions": [
      {
        "label": "خدش",
        "score": 0.95
      },
      {
        "label": "انبعاج",
        "score": 0.70
      }
    ]
  }
  ```

## 📁 **Project Structure**

```plaintext
Car-damage-detection/
├── app.py
├── requirements.txt
├── runtime.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   └── DetectionPage.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   └── ...
└── README.md
```

## 🤝 **Contributing**

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Feel free to contribute by creating issues, suggesting features, or submitting pull requests.

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgements**

- **Hugging Face**: For providing the platform and models.
- **Gradio**: For the user interface integration.
- **Shadcn UI**: For the beautifully crafted UI components.
- **Lucide Icons**: For providing the sleek icons used in the app.
- **OpenAI**: For contributions to AI-driven applications.

## 📬 **Contact**

For any inquiries or feedback, please reach out:

- **Name**: Eslam Essam
- **Email**: [eslamessamm@gmail.com](mailto:eslamessamm@gmail.com)
- **GitHub**: [EslamEssamM](https://github.com/EslamEssamM)

---

Made with ❤️ by [Eslam Essam](https://github.com/EslamEssamM)

<p align="center">
  <a href="https://github.com/EslamEssamM/Car-damage-detection/issues">Report Bug</a> |
  <a href="https://github.com/EslamEssamM/Car-damage-detection/issues">Request Feature</a>
</p>

