import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Habilitar exportación estática
  output: 'export',
  
  // Deshabilitar optimización de imágenes para export estático
  images: {
    unoptimized: true,
  },
  
  // Configuración para evitar errores en build estático
  trailingSlash: true,
};

export default nextConfig;
