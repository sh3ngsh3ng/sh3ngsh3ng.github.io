---
title: Phase 1
sidebar_position: 2
# slug
---

# Objectives
- Learn React Native and Expo
- Understand the ecosystem for mobile development
- Build a reusable template for future mobile development
- Document the setup of reusable template
- Document the deployment process of mobile app

## End Products
- Reusable React Native Template
- Document to setup React Native Template
- Document to deploy React Native mobile app

## Step 1: Tutorial Hell (5 apps)
- https://www.youtube.com/watch?v=sm5Y7Vtuihg
    - Simple CRUD app, AsyncStorage, List Rendering, Dynamic Routing, Intro to EAS
- https://www.youtube.com/watch?v=BTfcnxXevm0
- https://www.youtube.com/watch?v=q3HE1dFiJBI
- https://www.youtube.com/watch?v=J50gwzwLvAk



## Commands

### Setup
`npx create-expo-app@latest ./`
`npx expo start`
`npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context`
`npx tailwindcss init`
`npx expo customize metro.config.js`
`npx expo install react-native-appwrite react-native-url-polyfill`


```
npx expo install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
npx expo install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11
```