"use client";

import { Flame, ShieldCheck, Users } from "lucide-react";
import Header from "@/components/Header";
import Image from "next/image";

export default function SobreNosotrosHome() {
  return (
    <div className="flex bg-white text-gray-800 min-h-screen">
      <Header />
      <main className="ml-64 p-8 w-full">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-blue-800">
            Sobre <span className="text-green-600">Nosotros</span>
          </h1>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed border-l-4 border-green-500 pl-4">
            En <strong className="text-blue-700">Z gas Valle Jequetepeque</strong>, somos una empresa líder en el suministro de gas doméstico e industrial, comprometida con brindar energía segura, eficiente y confiable a todos nuestros clientes. Desde nuestros inicios en 2010, trabajamos día a día para ofrecer soluciones energéticas que mejoran la calidad de vida y potencian el desarrollo de las empresas peruanas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Misión */}
            <div className="p-6 rounded-xl shadow-md bg-gradient-to-b from-white to-blue-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Flame className="text-red-600" size={28} />
                </div>
                <h2 className="text-xl font-semibold text-blue-800">Nuestra Misión</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Nos dedicamos a la recepción, almacenamiento y despacho de GLP, buscamos satisfacer las expectativas de nuestros clientes proporcionándoles un producto de acuerdo a estándares de calidad, garantizando la seguridad tanto en la calidad de producto como en servicio, asumimos el compromiso total caracterizado por nuestra entrega identificación y lealtad a nuestro cliente"
              </p>
            </div>

            {/* Visión */}
            <div className="p-6 rounded-xl shadow-md bg-gradient-to-b from-white to-green-50 border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <ShieldCheck className="text-blue-600" size={28} />
                </div>
                <h2 className="text-xl font-semibold text-green-800">Nuestra Visión</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Ser una Empresa Líder en el mercado, ser parte del desarrollo de los países hermanos, participando activamente con un servicio directo a la población y un sin número de empresas por todo el continente ser reconocidos por la calidad de nuestro producto y servicio excepcional"
              </p>
            </div>

            {/* Valores */}
            <div className="p-6 rounded-xl shadow-md bg-gradient-to-b from-white to-blue-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Users className="text-green-600" size={28} />
                </div>
                <h2 className="text-xl font-semibold text-blue-800">Nuestros Valores</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>Lealtad</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>Respeto</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>Confianza</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>Comunicación</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>Trabajo en Equipo</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>Seguridad</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Línea divisoria */}
          <hr className="my-12 border-t-2 border-gray-200" />

          {/* Historia */}
          <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-bold mb-6 text-blue-800">
                Nuestra <span className="text-green-600">Historia</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Nuestro grupo fue fundado en México en 1946 y desde 1970 está presente en distintos mercados internacionales. Contamos con más de 80 empresas en los 9 países en los que operamos: México, España, Belice, Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica, Perú y próximamente España.
                </p>
                <p>
                  Nuestra especialidad es el almacenamiento y comercialización de G.L.P. a gran escala. Somos uno de los distribuidores de G.L.P. más sólidos del mercado latinoamericano y contamos con una infraestructura apropiada que nos permite responder a las exigencias del mercado.
                </p>
                <p>
                  En el Perú, donde operamos bajo el nombre Zeta Gas Andino S.A., contamos con una terminal marítima de almacenamiento con capacidad de 12,000 toneladas. Además, seis plantas de envasado y más de diez bodegas de almacenamiento a nivel nacional.
                </p>
                <p>
                  Próximamente estaremos ampliando nuestra terminal con 06 esferas adicionales que nos permitirán almacenar hasta 36,000 toneladas de G.L.P.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative w-full h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <Image 
                  src="/images/traba.PNG" 
                  alt="Historia de Z gas Valle Jequetepeque"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}