# ChatCase (React Native & ChatGPT API)

This repository contains a mobile project created using ChatGPT API and React Native. The project includes an Express.js backend built with Node.js and utilizes TypeScript for the React Native application. One of the key features of this project is the real-time message generation using streams, enabling a chat experience similar to ChatGPT.

![Cover Image](https://github.com/ysancak/chat-case/blob/main/app/src/assets/cover.png)

# Project Setup Guide

This repository contains two main projects:

- **/app**: The React Native application
- **/backend**: The Express.js backend

Follow the instructions below to set up and run both projects.

## React Native App Setup

### Firebase Configuration

#### iOS

1. Download the `GoogleService-Info.plist` file from the Firebase console.
2. Add the file to your Xcode project:
   - Open the project in Xcode by running `cd app/ios && open ChatCase.xcworkspace`.
   - Right-click on the project root in Xcode, select "Add Files to `ChatCase, and select the downloaded `GoogleService-Info.plist` file.
   - Ensure the file is added to all necessary targets.

#### Android

1. Download the `google-services.json` file from the Firebase console.
2. Add the file to your Android project:
   - Copy the `google-services.json` file to the `app/android/app` directory.

### Install Dependencies and Setup

1. Navigate to the app directory:
   `cd app && yarn install`
2. Install iOS dependencies:
   `cd ios && pod install`

## Backend Setup

#### Environment Configuration

1. Create a .env file in the /backend directory with the following content:
   `OPENAI_API_KEY=your_openai_api_key_here`

#### Run the Backend

1. Navigate to the backend directory:
   `cd backend`
2. Install project dependencies:
   `yarn install`
3. Start the backend server:
   `yarn dev`
