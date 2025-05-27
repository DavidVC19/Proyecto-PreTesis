"use client";

import Header from "../components/Header";
import Image from "next/image";
import { Flame, Truck, Shield, Zap, Clock, Phone } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Entrega Rápida",
      description: "Servicio de distribución eficiente en todo el valle"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Seguridad Garantizada",
      description: "Productos de calidad con los más altos estándares"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Energía Eficiente",
      description: "Combustible de alto rendimiento para tus necesidades"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Disponibilidad 24/7",
      description: "Servicio continuo para emergencias"
    }
  ];

  return (
    <div className="flex bg-white text-gray-800 min-h-screen">
      <Header />
      <main className="ml-64 w-full">
        {/* Hero Section */}
        <section className="relative h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-900/80 z-10"></div>
          <Image
            src="/images/z.jpg"
            alt="Zeta Gas Valle Jequetepeque"
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-8 text-white">
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Energía <span className="text-green-400">confiable</span> para tu hogar<br />y tu negocio
              </h1>
              <p className="text-xl mb-8 max-w-2xl">
                Distribuidores autorizados de gas doméstico e industrial en todo el Valle Jequetepeque
              </p>
              <div className="flex gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
                  Nuestros Productos
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Contáctanos
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">¿Por qué elegirnos?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Más de 10 años brindando soluciones energéticas seguras y confiables en la región
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
                  <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <Image
                  src="/images/z.jpg"
                  alt="Sobre Zeta Gas"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-blue-800 mb-6">
                  <span className="text-green-600">Zeta Gas</span> en el Valle Jequetepeque
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Somos la empresa líder en distribución de gas licuado de petróleo (GLP) en la región, comprometidos con la seguridad y satisfacción de nuestros clientes. Nuestra experiencia y profesionalismo nos respaldan.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Flame className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Distribución directa desde nuestras plantas</span>
                  </li>
                  <li className="flex items-start">
                    <Flame className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Personal técnico capacitado</span>
                  </li>
                  <li className="flex items-start">
                    <Flame className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Certificaciones de calidad</span>
                  </li>
                </ul>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
                  Conoce más sobre nosotros
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para ser nuestro cliente?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo y descubre por qué somos la mejor opción en distribución de gas
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Llamar ahora
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}