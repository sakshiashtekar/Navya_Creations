import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import FeaturedProductCard from '@/components/FeatureProductCard';
import { products } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80"
            alt="Luxury Jewelry"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center space-y-6 px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-wider">
            Timeless Elegance
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto font-light px-4">
            Discover our curated collection of fine jewelry, crafted with precision and passion
          </p>
          <Link to="/collections">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
              Explore Collection
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
                alt="Jewelry Craftsmanship"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Lumière, we believe that jewelry is more than mere adornment—it's a reflection of your unique story, 
                a celebration of life's precious moments, and an heirloom to be treasured for generations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a passion for exceptional craftsmanship, each piece in our collection is meticulously 
                designed and crafted using the finest materials. Our artisans combine traditional techniques with 
                contemporary design sensibilities to create jewelry that transcends trends.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We source only ethically mined gemstones and precious metals, ensuring that every piece not only 
                looks beautiful but also upholds the values of sustainability and responsibility.
              </p>
              <Link to="/collections">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Explore Collection
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">Featured Pieces</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Each piece is carefully selected to embody luxury and sophistication
            </p>
          </motion.div>

          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 px-4 sm:px-0 sm:justify-center scrollbar-hide">
            {products.slice(0, 3).map((product, index) => (
              <FeaturedProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/collections">
              <Button variant="outline" size="lg">
                View All Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">Get in Touch</h2>
            <p className="text-muted-foreground text-base sm:text-lg px-4">
              Have a question or want to learn more about our pieces? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-medium">Email</h3>
              <p className="text-muted-foreground">contact@lumiere.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-medium">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-medium">Visit Us</h3>
              <p className="text-muted-foreground">123 Luxury Avenue<br />New York, NY 10001</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
