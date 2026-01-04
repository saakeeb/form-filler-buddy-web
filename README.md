# Form Filler Buddy Website

Professional website for Form Filler Buddy Chrome extension built with Next.js 15, TypeScript, and Tailwind CSS 4.

## 🚀 Features

- **SEO Optimized**: Complete metadata, sitemap, and robots.txt
- **Performance**: Optimized images, code splitting, and fast loading
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: Semantic HTML and proper ARIA labels
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS 4

## 📁 Project Structure

```
website/
├── app/
│   ├── components/
│   │   ├── layout/       # Header, Footer
│   │   ├── seo/          # SEO metadata generator
│   │   └── ui/           # Reusable UI components
│   ├── (pages)/          # Route groups
│   │   ├── manual/       # User manual page
│   │   └── privacy/      # Privacy policy page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── sitemap.ts        # Dynamic sitemap
│   └── manifest.ts       # PWA manifest
├── public/
│   ├── assets/
│   │   ├── images/       # PNG images
│   │   ├── videos/       # MP4 videos
│   │   └── gifs/         # GIF animations
│   └── robots.txt        # SEO robots file
└── package.json
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Pages

- **Home** (`/`): Landing page with features, demo, and use cases
- **User Manual** (`/manual`): Complete guide on how to use the extension
- **Privacy Policy** (`/privacy`): Privacy policy and data handling information

## 🎨 Design Principles

- **KISS (Keep It Super Simple)**: Clean, minimal design
- **DRY (Don't Repeat Yourself)**: Reusable components
- **Mobile First**: Responsive design starting from mobile
- **Performance**: Optimized images, lazy loading, code splitting

## 🔍 SEO Features

- Dynamic metadata generation
- Open Graph tags
- Twitter Card support
- Sitemap generation
- Robots.txt configuration
- Semantic HTML structure

## 📦 Components

### Layout Components
- `Header`: Navigation header with links
- `Footer`: Footer with links and copyright

### UI Components
- `Button`: Reusable button with variants
- `FeatureCard`: Card component for features
- `Section`: Container component for sections

### SEO Components
- `SEO`: Metadata generator for pages

## 🌐 Deployment

The website is ready to deploy on:
- **Vercel** (recommended - zero config)
- **Netlify**
- **Any static hosting** (after `npm run build`)

## 📄 License

MIT License - see LICENSE file for details
# form-filler-buddy-web
# form-filler-buddy-web
