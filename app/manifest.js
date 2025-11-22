export default function manifest() {
  return {
    name: "Classora - Teach more, manage less",
    short_name: "Classora",
    description:
      "A friendly classroom dashboard that helps teachers and students manage coursework and communication with ease. Track attendance, assignments, and grades; share resources and announcements; schedule lessons and sync with calendars; receive real-time notifications and visualize student progress with simple reports. Responsive and role-aware (teacher, student, admin), it aims to streamline classroom workflows, improve engagement, and keep learning organized and secure.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    lang: "en-US",
    icons: [
      {
        src: "/images/Classora_Logo_withbg.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/Classora_Logo_withbg.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

// {
//   "id": "/",
//   "name": "Classora - Teach more, manage less",
//   "short_name": "Classora",
//   "description": "A friendly classroom dashboard that helps teachers and students manage coursework and communication with ease.",
//   "start_url": "/?source=pwa",
//   "scope": "/",
//   "display": "standalone",
//   "orientation": "portrait-primary",
//   "lang": "en-US",
//   "background_color": "#FFFFFF",
//   "theme_color": "#6C5CE7",
//   "icons": [
//     { "src": "/icons/icon-48.png",  "sizes": "48x48",   "type": "image/png", "purpose": "any" },
//     { "src": "/icons/icon-72.png",  "sizes": "72x72",   "type": "image/png", "purpose": "any" },
//     { "src": "/icons/icon-96.png",  "sizes": "96x96",   "type": "image/png", "purpose": "any" },
//     { "src": "/icons/icon-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" },
//     { "src": "/icons/icon-152.png", "sizes": "152x152", "type": "image/png", "purpose": "any" },
//     { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any" },
//     { "src": "/icons/icon-384.png", "sizes": "384x384", "type": "image/png", "purpose": "any" },
//     { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
//   ],
//   "shortcuts": [
//     {
//       "name": "New Announcement",
//       "short_name": "Announce",
//       "url": "/announcements/new",
//       "icons": [{ "src": "/icons/shortcut-announcement.png", "sizes": "96x96" }]
//     },
//     {
//       "name": "My Courses",
//       "short_name": "Courses",
//       "url": "/courses",
//       "icons": [{ "src": "/icons/shortcut-courses.png", "sizes": "96x96" }]
//     }
//   ],
//   "screenshots": [
//     { "src": "/screenshots/home.png", "sizes": "1024x768", "type": "image/png" }
//   ]
// }
