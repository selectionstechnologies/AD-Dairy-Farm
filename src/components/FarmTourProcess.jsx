import React, { useState } from 'react';
import { Leaf, Cpu, Snowflake, Package, Truck, ArrowRight } from 'lucide-react';

export default function FarmTourProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Lush Green Pastures & Ethical Grazing',
      subtitle: 'Nutritious organic diet for happy, stress-free cattle.',
      icon: <Leaf className="w-5 h-5 text-dairy-green-600" />,
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80',
      description: 'Healthy milk comes from happy cows. Our livestock grazes on open grounds and feeds on naturally grown alfalfa, sweet corn silage, and clean aquifer water. We practice zero hormonal stimulation.'
    },
    {
      step: '02',
      title: 'Touch-Free Automated Milking',
      subtitle: 'Gentle vacuum pipeline milking directly from udders.',
      icon: <Cpu className="w-5 h-5 text-dairy-green-600" />,
      image: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&w=800&q=80',
      description: 'Milking is performed twice daily using Swedish computerized suction clusters. The milk flows through sealed food-grade pipes without being exposed to open barn air or human contact.'
    },
    {
      step: '03',
      title: 'Instant 4°C Chilling & Batch Testing',
      subtitle: 'Rapid temperature drop locks natural nutrients.',
      icon: <Snowflake className="w-5 h-5 text-dairy-green-600" />,
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80',
      description: 'Within 15 minutes of milking, the milk is transferred into high-efficiency stainless steel bulk milk chillers bringing the temperature down to 4°C. Our on-site lab checks density, fat, and SNF.'
    },
    {
      step: '04',
      title: 'Glass Bottling & Tamper Seal',
      subtitle: 'Preserving pure natural taste in eco-friendly bottles.',
      icon: <Package className="w-5 h-5 text-dairy-green-600" />,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80',
      description: 'The milk is bottled into UV-sterilized glass bottles. Sealing caps ensure total security until opened on your breakfast table. Reusable bottles minimize environmental plastic waste.'
    },
    {
      step: '05',
      title: 'Cold-Insulated Morning Delivery',
      subtitle: 'Arriving at your doorstep between 6:00 AM & 7:30 AM.',
      icon: <Truck className="w-5 h-5 text-dairy-green-600" />,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      description: 'Our dedicated insulated delivery vans transport the milk right to your doorstep before dawn. Wake up to fresh, chilled milk ready for tea, breakfast cereals, or drinking raw.'
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dairy-green-100 text-dairy-green-800 text-xs font-bold uppercase tracking-wider">
            <span>Farm-To-Table Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            How AD Dairy Milk Reaches You
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A seamless 5-step closed-loop process guaranteeing the freshest, cleanest milk in the city.
          </p>
        </div>

        {/* Process Step Selector (Horizontal on desktop) */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {steps.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`p-4 rounded-2xl text-left border transition-all ${
                activeStep === index
                  ? 'bg-dairy-green-900 text-white border-dairy-green-900 shadow-md scale-102'
                  : 'bg-dairy-cream-50 text-slate-700 border-slate-200 hover:bg-dairy-green-50'
              }`}
            >
              <span className={`block font-serif text-xl font-black ${activeStep === index ? 'text-dairy-gold-400' : 'text-dairy-green-700'}`}>
                {item.step}
              </span>
              <span className="block text-xs font-bold mt-1 line-clamp-1">
                {item.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Feature Showcase */}
        <div className="mt-8 bg-dairy-cream-50 rounded-3xl border border-dairy-green-100 overflow-hidden shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Image */}
            <div className="lg:col-span-6 h-72 sm:h-96 relative overflow-hidden bg-slate-200">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute top-4 left-4 bg-dairy-green-950/80 backdrop-blur-md text-dairy-gold-300 font-serif font-bold text-sm px-3.5 py-1 rounded-full">
                Step {steps[activeStep].step} of 05
              </div>
            </div>

            {/* Content Details */}
            <div className="p-8 lg:p-12 lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white shadow-xs border border-dairy-green-100">
                {steps[activeStep].icon}
                <span className="text-xs font-extrabold uppercase tracking-wider text-dairy-green-800">
                  {steps[activeStep].subtitle}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-black text-slate-900">
                {steps[activeStep].title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="px-5 py-2.5 rounded-xl bg-dairy-green-700 hover:bg-dairy-green-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#contact"
                  className="text-xs font-bold text-dairy-green-800 hover:text-dairy-green-950 underline underline-offset-4"
                >
                  Book a Farm Visit Tour
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
