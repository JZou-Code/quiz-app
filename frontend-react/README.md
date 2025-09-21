# Quiz Frontend

A React + Vite-based frontend for the quiz application, supporting ranking display, result sharing, and seamless
integration with the backend API. The frontend is deployed on **AWS S3 + CloudFront** and uses **GitHub Actions** for
automated CI/CD.

## Features

- Quiz participation and result display
- User ranking based on accumulated correct answers
- Shareable result links
- Responsive UI built with React
- Environment-based API configuration (via `.env`)

## Setup For Local

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/quiz-frontend.git
   cd quiz-frontend

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   - Create a `.env.development` file in the project root:
      ```bash
      VITE_API_BASE=<Your backend api rul>
     ```
   - This variable points the frontend to your backend API.
     For production builds, configure `VITE_API_BASE` via `.env.production` or GitHub Actions variables.

4. **Run the application in development**
   ```bash
   npm run dev
   ````

5. **Build for production**
   ```bash
   npm run build
   ```
   The compiled assets will be generated in the `dist/` directory.

## Deployment AWS
The frontend is deployed to AWS using **S3 + CloudFront**: 

- Static assets (`.js`, `.css`, images, etc.) are uploaded with long-term cache headers.
- `index.html` is uploaded with no-cache headers to ensure users always get the latest build.
- CloudFront is invalidated automatically after each deployment.

For deployment instructions and CI/CD setup, please refer to the `.github` directory in this repository.