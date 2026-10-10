import React, { useState } from 'react';
import { productsData, categories } from '../data/products';
import { ShoppingBag, Eye, Check, Sparkles, Flame, Shield, ArrowRight } from 'lucide-react';

export default function ProductCatalog({ onAddToCart, onOpenQuickSubscribe }) {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedItemNotice, setAddedItemNotice] = useState(null);

  const filteredProducts = activeCategory === 'All Products'
    ? productsData
    : productsData.filter((p) => p.category === activeCategory);

  const handleAdd = (product, e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedItemNotice(product.id);
    setTimeout(() => {
      setAddedItemNotice(null);
    }, 1500);
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-dairy-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dairy-green-100 text-dairy-green-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-dairy-gold-500" />
            <span>Farm Fresh Products</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            100% Raw, Unadulterated & Pure
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Harvested daily under strict cold-chain hygiene. Free from synthetic chemicals, starches, or artificial preservatives.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-dairy-green-800 text-white shadow-md shadow-dairy-green-900/20 scale-105'
                  : 'bg-white text-slate-700 hover:bg-dairy-green-50 hover:text-dairy-green-800 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col group"
            >
              {/* Product Image Box */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Product Tag */}
                <span className="absolute top-3 left-3 bg-dairy-green-900/90 backdrop-blur-md text-dairy-gold-300 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {product.tag}
                </span>

                {/* Quick Info Button */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-md text-slate-700 hover:text-dairy-green-800 rounded-full shadow-sm opacity-90 hover:opacity-100 transition-opacity"
                  title="View Details"
                  aria-label="View product details"
                >
                  <Eye className="w-4 h-4" />
                </button>

                {/* Volume / Size badge */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-slate-800 text-xs font-semibold px-2.5 py-0.5 rounded-lg shadow-sm">
                  {product.volume}
                </div>
              </div>

              {/* Product Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>{product.category}</span>
                    <span className="text-dairy-green-700 font-semibold">{product.fat}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-slate-900 leading-snug group-hover:text-dairy-green-800 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-500 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Price & Action */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase font-bold text-slate-400 block">Price</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-xl font-black text-dairy-green-900">
                        {product.currency} {product.price}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleAdd(product, e)}
                    className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm ${
                      addedItemNotice === product.id
                        ? 'bg-dairy-green-600 text-white'
                        : 'bg-dairy-green-700 hover:bg-dairy-green-800 text-white active:scale-95'
                    }`}
                  >
                    {addedItemNotice === product.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription banner alert */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-dairy-green-900 via-dairy-green-800 to-dairy-green-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-dairy-gold-400">
              Never Run Out of Fresh Morning Milk
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Looking for Daily or Alternate-Day Delivery?
            </h3>
            <p className="text-sm text-dairy-cream-200 max-w-xl">
              Get raw cow or buffalo milk delivered to your door every morning before 7:30 AM with discounted monthly subscription billing!
            </p>
          </div>
          <a
            href="#subscription"
            className="px-6 py-3.5 rounded-2xl bg-dairy-gold-400 hover:bg-dairy-gold-500 text-slate-950 font-bold text-sm shadow-md transition-transform hover:scale-105 flex items-center gap-2 whitespace-nowrap"
          >
            <span>Open Subscription Planner</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]">
            
            <div className="relative h-64 bg-slate-100 flex-shrink-0">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-slate-800 hover:bg-white flex items-center justify-center font-bold text-sm shadow-md"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 bg-dairy-green-900/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {selectedProduct.category}
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  {selectedProduct.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-semibold">
                  Packaging: {selectedProduct.volume} • Shelf Life: {selectedProduct.shelfLife}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedProduct.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-dairy-green-800 mb-2">
                  Key Quality Highlights:
                </h4>
                <ul className="space-y-1.5">
                  {selectedProduct.benefits?.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-dairy-green-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block font-semibold uppercase">Price</span>
                  <span className="font-serif text-2xl font-black text-dairy-green-900">
                    {selectedProduct.currency} {selectedProduct.price}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      onAddToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-dairy-green-700 hover:bg-dairy-green-800 text-white font-bold text-sm shadow flex items-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Basket</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
