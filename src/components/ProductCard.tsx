import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CardContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-muted mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-light tracking-wide">{product.name}</h3>
          <p className="text-muted-foreground text-sm">{product.category}</p>
          <p className="text-lg font-medium">${product.price.toLocaleString()}</p>
        </div>
      </Link>
      <Button
        onClick={() => addToCart(product)}
        variant="outline"
        className="w-full mt-4 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
      >
        Add to Cart
      </Button>
    </motion.div>
  );
};

export default ProductCard;
