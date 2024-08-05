# Overview
This project is designed to demonstrate making network requests and fetching data in a Redux environment. The application showcases user management, including creating, deleting, and expanding user details to show associated albums and photos. Data is fetched lazily to optimize performance for users on constrained internet connections.

## Final Product

**Homepage:**

!["View of homepage"]()

**Loading Users:**

!["View of loading users"]()

**Adding New User:**

!["View of adding new user"]()

**Fetching Albums Under Specific User:**

!["View of fetching albums under specific user"]()

**Adding New Album Under Specific User:**

!["View of adding new album under specific user"]()

**Fetching Photos Under Specific Album and User:**

!["View of fetching photos under specific album and user"]()

**Adding New Photo Under Specific Album and User:**

!["View of adding new photo under specific album and user"]()

## Features
* Fetch and display a list of users using Redux Thunks
* Add, delete, and manage users
* Expand user details to show albums and photos
* Lazy loading for efficient data fetching
* Implemented with Redux Toolkit and Redux Toolkit Query
* Enhanced data loading experience with loading spinners

## Tech Stack
* **Frontend:** React, Redux Thunks, Redux Toolkit, Redux Toolkit Query, Faker, Classnames, Axios
* **Backend:** JSON Server for mock API

## Installation

### Clone the repository:

```
git clone <repository-url>
cd <repository-folder>
```

### Install dependencies:

```
npm install
```

### Start the JSON Server:

```
npx json-server --watch db.json --port 3001
```

### Run the application:

```
npm start
```

### Open your browser and navigate to 

```
http://localhost:3000
```

## Usage
* On loading the application, a list of users will be fetched and displayed.
* Add new users with the "Add User" button.
* Delete users with the "Delete" button next to each user.
* Expand user details to manage albums and photos.

## Development
1. Fetch list of users using Redux Thunks.
2. Fetch albums and photos using Redux Toolkit Query.
3. Ensure efficient data loading with clear user feedback.