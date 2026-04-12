"use client";

import { useParams } from "next/navigation";
import Container from "@/components/modules/Container";
import Image from "next/image";
import { useState } from "react";
import { useGetProductByIdQuery } from "@/redux/api/exploreProductsApi";

export default function ProductDetails() {
  const params = useParams();
  const id = params?.id as string;
  const { data: product, isLoading } = useGetProductByIdQuery(id);

  const [quantity, setQuantity] = useState(1);

  if (isLoading)
    return <div className="py-20 text-center">Loading details...</div>;
  if (!product)
    return <div className="py-20 text-center">Product not found.</div>;

  return (
    <Container>
      <div className="py-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Image Gallery (Large View) */}
        <div className="bg-[#F5F5F5] rounded-lg p-10 flex items-center justify-center h-125">
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-black">{product.name}</h1>
          <div className="flex items-center gap-4">
            <div className="flex text-[#FFAD33] text-lg">
              {"★".repeat(Math.floor(product.ratings))}
              <span className="text-gray-300">
                {"★".repeat(5 - Math.floor(product.ratings))}
              </span>
            </div>
            <span className="text-gray-400 border-l pl-4">
              ({product.reviews} Reviews)
            </span>
            <span className="text-emerald-500 font-medium">In Stock</span>
          </div>

          <div className="text-2xl font-semibold text-black mt-2">
            ${product.original_price}{" "}
            {product.old_price && (
              <span className="text-gray-400 line-through text-lg ml-3">
                ${product.old_price}
              </span>
            )}
          </div>
          <p className="text-sm leading-relaxed text-gray-700 mt-4 pb-6 border-b">
            Experience premium quality with the {product.name}. This product is
            designed to provide maximum performance and durability for everyday
            use.
          </p>

          {/* Quantity & Actions */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border rounded overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-black hover:text-white transition-colors border-r"
              >
                -
              </button>
              <span className="px-6 py-2 font-bold w-16 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-black hover:text-white transition-colors border-l"
              >
                +
              </button>
            </div>

            <button className="flex-1 bg-[#DB4444] text-white font-bold py-3 rounded hover:bg-red-700 transition-colors">
              Buy Now
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 border rounded-md">
            <div className="flex items-center gap-4 p-4 border-b">
              <div className="text-2xl">🚚</div>
              <div>
                <p className="font-bold text-sm">Free Delivery</p>
                <p className="text-xs underline">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="text-2xl">🔄</div>
              <div>
                <p className="font-bold text-sm">Return Delivery</p>
                <p className="text-xs">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
