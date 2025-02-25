# TypeScript API Template for Vercel

This repository serves as a **template** for building and deploying **TypeScript-based APIs** on [Vercel](https://vercel.com). It provides a well-structured foundation to quickly set up an API with modern best practices.

## 🚀 Features

- **TypeScript**: Strongly typed language for better maintainability and debugging.
- **Express.js**: Lightweight and efficient web framework for handling routes and requests.
- **Vercel Deployment Ready**: Preconfigured for seamless deployment.
- **Environment Variables Support**: Different configurations for local development and production.

## 📌 Prerequisites

- [Node.js](https://nodejs.org/) (14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for dependency management
- A [Vercel](https://vercel.com/) account

## 🔧 Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/7imio/typescript-api-vercel.git
   cd typescript-api-vercel
   ```

2. **Install dependencies:**

   Using npm:

   ```sh
   npm install
   ```

   Or using yarn:

   ```sh
   yarn install
   ```

## ⚙️ Configuration

### Environment Variables

This project uses environment variables to distinguish between **development** and **production** environments.

- **Local Development**: Create a `.env` file in the root directory and add your environment-specific variables.

  Mandatory variable is based on the `.env.sample` file.

```sh
LOCAL_PORT=*
```

- **Production (Vercel)**: Set environment variables via the Vercel dashboard or CLI.

### `vercel.json` Configuration

The `vercel.json` file ensures proper function deployment for Vercel’s **serverless functions**:

```json
{
  "functions": {
    "api/*.ts": {
      "runtime": "nodejs20.x"
    }
  }
}
```

## 🛠 Development

Start the development server with **Nodemon** for auto-reloading:

```sh
npm run dev
```

The API will be available at `http://localhost:<your LOCAL_PORT variable>`.

## 🚀 Deployment

### Deploying to Vercel

1. **Install Vercel CLI** (if not already installed):

   ```sh
   npm install -g vercel
   ```

2. **Login to Vercel:**

   ```sh
   vercel login
   ```

3. **Deploy the API:**

   ```sh
   vercel
   ```

   Follow the interactive steps to finalize the deployment.

## 📂 Project Structure

```
.
├── api/
│   └── index.ts        # API entry point for Vercel
├── src/
│   └── index.ts        # Main application entry point
├── .eslintrc.json      # ESLint configuration
├── .env.sample         # .env file configuration
├── .gitignore          # Files and folders to ignore in Git
├── .prettierrc         # Prettier configuration
├── nodemon.json        # Nodemon settings
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vercel.json         # Vercel deployment settings
```

## 🤝 Contributing

Contributions are welcome! Feel free to **open an issue** or submit a **pull request** to improve this template.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
