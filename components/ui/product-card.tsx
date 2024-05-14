"use client"

import Image from "next/image";

import { Product } from "@/types";
import IconButton from "./icon-button";

interface ProductCard {
    data: Product;
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    return(
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={data?.images?.[0]?.url}
                    fill
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;