# Portfolio Web App

A modern, responsive portfolio website built with React featuring 3D animations and smooth interactions.

## 🚀 Features

- ✨ Modern and clean design with 3D particle animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth scrolling and animations
- 💼 Sections: Home, About, Skills, Projects, Resume, Contact
- 📥 Resume download functionality
- 🎯 Interactive hover effects

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Lucide React** - Icon library
- **CSS3** - Styling and animations
- **HTML Canvas** - 3D particle effects

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- npm or yarn

# Want to Clone this Project Follow this Steps

## 🔧 Installation & Setup

1. **Extract the portfolio-app folder** to your desired location

2. **Navigate to the project directory:**
   ```bash
   cd portfolio-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```
   or if you use yarn:
   ```bash
   yarn install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

5. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

## 📝 Customization Guide

### 1. Update Personal Information

**Contact Component** (`src/components/Contact.jsx`):
- Update email, GitHub, and LinkedIn links
- Change your name in the footer

**Resume Component** (`src/components/Resume.jsx`):
- Update the resume file path (line 8-9)
- Change resume info (size, date, etc.)

**About Component** (`src/components/About.jsx`):
- Update your bio text
- Modify stats (experience, projects, etc.)

### 2. Add Your Projects

Edit `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    title: "Your Project Name",
    description: "Your project description",
    tech: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/yourusername/project",
    live: "https://yourproject.com"
  },
  // Add more projects...
];
```

### 3. Update Skills

Edit `src/components/Skills.jsx`:
```javascript
const skills = {
  "Category Name": ["Skill1", "Skill2", "Skill3"],
  // Add more categories...
};
```

### 4. Add Your Resume

1. Place your resume PDF in the `public` folder
2. Update the path in `src/components/Resume.jsx`:
   ```javascript
   link.href = '/your-resume.pdf';
   link.download = 'Your_Name_Resume.pdf';
   ```

### 5. Customize Colors & Styling

- Edit `src/App.css` for global styles
- Modify gradient colors in individual components
- Update font family in CSS files

## 📁 Project Structure

```
portfolio-app/
├── public/
│   ├── index.html
│   └── your-resume.pdf (add your resume here)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🚢 Building for Production

To create a production build:

```bash
npm run build
```

This will create a `build` folder with optimized files ready for deployment.

## 🌐 Deployment

You can deploy this portfolio to:

- **Vercel**: `npm install -g vercel` then `vercel`
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use `gh-pages` package
- **Heroku, AWS, or any static hosting service**

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1",
  "lucide-react": "^0.263.1"
}
```

## 🎨 Component Breakdown

- **Navbar**: Fixed navigation with active section highlighting
- **Hero**: Landing section with 3D particle animation
- **About**: Personal introduction with animated stats
- **Skills**: Categorized skill display with hover effects
- **Projects**: Project cards with tech stack and links
- **Resume**: Download section with animated icon
- **Contact**: Social links and contact information

## 💡 Tips

- Replace `#` links in projects with your actual GitHub/live demo URLs
- Update meta tags in `public/index.html` for better SEO
- Add favicon and app icons in the `public` folder
- Test on different devices for responsive design

## 📧 Support

If you encounter any issues, feel free to:
- Check the console for errors
- Ensure all dependencies are installed
- Verify Node.js version compatibility

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ and React
