import Header from "../../../../components/header/header";

export default function ProfessionalEditProfile() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Editar Mi Perfil</h2>
            <p className="text-gray-600">Actualiza tu información profesional y mejora tu visibilidad</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition flex items-center">
            <i className="fas fa-eye mr-2"></i>
            Vista Previa
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Información Personal</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input type="text" defaultValue="Juan" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Apellidos</label>
                  <input type="text" defaultValue="López Martínez" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" defaultValue="juan.lopez@email.com" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input type="tel" defaultValue="+34 612 345 678" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ciudad</label>
                  <input type="text" defaultValue="Madrid" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Nacimiento</label>
                  <input type="date" defaultValue="1990-05-15" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Resumen Profesional</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Título Profesional</label>
                  <input type="text" defaultValue="Desarrollador Full Stack Senior" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Años de Experiencia</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option value="0-1">0-1 años</option>
                    <option value="2-3">2-3 años</option>
                    <option value="4-5" selected>4-5 años</option>
                    <option value="6-10">6-10 años</option>
                    <option value="10+">Más de 10 años</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Descripción Profesional</label>
                  <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-3 py-2" 
                    defaultValue="Desarrollador Full Stack con 5 años de experiencia en tecnologías web modernas. Especializado en React, Node.js y arquitecturas cloud. Apasionado por crear soluciones escalables y mantener código limpio.">
                  </textarea>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Habilidades Técnicas</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lenguajes de Programación</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Java</span>
                  </div>
                  <input type="text" placeholder="Agregar habilidad..." className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Frameworks y Librerías</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Express</span>
                  </div>
                  <input type="text" placeholder="Agregar framework..." className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Experiencia Laboral</h3>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                      <input type="text" defaultValue="TechCorp Solutions" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cargo</label>
                      <input type="text" defaultValue="Senior Full Stack Developer" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Fecha Inicio</label>
                      <input type="date" defaultValue="2022-01-15" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Fecha Fin</label>
                      <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Trabajo actual" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
                    <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      defaultValue="Desarrollo de aplicaciones web escalables usando React y Node.js. Liderazgo de un equipo de 3 desarrolladores junior. Implementación de arquitecturas microservicios en AWS.">
                    </textarea>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  <i className="fas fa-plus mr-2"></i>Agregar Experiencia
                </button>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Educación</h3>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Institución</label>
                      <input type="text" defaultValue="Universidad Politécnica de Madrid" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Título</label>
                      <input type="text" defaultValue="Ingeniería Informática" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Año Graduación</label>
                      <input type="number" defaultValue="2020" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                    </div>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  <i className="fas fa-plus mr-2"></i>Agregar Educación
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Completitud del Perfil</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Información Personal</span>
                  <span className="text-sm font-medium text-green-600">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Experiencia</span>
                  <span className="text-sm font-medium text-yellow-600">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Habilidades</span>
                  <span className="text-sm font-medium text-blue-600">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    Tu perfil está al 85% completo. Completa tu educación para mejorar tu visibilidad.
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Settings */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Configuración</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Perfil Público</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Disponible para Ofertas</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Notificaciones Email</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Save Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition">
                  <i className="fas fa-save mr-2"></i>
                  Guardar Cambios
                </button>
                <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg transition">
                  <i className="fas fa-times mr-2"></i>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}