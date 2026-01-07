import CardLayout from "@/components/atom/Card/CardLayout";
import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";
import CTAGroup from "@/components/molecules/CTAGroup/CTAGroup";
import { Product } from "@/types";
import { cn } from "@/lib/utils";
import React from "react";

interface ProductCardProps {
  product: Product;
  reverse?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  reverse = false,
}) => {
  return (
    <CardLayout className="h-auto! p-8!">
      <div
        className={cn(
          "flex flex-col gap-8",
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        )}
      >
        <div className="flex-1 space-y-6">
          <div className="space-y-2 text-start">
            <Heading level={3} variant="gradient">
              {product.name}
            </Heading>
            <Text variant="default" className="text-lg font-medium">
              {product.description}
            </Text>
          </div>

          <div className="space-y-4 text-start">
            <Heading level={5}>What it solves</Heading>
            <Text variant="muted">{product.useCase}</Text>
          </div>

          {product.features && (
            <div className="space-y-4 text-start">
              <Heading level={5}>What it does</Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <Text
                      variant="small"
                      className="text-gray-600 dark:text-gray-400"
                    >
                      {feature}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          )}

          <CTAGroup
            ctas={product.ctas}
            centered={false}
            className="justify-start pt-4"
          />
        </div>

        {product.imagePath && (
          <div className="flex-1 flex items-center justify-center">
            <img
              src={product.imagePath}
              alt={product.name}
              className="max-w-full h-auto rounded-2xl shadow-xl border border-gray-100 dark:border-white/5 object-cover"
            />
          </div>
        )}
      </div>
    </CardLayout>
  );
};

export default ProductCard;
