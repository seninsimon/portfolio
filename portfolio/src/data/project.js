// src/data/projects.js

export const projects = [
  {
    id: 1,
    title: "TaxTotal UK – HMRC PDF Data Automation",
    description:
      "Worked on a UK-based tax platform to populate HMRC data into structured PDFs using Django and Python.",
    image:
      "https://images.unsplash.com/photo-1581092919535-7146c9a9020c?auto=format&fit=crop&w=800&q=80",
    category: "backend",
    technologies: ["Django", "Python", "PostgreSQL"],
    tags: ["PDF Generation", "HMRC", "Automation"],
    links: {
      demo: null,
      github: "https://github.com/seninsimon/hmrcTaxReturn",
    },
  },

  {
    id: 2,
    title: "AI Transaction Module – Bank Statement Extraction",
    description:
      "Built an AI-powered transaction module to extract data from bank statements and store structured entries in PostgreSQL.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    category: "ai",
    technologies: ["Django", "PostgreSQL", "Gemini Flash 2.0"],
    tags: ["AI Integration", "FinTech", "Data Extraction"],
    links: {
      demo: null,
      github: "https://github.com/seninsimon/bank-statement-extractor-AI-server",
    },
  },

  {
    id: 3,
    title: "Trident Logistics – Advanced Data Table UI",
    description:
      "Implemented a full-featured Mantine React Table for managing and displaying large logistics datasets efficiently.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    category: "frontend",
    technologies: ["React", "Mantine UI", "TypeScript"],
    tags: ["Tables", "UI Development", "Logistics"],
    links: {
      demo: "https://tridentlogisticsv2.vercel.app/",
      github: "https://github.com/seninsimon/tridentlogisticsv2",
    },
  },

  {
    id: 4,
    title: "Meridian Logistics & Customer Portal",
    description:
      "Developed a customer-facing portal for enquiries, quotation approvals, and logistics workflow tracking , also worked on admin side.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    category: "fullstack",
    technologies: ["React", "SQL", "Django"],
    tags: [ "Full Stack", "Business Workflow", "company project"],
    links: {
      demo: null,
      github: null,
    },
  },

  {
    id: 5,
    title: "Bloom, Artisan – Ecommerce Platforms",
    description:
      "Full-stack ecommerce project with product listings, cart, checkout, and admin management features.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    category: "fullstack",
    technologies: ["React", "Django", "SQL"],
    tags: ["E-commerce", "Full Stack", "company project"],
    links: {
      demo: null,
      github: null,
    },
  },

  {
    id: 6,
    title: "Event Management System – Woxro",
    description:
      "Worked on an event management platform with Next.js, Node.js, and MongoDB during my time at Woxro.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    category: "fullstack",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    tags: ["Events", "Company Project", "Web Platform"],
    links: {
      demo: null,
      github: null,
    },
  },

  {
    id: 7,
    title: "task management system",
    description:
      "backend in golang and frontend in reactnative expored go repository patten ",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    category: "mobile",
    technologies: ["golang", "reactnative", "gorm", "postgres", "gin"],
    tags: ["side project", "go", "mobile"],
    links: {
      demo: null,
      github: "https://github.com/seninsimon/go-task-manager",
    },
  },
];
