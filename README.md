# 🚗 **Car Damage Detection**

Welcome to the **Car Damage Detection** project! This application is built to detect damages on cars using a pre-trained model. The aim is to make damage assessment easier, more efficient, and accessible to everyone using AI.

[**Live Site**](https://car-damage-detection.vercel.app/)

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
- [Screenshots](#screenshots)
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

- **Backend**: FastAPI, Uvicorn, Python, Transformers, Gradio
- **Frontend**: React, TypeScript, Vite, Tailwind CSS, ShadCN UI
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
   git clone https://huggingface.co/spaces/eslamESssamM/car-damage-api
   cd Car-damage-api
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

   The backend is hosted on Hugging Face Spaces using Gradio. To run locally:

   ```bash
   uvicorn app:app --reload
   ```

#### **Frontend Setup**

1. **Navigate to the Frontend Directory**

   ```bash
   git clone https://github.com/EslamEssamM/Car-damage-detection.git
   cd Car-damage-detection
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

   Visit `http://localhost:5173` to view the application.

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
        "score": 0.7
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
│   │   │   ├── shared/
│   │   │   │   ├── ThemeProvider.tsx
│   │   │   │   └── ModeToggle.tsx
│   │   │   ├── ui/
│   │   │   │   └── Navbar.tsx
│   │   ├── pages/
│   │   │   ├── CarsPage.tsx
│   │   │   ├── DetectionPage.tsx
│   │   │   ├── ReportPage.tsx
│   │   │   └── WarrantyPage.tsx
│   │   ├── routes/
│   │   │   ├── __root__.tsx
│   │   │   ├── cars.tsx
│   │   │   ├── index.tsx
│   │   │   ├── report.tsx
│   │   │   └── warranty.tsx
│   │   ├── utils/
│   │   │   ├── css.ts
│   │   │   ├── index.css
│   │   │   ├── main.tsx
│   │   │   ├── routeTree.gen.ts
│   │   │   └── vite-env.d.ts
│   ├── package.json
│   └── ...
└── README.md
```

## 📸 **Screenshots**

### **Detection Page**

### _Home_

![Home Page](https://github.com/EslamEssamM/Car-damage-detection/blob/main/screenshots/home.png)

### _Sample_

![Detection Page](https://github.com/EslamEssamM/Car-damage-detection/blob/main/screenshots/sample.png)

### _Results_

![Results Page](https://github.com/EslamEssamM/Car-damage-detection/blob/main/screenshots/results.png)

### **Report Page**

![Report Page](https://github.com/EslamEssamM/Car-damage-detection/blob/main/screenshots/reporting.png)

### **Car Info Page**

![Car Info Page](https://github.com/EslamEssamM/Car-damage-detection/blob/main/screenshots/car-info.png)

### **Warranty Page**

![Warranty Page](https://github.com/EslamEssamM/Car-damage-detection/blob/main/screenshots/warranty.png)

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
- **Email**: [essamdrc@gmail.com](mailto:essamdrc@gmail.com)
- **GitHub**: [EslamEssamM](https://github.com/EslamEssamM)

---

Made with ❤️ by [Eslam Essam](https://github.com/EslamEssamM)
