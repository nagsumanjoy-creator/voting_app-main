# Voting Application Backend

A secure RESTful backend API for an online voting system built with Node.js, Express.js, MongoDB, and JWT authentication.

## Features
- **Authentication & Authorization:** User registration and login using unique identification numbers, password hashing via `bcrypt`, and stateless JWT authentication.
- **Role-Based Access Control (RBAC):** Strict separation between `voter` and `admin` roles. Admins manage candidates; voters cast votes.
- **Single-Vote Integrity:** Enforces a one-vote-per-user rule at the database schema and controller level, while blocking admin accounts from voting.
- **Real-Time Vote Tallying:** Public endpoint aggregating and sorting candidate vote counts in descending order.

## Tech Stack
- **Runtime & Framework:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Security:** JSON Web Tokens (JWT), bcrypt

## API Endpoints
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/user/signup` | Public | Register a new voter or admin account |
| `POST` | `/user/login` | Public | Authenticate user and return JWT token |
| `GET` | `/user/profile` | Authenticated | Retrieve logged-in user profile |
| `PUT` | `/user/profile/password` | Authenticated | Update user password |
| `GET` | `/candidate` | Public | List all registered candidates |
| `POST` | `/candidate` | Admin Only | Add a new candidate |
| `PUT` | `/candidate/:candidateID` | Admin Only | Update candidate details |
| `DELETE` | `/candidate/:candidateID` | Admin Only | Remove a candidate |
| `POST` | `/candidate/vote/:candidateID` | Voter Only | Cast a vote for a candidate |
| `GET` | `/candidate/vote/count` | Public | View live sorted vote counts |

## Local Setup
1. Clone the repository and run `npm install`.
2. Create a `.env` file with `PORT=3000`, `MONGODB_URL=<your_mongodb_uri>`, and `JWT_SECRET=<your_secret>`.
3. Start the server using `npm start`.
