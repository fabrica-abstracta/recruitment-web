import Header from "../../../../components/header/header";

export default function ProfessionalJobSearch() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Buscar Oportunidades</h2>
            <p className="text-gray-600">Encuentra empleos que se adapten a tu perfil y experiencia</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition flex items-center">
            <i className="fas fa-bell mr-2"></i>
            Crear Alerta
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Buscar empleos</label>
              <input type="text" placeholder="Título, empresa, habilidades..." className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ubicación</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Cualquier ubicación</option>
                <option value="remote">Remoto</option>
                <option value="madrid">Madrid</option>
                <option value="barcelona">Barcelona</option>
                <option value="valencia">Valencia</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Experiencia</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Cualquier nivel</option>
                <option value="junior">Junior (0-2 años)</option>
                <option value="mid">Mid (3-5 años)</option>
                <option value="senior">Senior (6+ años)</option>
              </select>
            </div>
            <div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition mt-6">
                <i className="fas fa-search mr-2"></i>
                Buscar
              </button>
            </div>
          </div>
          
          {/* Advanced Filters */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Salario mínimo</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option value="">Sin mínimo</option>
                  <option value="30000">€30,000+</option>
                  <option value="50000">€50,000+</option>
                  <option value="70000">€70,000+</option>
                  <option value="100000">€100,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de contrato</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option value="">Cualquier tipo</option>
                  <option value="permanent">Indefinido</option>
                  <option value="contract">Temporal</option>
                  <option value="freelance">Freelance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Modalidad</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option value="">Cualquier modalidad</option>
                  <option value="remote">Remoto</option>
                  <option value="hybrid">Híbrido</option>
                  <option value="onsite">Presencial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Publicado</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option value="">Cualquier fecha</option>
                  <option value="1">Último día</option>
                  <option value="7">Última semana</option>
                  <option value="30">Último mes</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">156 empleos</span> encontrados que coinciden con tu búsqueda
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Ordenar por:</span>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option value="relevance">Relevancia</option>
              <option value="date">Fecha</option>
              <option value="salary">Salario</option>
              <option value="company">Empresa</option>
            </select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Job Card 1 - Recommended */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition border-l-4 border-blue-500">
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                    ⭐ Recomendado
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800">Senior React Developer</h3>
                  <p className="text-gray-600">TechCorp Solutions</p>
                </div>
                <button className="text-gray-400 hover:text-red-500 transition">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-map-marker-alt mr-2 w-4"></i>
                  <span>Madrid • Remoto</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-euro-sign mr-2 w-4"></i>
                  <span className="font-medium text-green-600">€80,000 - €120,000</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-clock mr-2 w-4"></i>
                  <span>Publicado hace 2 días</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">TypeScript</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Node.js</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">+3 más</span>
              </div>
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                Únete a nuestro equipo para desarrollar aplicaciones web innovadoras usando las últimas tecnologías. Buscamos un desarrollador senior con experiencia en React y ecosistema JavaScript.
              </p>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Aplicar Ahora
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition">
                  Ver Más
                </button>
              </div>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">Frontend Engineer</h3>
                  <p className="text-gray-600">StartupXYZ</p>
                </div>
                <button className="text-gray-400 hover:text-red-500 transition">
                  <i className="far fa-heart"></i>
                </button>
              </div>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-map-marker-alt mr-2 w-4"></i>
                  <span>Barcelona • Híbrido</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-euro-sign mr-2 w-4"></i>
                  <span className="font-medium text-green-600">€65,000 - €85,000</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-clock mr-2 w-4"></i>
                  <span>Publicado hace 1 semana</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Vue.js</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">JavaScript</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">CSS</span>
              </div>
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                Startup fintech en crecimiento busca frontend engineer para crear interfaces de usuario excepcionales. Ambiente dinámico y oportunidades de crecimiento.
              </p>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Aplicar Ahora
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition">
                  Ver Más
                </button>
              </div>
            </div>
          </div>

          {/* Job Card 3 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">Full Stack Developer</h3>
                  <p className="text-gray-600">InnovaTech Labs</p>
                </div>
                <button className="text-red-500 hover:text-red-600 transition">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-map-marker-alt mr-2 w-4"></i>
                  <span>Valencia • Presencial</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-euro-sign mr-2 w-4"></i>
                  <span className="font-medium text-green-600">€70,000 - €95,000</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-clock mr-2 w-4"></i>
                  <span>Publicado hace 3 días</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Django</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">React</span>
              </div>
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                Laboratorio de innovación tecnológica busca desarrollador full stack para proyectos de I+D. Oportunidad única de trabajar en tecnologías emergentes.
              </p>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Aplicar Ahora
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition">
                  Ver Más
                </button>
              </div>
            </div>
          </div>

          {/* Job Card 4 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">UI/UX Designer</h3>
                  <p className="text-gray-600">DesignStudio Co.</p>
                </div>
                <button className="text-gray-400 hover:text-red-500 transition">
                  <i className="far fa-heart"></i>
                </button>
              </div>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-map-marker-alt mr-2 w-4"></i>
                  <span>Madrid • Híbrido</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-euro-sign mr-2 w-4"></i>
                  <span className="font-medium text-green-600">€55,000 - €75,000</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-clock mr-2 w-4"></i>
                  <span>Publicado hace 5 días</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs">Figma</span>
                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs">Sketch</span>
                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs">Prototyping</span>
              </div>
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                Estudio de diseño reconocido busca diseñador UI/UX para proyectos de clientes premium. Portfolio sólido y experiencia en design systems requeridos.
              </p>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Aplicar Ahora
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition">
                  Ver Más
                </button>
              </div>
            </div>
          </div>

          {/* Job Card 5 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">DevOps Engineer</h3>
                  <p className="text-gray-600">CloudTech Systems</p>
                </div>
                <button className="text-gray-400 hover:text-red-500 transition">
                  <i className="far fa-heart"></i>
                </button>
              </div>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-map-marker-alt mr-2 w-4"></i>
                  <span>Remoto • España</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-euro-sign mr-2 w-4"></i>
                  <span className="font-medium text-green-600">€85,000 - €110,000</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-clock mr-2 w-4"></i>
                  <span>Publicado hace 1 día</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">AWS</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Docker</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Kubernetes</span>
              </div>
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                Empresa líder en cloud computing busca DevOps engineer para gestionar infraestructura escalable. Experiencia en AWS y containerización esencial.
              </p>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Aplicar Ahora
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition">
                  Ver Más
                </button>
              </div>
            </div>
          </div>

          {/* Job Card 6 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">Product Manager</h3>
                  <p className="text-gray-600">GrowthCorp</p>
                </div>
                <button className="text-gray-400 hover:text-red-500 transition">
                  <i className="far fa-heart"></i>
                </button>
              </div>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-map-marker-alt mr-2 w-4"></i>
                  <span>Barcelona • Híbrido</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-euro-sign mr-2 w-4"></i>
                  <span className="font-medium text-green-600">€90,000 - €120,000</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fas fa-clock mr-2 w-4"></i>
                  <span>Publicado hace 4 días</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">Agile</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">Analytics</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">Strategy</span>
              </div>
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                Empresa de crecimiento rápido busca Product Manager para liderar el desarrollo de productos digitales. Experiencia en metodologías ágiles y análisis de datos.
              </p>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Aplicar Ahora
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition">
                  Ver Más
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition">
            Cargar Más Empleos
          </button>
        </div>
      </main>
    </div>
  );
}