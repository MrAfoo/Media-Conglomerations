import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Film, Tv } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
function HomePage() {
  const companies = [{
    name: 'The Walt Disney Company',
    path: '/disney',
    icon: Film,
    description: 'Global entertainment powerhouse with film studios, theme parks, and streaming services'
  }, {
    name: 'Warner Bros. Discovery',
    path: '/warner-bros',
    icon: Tv,
    description: 'Major media conglomerate combining Warner Bros. entertainment with Discovery content'
  }, {
    name: 'Comcast (NBCUniversal)',
    path: '/comcast',
    icon: Building2,
    description: 'Telecommunications giant with extensive media and entertainment holdings'
  }];
  return <>
      <Helmet>
        <title>Media Conglomerations - Understanding major media companies</title>
        <meta name="description" content="Explore the structure, history, and influence of major media conglomerates including Disney, Warner Bros. Discovery, and Comcast." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="max-w-4xl">
                <h1 className="mb-6">Media Conglomerations</h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                  A media conglomerate is a company that owns numerous companies involved in mass media enterprises, such as music, television, radio, publishing, motion pictures, theme parks, or the internet. These corporations have become increasingly powerful in shaping global culture, entertainment, and information distribution.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  The consolidation of media ownership has created a landscape where a handful of massive corporations control the majority of content consumed worldwide. Understanding these conglomerates—their structure, holdings, and influence—is essential for comprehending modern media ecosystems and their impact on society, culture, and democracy.
                </p>
              </motion.div>
            </div>
          </section>
          
          {/* History Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }}>
                  <h2 className="mb-6">A brief history</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-base md:text-lg leading-relaxed">
                      The rise of media conglomerates accelerated dramatically in the late 20th century, driven by deregulation, technological advancement, and globalization. The Telecommunications Act of 1996 in the United States removed many restrictions on media ownership, enabling unprecedented consolidation.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      What began as separate film studios, television networks, and publishing houses evolved into vertically integrated empires controlling content creation, distribution, and exhibition. Companies like Disney, Warner Bros., and Comcast expanded through strategic acquisitions, absorbing competitors and diversifying their portfolios.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Today, these conglomerates operate across multiple platforms from traditional broadcast and cable to streaming services and theme parks creating synergies that maximize profit while raising questions about media diversity, competition, and cultural influence.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.6,
                delay: 0.3
              }} className="relative">
                  <img src="https://images.unsplash.com/photo-1691242716494-8190d84c58b8" alt="Historic media broadcasting equipment and vintage television studio" className="rounded-2xl shadow-lg w-full h-auto" />
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Companies Section */}
          <section className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }} className="mb-12">
                <h2 className="mb-4">Major media conglomerates</h2>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  Explore the three dominant media conglomerates that shape the entertainment landscape and influence global culture.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 gap-8">
                {companies.map((company, index) => {
                const Icon = company.icon;
                return <motion.div key={company.path} initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1
                }}>
                      <Link to={company.path} className="block bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                            <Icon className="w-7 h-7 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl mb-2 group-hover:text-accent transition-colors duration-300">
                              {company.name}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {company.description}
                            </p>
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300">
                              Learn more
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>;
              })}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>;
}
export default HomePage;