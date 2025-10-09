import Header from "../../../../components/header/header";

export default function MonitoringCompanies() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Gestión de Empresas</h2>
            <p className="text-gray-600">Administra clientes, proveedores y usuarios del sistema</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition flex items-center">
            <i className="fas fa-plus mr-2"></i>
            Nueva Empresa
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-blue-600">156</div>
                <div className="text-gray-600">Empresas Cliente</div>
              </div>
              <i className="fas fa-building text-blue-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600">23</div>
                <div className="text-gray-600">Proveedores</div>
              </div>
              <i className="fas fa-handshake text-green-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-purple-600">1,234</div>
                <div className="text-gray-600">Usuarios Activos</div>
              </div>
              <i className="fas fa-users text-purple-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-orange-600">89</div>
                <div className="text-gray-600">Proyectos Activos</div>
              </div>
              <i className="fas fa-project-diagram text-orange-600 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Todos los tipos</option>
                <option value="client">Cliente</option>
                <option value="supplier">Proveedor</option>
                <option value="partner">Partner</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Todos los estados</option>
                <option value="active">Activo</option>
                <option value="inactive">Inactivo</option>
                <option value="suspended">Suspendido</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tamaño</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Cualquier tamaño</option>
                <option value="startup">Startup (1-10)</option>
                <option value="small">Pequeña (11-50)</option>
                <option value="medium">Mediana (51-200)</option>
                <option value="large">Grande (200+)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Buscar</label>
              <input type="text" placeholder="Nombre empresa..." className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>
          </div>
        </div>

        {/* Companies Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">Lista de Empresas</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Empresa</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contacto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuarios</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proyectos</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registro</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        TC
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">TechCorp Solutions</div>
                        <div className="text-sm text-gray-500">Desarrollo de Software</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Cliente
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Juan Pérez</div>
                    <div className="text-sm text-gray-500">juan@techcorp.com</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    15 usuarios
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    8 activos
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Activo
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    15 Ene 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Ver</button>
                    <button className="text-gray-600 hover:text-gray-900 mr-3">Editar</button>
                    <button className="text-red-600 hover:text-red-900">Suspender</button>
                  </td>
                </tr>
                
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        HR
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">HR Professional Services</div>
                        <div className="text-sm text-gray-500">Servicios de RRHH</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Proveedor
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">María González</div>
                    <div className="text-sm text-gray-500">maria@hrpro.com</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    8 usuarios
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    12 activos
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Activo
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22 Feb 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Ver</button>
                    <button className="text-gray-600 hover:text-gray-900 mr-3">Editar</button>
                    <button className="text-red-600 hover:text-red-900">Suspender</button>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        SX
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">StartupXYZ</div>
                        <div className="text-sm text-gray-500">Fintech Startup</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Cliente
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Carlos Rodríguez</div>
                    <div className="text-sm text-gray-500">carlos@startupxyz.com</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    5 usuarios
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    3 activos
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Activo
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    08 Mar 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Ver</button>
                    <button className="text-gray-600 hover:text-gray-900 mr-3">Editar</button>
                    <button className="text-red-600 hover:text-red-900">Suspender</button>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        TF
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">TalentFinder Agency</div>
                        <div className="text-sm text-gray-500">Agencia de Reclutamiento</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Proveedor
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Ana López</div>
                    <div className="text-sm text-gray-500">ana@talentfinder.com</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    12 usuarios
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    18 activos
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Revisión
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    12 Abr 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Ver</button>
                    <button className="text-orange-600 hover:text-orange-900 mr-3">Revisar</button>
                    <button className="text-red-600 hover:text-red-900">Suspender</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}