# Welcome to Movie List App 👋

This is a cross-platform mobile app built using Expo and React Native. The app fetches movie data from The Movie Database (TMDb) and uses Appwrite for backend services.

![App Preview](./assets/output.gif)

# About the App

## Get started

- The Movie App allows users to:
  - Browse trending and top-rated movies
  - View movie details and trailers
  - Search for specific titles

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

3. Configuration
   EXPO_PUBLIC_MOVIE_API_KEY=Get your API key from https://www.themoviedb.org/
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=Get your project ID from Appwrite console
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=Get your database ID from Appwrite console
   EXPO_PUBLIC_APPWRITE_COLLECTION_ID=Get your collection ID from Appwrite console

4. Tech Stack

- React Native (via Expo)
- Expo Router
- Appwrite
- TMDb API
- TypeScript

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).
