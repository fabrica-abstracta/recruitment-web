import Header from "../../../../components/header/header";

export default function SupplierDashboardMain() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard del Proveedor</h2>
          <p className="text-gray-600">Gestiona tus servicios de reclutamiento y clientes</p>
        </div>

        {/* Supplier Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-blue-600">24</div>
                <div className="text-gray-600">Clientes Activos</div>
              </div>
              <i className="fas fa-building text-blue-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600">156</div>
                <div className="text-gray-600">Candidatos</div>
              </div>
              <i className="fas fa-users text-green-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-purple-600">18</div>
                <div className="text-gray-600">Proyectos Activos</div>
              </div>
              <i className="fas fa-project-diagram text-purple-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-orange-600">$45k</div>
                <div className="text-gray-600">Ingresos del Mes</div>
              </div>
              <i className="fas fa-dollar-sign text-orange-600 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-user-plus text-blue-600 mr-3"></i>
              Agregar Candidato
            </h3>
            <p className="text-gray-600 mb-4">Registra un nuevo perfil profesional en tu base de datos</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition w-full">
              Nuevo Candidato
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-handshake text-green-600 mr-3"></i>
              Gestionar Contratos
            </h3>
            <p className="text-gray-600 mb-4">Administra los contratos con tus clientes y pagos</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition w-full">
              Ver Contratos
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-chart-line text-purple-600 mr-3"></i>
              Reportes de Ventas
            </h3>
            <p className="text-gray-600 mb-4">Analiza el rendimiento de tus servicios de reclutamiento</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition w-full">
              Ver Reportes
            </button>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <a href="/dashboard/supplier/profiles" className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 block">
            <div className="text-center">
              <i className="fas fa-users text-3xl text-blue-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Perfiles</h3>
              <p className="text-gray-600 text-sm">Base de candidatos</p>
            </div>
          </a>
          
          <a href="/dashboard/supplier/job-positions" className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 block">
            <div className="text-center">
              <i className="fas fa-project-diagram text-3xl text-green-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Proyectos</h3>
              <p className="text-gray-600 text-sm">Gestión de proyectos</p>
            </div>
          </a>
          
          <a href="/dashboard/supplier/placements" className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 block">
            <div className="text-center">
              <i className="fas fa-handshake text-3xl text-purple-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Colocaciones</h3>
              <p className="text-gray-600 text-sm">Candidatos colocados</p>
            </div>
          </a>
          
          <a href="/dashboard/supplier/commissions" className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 block">
            <div className="text-center">
              <i className="fas fa-dollar-sign text-3xl text-orange-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Comisiones</h3>
              <p className="text-gray-600 text-sm">Ingresos y pagos</p>
            </div>
          </a>
          
          <a href="/dashboard/supplier" className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 block">
            <div className="text-center">
              <i className="fas fa-chart-bar text-3xl text-red-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Análisis</h3>
              <p className="text-gray-600 text-sm">Métricas y KPIs</p>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Projects */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Proyectos Activos</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">TechCorp - Desarrolladores</p>
                      <p className="text-gray-600 text-sm">5 posiciones • Inicio: 15 Oct</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      En Proceso
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">3 de 5 posiciones cubiertas</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">StartupXYZ - Marketing</p>
                      <p className="text-gray-600 text-sm">2 posiciones • Inicio: 20 Oct</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Iniciando
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '25%'}}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Búsqueda inicial</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">DevCorp - Full Stack</p>
                      <p className="text-gray-600 text-sm">3 posiciones • Inicio: 10 Oct</p>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      Entrevistas
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Fase final de selección</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Actividad Reciente</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-user-check text-green-600"></i>
                  <div>
                    <p className="font-medium">Candidato aprobado</p>
                    <p className="text-gray-600 text-sm">Ana López fue seleccionada para TechCorp - hace 1 hora</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-file-contract text-blue-600"></i>
                  <div>
                    <p className="font-medium">Nuevo contrato</p>
                    <p className="text-gray-600 text-sm">Contrato firmado con InnovaTech - hace 3 horas</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-dollar-sign text-orange-600"></i>
                  <div>
                    <p className="font-medium">Pago recibido</p>
                    <p className="text-gray-600 text-sm">$8,500 de StartupXYZ por servicios completados - hace 2 días</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-comments text-purple-600"></i>
                  <div>
                    <p className="font-medium">Nueva solicitud</p>
                    <p className="text-gray-600 text-sm">DevCorp solicitó 5 desarrolladores senior - hace 3 días</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}