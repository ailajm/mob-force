# Mob-Force
Mob-Force is a game built with React, TypeScript, and Node.js where players battle against monsters in various environments.

## Technologies Used
Frontend: React, TypeScript
Backend: Node.js, Express.js, MongoDB
Other: Docker, Docker-Compose, TSLint, ESLint

## Project Structure
The client directory contains the frontend of the application which is built with React and TypeScript.
The server directory contains the backend of the application which is built with Node.js, Express.js, and MongoDB.
The docker-compose.yml file sets up the application services for local development and testing.

## Setup Instructions
To set up the project on your local machine, follow these steps:

Clone the repository:
`git clone https://github.com/your-repo/mob-force.git`

Move into the project directory:
`cd mob-force`

Install the dependencies for the client and server:
```
# Client
cd client
npm install

# Server
cd ../server
npm install
```

To start the application, make sure you're in the root directory and run:
`docker-compose up`

This command will start the frontend, backend, and MongoDB services. The application will be available at http://localhost:3000.

## Contributing
If you'd like to contribute to the project, please submit a pull request!

## Issues
If you find a bug or want to suggest a new feature, please submit an issue on the Github repository.

## License
This project is licensed under the MIT License.