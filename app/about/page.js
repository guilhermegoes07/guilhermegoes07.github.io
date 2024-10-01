import Head from "next/head";

export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>About Me</title>
      </Head>

      <header className="flex justify-between items-center p-6">
        <div className="text-3xl font-bold">SANTIAGO</div>
        <nav>
          <ul className="flex space-x-6">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </ul>
        </nav>
      </header>

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
                <li>MongoDB on cloud, from zero to cluster - Jorge Sant'ana</li>
                <li>Advanced Minecraft Development - Iãn Guimarães</li>
                <li>Standard Kotlin Development - Gabriel Ferrari</li>
                <li>
                  Android Development: Learning and Creating 18 Apps - Jamilton
                  Damasceno
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
  );
}
