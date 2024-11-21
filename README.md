# Co-Working Space Management System

A comprehensive management system for co-working spaces that allows users to book workstations, private cabins, and conference rooms on an hourly, daily, or monthly basis. The system provides essential information about available amenities and lets admins manage workspace members, seating arrangements, and more. Built using React, Vite, Tailwind CSS, and Firebase.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Firebase Setup](#firebase-setup)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)


---

## Features

- **Real-Time Workspace Booking**: Book workstations, private cabins, or conference rooms based on hourly, daily, or monthly requirements.
- **Amenity Information**: Shows all available amenities, such as internet, CCTV, biometric access, 24/7 access, and more.
- **User Authentication**: Secure registration and login using Firebase Authentication.
- **Member Management**: Admin can add and remove members, track payment status, and manage seating arrangements.
- **Responsive Design**: Optimized for both desktop and mobile experiences.

---

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Authentication and Database**: Firebase Authentication and Firebase Firestore
- **Backend Server**: XAMPP (PHP, MySQL)
- **Environment Variables**: Vite Environment Variables (`import.meta.env`)

---

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

- Node.js and npm installed on your machine
- Firebase account
- XAMPP (if you want to use the PHP backend)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/srkade/cohandler.git
   cd co-working-space-management
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Firebase and environment variables:** See [Firebase Setup](#firebase-setup) below.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## Firebase Setup

To set up Firebase for this project:

1. **Create a Firebase project** in the [Firebase Console](https://console.firebase.google.com/).
2. **Enable Firebase Authentication** and choose the email/password authentication provider.
3. **Create a Firestore Database** for storing user and booking information.
4. **Retrieve your Firebase config values** from your project settings.
5. **Create a `.env` file** in the root directory with the following variables:

   ```plaintext
   VITE_API_KEY=your-firebase-api-key
   VITE_AUTH_DOMAIN=your-auth-domain
   VITE_PROJECT_ID=your-project-id
   VITE_STORAGE_BUCKET=your-storage-bucket
   VITE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_APP_ID=your-app-id
   ```

---

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Runs the app in the development mode.
- **`npm run build`**: Builds the app for production to the `dist` folder.
- **`npm run preview`**: Serves the production build locally for preview.

---

## Project Structure

```plaintext
src/
├── components/        # Shared components
├── pages/             # Application pages (Home, About, Register, etc.)
├── firebaseConfig.js  # Firebase configuration setup
├── App.jsx            # Main app component
└── index.js           # Entry point
```

---

## Contributing

1. **Fork the repository** and clone it locally.
2. **Create a new branch** for each feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes** with clear messages:
   ```bash
   git commit -m "Add new feature"
   ```
4. **Push to your branch** and create a pull request.
