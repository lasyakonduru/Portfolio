# 🌐 Portfolio Website

Welcome to my personal portfolio site — a modern, responsive, and animated showcase built with the latest web technologies. You can **fork** this repo and make it your own too!

## ⚙️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Dark/Light Mode** toggle included

## 🚀 Live Demo

Visit the live site here: [http://54.146.87.41](http://54.146.87.41)

---

## 📦 Getting Started Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/Sameera-05/Sameera-Portfolio.git
   cd Sameera-Portfolio
2. Install Dependencies:
    ```bash
    npm install
3. Run locally:
     ```bash
      npm run dev
⚡ Deployment (CI/CD)
This portfolio uses GitHub Actions + AWS EC2 for seamless CI/CD deployment.

### 🛠️ Setup Includes:

- `.github/workflows/deploy.yml` – defines the automated workflow
- EC2 instance with Docker installed
- SSH key stored as GitHub Secrets:
  - `EC2_HOST`
  - `EC2_USER`
  - `EC2_SSH_KEY`
- Every push to main triggers:
    - `SSH into EC2`
    - `Pull latest codeR`
    - `Build Docker image`
    - `Replace running container`

### 👨‍💻 Want to Make It Yours?

- Fork this repo  
- Replace text/images with your own  
- Update `.github/workflows/deploy.yml` with your EC2 SSH info and GitHub Secrets  
- Push to `main` and you're **LIVE! 🚀**

### 📬 Contact

Feel free to reach out on [LinkedIn](https://www.linkedin.com/in/lasya-priya-k/) 
📧 Email: [konduru.lasya@gmail.com](mailto:konduru.lasya@gmail.com)
