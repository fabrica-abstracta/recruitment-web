import Header from "../../../../components/header/header";

export default function SupplierCommissions() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Comisiones y Pagos</h2>
            <p className="text-gray-600">Gestiona tus ingresos y comisiones por colocaciones</p>
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
                <div className="text-3xl font-bold text-green-600">$45,230</div>
                <div className="text-gray-600">Este Mes</div>
              </div>
              <i className="fas fa-dollar-sign text-green-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-blue-600">$12,890</div>
                <div className="text-gray-600">Pendientes</div>
              </div>
              <i className="fas fa-clock text-blue-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-purple-600">$456,789</div>
                <div className="text-gray-600">Total Año</div>
              </div>
              <i className="fas fa-chart-line text-purple-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-orange-600">23</div>
                <div className="text-gray-600">Colocaciones</div>
              </div>
              <i className="fas fa-handshake text-orange-600 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Commission Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Monthly Earnings */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Ingresos Mensuales</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-800">Octubre 2025</div>
                    <div className="text-sm text-gray-600">8 colocaciones</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">$45,230</div>
                    <div className="text-sm text-gray-500">+15% vs mes anterior</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-800">Septiembre 2025</div>
                    <div className="text-sm text-gray-600">6 colocaciones</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-700">$38,950</div>
                    <div className="text-sm text-gray-500">+8% vs mes anterior</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-800">Agosto 2025</div>
                    <div className="text-sm text-gray-600">5 colocaciones</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-700">$36,100</div>
                    <div className="text-sm text-gray-500">+12% vs mes anterior</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pending Payments */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Pagos Pendientes</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-800">TechCorp Solutions</div>
                    <div className="text-sm text-gray-600">Juan López - React Developer</div>
                    <div className="text-xs text-yellow-600">Vencimiento: 15 Nov 2025</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-yellow-600">$4,750</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-800">InnovaTech Labs</div>
                    <div className="text-sm text-gray-600">María González - UX Designer</div>
                    <div className="text-xs text-yellow-600">Vencimiento: 18 Nov 2025</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-yellow-600">$3,600</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-800">DataTech Corp</div>
                    <div className="text-sm text-gray-600">Carlos Rodríguez - Data Scientist</div>
                    <div className="text-xs text-yellow-600">Vencimiento: 20 Nov 2025</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-yellow-600">$4,540</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commission History Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">Historial de Comisiones</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidato</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posición</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salario</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% Com.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comisión</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    15 Oct 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">TechCorp</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Juan López</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">React Developer</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">$95,000</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">5%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-green-600">$4,750</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Pendiente
                    </span>
                  </td>
                </tr>
                
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    08 Oct 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">InnovaTech</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">María González</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">UX Designer</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">$72,000</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">5%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-green-600">$3,600</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Pendiente
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    25 Sep 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">StartupXYZ</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Ana López</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Marketing Manager</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">$78,000</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">6%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-green-600">$4,680</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Pagado
                    </span>
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