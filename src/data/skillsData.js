import { 
  Code2, 
  Palette, 
  Database, 
  Layout, 
  Terminal,
  GitBranch,
  Smartphone,
  Server,
  Cloud,
  Cpu,
  FileJson,
  Workflow
} from 'lucide-react';

export const skillsData = {
  title: "Skills & Technologies",
  description: "Technologies and tools I work with to bring ideas to life",
  categories: [
    {
      name: "Development",
      skills: [
        { icon: Code2, name: "MERN Full Stack", color: "text-yellow-500" },
        { icon: Code2, name: "Next.j", color: "text-blue-500" },
        
      ]
    },
    {
      name: "AI/ML",
      skills: [
        { icon: Layout, name: "Kaggle", color: "text-cyan-500" },
        { icon: Workflow, name: "Python", color: "text-purple-500" },
        { icon: Code2, name: "", color: "text-gray-800" },
        { icon: Smartphone, name: "Responsive Design", color: "text-green-500" }
      ]
    },
    {
      name: "Backend & Tools",
      skills: [
        { icon: Server, name: "Node.js", color: "text-green-600" },
        { icon: Database, name: "MongoDB", color: "text-green-500" },
        { icon: Terminal, name: "VS Code", color: "text-blue-500" },
        { icon: Cloud, name: "Vercel", color: "text-gray-800" }
      ]
    }
  ],
  learning: [
    { icon: Cpu, name: "Advanced React Patterns", color: "text-blue-500" },
    { icon: Server, name: "Express.js", color: "text-gray-600" },
    { icon: Cloud, name: "AWS Services", color: "text-orange-500" },
    { icon: Database, name: "PostgreSQL", color: "text-blue-600" }
  ]
};
