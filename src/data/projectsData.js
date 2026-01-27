import payrollImage from '../assets/payroll-landing-page.png';
import currencyImage from '../assets/currency-converter.png';
import smartInboxImage from '../assets/smart-inbox.png';
import opportuneImage from '../assets/opportune.png';

const projects = [
  {
    id: 'smart-inbox',
    title: 'SmartInbox',
    type: 'AI-Powered Email Client',
    thumbnail: smartInboxImage,
    description: "An intelligent email management interface that leverages AI to streamline communication. By integrating directly with Gmail via Google OAuth, the application analyzes incoming messages and generates context-aware reply suggestions, significantly reducing the time spent on manual drafting.",
    detailedPoints: [
      "Integrated Google OAuth 2.0 for secure, real-time access to user email threads.",
      "Developed an AI-enabled auto-reply engine that reads message content and suggests professional responses.",
      "Built a high-performance frontend to handle dense message data with a focus on readability.",
      "Implemented a Node.js/Express backend to bridge the gap between AI processing and the Gmail API."
    ],
    techStack: [
      { name: "React", slug: "react" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Express", iconUrl: "https://cdn.simpleicons.org/express" },
      { name: "JWT", iconUrl: "https://www.jwt.io/img/pic_logo.svg" },
      { name: "OAuth", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" },
    ],
    liveUrl: 'https://smart-inbox-client.vercel.app/login',
  },
  {
    id: 'opportune',
    title: 'Opportune',
    type: 'Backend & Identity Architecture',
    thumbnail: opportuneImage,
    description: "A professional discovery platform where I specialized in building the core backend infrastructure. My focus was on creating a secure, frictionless entry point for users through advanced identity management and social authentication.",
    detailedPoints: [
      "Engineered the backend authentication architecture using the MERN stack.",
      "Successfully implemented Google and GitHub OAuth 2.0 integrations for simplified user onboarding.",
      "Managed secure session handling and data persistence for user profiles and project uploads.",
      "Optimized server-side logic to handle concurrent authentication requests efficiently."
    ],
    techStack: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", iconUrl: "https://cdn.simpleicons.org/express" },
      { name: "OAuth", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" },
      { name: "MongoDB", slug: "mongodb" }
    ],
    liveUrl: 'https://opportune-client.vercel.app/',
  },
  {
    id: 'payroll',
    title: 'Payroll Management System',
    type: 'Enterprise MERN Application',
    thumbnail: payrollImage,
    description: "A dual-access management system designed for organizational efficiency. The platform features a unique workflow where HR manages employee onboarding, while Admins hold final approval authority. Once approved, the system automates financial logic based on hours and base pay.",
    detailedPoints: [
      "Designed a multi-tier authentication flow for Admin and HR roles with specific permission sets.",
      "Implemented an Admin approval queue that dynamically updates employee status across the database.",
      "Developed a custom calculation engine for salary processing based on real-time working hours and base pay metrics.",
      "Built an interactive analytics dashboard using charts to visualize department-wise attendance and login status."
    ],
    techStack: [
      { name: "React", slug: "react" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Express", iconUrl: "https://cdn.simpleicons.org/express" },
      { name: "JWT", iconUrl: "https://www.jwt.io/img/pic_logo.svg" }
    ],
    liveUrl: 'https://employee-payroll-frontend-six.vercel.app',
  },
  {
    id: 'converter',
    title: 'Currency Converter',
    type: 'Full-Stack Utility',
    thumbnail: currencyImage,
    description: "A clean, efficient utility application designed for instant global currency conversion. Built using the MERN stack, it provides a real-time interface for users to calculate exchange rates with minimal latency.",
    detailedPoints: [
      "Built a responsive React interface for seamless input and instant result calculation.",
      "Developed a Node.js backend to manage API calls and ensure data accuracy.",
      "Implemented a history or favorites feature (if applicable) to track frequent conversions.",
      "Focused on a minimalist UI/UX to ensure speed and ease of use on mobile devices."
    ],
    techStack: [
      { name: "React", slug: "react" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", iconUrl: "https://cdn.simpleicons.org/express" },
      { name: "MongoDB", slug: "mongodb" }
    ],
    liveUrl: 'https://currency-converter-app-frontend.vercel.app',
  }
];

export default projects;
