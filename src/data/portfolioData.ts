import typeScript from "../assets/typescript.png";
import react from "../assets/react.svg";
import js from "../assets/js.svg";
import next from "../assets/next-js.svg";
import RN from "../assets/react-native.svg";
import express from "../assets/express.svg";
import tailwind from "../assets/tailwind.svg";
import framer from "../assets/framer.svg";
import mui from "../assets/mui.svg";
import styled from "../assets/styled.svg";
import css from "../assets/css.svg";
import git from "../assets/git.svg";
import vite from "../assets/vite.svg";
import webpack from "../assets/webpack.svg";
import figma from "../assets/figma.svg";
import vscode from "../assets/vscode.svg";
import node from "../assets/node.svg";
import sanity from "../assets/sanity.svg";
import firebase from "../assets/firebase.svg";

import jibruk from "../assets/images/jibruk.png";
import arif from "../assets/images/arif.png";
import fittrack from "../assets/images/fittrack.png";
import tribe from "../assets/images/tribe.png";

export const portfolioData = {
  personal: {
    name: "Mikiyas Zenebe",
    title: "Frontend Developer",
    tagline:
      "Crafting beautiful, responsive web experiences with modern technologies",
    bio: "Passionate frontend developer with 4+ years of experience building scalable web applications. I specialize in React, TypeScript, and modern CSS frameworks, with a keen eye for design and user experience.",
    email: "alex.thompson@example.com",
    location: "Addis Ababa, Ethiopia",
    social: {
      github: "https://github.com/alexthompson",
      linkedin: "https://linkedin.com/in/alexthompson",
      twitter: "https://twitter.com/alexthompson",
      dribbble: "https://dribbble.com/alexthompson",
    },
  },

  skills: {
    frontend: [
      { name: "React", icon: react, level: 100 },
      { name: "TypeScript", icon: typeScript, level: 100 },
      { name: "JavaScript", icon: js, level: 100 },
      { name: "Next.js", icon: next, level: 100 },
      { name: "ReactNative", icon: RN, level: 100 },
    ],
    styling: [
      { name: "Tailwind CSS", icon: tailwind, level: 100 },
      { name: "Framer Motion", icon: framer, level: 100 },
      { name: "Material UI", icon: mui, level: 100 },
      { name: "Styled Components", icon: styled, level: 100 },
      { name: "CSS", icon: css, level: 100 },
    ],
    tools: [
      { name: "Git", icon: git, level: 100 },
      { name: "Webpack", icon: webpack, level: 100 },
      { name: "Vite", icon: vite, level: 100 },
      { name: "Figma", icon: figma, level: 100 },
      { name: "VS Code", icon: vscode, level: 100 },
    ],
    backend: [
      { name: "Node.js", icon: node, level: 100 },
      { name: "Express", icon: express, level: 100 },
      { name: "Sanity", icon: sanity, level: 100 },
      { name: "Firebase", icon: firebase, level: 100 },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Jibruk E-Commerce",
      description:
        "Jibruk, an e-commerce website that offers a wide selection of trendy shoes and sport materials for sale.",
      image: jibruk,

      tech: ["Next.js", "Sanity CMS", "Tailwind CSS", "Stripe"],
      category: "Web App",
      github: "https://github.com/MikiZenebe/Jibruk--Ecommerce",
      live: "https://jibruk-ecommerce.vercel.app/",
      featured: false,
    },
    {
      id: 2,
      title: "Arif Studios",
      description: "A booking application with stripe payment functionality.",
      image: arif,
      tech: ["React", "Redux", "Tailwind CSS"],
      category: "Web App",
      github: "",
      live: "https://studio.arifstudios.com/",
      featured: true,
    },
    {
      id: 3,
      title: "Fittness Tracker",
      description:
        "A Fitness Tracker, a user can showcase their fitness routine and track their progress.",
      image: fittrack,
      tech: ["React.js", "MUI", "Express", "MongoDB"],
      category: "Web App",
      github: "https://github.com/MikiZenebe/Fitness-Tracker",
      live: "https://miki-fittrack.vercel.app/",
      featured: false,
    },
    {
      id: 4,
      title: "Tribe",
      description:
        "A responsive portfolio website showcasing modern web development techniques with smooth animations and interactive elements.",
      image: tribe,
      tech: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
      category: "Landing Page",
      github: "https://github.com/alexthompson/portfolio",
      live: "https://alexthompson-dev.netlify.app",
      featured: true,
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media management dashboard with analytics, scheduling, and content management features.",
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      category: "Web App",
      github: "https://github.com/alexthompson/social-dashboard",
      live: "https://social-dashboard-demo.netlify.app",
      featured: false,
    },
    {
      id: 6,
      title: "Learning Platform",
      description:
        "An interactive online learning platform with video streaming, progress tracking, and collaborative features.",
      image:
        "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      category: "Web App",
      github: "https://github.com/alexthompson/learning-platform",
      live: "https://learning-platform-demo.netlify.app",
      featured: false,
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content:
        "Alex delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise made our project a huge success.",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
      company: "TechCorp",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO at StartupXYZ",
      content:
        "Working with Alex was a game-changer for our startup. He transformed our ideas into a beautiful, functional web application that exceeded our expectations.",
      avatar:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100",
      company: "StartupXYZ",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Lead at CreativeCo",
      content:
        "Alex has an incredible ability to bring designs to life with pixel-perfect precision. His collaboration skills and technical knowledge are outstanding.",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      company: "CreativeCo",
    },
  ],
};
