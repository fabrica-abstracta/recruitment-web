import Header from "@/components/header/header";

export default function ProfessionalDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Mi Panel Profesional</h2>
          <p className="text-gray-600">Gestiona tu carrera y oportunidades laborales</p>
        </div>

        {/* Profile Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-blue-600">87%</div>
                <div className="text-gray-600">Perfil Completo</div>
              </div>
              <i className="fas fa-user text-blue-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600">12</div>
                <div className="text-gray-600">Aplicaciones</div>
              </div>
              <i className="fas fa-file-alt text-green-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-purple-600">3</div>
                <div className="text-gray-600">Entrevistas Pendientes</div>
              </div>
              <i className="fas fa-calendar text-purple-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-orange-600">42</div>
                <div className="text-gray-600">Ofertas Disponibles</div>
              </div>
              <i className="fas fa-briefcase text-orange-600 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <a href="/professional/edit-profile" className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 block">
            <div className="text-center">
              <i className="fas fa-user-edit text-3xl text-blue-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Editar Perfil</h3>
              <p className="text-gray-600 text-sm">Actualiza tu información profesional</p>
            </div>
          </a>
          
          <a href="/professional/job-search" className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 block">
            <div className="text-center">
              <i className="fas fa-search text-3xl text-green-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Buscar Empleos</h3>
              <p className="text-gray-600 text-sm">Encuentra oportunidades</p>
            </div>
          </a>
          
          <a href="/professional/application-status" className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 block">
            <div className="text-center">
              <i className="fas fa-chart-line text-3xl text-purple-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Estado de Aplicaciones</h3>
              <p className="text-gray-600 text-sm">Seguimiento de aplicaciones</p>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Applications */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Aplicaciones Recientes</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">Desarrollador Full Stack</p>
                      <p className="text-gray-600 text-sm">TechCorp • Aplicado: 22 Oct</p>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      En Revisión
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">$65,000 - $85,000 • Remoto</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">Frontend Developer</p>
                      <p className="text-gray-600 text-sm">StartupXYZ • Aplicado: 20 Oct</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Entrevista
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">$55,000 - $70,000 • Híbrido</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">Backend Engineer</p>
                      <p className="text-gray-600 text-sm">InnovaTech • Aplicado: 18 Oct</p>
                    </div>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      No Seleccionado
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">$70,000 - $90,000 • Presencial</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Jobs */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Trabajos Recomendados</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-blue-600">React Developer</p>
                      <p className="text-gray-600 text-sm">DigitalCore • Publicado hace 2 días</p>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                      Aplicar
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">$60,000 - $80,000 • Remoto</p>
                  <p className="text-sm text-gray-700">Coincidencia: 92% con tu perfil</p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-blue-600">JavaScript Engineer</p>
                      <p className="text-gray-600 text-sm">CodeLab • Publicado hace 1 día</p>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                      Aplicar
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">$58,000 - $75,000 • Híbrido</p>
                  <p className="text-sm text-gray-700">Coincidencia: 88% con tu perfil</p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-blue-600">Senior Frontend</p>
                      <p className="text-gray-600 text-sm">NextGen Solutions • Publicado hace 3 días</p>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                      Aplicar
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">$75,000 - $95,000 • Presencial</p>
                  <p className="text-sm text-gray-700">Coincidencia: 85% con tu perfil</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Completion */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Completa tu Perfil</h3>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div className="bg-blue-600 h-3 rounded-full" style={{width: '87%'}}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center text-green-600">
              <i className="fas fa-check-circle mr-2"></i>
              <span className="text-sm">Información básica</span>
            </div>
            <div className="flex items-center text-green-600">
              <i className="fas fa-check-circle mr-2"></i>
              <span className="text-sm">Experiencia laboral</span>
            </div>
            <div className="flex items-center text-green-600">
              <i className="fas fa-check-circle mr-2"></i>
              <span className="text-sm">Habilidades técnicas</span>
            </div>
            <div className="flex items-center text-gray-400">
              <i className="fas fa-circle mr-2"></i>
              <span className="text-sm">Portafolio de proyectos</span>
            </div>
            <div className="flex items-center text-green-600">
              <i className="fas fa-check-circle mr-2"></i>
              <span className="text-sm">Referencias profesionales</span>
            </div>
            <div className="flex items-center text-gray-400">
              <i className="fas fa-circle mr-2"></i>
              <span className="text-sm">Certificaciones</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}