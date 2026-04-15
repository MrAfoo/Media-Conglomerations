import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Film, Tv, Globe } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function DisneyPage() {
  const holdings = [
    { icon: Film, label: 'Film Studios', items: 'Walt Disney Pictures, Pixar, Marvel Studios, Lucasfilm, 20th Century Studios, Searchlight Pictures' },
    { icon: Tv, label: 'Television', items: 'ABC, Disney Channel, FX Networks, National Geographic, ESPN' },
    { icon: Globe, label: 'Streaming', items: 'Disney+, Hulu, ESPN+, Star+' },
    { icon: Building2, label: 'Theme Parks', items: 'Disneyland, Walt Disney World, international parks and resorts' }
  ];
  
  return (
    <>
      <Helmet>
        <title>The Walt Disney Company - Media Conglomerations</title>
        <meta name="description" content="Comprehensive information about The Walt Disney Company, its history, holdings, and influence in the global entertainment industry." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/30 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </Link>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="mb-6">The Walt Disney Company</h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                  The world's largest entertainment conglomerate, shaping global popular culture through film, television, theme parks, and streaming services.
                </p>
              </motion.div>
            </div>
          </section>
          
          {/* Image Section */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1696301424349-000b61bd658e"
                  alt="The Walt Disney Company headquarters and iconic castle"
                  className="rounded-2xl shadow-lg w-full h-auto max-h-[600px] object-cover"
                />
              </motion.div>
            </div>
          </section>
          
          {/* Content Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h2 className="mb-4">Company overview</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="leading-relaxed">
                        Founded in 1923 by brothers Walt and Roy Disney, The Walt Disney Company has evolved from a small animation studio into the world's largest entertainment conglomerate. With a market capitalization exceeding $150 billion, Disney's influence extends across film, television, theme parks, consumer products, and digital streaming platforms.
                      </p>
                      <p className="leading-relaxed">
                        Disney's strategic acquisitions have been transformative. The purchase of Pixar in 2006 for $7.4 billion brought cutting-edge animation technology and creative talent. The 2009 acquisition of Marvel Entertainment for $4 billion gave Disney access to one of the most valuable intellectual property portfolios in entertainment. In 2012, Disney acquired Lucasfilm for $4.05 billion, gaining control of the Star Wars and Indiana Jones franchises.
                      </p>
                      <p className="leading-relaxed">
                        The 2019 acquisition of 21st Century Fox for $71.3 billion marked Disney's largest deal, consolidating control over major film and television assets including 20th Century Fox, FX Networks, and National Geographic. This acquisition also gave Disney majority control of Hulu, strengthening its streaming portfolio.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h2 className="mb-4">Streaming dominance</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="leading-relaxed">
                        Disney+ launched in November 2019 and rapidly became one of the fastest-growing streaming services in history, reaching over 150 million subscribers within two years. The platform leverages Disney's vast content library, including Marvel, Star Wars, Pixar, and National Geographic properties.
                      </p>
                      <p className="leading-relaxed">
                        Combined with Hulu and ESPN+, Disney operates a comprehensive streaming ecosystem that competes directly with Netflix, Amazon Prime Video, and other major platforms. This vertical integration allows Disney to control content creation, distribution, and monetization across multiple revenue streams.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="mb-4">Cultural influence</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="leading-relaxed">
                        Disney's cultural impact is unparalleled in modern entertainment. The company's films, characters, and theme parks have shaped childhood experiences for generations worldwide. Disney's storytelling approach, emphasizing family-friendly content with universal themes, has created a global brand synonymous with entertainment and imagination.
                      </p>
                      <p className="leading-relaxed">
                        However, Disney's market dominance has raised concerns about media consolidation, creative homogenization, and the company's influence over cultural narratives. Critics argue that Disney's control over major franchises and distribution channels limits diversity in storytelling and reduces competition in the entertainment industry.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-card rounded-2xl p-6 shadow-sm sticky top-24"
                  >
                    <h3 className="text-xl mb-6">Major holdings</h3>
                    <div className="space-y-6">
                      {holdings.map((holding, index) => {
                        const Icon = holding.icon;
                        return (
                          <div key={index} className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                              <div className="font-medium text-sm mb-1">{holding.label}</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                {holding.items}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default DisneyPage;