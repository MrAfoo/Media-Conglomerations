import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Film, Tv, Wifi } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function ComcastPage() {
  const holdings = [
    { icon: Wifi, label: 'Telecommunications', items: 'Xfinity cable, internet, and phone services across the United States' },
    { icon: Film, label: 'Film Studios', items: 'Universal Pictures, DreamWorks Animation, Illumination Entertainment, Focus Features' },
    { icon: Tv, label: 'Television', items: 'NBC, MSNBC, CNBC, USA Network, Bravo, Syfy, E!, Telemundo, Sky (UK/Europe)' },
    { icon: Building2, label: 'Theme Parks', items: 'Universal Studios theme parks, Universal Orlando Resort, Universal Studios Hollywood' }
  ];
  
  return (
    <>
      <Helmet>
        <title>Comcast (NBCUniversal) - Media Conglomerations</title>
        <meta name="description" content="Comprehensive information about Comcast and NBCUniversal, its history, holdings, and influence in telecommunications and entertainment." />
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
                <h1 className="mb-6">Comcast (NBCUniversal)</h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                  A telecommunications giant with extensive media and entertainment holdings, combining infrastructure with content creation and distribution.
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
                  src="https://images.unsplash.com/photo-1678314775888-164b6c9faaa7"
                  alt="Comcast corporate headquarters and telecommunications infrastructure"
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
                        Comcast Corporation is the largest broadcasting and cable television company in the world by revenue, with a market capitalization exceeding $150 billion. Founded in 1963 as a small cable operator, Comcast has grown into a telecommunications and media conglomerate with operations spanning broadband, cable television, wireless services, film production, television networks, theme parks, and streaming platforms.
                      </p>
                      <p className="leading-relaxed">
                        The company's transformation into a media powerhouse began with its acquisition of NBCUniversal. In 2009, Comcast announced a deal to acquire a 51% stake in NBCUniversal from General Electric, with the transaction completed in 2011. Comcast acquired the remaining 49% stake from GE in 2013, gaining full control of NBCUniversal's extensive media assets.
                      </p>
                      <p className="leading-relaxed">
                        This acquisition gave Comcast ownership of the NBC broadcast network, numerous cable channels, Universal Pictures film studio, and Universal theme parks. The vertical integration of content creation (NBCUniversal) with distribution infrastructure (Comcast cable and broadband) created significant competitive advantages and raised regulatory concerns about market concentration.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h2 className="mb-4">Telecommunications dominance</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="leading-relaxed">
                        Comcast's core business remains telecommunications, operating under the Xfinity brand. The company serves millions of residential and business customers across the United States, providing cable television, high-speed internet, telephone services, and wireless communications. Comcast is the largest cable provider in the United States and the second-largest internet service provider.
                      </p>
                      <p className="leading-relaxed">
                        This infrastructure gives Comcast unique leverage in the media landscape. As both a content creator (through NBCUniversal) and a distribution platform (through Xfinity), Comcast controls both ends of the value chain. This vertical integration has sparked debates about net neutrality, content prioritization, and fair competition in the digital age.
                      </p>
                      <p className="leading-relaxed">
                        In 2018, Comcast expanded its international presence by acquiring Sky, a major European pay-television company, for $39 billion. This acquisition gave Comcast significant operations in the UK, Ireland, Germany, Austria, and Italy, further diversifying its revenue streams and global footprint.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="mb-4">Streaming and content strategy</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="leading-relaxed">
                        Comcast launched Peacock, its streaming service, in July 2020 to compete with Netflix, Disney+, and other platforms. Peacock offers a mix of NBCUniversal content, including classic TV shows, films, news, and sports programming. The service uses a hybrid model with both free ad-supported tiers and premium subscription options.
                      </p>
                      <p className="leading-relaxed">
                        NBCUniversal's film division, Universal Pictures, remains one of Hollywood's major studios, producing blockbuster franchises like Fast & Furious, Jurassic World, and Despicable Me. The company's theme parks, including Universal Studios Hollywood and Universal Orlando Resort, generate significant revenue and serve as physical extensions of its intellectual property.
                      </p>
                      <p className="leading-relaxed">
                        Comcast's position as both a telecommunications infrastructure provider and a content creator gives it unique strategic advantages but also raises concerns about conflicts of interest, data usage policies, and the potential for anti-competitive practices in an increasingly consolidated media landscape.
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

export default ComcastPage;
