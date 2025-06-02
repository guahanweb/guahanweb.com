# GuahanWeb.com

A professional website for technical leadership consulting and speaking engagements, built with [Eleventy](https://www.11ty.dev/) (11ty) static site generator.

## About

This is the personal website for a technical leadership strategist with 25+ years of experience across Amazon, Microsoft, Disney, and Lucasfilm. The site showcases:

- **Strategic Technical Advisory**: Fractional CTO services, architecture reviews, and strategic planning
- **Speaking & Training**: Keynotes, workshops, and masterclasses on technical leadership and AI strategy
- **Technical Due Diligence**: Comprehensive technical assessments for investments and acquisitions

### Target Audience

- Engineering leaders and C-suite executives
- Conference organizers and event planners
- Venture capital firms and investors
- Organizations seeking technical leadership expertise

## Technology Stack

- **Static Site Generator**: Eleventy (11ty) v3.1.0
- **Templating**: Nunjucks (.njk files)
- **Styling**: SCSS/Sass for CSS preprocessing
- **Deployment**: Custom rsync-based deployment script

## Project Structure

```
guahanweb.com/
├── src/                          # Source files
│   ├── _data/                    # Data files for content
│   │   ├── navigation.json       # Site navigation configuration
│   │   ├── speaking.js          # Speaking topics and engagements
│   │   └── helpers.js           # Template helper functions
│   ├── _includes/               # Reusable templates and components
│   │   ├── components/          # UI components (header, footer, navigation)
│   │   └── layouts/             # Page layouts
│   ├── styles/                  # SCSS stylesheets
│   ├── js/                      # JavaScript files
│   ├── images/                  # Static images
│   ├── *.njk                    # Page templates
├── scripts/                     # Build and deployment scripts
│   └── publish                  # Deployment script
├── package.json                 # Node.js dependencies and scripts
└── _site/                       # Generated static site (build output)
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd guahanweb.com
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with live reload:

```bash
npm start
# or
npm run serve
```

The site will be available at `http://localhost:8080`

### Building

Generate the static site for production:

```bash
npm run build
```

The generated site will be in the `_site` directory.

### Available Scripts

- `npm start` or `npm run serve` - Start development server with live reload
- `npm run build` - Build the site for production
- `npm run debug` - Build with debug logging enabled
- `npm run publish` - Deploy the site using the publish script

## Content Management

### Speaking Topics

Speaking topics and engagements are managed in `src/_data/speaking.js`. This file contains:

- **Topics**: Detailed information about speaking topics including:
  - Strategic Leadership & Career Development
  - Architecture & System Design Leadership
  - Emerging Technologies & Innovation
  - Quality & Process Leadership
  - Cross-Industry Innovation

- **Engagements**: Historical and upcoming speaking engagements with presentation details

### Navigation

Site navigation is configured in `src/_data/navigation.json`. Each navigation item includes:
- `title` - Display name
- `url` - Link destination
- `enabled` - Whether the item is active
- `order` - Display order

### Page Content

Main pages are built using Nunjucks templates (`.njk` files):
- `index.njk` - Homepage with hero section and service overview
- `about.njk` - Detailed background and philosophy
- `speaking.njk` - Speaking topics and engagement listings
- `contact.njk` - Contact information and form

## Deployment

The site uses a custom deployment script (`scripts/publish`) that:

1. Builds a fresh copy of the site
2. Uses rsync to deploy to the production server

### Environment Variables

Configure deployment by setting these environment variables:

- `PUBLISH_USERNAME` - SSH username (default: `guahan`)
- `PUBLISH_DOMAIN` - Server domain (default: `guahanweb.com`)
- `PUBLISH_SERVER_PATH` - Remote path (default: `/home/guahan/guahanweb`)
- `OUTPUT_DIR` - Local build directory (default: `_site`)

### Manual Deployment

```bash
npm run publish
```

## Customization

### Styling

SCSS files are located in `src/styles/`:
- `main.scss` - Main stylesheet that imports all partials
- `_variables.scss` - SCSS variables for colors, typography, etc.
- `_*.scss` - Component and section-specific styles

### Data Structure

The site uses a data-driven approach for dynamic content:
- Speaking topics and engagements are defined in JavaScript modules
- Helper functions provide filtering and organization capabilities
- Templates use Nunjucks for dynamic content rendering

## License

ISC License

## Contact

For questions about the site or speaking inquiries, visit the contact page or connect through the website.