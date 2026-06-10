import SupportImg from "@/assets/support.jpg";
import WorldImg from "@/assets/world.jpg";
import TeamImg from "@/assets/team.jpg";
import CloudImg from "@/assets/cloud.jpg";
import xIconImg from "@/assets/icons/x-icon.svg";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Wallet,
  Database,
  Cloud,
  Code,
  Workflow,
  LifeBuoy,
} from "lucide-react";

export const navItems = [
  {
    id: 1,
    label: "Home",
    to: "/",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    id: 2,
    label: "About",
    to: "about",
  },
  {
    id: 3,
    label: "Our Ecosystem Pillars",
    to: "",
    items: [
      {
        id: 1,
        label: "Investment & Mentorship",
        to: "investment-and-mentorship",
        description: "Capital, mentorship, and market access for founders.",
      },
      {
        id: 2,
        label: "Data Services",
        to: "data-services",
        description: "Custom datasets, cleaning, and global collection.",
      },
      {
        id: 3,
        label: "Cloud & Hosting",
        to: "cloud-and-Hosting",
        description: "Sovereign AI-ready data centres you can own.",
      },
      {
        id: 4,
        label: "Outsourcing",
        to: "outsourcing",
        description: "Manpower and tech outsourcing to scale your business.",
      },
      {
        id: 5,
        label: "Technology Services",
        to: "technology-services",
        description: "SaaS, DevOps, AI integration, and 24/7 support.",
      },
      {
        id: 6,
        label: "Office & Workspace",
        to: "office-and-workspace",
        description: "Flexible hubs, enterprise facilities, and remote setups.",
      },
    ],
  },
  { id: 4, label: "Why Choose Us", to: "why-mark-one" },
  { id: 5, label: "Contact", to: "contact" },
];

export const socialMediaLinks = [
  {
    id: 1,
    label: "twitter",
    to: "#",
    img: xIconImg,
    hoverColor: "hover:text-blue-700",
  },
  {
    id: 2,
    label: "instagram",
    to: "#",
    icon: Instagram,
    hoverColor: "hover:text-[#E4405F]",
  },
  {
    id: 3,
    label: "linkedin",
    to: "#",
    icon: Linkedin,
    hoverColor: "hover:text-[#0077B5]",
  },
  {
    id: 4,
    label: "facebook",
    to: "#",
    icon: Facebook,
    hoverColor: "hover:text-[#1877F2]",
  },
];

export const quickLinks = [
  { id: 1, label: "About", to: "about" },
  { id: 2, label: "Services", to: "services" },
  { id: 3, label: "Data Vaults", to: "data-vaults" },
  { id: 4, label: "Contact", to: "contact" },
];

export const hero = {
  title: "Capital . Cloud . Confidence",
  titleSwap: "Confidence to Build. Capital to Scale. Cloud to Last",
  subline:
    "We are investors, mentors, and builders of the next-generation AI, SaaS, and data ecosystems.",
  tagline: "Build with our money. Scale with our people. Deploy on our cloud.",
  ctas: [
    {
      id: 1,
      label: "Submit Your Pitch",
      href: "/contact",
      type: "primary",
    },
    {
      id: 2,
      label: "Order a Dataset",
      href: "/contact",
      type: "primary",
    },
    {
      id: 3,
      label: "Host on Our Cloud",
      href: "/contact",
      type: "primary",
    },
  ],
};

export const pillars = [
  {
    id: "investment",
    title: "Investment & Mentorship",
    desc: "We back bold founders building cloud SaaS, AI agents, and outsourcing innovations.",
    Icon: Wallet,
    cta: {
      label: "Submit Your Pitch",
      href: "/contact?type=pitch",
      type: "primary",
    },
  },
  {
    id: "data-services",
    title: "Data Services",
    desc: "Any dataset. Any scale. Anywhere.",
    Icon: Database,
    cta: {
      label: "Order a Dataset",
      href: "/contact?type=dataset",
      type: "primary",
    },
  },
  {
    id: "cloud",
    title: "Cloud & Hosting (Iron Data Vaults)",
    desc: "Don’t just rent the cloud. Own it.",
    Icon: Cloud,
    cta: {
      label: "Host Your Startup in Our Vaults",
      href: "/contact?type=cloud",
      type: "primary",
    },
  },
];

export const ironVaults = {
  title: "Redefining how the world stores and owns data.",
  sub: "The cloud is no longer a service. It’s an asset you can own.",
  bullets: [
    "Sovereign AI data centres",
    "Fractional cloud ownership (tokenized infrastructure)",
    "AI-optimized for training, inference, and high-performance workloads",
  ],
  cta: {
    label: "Invest in the Future of Cloud",
    href: "/contact",
    type: "secondary",
  },
};

export const outsourcing = {
  title: "Manpower & Tech Outsourcing",
  copy: "On-demand teams, global outsourcing, AI testing, multilingual customer support. Flexible models from remote pods to fully managed services.",
  cta: {
    label: "Request Manpower",
    href: "/contact?type=manpower",
    type: "primary",
  },
};

export const techServices = {
  items: [
    {
      id: 1,
      title: "SaaS Development",
      desc: "Build fast, scale globally.",
      Icon: Code,
    },
    {
      id: 2,
      title: "Cloud & DevOps Support",
      desc: "Monitoring, pipelines, automation.",
      Icon: Cloud,
    },
    {
      id: 3,
      title: "AI Agent Integration",
      desc: "Embed intelligent agents into workflows.",
      Icon: Workflow,
    },
    {
      id: 4,
      title: "24/7 Tech Teams",
      desc: "Reliable, cost-efficient, always on.",
      Icon: LifeBuoy,
    },
  ],
  cta: {
    label: "Talk to an Advisor",
    href: "/contact",
    type: "primary",
  },
};

export const workspace = {
  title: "From desk to data centre—we host it all.",
  copy: "Incubation hubs, remote-first infrastructure, and enterprise-grade facilities connected to our cloud.",
  cta: {
    label: "Explore Workspace Solutions",
    href: "/ecosystem/workspace",
    type: "tertiary",
  },
};

export const whyMarkOne = [
  {
    id: 1,
    img: SupportImg,
    title: "Capital + Counsel",
    desc: "We invest and mentor, not just bankroll.",
  },
  {
    id: 2,
    img: CloudImg,
    title: "Data + Cloud",
    desc: "From datasets to sovereign hosting, we deliver the backbone.",
  },
  {
    id: 3,
    img: TeamImg,
    title: "People + Places",
    desc: "Manpower and office infrastructure to scale.",
  },
  {
    id: 4,
    img: WorldImg,
    title: "Global Edge",
    desc: "A network that connects startups to enterprises and investors worldwide.",
  },
];

export const finalCta = {
  title:
    "Your idea deserves capital, cloud, and confidence. We bring all three.",
  buttons: [
    { label: "Upload Pitch Deck", href: "/contact?type=pitch" },
    { label: "Request Dataset", href: "/contact?type=dataset" },
    { label: "Apply for Cloud Hosting", href: "/contact?type=cloud" },
    { label: "Talk to an Advisor", href: "/contact?type=advisor" },
  ],
  footer: "Pitch in. Plug in. Power up—with MARK 1.",
};

export const missionList = [
  "Invest & mentor AI and cloud-driven startups.",
  "Engineer and deliver on-demand data solutions for global AI companies.",
  "Build and operate sovereign data vaults that redefine cloud ownership.",
  "Provide manpower, outsourcing, and office infrastructure to help businesses scale.",
];

export const vissionList = [
  "Democratize the cloud.",
  "Transform data into an asset, not just a service.",
  "Mentor and fund the companies that will shape the AI-powered future.",
];

export const whatWeFund = [
  "Cloud-native SaaS and platform infrastructure",
  "AI Agents and applied AI products",
  "Data tooling and workflows (collection, labelling, quality)",
  "Outsourcing/process innovations that scale AI adoption",
];

export const howWeMentor = [
  "Capital + counsel from operators and domain experts",
  "Go-to-market support and enterprise introductions",
  "Product acceleration inside our cloud infrastructure",
  "Talent and execution support from our outsourcing network",
];

export const programAdvantages = [
  "Incubation inside Iron Data Vaults (GPU-ready, secure)",
  "Co-building sprints to hit key milestones",
  "Optional workspace and remote team setup",
];

export const services = [
  "Custom Datasets — Structured, labelled, and formatted to order.",
  "Data Cleaning & Correction — Turn raw data into ready intelligence.",
  "Global Collection — We’ll go anywhere in the world to get the datasets you need.",
  "Manpower at Scale — From 50 to 5,000 annotators or engineers—delivered on time.",
  "Domain Expertise — Healthcare, finance, legal, retail, logistics.",
];

export const outcomes = [
  "Quality you can audit and trust",
  "Secure pipelines built for AI training & inference",
  "Fast, repeatable delivery for pilots and production",
];

export const solutions = [
  "Sovereign AI Data Centres — Flagship facilities in Delhi and Dehradun, purpose-built for AI and SaaS.",
  "Fractional Cloud Ownership — Don’t just rent—own a piece of the cloud through tokenised infrastructure.",
  "AI-Optimised — Designed for GPU training, inference, and high-performance workloads.",
  "Democratised Access — From startups to enterprises, cloud ownership is no longer a monopoly.",
];

export const whyItMatters = [
  "Control your stack and data residency.",
  "Align costs with asset ownership.",
  "Performance for modern AI pipelines.",
  "New models for national and enterprise sovereignty.",
];

export const outsourcingServices = [
  "Engineers, annotators, customer support, process managers",
  "Remote teams, project outsourcing, or fully managed services",
  "AI model testers, healthcare coders, financial analysts, multilingual support teams",
];

export const outsourcingBenefits = [
  "Rapid team assembly and onboarding",
  "SLAs for quality, security, and delivery",
  "Elastic scale from pilot to production",
];

export const techServicescapabilities = [
  "SaaS & Custom Development — Build fast, scale globally",
  "Cloud & DevOps Support — Monitoring, pipelines, automation",
  "AI Agent Integration — Embed intelligent agents into workflows",
  "24/7 Tech Support Teams — Outsourced, reliable, cost-efficient",
];

export const techServicesoutcomes = [
  "Ship reliable software faster",
  "Hardened infra for AI and data apps",
  "Lower operating costs with round-the-clock coverage",
];

export const officeWorkspaceOfferings = [
  "Incubation Hubs — Fully managed office spaces connected to mentors and cloud services",
  "Remote-First Infrastructure — Build distributed teams globally with our managed setup",
  "Enterprise Facilities — Secure, AI-ready environments with enterprise compliance",
];

export const officeWorkspaceBenefits = [
  "Plug-and-play offices with integrated services",
  "Access to mentors, investors, and partners",
  "Scalable footprint from a few desks to dedicated suites",
];

export const ContactFormFields = [
  {
    name: "First Name",
    label: "First Name",
    placeholder: "John",
    type: "text",
    component: "input",
    required: true,
    rules: {
      required: "First Name is required",
      minLength: {
        value: 3,
        message: "First Name must be at least 3 characters long",
      },
      maxLength: {
        value: 100,
        message: "First Name must not exceed 100 characters",
      },
    },
  },
  {
    name: "Last Name",
    label: "Last Name",
    placeholder: "Doe",
    type: "text",
    component: "input",
    required: true,
    rules: {
      required: "Last Name is required",
      minLength: {
        value: 3,
        message: "Last Name must be at least 3 characters long",
      },
      maxLength: {
        value: 100,
        message: "Last Name must not exceed 100 characters",
      },
    },
  },
  {
    name: "Email",
    label: "Email",
    placeholder: "john.doe@example.com",
    type: "email",
    component: "input",
    required: true,
    rules: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address",
      },
    },
  },
  {
    name: "Phone",
    label: "Phone",
    placeholder: "+91 12345-67890",
    type: "tel",
    component: "input",
    required: false,
    rules: {
      pattern: {
        value: /^\+?[0-9\s\-().]{7,15}$/,
        message: "Please enter a valid phone number",
      },
    },
  },
  {
    name: "Inquiry Type",
    label: "Inquiry Type",
    type: "select",
    placeholder: "Select Category",
    options: [
      "Upload your Pitch Deck",
      "Request a Dataset",
      "Apply for Cloud Hosting",
      "Talk to an Advisor",
    ],
    required: true,
    rules: {
      required: "Inquiry Type is required",
    },
  },
  {
    name: "Message",
    label: "Message",
    type: "textarea",
    placeholder: "Enter your message...",
    required: false,
  },
];
