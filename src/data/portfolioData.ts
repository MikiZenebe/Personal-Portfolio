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
import bookOcean from "../assets/images/mobileBanner.png";
import owl from "../assets/images/owl.png";
import sara from "../assets/images/sara.png";

import temkin from "../assets/images/temkin.png";
import theo from "../assets/images/theo.png";

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
      github: "https://github.com/MikiZenebe/Tribe-LandingPage",
      live: "https://tribe-miki-sass.vercel.app/",
      featured: false,
    },
    {
      id: 5,
      title: "Book Ocean",
      description:
        "a modern fullstack mobile app that helps you discover, explore, and get personalized book recommendations",
      image: bookOcean,
      tech: ["ReactNative", "TypeScript", "Expo", "NodeJs", "MongoDB"],
      category: "Mobile App",
      github: "https://github.com/MikiZenebe/Book-Ocean-Mobile-App",
      live: "",
      featured: false,
    },
    {
      id: 6,
      title: "Owl Events",
      description: "An interactive online event managment system.",
      image: owl,
      tech: ["React", "Redux", "MUI"],
      category: "Web App",
      github: "",
      live: "https://dev.2.0.portal.owlevents.app/",
      featured: true,
    },
    {
      id: 7,
      title: "Sara Events & Marketing",
      description: "An interactive online event managment system.",
      image: sara,
      tech: ["Next.JS", "Tailwind CSS"],
      category: "Web App",
      github: "",
      live: "http://saraeventsandmarketing.com/event",
      featured: true,
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "Temkin Mengistu",
      role: "Backend Dev and DevOps",
      content:
        " I highly recommend Micky Zenebe for his exceptional skills in web development. He transformed my portfolio into something truly remarkable. His talent and attention to detail are evident in every aspect of his work. The website he built for me not only looks stunning but also functions seamlessly across all devices. His ability to bring my vision to  life surpassed my expectations. Working with Micky Zenebe was an absolute pleasure, and I am  incredibly grateful for the  incredible website he created for me.",
      avatar: temkin,
      company: "",
    },
    {
      id: 2,
      name: "Teho",
      role: "Frontend Deloper",
      content:
        "   Mikiyas Zenebe is a talented front-end developer and UI designer with a strong passion for learning and improvement. He is always eager to take on new challenges and is always willing to go the extra mile to get the job done. Mikiyas is also a great communicator and is able to clearly explain complex technical concepts to both technical and non-technical audiences. I highly recommend Mikiyas for any front-end development or UI design project",
      avatar: theo,
      company: "",
    },
  ],
};
