import Header from "../../../../components/header/header";

export default function CustomerDashboardMain() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard del Cliente</h2>
          <p className="text-gray-600">Administra tus posiciones laborales y supervisa el proceso de reclutamiento</p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-blue-600">12</div>
                <div className="text-gray-600">Posiciones Activas</div>
              </div>
              <i className="fas fa-briefcase text-blue-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600">45</div>
                <div className="text-gray-600">Candidatos</div>
              </div>
              <i className="fas fa-users text-green-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-purple-600">8</div>
                <div className="text-gray-600">En Proceso</div>
              </div>
              <i className="fas fa-clock text-purple-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-orange-600">3</div>
                <div className="text-gray-600">Contratados</div>
              </div>
              <i className="fas fa-handshake text-orange-600 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-plus-circle text-blue-600 mr-3"></i>
              Nueva Posición
            </h3>
            <p className="text-gray-600 mb-4">Crear una nueva posición laboral y comenzar el proceso de reclutamiento</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition w-full">
              Crear Posición
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-eye text-green-600 mr-3"></i>
              Ver Candidatos
            </h3>
            <p className="text-gray-600 mb-4">Revisar perfiles de candidatos disponibles para tus posiciones</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition w-full">
              Ver Candidatos
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-chart-bar text-purple-600 mr-3"></i>
              Reportes
            </h3>
            <p className="text-gray-600 mb-4">Analizar el rendimiento de tus procesos de reclutamiento</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition w-full">
              Ver Reportes
            </button>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <a href="/dashboard/customer/job-positions" className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 block">
            <div className="text-center">
              <i className="fas fa-briefcase text-3xl text-blue-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Posiciones</h3>
              <p className="text-gray-600 text-sm">Gestionar ofertas de trabajo</p>
            </div>
          </a>
          
          <a href="/dashboard/customer/contracts" className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 block">
            <div className="text-center">
              <i className="fas fa-file-contract text-3xl text-green-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Contratos</h3>
              <p className="text-gray-600 text-sm">Administrar contratos</p>
            </div>
          </a>
          
          <a href="/dashboard/customer/placements" className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 block">
            <div className="text-center">
              <i className="fas fa-handshake text-3xl text-purple-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Colocaciones</h3>
              <p className="text-gray-600 text-sm">Historial de contrataciones</p>
            </div>
          </a>
          
          <a href="/dashboard/customer" className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 block">
            <div className="text-center">
              <i className="fas fa-chart-line text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Análisis</h3>
              <p className="text-gray-600 text-sm">Métricas y reportes</p>
            </div>
          </a>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">Actividad Reciente</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <i className="fas fa-user-plus text-green-600"></i>
                <div>
                  <p className="font-medium">Nuevo candidato aplicó</p>
                  <p className="text-gray-600 text-sm">Juan Pérez aplicó para Desarrollador Frontend - hace 2 horas</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <i className="fas fa-clipboard-check text-blue-600"></i>
                <div>
                  <p className="font-medium">Entrevista completada</p>
                  <p className="text-gray-600 text-sm">María González completó entrevista para Diseñador UX - hace 4 horas</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <i className="fas fa-handshake text-orange-600"></i>
                <div>
                  <p className="font-medium">Contrato firmado</p>
                  <p className="text-gray-600 text-sm">Carlos Rodríguez firmó contrato para Analista de Datos - hace 1 día</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}