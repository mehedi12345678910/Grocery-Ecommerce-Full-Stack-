import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProductSection = () => {
  return (
    <section className="py-2 px-5">
      {/* Grid Container */}
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        
        {/* Card 1 */}
        <Link href="/products/69f79228ac7be787dc2d545d" className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg group">
          <Image 
            src="https://i.ibb.co.com/KPFWzkp/37-scaled.jpg" 
            alt="Product 1" 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>

        {/* Card 2 */}
        <Link href="/products/69f79228ac7be787dc2d545e" className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg group">
          <Image 
            src="https://i.ibb.co.com/W4whY1Z6/turmeri-powder-300x300.jpg" 
            alt="Product 2" 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>

        {/* Card 3 */}
        <Link href="/products/69f79228ac7be787dc2d5460" className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg group">
          <Image 
            src="https://i.ibb.co.com/FL18wCzc/dried-red-chilli-white-small-bowl-1150-35716.avif" 
            alt="Product 3" 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>

        {/* Card 4 */}
        <Link href="/products/69f79228ac7be787dc2d545f" className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg group">
          <Image 
            src="https://i.ibb.co.com/LhdMy5HR/images.jpg" 
            alt="Product 4" 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>

      </div>
    </section>
  );
};

export default ProductSection;