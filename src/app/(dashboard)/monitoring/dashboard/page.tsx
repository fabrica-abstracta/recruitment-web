import Header from "../../../../components/header/header";

export default function MonitoringDashboardMain() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Panel de Monitoreo</h2>
          <p className="text-gray-600">Supervisa y administra todo el sistema de reclutamiento</p>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-blue-600">2,456</div>
                <div className="text-gray-600">Total Usuarios</div>
              </div>
              <i className="fas fa-users text-blue-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600">342</div>
                <div className="text-gray-600">Posiciones Activas</div>
              </div>
              <i className="fas fa-briefcase text-green-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-purple-600">89</div>
                <div className="text-gray-600">Contrataciones</div>
              </div>
              <i className="fas fa-handshake text-purple-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-orange-600">98.5%</div>
                <div className="text-gray-600">Uptime Sistema</div>
              </div>
              <i className="fas fa-server text-orange-600 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <i className="fas fa-user-cog text-blue-600 mr-3"></i>
              Gestionar Usuarios
            </h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition w-full">
              Ver Usuarios
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <i className="fas fa-chart-bar text-green-600 mr-3"></i>
              Reportes
            </h3>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition w-full">
              Ver Reportes
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <i className="fas fa-cogs text-purple-600 mr-3"></i>
              Configuración
            </h3>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition w-full">
              Configurar
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <i className="fas fa-shield-alt text-red-600 mr-3"></i>
              Seguridad
            </h3>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition w-full">
              Ver Logs
            </button>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <a href="/dashboard/monitoring/companies" className="bg-white rounded-lg shadow hover:shadow-lg transition p-8 block">
            <div className="text-center">
              <i className="fas fa-building text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Gestión de Empresas</h3>
              <p className="text-gray-600">Administrar clientes, proveedores y usuarios</p>
            </div>
          </a>
          
          <a href="/dashboard/monitoring" className="bg-white rounded-lg shadow hover:shadow-lg transition p-8 block">
            <div className="text-center">
              <i className="fas fa-chart-line text-4xl text-green-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sistema de Monitoreo</h3>
              <p className="text-gray-600">Supervisa el rendimiento del sistema</p>
            </div>
          </a>
          
          <a href="/dashboard/monitoring/index" className="bg-white rounded-lg shadow hover:shadow-lg transition p-8 block">
            <div className="text-center">
              <i className="fas fa-tachometer-alt text-4xl text-purple-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Panel de Control</h3>
              <p className="text-gray-600">Acceso rápido a herramientas admin</p>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Real-time Activity */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Actividad en Tiempo Real</h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">12:45 PM</span>
                  <span>Nuevo usuario registrado: María González</span>
                </div>
                
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">12:42 PM</span>
                  <span>Posición creada: Desarrollador React Senior</span>
                </div>
                
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">12:38 PM</span>
                  <span>Entrevista programada: Ana López - TechCorp</span>
                </div>
                
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">12:35 PM</span>
                  <span>Contrato firmado: Carlos Rodríguez</span>
                </div>
                
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">12:30 PM</span>
                  <span>Pago procesado: $8,500 - StartupXYZ</span>
                </div>
              </div>
            </div>
          </div>

          {/* System Health */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Estado del Sistema</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Servidor Web</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 text-sm">Operativo</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Base de Datos</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 text-sm">Operativo</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">API Gateway</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-yellow-600 text-sm">Advertencia</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Email Service</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 text-sm">Operativo</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Storage</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 text-sm">Operativo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">Métricas de Rendimiento</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">156ms</div>
                <div className="text-gray-600">Tiempo de Respuesta</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">1,234</div>
                <div className="text-gray-600">Usuarios Activos</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">98.5%</div>
                <div className="text-gray-600">Disponibilidad</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '98%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}