"use client";

import { MapPin, Clock, Phone, Mail, Calendar } from "lucide-react";
import Header from "@/components/Header";

export default function UbicanosHome() {
  const locations = [
    {
      name: "Oficina Principal",
      address: "Av. Libertad 123, Valle Jequetepeque",
      phone: "(076) 123-4567",
      email: "ventas@zetagasvalle.com",
      hours: "Lunes a Viernes: 8:00 AM - 6:00 PM\nSábados: 9:00 AM - 1:00 PM",
      coords: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.123456789!2d-79.48233984582663!3d-7.300878472022091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTgnMDMuMSJTIDc5wrAyOCc1Ni40Ilc!5e0!3m2!1sen!2spe!4v1234567890123!5m2!1sen!2spe"
    },
    {
      name: "Planta de Distribución",
      address: "Carretera Panamericana Km 234, Valle Jequetepeque",
      phone: "(076) 987-6543",
      email: "distribucion@zetagasvalle.com",
      hours: "Lunes a Domingo: 24 horas",
      coords: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.987654321!2d-79.48233984582663!3d-7.300878472022091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTgnMDMuMSJTIDc5wrAyOCc1Ni40Ilc!5e0!3m2!1sen!2spe!4v1234567890123!5m2!1sen!2spe"
    }
  ];

  return (
    <div className="flex bg-white text-gray-800 min-h-screen">
      <Header />
      <main className="ml-64 w-full">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12 px-8">
          <h1 className="text-4xl font-bold mb-2">Ubícanos</h1>
          <p className="text-xl">Encuentra nuestras sedes y puntos de distribución</p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Locations List */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">
                <MapPin className="inline mr-2" size={28} />
                Nuestras ubicaciones
              </h2>

              {locations.map((location, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">{location.name}</h3>
                  
                  <div className="space-y-3">
                    <p className="flex items-start">
                      <MapPin className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{location.address}</span>
                    </p>
                    
                    <p className="flex items-start">
                      <Phone className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{location.phone}</span>
                    </p>
                    
                    <p className="flex items-start">
                      <Mail className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{location.email}</span>
                    </p>
                    
                    <p className="flex items-start">
                      <Clock className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="whitespace-pre-line">{location.hours}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div className="sticky top-4">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-300">
                <iframe
                  src={locations[0].coords}
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-t-xl"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <h3 className="flex items-center text-lg font-semibold text-gray-800">
                    <Calendar className="mr-2 text-green-600" size={20} />
                    Horario de atención
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                    Sábados: 9:00 AM - 1:00 PM<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 border border-blue-200 text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">¿Necesitas ayuda para llegar?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Nuestro equipo está listo para orientarte y brindarte la información que necesites
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={`tel:${locations[0].phone}`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md flex items-center"
              >
                <Phone className="mr-2" size={18} />
                Llamar ahora
              </a>
              <a 
                href={`mailto:${locations[0].email}`}
                className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-lg transition duration-300 border border-blue-200 flex items-center"
              >
                <Mail className="mr-2" size={18} />
                Enviar correo
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}