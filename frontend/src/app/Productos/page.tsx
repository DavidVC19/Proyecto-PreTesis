// pages/Productos.tsx
"use client";

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

export default function ProductosHome() {
  const products = [
    {
      title: "Balón de Gas 10kg",
      description: "Ideal para uso doméstico con seguridad garantizada y máxima eficiencia energética.",
      price: 45.9,
      imageUrl: "/images/10k.PNG",
      features: ["Para hogares", "Seguro y confiable", "Fácil transporte"]
    },
    {
      title: "Balón de Gas 15kg",
      description: "Perfecto para negocios pequeños y medianos con mayor duración y rendimiento.",
      price: 65.0,
      imageUrl: "/images/15k.png",
      features: ["Para pequeños negocios", "Mayor capacidad", "Económico a largo plazo"]
    },
    {
      title: "Balón de Gas 45kg",
      description: "Solución profesional para procesos industriales de alto consumo y demanda continua.",
      price: 120.0,
      imageUrl: "/images/45k.PNG",
      features: ["Para empresas", "Alto rendimiento", "Entrega programada"]
    },
  ];

  return (
    <div className="flex bg-gray-50 text-gray-800 min-h-screen">
      <Header />
      <main className="ml-64 p-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-blue-800 mb-2">Nuestros <span className="text-green-600">Productos</span></h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Ofrecemos soluciones energéticas de calidad para todos tus necesidades, desde uso doméstico hasta industrial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">¿Necesitas asesoramiento?</h2>
            <p className="text-gray-700 mb-6">
              Nuestros expertos pueden ayudarte a elegir el producto perfecto para tus necesidades específicas.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 shadow-md">
              Contactar a un asesor
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}