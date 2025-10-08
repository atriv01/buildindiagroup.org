# Build India Group - Deployment Guide

## Easy Deployment to GoDaddy or Any Static Hosting

This website is built as a static site that can be easily deployed to any web hosting service including GoDaddy, Hostinger, Bluehost, or even free services like Netlify, Vercel, or GitHub Pages.

### Prerequisites

- Node.js installed on your local computer (for building the site)
- Access to your hosting control panel (cPanel for GoDaddy)

### Step 1: Build the Website

On your local computer, run:

```bash
npm install
npm run build
```

This will create a `dist` folder containing all the files ready for deployment.

### Step 2: Deploy to GoDaddy (or similar hosting)

#### Option A: Using File Manager (Easiest)

1. Log into your GoDaddy cPanel
2. Navigate to **File Manager**
3. Go to the `public_html` directory (or your website's root directory)
4. Upload all files from the `dist` folder to this directory
5. Make sure these files are present:
   - `index.html`
   - `assets` folder (with CSS and JS files)
   - `vite.svg` (or any other assets)

#### Option B: Using FTP

1. Use an FTP client like FileZilla
2. Connect to your hosting using FTP credentials
3. Navigate to `public_html` directory
4. Upload all contents of the `dist` folder

### Step 3: Configure .htaccess (Important for React Router)

Create a `.htaccess` file in your `public_html` directory with the following content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures that all routes (like /about, /pledges, etc.) work correctly.

### Step 4: Verify Deployment

Visit your website URL and check:
- ✅ Home page loads correctly
- ✅ Navigation works (Home, About Us, Programs, Pledges, Contact Us)
- ✅ All images and styles load properly
- ✅ Admin panel is accessible at `/admin`

### Admin Access

After deployment, you can manage all website content through the admin panel:

- **URL**: `https://yourwebsite.com/admin`
- **Default Email**: `admin@buildindia.org`
- **Default Password**: `admin123`

**Important**: Change these credentials immediately after first login from the admin panel.

### Managing Content

The admin panel allows you to:

1. **Site Settings**: Edit logo, titles, taglines, and about text
2. **Programs**: Add/edit programs related to fundamental duties
3. **Initiatives**: Manage Haribol, Aikyatan, and other initiatives
4. **Events**: Add upcoming events (Constitution Day, etc.)
5. **News**: Publish news articles, videos, and founder's messages
6. **Contacts**: View contact form submissions
7. **Publications**: Manage downloadable publications

All content is stored in the browser's localStorage, so it persists across visits.

### Alternative Free Hosting Options

#### Netlify (Recommended for easy updates)

1. Create account at netlify.com
2. Drag and drop the `dist` folder
3. Get a free URL instantly (can use custom domain)

#### Vercel

1. Create account at vercel.com
2. Install Vercel CLI: `npm i -g vercel`
3. Run: `vercel`
4. Follow the prompts

#### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Set source to the `dist` folder
4. Your site will be live at `https://username.github.io/repository-name`

### Updating the Website

When you need to make changes:

1. Edit content through the admin panel (no rebuild needed)
2. For design/code changes:
   - Make changes to source files
   - Run `npm run build`
   - Re-upload the `dist` folder contents to your hosting

### Troubleshooting

**Problem**: Pages show 404 errors when navigating directly
**Solution**: Ensure `.htaccess` file is properly configured (see Step 3)

**Problem**: Images or styles not loading
**Solution**: Check that all files in the `dist` folder were uploaded correctly

**Problem**: Admin panel not working
**Solution**: Clear browser cache and ensure JavaScript is enabled

### Support

For technical support or questions about Build India Group website, contact your web administrator or refer to the project documentation.

---

**Build India Group**
*Cultivating good citizenry for a healthy nation*
