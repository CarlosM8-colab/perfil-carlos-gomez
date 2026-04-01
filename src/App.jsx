import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            CG
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#inicio" className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Inicio</a>
            <a href="#sobre-mi" className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Sobre mí</a>
            <a href="#habilidades" className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Habilidades</a>
            <a href="#contacto" className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                <span className="text-5xl">👨‍💻</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
              Carlos Gomez
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">
              Full-Stack Developer
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              Rosario, Argentina
            </p>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Apasionado por crear soluciones web modernas y escalables. Especializado en React, Node.js y tecnologías cloud.
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <a href="#contacto" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition">
              Contactame
            </a>
            <a href="#sobre-mi" className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              Más sobre mí
            </a>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Sobre mí
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Soy un desarrollador Full-Stack con experiencia en la creación de aplicaciones web modernas y responsivas. Me encanta trabajar con tecnologías de vanguardia y resolver problemas complejos de manera elegante.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Con base en Rosario, Argentina, he trabajado en diversos proyectos que van desde startups hasta empresas establecidas, siempre enfocándome en la calidad del código y la experiencia del usuario.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Cuando no estoy programando, disfruto aprendiendo nuevas tecnologías, contribuyendo a proyectos open source y compartiendo conocimiento con la comunidad de desarrolladores.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🎓</span>
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Educación Continua</h3>
                    <p className="text-slate-600 dark:text-slate-300">Siempre aprendiendo nuevas tecnologías</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">💼</span>
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Experiencia Profesional</h3>
                    <p className="text-slate-600 dark:text-slate-300">Múltiples proyectos exitosos</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🚀</span>
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Innovación</h3>
                    <p className="text-slate-600 dark:text-slate-300">Siempre buscando nuevas soluciones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Habilidades
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-3xl">🎨</span> Frontend
              </h3>
              <ul className="space-y-3">
                <li className="text-slate-600 dark:text-slate-300">React & Next.js</li>
                <li className="text-slate-600 dark:text-slate-300">Tailwind CSS</li>
                <li className="text-slate-600 dark:text-slate-300">TypeScript</li>
                <li className="text-slate-600 dark:text-slate-300">Responsive Design</li>
                <li className="text-slate-600 dark:text-slate-300">UI/UX Principles</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-3xl">⚙️</span> Backend
              </h3>
              <ul className="space-y-3">
                <li className="text-slate-600 dark:text-slate-300">Node.js & Express</li>
                <li className="text-slate-600 dark:text-slate-300">Python & FastAPI</li>
                <li className="text-slate-600 dark:text-slate-300">RESTful APIs</li>
                <li className="text-slate-600 dark:text-slate-300">Bases de Datos</li>
                <li className="text-slate-600 dark:text-slate-300">Autenticación & Seguridad</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-3xl">🛠️</span> Herramientas
              </h3>
              <ul className="space-y-3">
                <li className="text-slate-600 dark:text-slate-300">Git & GitHub</li>
                <li className="text-slate-600 dark:text-slate-300">Docker & Cloud</li>
                <li className="text-slate-600 dark:text-slate-300">CI/CD Pipelines</li>
                <li className="text-slate-600 dark:text-slate-300">Testing & QA</li>
                <li className="text-slate-600 dark:text-slate-300">DevOps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Contacto
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
            ¿Tienes una pregunta o propuesta? No dudes en contactarme. Responderé lo antes posible.
          </p>

          <div className="space-y-6">
            <a 
              href="mailto:gomezcarlosa98@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition text-lg font-semibold"
            >
              <span>📧</span>
              gomezcarlosa98@gmail.com
            </a>

            <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                O conéctate conmigo en:
              </p>
              <div className="flex gap-4 justify-center">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:bg-purple-600 dark:hover:bg-purple-600 text-slate-700 dark:text-slate-300 hover:text-white transition text-xl">
                  🐙
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-700 dark:text-slate-300 hover:text-white transition text-xl">
                  💼
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:bg-blue-400 dark:hover:bg-blue-400 text-slate-700 dark:text-slate-300 hover:text-white transition text-xl">
                  𝕏
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            © 2026 Carlos Gomez. Todos los derechos reservados.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Desarrollado con React, Tailwind CSS y Vite
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
