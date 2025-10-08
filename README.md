# Build India Group - Official Website

The official website for Build India Group, an NGO dedicated to building good citizenry consciousness amongst the young across India, fostering good citizenry for a healthy nation with Article 51A of the Constitution (Fundamental Duties) as the foundation.

## About Build India Group

Build India Group conducts the annual Pledge Festival on November 26 (Constitution Day) where students across the country write and recite the citizen's pledge in their mother tongue. The pledge is available in all 22 official languages of India.

**Our Pledge**:
> "We the people of India today do solemnly pledge ourselves to the service of our nation; with honesty, sincerity and commitment always keeping our nation's interest paramount in all that we think do or say for the greater glory of this land."

## Website Features

- **Multi-page Website**: Home, About Us, Programs, Pledges (22 languages), Events, Contact
- **Content Management System**: Full admin panel for easy content updates
- **Initiatives**: Haribol (tree protection) and Aikyatan (anti-terrorism awareness)
- **Programs**: Debates, discussions, and activities on fundamental duties
- **Events**: Constitution Day celebrations and other programs
- **News & Updates**: Share news, videos, and founder's messages
- **Publications**: Access to "The Book of Pledge" and other materials
- **Contact Form**: For inquiries and participation requests
- **Responsive Design**: Works on all devices
- **Easy Deployment**: Ready for GoDaddy, Netlify, or any static hosting

## Quick Start

### For Developers

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### For Content Managers

1. Access the admin panel at `/admin`
2. **Default Login**:
   - Email: `admin@buildindia.org`
   - Password: `admin123`
3. Manage all website content through the admin interface

## Admin Panel Features

The admin panel allows you to manage:

1. **Site Settings**: Logo, tagline, hero section, about text
2. **Programs**: Add/edit fundamental duties programs
3. **Initiatives**: Manage Haribol, Aikyatan, and other initiatives
4. **Events**: Add upcoming events and Constitution Day celebrations
5. **News**: Publish news, videos, and founder's messages
6. **Contact Submissions**: View and manage contact form entries
7. **Publications**: Manage downloadable resources

## Deployment

This website is ready for deployment to:
- **GoDaddy** (or any cPanel hosting)
- **Netlify** (recommended for ease)
- **Vercel**
- **GitHub Pages**
- Any static web hosting service

See **DEPLOYMENT-GUIDE.md** for detailed step-by-step instructions.

### Quick Deploy to Netlify

1. Build the site: `npm run build`
2. Drag and drop the `dist` folder to netlify.com
3. Done! Your site is live

### Deploy to GoDaddy

1. Build the site: `npm run build`
2. Upload contents of `dist` folder to `public_html` via cPanel File Manager or FTP
3. Add the included `.htaccess` file for proper routing
4. Access your site!

## Key Pages

- **Home** (`/`): Overview of Build India Group, initiatives, and latest updates
- **About Us** (`/about`): Complete history and story of Build India Group
- **Programs** (`/programs`): Fundamental duties programs and activities
- **Pledges** (`/pledges`): The citizen's pledge in all 22 Indian languages
- **Events** (`/events`): Upcoming events and Constitution Day celebrations
- **News** (`/news`): Latest news, updates, videos, and messages
- **Contact** (`/contact`): Get in touch and join the movement
- **Admin** (`/admin`): Content management system

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **LocalStorage** - Content persistence

## Content Storage

All content is stored in the browser's localStorage, making it:
- ✅ Fast and responsive
- ✅ No database required
- ✅ Works on any static hosting
- ✅ Easy to backup

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Project Structure

```
build-india-group/
├── public/          # Static assets and .htaccess
├── src/
│   ├── components/  # Header, Footer
│   ├── pages/       # All page components
│   ├── lib/         # Storage utilities
│   ├── types/       # TypeScript definitions
│   └── data/        # Pledges in 22 languages
├── dist/            # Production build (created by npm run build)
└── DEPLOYMENT-GUIDE.md
```

## Support

For questions about:
- **Website content**: Contact Build India Group administrators
- **Technical issues**: Refer to DEPLOYMENT-GUIDE.md

---

**Build India Group**
*Cultivating good citizenry for a healthy nation*

Founded by Biraja Mahapatra | Registered Society, 2008
