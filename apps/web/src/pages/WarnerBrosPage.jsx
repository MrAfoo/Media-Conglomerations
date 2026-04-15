import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Film, Tv, Radio } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function WarnerBrosPage() {
  const holdings = [
    { icon: Film, label: 'Film Studios', items: 'Warner Bros. Pictures, New Line Cinema, DC Films, Castle Rock Entertainment' },
    { icon: Tv, label: 'Television', items: 'HBO, CNN, TNT, TBS, Cartoon Network, Adult Swim, Discovery Channel, HGTV, Food Network' },
    { icon: Radio, label: 'Streaming', items: 'Max (formerly HBO Max), Discovery+' },
    { icon: Building2, label: 'Other Assets', items: 'Warner Bros. Games, DC Comics, Warner Bros. Animation' }
  ];
  
  return (
    <>
      <Helmet>
        <title>Warner Bros. Discovery - Media Conglomerations</title>
        <meta name="description" content="Comprehensive information about Warner Bros. Discovery, its history, holdings, and influence in the global entertainment industry." />
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
                <h1 className="mb-6">Warner Bros. Discovery</h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                  A major media conglomerate formed through the merger of WarnerMedia and Discovery, combining premium entertainment with factual programming.
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
                  src="https://images.unsplash.com/photo-1549787840-64e6c5ea24da"
                  alt="Warner Bros. studio lot and production facilities"
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
                        Warner Bros. Discovery was formed in April 2022 through the merger of WarnerMedia (spun off from AT&T) and Discovery, Inc. This $43 billion deal created one of the world's largest media and entertainment conglomerates, combining Warner Bros.' premium entertainment assets with Discovery's extensive factual and lifestyle programming.
                      </p>
                      <p className="leading-relaxed">
                        Warner Bros. itself has a storied history dating back to 1923, when it was founded by brothers Harry, Albert, Sam, and Jack Warner. The studio became a Hollywood powerhouse, producing iconic films and establishing itself as a leader in both theatrical releases and television production. Warner Bros. has been responsible for some of cinema's most influential franchises, including Harry Potter, DC Comics adaptations, The Matrix, and The Lord of the Rings.
                      </p>
                      <p className="leading-relaxed">
                        Discovery, founded in 1985, built its reputation on factual entertainment and lifestyle programming. Networks like Discovery Channel, Animal Planet, TLC, and HGTV became staples of cable television, offering educational and reality-based content that attracted dedicated audiences worldwide.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h2 className="mb-4">The merger and restructuring</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="leading-relaxed">
                        The merger brought together complementary assets: Warner Bros.' premium scripted content, HBO's prestige programming, CNN's news operations, and Discovery's unscripted and factual content. This combination created a portfolio spanning film, television, news, sports, and streaming services.
                      </p>
                      <p className="leading-relaxed">
                        Following the merger, the company underwent significant restructuring, including cost-cutting measures, content cancellations, and the consolidation of streaming services. HBO Max and Discovery+ were merged into a single platform called Max, launched in May 2023, to compete more effectively with Netflix, Disney+, and other streaming giants.
                      </p>
                      <p className="leading-relaxed">
                        The company faced challenges in balancing premium content investment with profitability goals. Controversial decisions included removing completed films and series from streaming platforms for tax write-offs, sparking debates about content preservation and creative integrity in the streaming era.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="mb-4">Industry position</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="leading-relaxed">
                        Warner Bros. Discovery operates in a highly competitive media landscape, competing with Disney, Comcast, Paramount, and tech giants like Netflix and Amazon. The company's strategy focuses on leveraging its diverse content library, strong franchises, and global distribution networks to maintain market position.
                      </p>
                      <p className="leading-relaxed">
                        With assets spanning news (CNN), sports (TNT Sports, Eurosport), premium entertainment (HBO), and factual programming (Discovery networks), Warner Bros. Discovery aims to serve diverse audience segments while navigating the ongoing shift from traditional cable to streaming distribution.
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

export default WarnerBrosPage;