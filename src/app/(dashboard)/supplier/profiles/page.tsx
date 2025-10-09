import Header from "../../../../components/header/header";

export default function SupplierProfiles() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Base de Perfiles</h2>
            <p className="text-gray-600">Gestiona tu base de datos de candidatos profesionales</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition flex items-center">
            <i className="fas fa-plus mr-2"></i>
            Agregar Perfil
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-blue-600">456</div>
                <div className="text-gray-600">Total Perfiles</div>
              </div>
              <i className="fas fa-users text-blue-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600">234</div>
                <div className="text-gray-600">Disponibles</div>
              </div>
              <i className="fas fa-user-check text-green-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-yellow-600">89</div>
                <div className="text-gray-600">En Proceso</div>
              </div>
              <i className="fas fa-clock text-yellow-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-purple-600">133</div>
                <div className="text-gray-600">Colocados</div>
              </div>
              <i className="fas fa-handshake text-purple-600 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Todos los estados</option>
                <option value="available">Disponible</option>
                <option value="interviewing">En entrevistas</option>
                <option value="placed">Colocado</option>
                <option value="inactive">Inactivo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Área</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Todas las áreas</option>
                <option value="it">Tecnología</option>
                <option value="marketing">Marketing</option>
                <option value="design">Diseño</option>
                <option value="sales">Ventas</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Experiencia</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Cualquier experiencia</option>
                <option value="junior">Junior (0-2 años)</option>
                <option value="mid">Mid (3-5 años)</option>
                <option value="senior">Senior (6+ años)</option>
              </select>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Buscar</label>
              <input type="text" placeholder="Nombre, skills..." className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Profile Card 1 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JL
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">Juan López</h3>
                  <p className="text-gray-600">Desarrollador Full Stack</p>
                  <div className="flex items-center mt-1">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Disponible
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 text-sm mb-3">
                  Desarrollador con 5 años de experiencia en React, Node.js y bases de datos. Especializado en aplicaciones web modernas.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Node.js</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">MongoDB</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">TypeScript</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Experiencia:</span>
                  <span className="font-medium">5 años</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Salario esperado:</span>
                  <span className="font-medium">$80k - $100k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ubicación:</span>
                  <span className="font-medium">Madrid / Remoto</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Último contacto:</span>
                  <span className="font-medium">Hace 2 días</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Ver Perfil
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Contactar
                </button>
              </div>
            </div>
          </div>

          {/* Profile Card 2 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MG
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">María González</h3>
                  <p className="text-gray-600">Diseñadora UX/UI Senior</p>
                  <div className="flex items-center mt-1">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      En entrevistas
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 text-sm mb-3">
                  Diseñadora senior con amplia experiencia en productos digitales, research y prototipado. Portfolio destacado.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Figma</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Sketch</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Prototyping</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Research</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Experiencia:</span>
                  <span className="font-medium">7 años</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Salario esperado:</span>
                  <span className="font-medium">$70k - $90k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ubicación:</span>
                  <span className="font-medium">Barcelona</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estado proceso:</span>
                  <span className="font-medium text-yellow-600">2ª entrevista</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Ver Perfil
                </button>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Seguimiento
                </button>
              </div>
            </div>
          </div>

          {/* Profile Card 3 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  CR
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">Carlos Rodríguez</h3>
                  <p className="text-gray-600">Data Scientist</p>
                  <div className="flex items-center mt-1">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      Colocado
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 text-sm mb-3">
                  Científico de datos con expertise en ML, Python y análisis predictivo. Experiencia en startups y enterprise.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Machine Learning</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">SQL</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">TensorFlow</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Experiencia:</span>
                  <span className="font-medium">6 años</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Salario actual:</span>
                  <span className="font-medium">$95k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Empresa:</span>
                  <span className="font-medium">TechCorp</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fecha colocación:</span>
                  <span className="font-medium">Sep 2025</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Ver Historial
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Evaluar
                </button>
              </div>
            </div>
          </div>

          {/* Profile Card 4 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  AL
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">Ana López</h3>
                  <p className="text-gray-600">Marketing Manager</p>
                  <div className="flex items-center mt-1">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Disponible
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 text-sm mb-3">
                  Especialista en marketing digital con experiencia en campañas, analytics y growth hacking. ROI comprobado.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Google Ads</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Analytics</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">SEO</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Growth</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Experiencia:</span>
                  <span className="font-medium">4 años</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Salario esperado:</span>
                  <span className="font-medium">$60k - $80k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ubicación:</span>
                  <span className="font-medium">Valencia / Remoto</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Disponibilidad:</span>
                  <span className="font-medium text-green-600">Inmediata</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Ver Perfil
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Contactar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}