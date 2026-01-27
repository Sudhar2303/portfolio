import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  ArrowRight,
  Menu,
  ArrowUpRight,
  Copyright,
  X,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import HomeComponent from "../HomeComponent/HomeComponent";
import AboutMeComponent from "../AboutMeComponent/AboutMeComponent";
import ProjectsComponent from "../ProjectsComponent/ProjectsComponent";
import ContactMeComponent from "../ContactMeComponent/ContactMeComponent";
import ViewProject from "../ProjectsComponent/ViewProject";

const HeaderComponent = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    document.body.style.overflow = isNavVisible ? "auto" : "hidden";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
  <Router>
  <header className="sticky top-0 z-40 bg-white border-b border-[#797979]">
      <div className="mx-6 md:mx-16 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold text-black"
        >
          <span className="text-[#b2b4b4]">Sudhar</span>sanan
        </Link>

        {/* Desktop Nav - CENTER */}
        <ul className="hidden md:flex gap-10 font-semibold text-[#707171]">
          <li className="hover:text-black transition-colors">
            <Link to="/" onClick={scrollToTop}>Home</Link>
          </li>
          <li className="hover:text-black transition-colors">
            <Link to="/aboutme" onClick={scrollToTop}>About Me</Link>
          </li>
          <li className="hover:text-black transition-colors">
            <Link to="/projects" onClick={scrollToTop}>Projects</Link>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Let's Talk (Desktop only) */}
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="hidden md:flex items-center gap-2 border border-black px-6 py-2 rounded-full font-semibold"
          >
            Let&apos;s Talk <ArrowRight size={18} />
          </Link>

          {/* Hamburger (Mobile only) */}
          {!isNavVisible && (
            <button
              onClick={toggleNav}
              className="md:hidden border border-black p-2 rounded-full"
            >
              <Menu />
            </button>
          )}
        </div>

      </div>
    </header>



      {/* FULLSCREEN NAV */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 text-white transition ${
          isNavVisible ? "flex" : "hidden"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleNav}
          className="absolute top-6 right-6 border border-white p-2 rounded-full"
        >
          <X />
        </button>

        <ul className="space-y-8 text-2xl font-semibold">
          <li>
            <Link to="/" onClick={toggleNav} className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutme"
              onClick={toggleNav}
              className="hover:text-orange-500"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={toggleNav}
              className="hover:text-orange-500"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/aboutme" element={<AboutMeComponent />} />
        <Route path="/projects" element={<ProjectsComponent />} />
        <Route path="/projects/:id" element={<ViewProject />} />
        <Route path="/contact" element={<ContactMeComponent />} />
      </Routes>

      {/* FOOTER */}
      <footer className="bg-[#010918] text-white">
        {/* Nav + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-10 gap-6">
          <ul className="flex gap-8 font-medium">
            <li>
              <Link to="/" onClick={scrollToTop}>Home</Link>
            </li>
            <li>
              <Link to="/aboutme" onClick={scrollToTop}>About Me</Link>
            </li>
            <li>
              <Link to="/projects" onClick={scrollToTop}>Projects</Link>
            </li>
          </ul>

          <div className="flex gap-4">
            {[faLinkedinIn, faGithub, faYoutube, faInstagram].map(
              (icon, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={icon}
                  className="text-lg p-3 bg-slate-700 rounded-full cursor-pointer hover:bg-orange-500 transition"
                />
              )
            )}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 pb-10 gap-6">
          <p className="text-xl font-semibold text-white/70">
            Stay connected w/ me
          </p>

          <div className="w-full md:w-2/5">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none py-2 text-white"
              />
              <ArrowUpRight />
            </div>
            <hr className="border-white/30 mt-2" />
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center gap-2 text-sm text-white/60 pb-6">
          <Copyright size={16} />
          <p>Copyright 2024 · Made by Sudharsanan</p>
        </div>
      </footer>
    </Router>
  );
};

export default HeaderComponent;
