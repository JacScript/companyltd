 "use client";

import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import Navbar from "../../components/navbar/Navbar";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  images: [
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
};

export default function Gallery() {
 

  return (
    <div className="bg-white">
      <Navbar />
      <div className="md:py-6 py-0 max-md:px-4">

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img
            alt={product.images[0].alt}
            src={product.images[0].src}
            className=" max-md:mb-4 size-full rounded-lg object-cover lg:block"
          />
          <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
            <img
              alt={product.images[1].alt}
              src={product.images[1].src}
              className=" max-md:mb-4 aspect-[3/2] w-full rounded-lg object-cover"
            />
            <img
              alt={product.images[2].alt}
              src={product.images[2].src}
              className="max-md:mb-4 aspect-[3/2] w-full rounded-lg object-cover"
            />
          </div>
          <img
            alt={product.images[3].alt}
            src={product.images[3].src}
            className="max-md:mb-4 aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-auto"
          />
        </div>

        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img
            alt={product.images[0].alt}
            src={product.images[0].src}
            className="max-md:mb-4 size-full rounded-lg object-cover lg:block"
          />
          <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
            <img
              alt={product.images[1].alt}
              src={product.images[1].src}
              className="max-md:mb-4 aspect-[3/2] w-full rounded-lg object-cover"
            />
            <img
              alt={product.images[2].alt}
              src={product.images[2].src}
              className="max-md:mb-4 aspect-[3/2] w-full rounded-lg object-cover"
            />
          </div>
          <img
            alt={product.images[3].alt}
            src={product.images[3].src}
            className="aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-auto"
          />
        </div>
      </div>
    </div>
  );
}
