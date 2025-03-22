# GamingBrotherhood

## Description
This is a Single Page Application created with React. The theme is games. Its purpose is to allow a user to view games, register, upload, edit, delete, and like games.

## Technologies 
For my project I use libraries like react, react-dom, react-router.

## Project Structure
The project is organized into two main folders: **Client** and **Server**.

### Client
The client-side part contains the React application and is located in the **Client** folder. Inside it, the following structure can be found:

- **src/** – contains the main folders and files for the React application:
  - **components/** – components of the application
  - **pages/** – pages of the application
  - **assets/** – static files
  - **apiHooks/** – custom hooks for API requests
  - **utils/** – utility functions
  - **contexts/** – context providers
  - **styles/** – folder with CSS files

## Starting the Project
The project starts normally: npm run dev for the client (Vite) and node server.js for the server.

## Functionalities 
In this application you can see all games or you can choose a game and see its details. You can go to about page to see information about the page. If you try to access page that does not exist you will redirected to 404 page. You can register or login(if you have already account) and of course you can loggout. If you are logged in you can create games, you can edit your own games or delete them and you can like games that you are not the owner of.

## Authentication
Home, About, 404 Page can be accessed regardless of whether you are logged in or not.
- **Logged In Users** - You have access to Create, Edit, Delete, and Logout pages. Once logged in, you can interact with the platform by creating and managing your own games. You can also like games and interact with them.
- **Not Logged In** - You can access Register and Login pages. You can only view public content and your ability to create or modify content is forbidden. You can view the likes on each game, but you cannot like any games yourself.

The **GamingBrotherhood** application provides a platform for users to explore, interact with, and manage games in an easy-to-use and intuitive way. By utilizing modern technologies such as React and Node.js, the application ensures a smooth and dynamic user experience. The authentication system enables secure access to user-specific features, allowing logged-in users to create, edit, and like games, while non-logged-in users can still view and interact with the content in a limited manner.

**GamingBrotherhood** is a Single Page Web Application built with React, allowing users to interact with games. The project showcases front-end development practices and provides a foundation for future improvements.


