import Header from "@/components/header/header";

export default function MonitoringIndex() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Panel de Control Administrativo
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Bienvenido al sistema de administración y monitoreo de RecruitPro
          </p>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* System Monitoring */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Monitoreo del Sistema
              </h3>
              <p className="text-gray-600 mb-6">
                Supervisa el rendimiento y la salud del sistema en tiempo real
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition w-full">
                Ver Dashboard
              </button>
            </div>
          </div>

          {/* Company Management */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-building text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Gestión de Empresas
              </h3>
              <p className="text-gray-600 mb-6">
                Administra clientes, proveedores y usuarios del sistema
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition w-full">
                Gestionar Empresas
              </button>
            </div>
          </div>

          {/* Reports & Analytics */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-bar text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Reportes y Análisis
              </h3>
              <p className="text-gray-600 mb-6">
                Genera reportes detallados y análisis de rendimiento
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition w-full">
                Ver Reportes
              </button>
            </div>
          </div>

          {/* User Management */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users-cog text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Gestión de Usuarios
              </h3>
              <p className="text-gray-600 mb-6">
                Administra permisos, roles y accesos de usuarios
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition w-full">
                Gestionar Usuarios
              </button>
            </div>
          </div>

          {/* System Settings */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cogs text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Configuración
              </h3>
              <p className="text-gray-600 mb-6">
                Ajusta parámetros del sistema y configuraciones generales
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition w-full">
                Configurar Sistema
              </button>
            </div>
          </div>

          {/* Security & Logs */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Seguridad y Logs
              </h3>
              <p className="text-gray-600 mb-6">
                Monitorea la seguridad del sistema y revisa logs de actividad
              </p>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition w-full">
                Ver Seguridad
              </button>
            </div>
          </div>
        </div>

        {/* System Status Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Estado General del Sistema
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98.9%</div>
              <div className="text-gray-600">Uptime</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '98.9%'}}></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,234</div>
              <div className="text-gray-600">Usuarios Activos</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">156ms</div>
              <div className="text-gray-600">Tiempo Respuesta</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">342</div>
              <div className="text-gray-600">Proyectos Activos</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}