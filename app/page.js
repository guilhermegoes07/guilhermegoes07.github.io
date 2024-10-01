"use client";

import React from "react";

import { useState } from "react";

export default function Home() {

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="flex justify-between items-center p-6 border-b border-gray-600">
        <div className="text-3xl font-bold">SANTIAGO PORTFOLIO</div>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold">
          HELLO!
          <br />I Am <span className="text-red-500">Guilherme Santiago</span>
        </h1>
        <p className="mt-4 max-w-md text-gray-300">
          Hello! My name is Guilherme, and I’m a Software Engineer with a deep
          passion for technology, a journey that began when I started coding at
          the age of 12.
        </p>
        <div className="mt-8 space-x-4">
          <a
            href="https://github.com/guilhermegoes07"
            target="_blank" // abre em uma nova aba
            rel="noopener noreferrer"
          >
            <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-200">
              View Work
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-santiago-5697202bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="border border-red-500 text-red-500 px-6 py-2 rounded-md hover:bg-red-500/30 transition duration-200"
              onClick={() => setIsModalOpen(true)}
            >
              Hire Me
            </button>
          </a>
        </div>
      </section>
      <section className="bg-white text-gray-900 py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">I Am Modern Web Designer</h2>
        <p className="max-w-md mx-auto text-gray-600">
          My job is to solve your problems in the most effective way, making
          them run smoothly. I can turn your dreams into reality by creating the
          plugins or website you've always wanted!
        </p>
      </section>

      <section className="py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-bold flex items-center space-x-2">
              <span className="text-red-500">🖥️</span>
              <span>Web Development</span>
            </h3>
            <p className="mt-2 text-gray-400">
              High-quality development of sites at the professional level.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-bold flex items-center space-x-2">
              <span className="text-red-500">📱</span>
              <span>Mobile Apps</span>
            </h3>
            <p className="mt-2 text-gray-400">
              Professional development of applications for Android.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-bold flex items-center space-x-2">
              <span className="text-red-500">🔌</span>
              <span>Plugins</span>
            </h3>
            <p className="mt-2 text-gray-400">
              I make high-quality minecraft plugins of any category at a
              professional level.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-800">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>

        <div className="mb-4">
          <div className="flex justify-between text-sm font-medium">
            <span>Web Development</span>
            <span>80%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
            <div
              className="bg-red-500 h-2 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm font-medium">
            <span>Java Development</span>
            <span>70%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
            <div
              className="bg-red-500 h-2 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm font-medium">
            <span>English</span>
            <span>70%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
            <div
              className="bg-red-500 h-2 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
      </section>
      <div className="bg-gray-900 text-white min-h-screen">
        <section className="text-center py-16 px-8">
          <h1 className="text-4xl md:text-6xl text-red-500 font-bold mb-8">
            About Me
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">📚 Education</h2>
              <ul className="text-gray-400">
                <li>
                  <strong>First Courses (2018 — 2020)</strong>
                </li>
                <ul className="ml-4">
                  <li>
                    MongoDB on cloud, from zero to cluster - Jorge Sant'ana
                  </li>
                  <li>Advanced Minecraft Development - Iãn Guimarães</li>
                  <li>Standard Kotlin Development - Gabriel Ferrari</li>
                  <li>
                    Android Development: Learning and Creating 18 Apps -
                    Jamilton Damasceno
                  </li>
                </ul>
                <li className="mt-4">
                  <strong>Deepening into Web Development (2020 — 2021)</strong>
                </li>
                <ul className="ml-4">
                  <li>Complete Web Development - Jamilton Damasceno</li>
                </ul>
                <li className="mt-4">
                  <strong>Unesp - Computer Science (2024 — 2028)</strong>
                </li>
                <p className="ml-4 text-gray-400"></p>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2"> 💻 Experience</h2>
              <div className="grid grid-cols-2 gap-2 mt-10">
                <div className="bg-gray-900 py-5 px-10 rounded-lg shadow-lg flex items-center  transition-transform duration-200 hover:scale-105 cursor-pointer">
                  <img
                    src="/fachinilogo.jpeg"
                    alt="Fachinit Logo"
                    className="w-10 h-10 mr-4"
                  />
                  <p>Fachini IT</p>
                </div>

                <div className="bg-gray-900 py-5 px-10 rounded-lg shadow-lg flex items-center  transition-transform duration-200 hover:scale-105 cursor-pointer">
                  <img
                    src="/seniorlogo.jpeg"
                    alt="Senior Logo"
                    className="w-10 h-10 mr-4"
                  />
                  <p>Senior Studios</p>
                </div>

                <div className="bg-gray-900 py-5 px-10 rounded-lg shadow-lg flex items-center  transition-transform duration-200 hover:scale-105 cursor-pointer">
                  <img
                    src="/devroomlogo.jpeg"
                    alt="Devroom Logo"
                    className="w-10 h-10 mr-4"
                  />
                  <p>Devroom</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="text-center py-8 text-gray-500">
          <p>&copy; 2024 Santiago. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
