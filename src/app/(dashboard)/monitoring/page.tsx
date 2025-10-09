import Header from "@/components/header/header";

export default function MonitoringDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Panel de Monitoreo</h2>
          <p className="text-gray-600">Supervisa todas las actividades y métricas del sistema</p>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-blue-600">156</div>
                <div className="text-gray-600">Empresas Activas</div>
              </div>
              <i className="fas fa-building text-blue-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600">2,847</div>
                <div className="text-gray-600">Usuarios Totales</div>
              </div>
              <i className="fas fa-users text-green-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-purple-600">423</div>
                <div className="text-gray-600">Procesos Activos</div>
              </div>
              <i className="fas fa-cogs text-purple-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-red-600">99.8%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <i className="fas fa-server text-red-600 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <a href="/monitoring/companies" className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 block">
            <div className="text-center">
              <i className="fas fa-building text-3xl text-blue-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Gestión de Empresas</h3>
              <p className="text-gray-600 text-sm">Supervisar y administrar todas las empresas registradas</p>
            </div>
          </a>
          
          <a href="/dashboard/monitoring/system-overview" className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 block">
            <div className="text-center">
              <i className="fas fa-chart-line text-3xl text-green-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Supervisión del Sistema</h3>
              <p className="text-gray-600 text-sm">Métricas en tiempo real y análisis de rendimiento</p>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* System Health */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Estado del Sistema</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <i className="fas fa-server text-green-600 mr-3"></i>
                    <div>
                      <p className="font-medium">Servidores de Aplicación</p>
                      <p className="text-green-600 text-sm">4/4 operativos</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Saludable
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <i className="fas fa-database text-green-600 mr-3"></i>
                    <div>
                      <p className="font-medium">Base de Datos</p>
                      <p className="text-green-600 text-sm">Latencia: 12ms</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Óptimo
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center">
                    <i className="fas fa-cloud text-yellow-600 mr-3"></i>
                    <div>
                      <p className="font-medium">Servicios en la Nube</p>
                      <p className="text-yellow-600 text-sm">Uso: 78%</p>
                    </div>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    Precaución
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <i className="fas fa-shield-alt text-green-600 mr-3"></i>
                    <div>
                      <p className="font-medium">Seguridad</p>
                      <p className="text-green-600 text-sm">Sin amenazas detectadas</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Seguro
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Actividad Reciente del Sistema</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-building text-blue-600"></i>
                  <div>
                    <p className="font-medium">Nueva empresa registrada</p>
                    <p className="text-gray-600 text-sm">TechInnovate Inc. se registró en el sistema - hace 15 min</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-user-plus text-green-600"></i>
                  <div>
                    <p className="font-medium">Pico de registros</p>
                    <p className="text-gray-600 text-sm">47 nuevos usuarios registrados hoy - hace 30 min</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-exclamation-triangle text-yellow-600"></i>
                  <div>
                    <p className="font-medium">Advertencia de capacidad</p>
                    <p className="text-gray-600 text-sm">Servidor #3 alcanzó 85% de uso de CPU - hace 1 hora</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-check-circle text-green-600"></i>
                  <div>
                    <p className="font-medium">Backup completado</p>
                    <p className="text-gray-600 text-sm">Backup automático de base de datos exitoso - hace 2 horas</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-sync text-blue-600"></i>
                  <div>
                    <p className="font-medium">Actualización de sistema</p>
                    <p className="text-gray-600 text-sm">Parche de seguridad v2.1.4 instalado - hace 4 horas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">Métricas de Rendimiento (Últimas 24 horas)</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">1,247</div>
                <div className="text-gray-600">Sesiones Activas</div>
                <div className="text-green-600 text-sm">↑ 12% vs ayer</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">89 ms</div>
                <div className="text-gray-600">Tiempo de Respuesta Promedio</div>
                <div className="text-green-600 text-sm">↓ 5% vs ayer</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">99.98%</div>
                <div className="text-gray-600">Disponibilidad</div>
                <div className="text-green-600 text-sm">→ Sin cambios</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}