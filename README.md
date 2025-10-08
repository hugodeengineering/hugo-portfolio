# Hugo de Mendoza - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my work in mechanical engineering, robotics, and computer science.

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark Theme**: Professional dark navy theme with teal accents
- **Smooth Navigation**: Sidebar navigation with smooth scrolling
- **Project Showcase**: Detailed project cards with images and tech stacks
- **Experience Timeline**: Professional experience with achievements
- **Skills Display**: Organized technical skills and competencies
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Accessible**: WCAG compliant with proper ARIA labels and semantic markup

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/hugo-de-mendoza/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with sidebar
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and theme
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sidebar.tsx         # Navigation sidebar
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── experience.tsx      # Experience section
│   ├── projects.tsx        # Projects showcase
│   ├── skills.tsx          # Skills section
│   └── contact.tsx         # Contact section
├── data/
│   └── portfolio-data.json # Portfolio content data
└── public/
    └── images/             # Project images and assets
\`\`\`

## 🎨 Customization

### Update Content

Edit `data/portfolio-data.json` to update:
- Personal information
- Experience entries
- Projects
- Skills
- Education details

### Update Theme

Modify `app/globals.css` to change:
- Color palette
- Typography
- Spacing
- Border radius

### Add Projects

1. Add project data to `data/portfolio-data.json`
2. Add project image to `public/images/projects/`
3. The project will automatically appear in the Projects section

## 📄 Resume

Place your resume PDF in `public/resume.pdf` for the download functionality to work.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Manual Deployment

\`\`\`bash
npm run build
\`\`\`

Upload the `.next` folder and other necessary files to your hosting provider.

## 📝 License

This project is open source and available under the MIT License.

## 📧 Contact

Hugo de Mendoza
- Email: hugo.demendoza.eng@gmail.com
- LinkedIn: [linkedin.com/in/hugo-de-mendoza](https://www.linkedin.com/in/hugo-de-mendoza)
- Phone: 323-449-3945

---

Built with ❤️ using Next.js and Tailwind CSS
