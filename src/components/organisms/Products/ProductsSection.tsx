import Container from "@/components/atom/Container/Container";
import SectionHeader from "@/components/molecules/SectionHeader/SectionHeader";
import ProductCard from "@/components/molecules/ProductCard/ProductCard";
import { products } from "@/data/products";
import { ShoppingBag } from "lucide-react";
import React from "react";

const ProductsSection = () => {
  return (
    <section className="py-24 bg-gray-50/30" id="products">
      <Container>
        <SectionHeader
          badge="Product Ecosystem"
          badgeIcon={<ShoppingBag size={14} />}
          title="Our Products"
          subtitle="Owned, production-ready AI platforms built to solve enterprise-scale challenges."
          className="mb-16"
        />

        <div className="space-y-12">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductsSection;
