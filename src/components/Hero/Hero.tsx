import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';

export const Hero = () => {
  return (
    <div className="bg-gray-100">
      <div className="min-h-[80vh] max-w-7xl mx-auto px-4 flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center items-center px-4 pt-10 md:items-start md:pt-0">
          <span className="bg-blue-100 text-blue-600 font-semibold text-sm rounded-md py-1 px-4 mb-2.5 md:mb-5">
            Sale 70%
          </span>
          <h2 className="font-bold text-black mb-5 text-[2.5rem] leading-tight text-center md:text-left md:text-5xl">
            An Industrial Take on Streetwear
          </h2>
          <h3 className="font-regular text-lg text-neutral-700 mb-5 leading-tight text-center md:text-left md:mb-10">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </h3>
          <Link
            href={''}
            className="font-normal text-white text-base bg-zinc-900 flex items-center py-2.5 px-8 mb-10 rounded shadow-sm shadow-zinc-500"
          >
            <FiShoppingCart />
            <span className="ml-2">Start Shopping</span>
          </Link>
          <div className="flex justify-between w-full mb-10">
            {['bazaar', 'bustle', 'versace', 'instyle'].map((brand, index) => (
              <Image
                key={index}
                src={`/assets/${brand}.svg`}
                alt={`${brand} brand`}
                width={90}
                height={90}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-start items-end">
          <Image src="/assets/hero.svg" alt="hero" width={600} height={600} />
        </div>
      </div>
    </div>
  );
};