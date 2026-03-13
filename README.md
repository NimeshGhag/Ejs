# EJS Tutorial Project

This is a simple Express.js application demonstrating the use of EJS (Embedded JavaScript) templating engine for rendering dynamic HTML pages.

## Features

- Basic EJS templating with escaped output (`<%= %>`)
- Scriptlet tags for JavaScript logic (`<% %>`)
- Unescaped output for HTML content (`<%- %>`)
- Multiple routes showcasing different EJS features

## Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NimeshGhag/Ejs.git
   cd Ejs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the server:

```bash
npm start
```

The server will run on `http://localhost:3000`.

## Routes

- `GET /` - Renders the home page with a simple message using escaped output
- `GET /scriptlet` - Demonstrates looping through an array of messages using scriptlet tags
- `GET /unescaped` - Shows unescaped HTML output for rendering HTML tags directly

## Dependencies

- `express` - Web framework for Node.js
- `ejs` - Templating engine
- `morgan` - HTTP request logger middleware

## Project Structure

```
├── server.js          # Entry point, starts the server
├── src/
│   └── app.js         # Express app configuration and routes
├── views/             # EJS templates
│   ├── index.ejs      # Home page template
│   ├── scriptlet.ejs  # Scriptlet demonstration
│   └── unEscaped.ejs  # Unescaped output demonstration
├── package.json       # Project dependencies and scripts
└── README.md          # This file
```
