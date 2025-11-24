import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CardContext';
import { products } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Product not found</h2>
          <Button onClick={() => navigate('/')}>Return to Collection</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Collection
        </Button>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-square bg-muted overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <p className="text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-4xl md:text-5xl font-light mb-4">{product.name}</h1>
              <p className="text-3xl font-medium mb-6">${product.price.toLocaleString()}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2 uppercase tracking-wider">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {product.material && (
                <div>
                  <h3 className="text-sm font-medium mb-2 uppercase tracking-wider">Material</h3>
                  <p className="text-muted-foreground">{product.material}</p>
                </div>
              )}
            </div>

            <Button
              size="lg"
              onClick={() => addToCart(product)}
              className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Add to Cart
            </Button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
