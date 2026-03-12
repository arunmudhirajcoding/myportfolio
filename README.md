# Arun Durgollu - Portfolio Website

A modern, responsive portfolio website built with Next.js showcasing my journey as a MERN Stack Developer and AI enthusiast.

## 🚀 About This Project

This is my personal portfolio website that demonstrates my skills in modern web development, featuring:

- **Modern Tech Stack**: Built with Next.js 16, React 19, and Tailwind CSS
- **Interactive UI**: Smooth animations with Framer Motion and custom UI components
- **Responsive Design**: Optimized for all devices with a mobile-first approach
- **AI Integration**: Showcases AI-powered projects and LangChain implementations
- **Professional Layout**: Clean, minimalist design with glassmorphism effects

## 🛠️ Technology Stack

### Frontend

- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library with latest features
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Hook Form** - Form handling with Zod validation

### UI Components

- **shadcn/ui** - Modern component library
- **Radix UI** - Accessible component primitives
- **Custom Components**: 3D cards, animated tooltips, floating dock, timeline

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **React Compiler** - Performance optimization

## 📁 Project Structure

```
myportfolio/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with metadata
│   │   ├── page.js            # Main homepage
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── AboutSection.jsx   # About me section
│   │   ├── HomeSection.jsx    # Hero section
│   │   ├── SkillSection.jsx   # Skills showcase
│   │   ├── ProjectCard.jsx    # Project cards
│   │   ├── ContactSection.jsx # Contact form
│   │   ├── ExperienceSection.jsx # Timeline
│   │   └── ui/                # Reusable UI components
│   └── constants/
│       └── index.js           # Project data
├── public/
│   ├── projects/              # Project screenshots
│   ├── journey/              # Journey images
│   ├── logos/                # Tech logos
│   └── profile-pic2.png      # Profile picture
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/arunmudhirajcoding/myportfolio.git
    cd myportfolio
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    ```bash
    cp .env.example .env
    # Add your environment variables
    ```

4. **Run the development server**

    ```bash
    npm run dev
    ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Key Features

### **Responsive Design**

- Mobile-first approach
- Tablet and desktop optimizations
- Smooth scroll animations

### **Interactive Components**

- **3D Cards**: Wobble effect on project cards
- **Animated Navbar**: Sticky navigation with smooth scroll
- **Timeline**: Interactive experience timeline
- **Contact Form**: Functional contact with validation

### **Performance Optimizations**

- React Compiler enabled
- Image optimization with Next.js
- Lazy loading components
- Minimal bundle size

### **Accessibility**

- Semantic HTML5 structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly

## 📱 Sections Overview

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Me**: Personal background and education details
3. **Skills**: Technical skills with visual representation
4. **Projects**: Featured projects with live demos and source code
5. **Experience**: Professional journey timeline
6. **Contact**: Get in touch form with validation

## 🌟 Highlighted Projects

The portfolio showcases three main projects:

- **AK Meet**: Video conferencing platform
- **AK Resort**: Booking management system
- **TEKYTALK**: AI-powered communication platform

## 🔧 Customization

### **Personal Information**

Update your details in:

- `src/components/AboutSection.jsx` - Personal bio
- `src/components/HomeSection.jsx` - Hero section
- `src/constants/index.js` - Project data

### **Styling**

- Modify `src/app/globals.css` for global styles
- Update Tailwind config for custom themes
- Adjust component-specific styles in respective files

### **Adding New Projects**

1. Add project images to `public/projects/`
2. Update `src/constants/index.js` with project data
3. The ProjectCard component will automatically render new projects

## 🚀 Deployment

### **Vercel (Recommended)**

```bash
npm run build
# Deploy to Vercel
```

### **Netlify**

```bash
npm run build
# Deploy the .next folder to Netlify
```


## 🤝 Contributing

This is a personal portfolio, but feel free to:

- Report issues
- Suggest improvements
- Fork for your own use


## 📞 Connect With Me

- **Portfolio**: [https://arun-kumar-durgollu.vercel.app/](https://arun-kumar-durgollu.vercel.app/)
- **GitHub**: [@arunmudhirajcoding](https://github.com/arunmudhirajcoding)
- **Email**: duruguarun@gmail.com
- **Location**: Warangal, India

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Next.js](https://nextjs.org/) for the framework

---

<div align="center">
  <p>Built with ❤️ using Next.js & Tailwind CSS</p>
  <p>© 2026 Arun Durgollu. All rights reserved.</p>
</div>
