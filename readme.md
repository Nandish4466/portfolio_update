# Modern Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. This project features a modern design with smooth animations, dark mode support, and a tech-themed animated background.

![Portfolio Preview](https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)

## 🌟 Features

- **Responsive Design**: Looks great on all devices
- **Dark/Light Mode**: Toggle between themes with a single click
- **Smooth Animations**: Using Framer Motion for fluid transitions
- **Interactive Elements**: Engaging user experience with hover effects and animations
- **Tech-Themed Background**: Dynamic animated background with particles and circuit lines
- **Type Animation**: Dynamic text typing effect
- **Scroll Progress**: Visual indicator of scroll position
- **Modern UI**: Clean, professional design with gradient accents

## 📁 Project Structure

```
portfolio/
├── public/               # Static files
│   └── vite.svg          # Favicon
├── src/                  # Source files
│   ├── App.tsx           # Main application component
│   ├── index.css         # Global styles and Tailwind utilities
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # TypeScript declarations
├── .gitignore            # Git ignore file
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── README.md             # Project documentation
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.app.json     # TypeScript configuration for app
├── tsconfig.json         # TypeScript configuration
├── tsconfig.node.json    # TypeScript configuration for Node
└── vite.config.ts        # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ Built With

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Lucide React](https://lucide.dev/) - Icon library
- [React Type Animation](https://github.com/maxeth/react-type-animation) - Text typing effect

## 📱 Sections

1. **Hero** - Introduction with animated typing
2. **About** - Personal information and background
3. **Skills** - Technical skills with progress bars
4. **Projects** - Portfolio of work with images and descriptions
5. **Contact** - Contact form and social media links

## 🌙 Dark Mode

The website includes a dark/light mode toggle that persists user preference. The dark theme features adjusted colors and contrast for comfortable viewing in low-light environments.

## 📊 Customization

### Personal Information

Edit the information in `App.tsx` to personalize the portfolio:

- Update name, title, and description in the Hero section
- Modify About section with your own background
- Adjust skills and their proficiency levels
- Add your own projects with images and descriptions
- Update contact information and social media links

### Styling

The project uses Tailwind CSS for styling:

- Color scheme can be modified in `tailwind.config.js`
- Global styles and animations are in `src/index.css`
- Component-specific styles are applied directly in `App.tsx`

## 🚢 Deployment

### GitHub Pages

1. Install the gh-pages package:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add deployment scripts to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

Your site will be available at `https://your-username.github.io/portfolio/`

### Other Hosting Options

The project can also be deployed to:
- Netlify
- Vercel
- AWS Amplify
- Firebase Hosting

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com/) for stock images
- [Google Fonts](https://fonts.google.com/) for typography
- [Lucide](https://lucide.dev/) for icons
