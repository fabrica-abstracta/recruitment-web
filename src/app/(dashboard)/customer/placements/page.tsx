import Header from "../../../../components/header/header";

export default function CustomerPlacements() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Colocaciones</h2>
            <p className="text-gray-600">Historial de candidatos contratados y seguimiento</p>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition flex items-center">
            <i className="fas fa-download mr-2"></i>
            Exportar Reporte
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600">23</div>
                <div className="text-gray-600">Total Contratados</div>
              </div>
              <i className="fas fa-user-check text-green-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-blue-600">18</div>
                <div className="text-gray-600">Activos</div>
              </div>
              <i className="fas fa-users text-blue-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-orange-600">92%</div>
                <div className="text-gray-600">Tasa Retención</div>
              </div>
              <i className="fas fa-chart-line text-orange-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-purple-600">45</div>
                <div className="text-gray-600">Días Promedio</div>
              </div>
              <i className="fas fa-calendar-alt text-purple-600 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Todos los estados</option>
                <option value="active">Activo</option>
                <option value="completed">Completado</option>
                <option value="terminated">Terminado</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Departamento</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Todos los departamentos</option>
                <option value="it">Tecnología</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Ventas</option>
                <option value="design">Diseño</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fecha contratación</label>
              <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Buscar</label>
              <input type="text" placeholder="Nombre, posición..." className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>
          </div>
        </div>

        {/* Placements Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">Historial de Colocaciones</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidato</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posición</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departamento</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salario</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Contratación</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        JL
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Juan López</div>
                        <div className="text-sm text-gray-500">juan.lopez@email.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Desarrollador React Senior</div>
                    <div className="text-sm text-gray-500">Tiempo completo</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Tecnología</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">$95,000</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    15 Sep 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Activo
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Ver Perfil</button>
                    <button className="text-green-600 hover:text-green-900">Evaluación</button>
                  </td>
                </tr>
                
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        MG
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">María González</div>
                        <div className="text-sm text-gray-500">maria.gonzalez@email.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Diseñadora UX/UI</div>
                    <div className="text-sm text-gray-500">Tiempo completo</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Diseño</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">$72,000</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    01 Oct 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Activo
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Ver Perfil</button>
                    <button className="text-green-600 hover:text-green-900">Evaluación</button>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        CR
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Carlos Rodríguez</div>
                        <div className="text-sm text-gray-500">carlos.rodriguez@email.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Analista de Datos</div>
                    <div className="text-sm text-gray-500">Tiempo completo</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Análisis</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">$78,000</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    20 Sep 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Período Prueba
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Ver Perfil</button>
                    <button className="text-orange-600 hover:text-orange-900">Seguimiento</button>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        AL
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Ana López</div>
                        <div className="text-sm text-gray-500">ana.lopez@email.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Marketing Manager</div>
                    <div className="text-sm text-gray-500">Tiempo completo</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Marketing</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">$85,000</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    05 Aug 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Terminado
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Ver Historial</button>
                    <button className="text-gray-600 hover:text-gray-900">Reporte</button>
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