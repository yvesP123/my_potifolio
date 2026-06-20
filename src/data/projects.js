import minexxLogo from '../assets/minexx-196-blue.png'
import goodlinkageLogo from '../assets/Goodlinkage.png'
import bedalogo from '../assets/log.svg';
import HMSLogo from '../assets/HMS.png';
import SMSLogo from '../assets/sms.png';
import VMSLogo from '../assets/VMS.jpeg';

// Central project data. Replace `logo: null` entries with real image imports
// once you have the final logos — see README for instructions.

export const projects = [
  {
    id: 'minexx',
    name: 'Minexx',
    period: '2024 — Present',
    logo: minexxLogo,
    tagline: 'Mining operations & traceability dashboard',
    description:
      'A management system used to monitor mining operations across Rwanda, covering data visualization, activity tracking, and reporting for site supervisors.',
    points: [
      'Built dashboards for monitoring mining operations in real time',
      'Implemented data visualization and reporting features',
      'Designed an intuitive interface for tracking mining activity',
      'Integrated with existing mining management infrastructure',
    ],
    links: [
      { label: 'Live demo', url: 'https://minexx.co/', kind: 'primary' },
      {
        label: 'Android app',
        url:
          'https://play.google.com/store/apps/details?id=com.appsheet.whitelabel.guid_68dd3f89_fa79_4ebd_a477_df2b67b8390c&hl=en',
        kind: 'store',
        icon: 'android',
      },
      {
        label: 'Web app',
        url: 'https://minexx-dashboard-demo.vercel.app/',
        kind: 'primary',
        icon: 'web',
      },
      {
        label: 'iOS app',
        url: 'https://apps.apple.com/us/app/minexx-3ts/id6444720283',
        kind: 'store',
        icon: 'apple',
      },
    ],
    credentials:{
      note: 'Demo account for the web dashboard',
      sets: [
        { label: 'Web dashboard', username: 'test@minexx.co', password: 'test2025$' },
      ],
    },
  },
  {
    id: 'goodlinkage',
    name: 'Good Linkage',
    period: '2023 — 2024',
    logo: goodlinkageLogo,
    tagline: 'Cross-platform mobile app, React Native',
    description:
      'A mobile application available on iOS and Android, built end-to-end with React Native and a RESTful backend.',
    points: [
      'Developed and maintained mobile apps using React Native',
      'Worked with RESTful APIs and third-party libraries',
      'Implemented responsive, adaptive user interfaces',
      'Collaborated with cross-functional teams on the full product cycle',
    ],
    links: [
      { label: 'Website', url: 'https://goodlinkage.vercel.app/', kind: 'primary' },
      {
        label: 'Android app',
        url: 'https://play.google.com/store/apps/details?id=com.goodlinkage&hl=en',
        kind: 'store',
        icon: 'android',
      },
    ],
    credentials: {
      note: 'Demo account',
      sets: [{ label: 'App login', username: 'test@gmail.com', password: 'qwerty' }],
    },
  },
  {
    id: 'beda',
    name: 'Beda Consult',
    period: '2024',
    logo: bedalogo,
    tagline: 'Corporate consulting website',
    description:
      'A corporate website for a consulting firm, covering service pages, company information, and a contact pipeline.',
    points: [
      'Built and shipped the production marketing website',
      'Structured content for services, team, and contact pages',
      'Optimized for performance and mobile responsiveness',
    ],
    links: [{ label: 'Visit site', url: 'https://www.bedaconsult.com/', kind: 'primary' }],
    credentials: null,
  },
  {
    id: 'hms',
    name: 'HMS — Hotel Management System',
    period: '2024',
    logo: HMSLogo, // placeholder — AI-generated artwork to be added
    tagline: 'Multi-module hospitality platform',
    description:
      'An all-in-one hotel operations suite: one login unlocks every module below — rooms, events, finance, payroll, inventory, and restaurant operations — each with its own workspace.',
    points: [
      'Designed a unified login that routes staff into the module they need',
      'Built modules for rooms, events, finance, payroll, and inventory',
      'Added a restaurant POS with cashier and housekeeping workflows',
    ],
    links: [
      { label: 'Live demo', url: 'https://btech-test-426415920655.us-central1.run.app', kind: 'primary' },
    ],
    credentials: {
      note: 'Log in once with the main account, then open any module below using its own credentials.',
      sets: [
        { label: 'Main login', username: 'demo', password: 'demo123' },
        { label: 'Room management', username: 'demo', password: 'demo123' },
        { label: 'Events & conferences', username: 'demo', password: 'demo123' },
        { label: 'Financial', username: 'demo', password: 'demo123' },
        { label: 'Payroll management', username: 'WY00', password: '12346' },
        { label: 'Inventory — admin', username: 'admin@mail.com', password: 'codeastro.com' },
        { label: 'Inventory — cashier', username: 'cachier@mail.com', password: 'codeastro.com' },
        { label: 'Restaurant — admin', username: 'demo@mail.com', password: 'demo123' },
        { label: 'Restaurant — cashier', username: 'cachier@mail.com', password: 'demo123' },
        { label: 'Housekeeping / CRM / maintenance', username: 'admin', password: 'admin123 or password123' },
      ],
    },
  },
  {
    id: 'sms',
    name: 'SMS — School Management System',
    period: '2024',
    logo: SMSLogo, // placeholder — AI-generated artwork to be added
    tagline: 'British school administration suite',
    description:
      'A school administration platform covering enrolment, academics, and day-to-day operations for staff and administrators.',
    points: [
      'Built core administration workflows for staff and students',
      'Implemented role-based access for different staff types',
      'Shipped a responsive interface for desktop and tablet use',
    ],
    links: [
      { label: 'Live demo', url: 'https://british-school-suite.vercel.app/', kind: 'primary' },
    ],
    credentials: {
      note: 'Demo credentials are provided on the site itself.',
      sets: [],
    },
  },
  {
    id: 'vms',
    name: 'VMS — Visitor Management System',
    period: '2024',
    logo: VMSLogo, // placeholder — replace when ready
    tagline: 'Visitor check-in/out for Minecofin',
    description:
      'A system to monitor and control visitor check-in and check-out, currently in active use by Minecofin (Rwanda Ministry of Finance and Economic Planning).',
    points: [
      'Developed using Django and PostgreSQL',
      'Implemented real-time tracking of visitor movement',
      'Created automated notifications for hosts',
      'Currently in production use by Minecofin',
    ],
    links: [],
    credentials: null,
    internalNote: 'Internal system — no public demo available.',
  },

  
  {
    id: 'eshop',
    name: 'E-Shop',
    period: 'Feb 2024 — May 2024',
    logo: null, // placeholder — AI-generated artwork to be added
    tagline: 'E-commerce, mobile + web',
    description:
      'An e-commerce platform spanning a mobile storefront and a web admin panel, with ordering, payments, and live tracking.',
    points: [
      'Built mobile storefront with React Native, backend on Node.js + MongoDB',
      'Implemented ordering, payment processing, and real-time order tracking',
      'Designed and built the admin panel using React.js',
    ],
    links: [],
    credentials: null,
    internalNote: 'No public demo yet.',
  },
]
