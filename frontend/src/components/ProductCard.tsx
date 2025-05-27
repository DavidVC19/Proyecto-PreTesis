// components/ProductCard.tsx
import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  features?: string[];
}

export default function ProductCard({ 
  title, 
  description, 
  price, 
  imageUrl, 
  features = [] 
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      <div className="w-full h-56 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
            className="object-contain max-h-full max-w-full p-4"
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '100%'
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-blue-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          
          {features.length > 0 && (
            <ul className="space-y-2 mb-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">S/. {price.toFixed(2)}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 text-sm">
            Más información
          </button>
        </div>
      </div>
    </div>
  );
}