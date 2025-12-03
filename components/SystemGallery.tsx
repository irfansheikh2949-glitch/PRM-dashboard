import React from 'react';
import { LayoutDashboard, Users, Briefcase, User, Globe, ArrowRight, Layers } from 'lucide-react';

const SystemGalleryCard = ({ title, icon: Icon, desc, color, onClick }: any) => (
    <div 
        onClick={onClick}
        className="group relative cursor-pointer bg-white/20 border border-white/30 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden backdrop-blur-md"
    >
        {/* Glow effect on hover */}
        <div className={`absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white/30 opacity-0 group-hover:opacity-100 group-hover:animate-shine`} />
        
        <div className={`absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-bl-full -mr-10 -mt-10 blur-xl transition-all group-hover:bg-white/30`}></div>
        
        <div className={`w-14 h-14 rounded-2xl bg-white/30 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform border border-white/40 shadow-md`}>
            <Icon size={32} className={`drop-shadow-sm`} />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{title}</h3>
        <p className="text-white/90 text-sm mb-8 leading-relaxed">{desc}</p>
        
        <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
            <span>Launch App</span> <ArrowRight size={16} />
        </div>
    </div>
);

const SystemGallery = ({ setActiveModule }: { setActiveModule: (mod: string) => void }) => {
    return (
        <div className="min-h-screen pt-24 px-6 pb-12 relative overflow-hidden">
             {/* Background Mesh for Gallery */}
             <div className="absolute inset-0 pointer-events-none">
                 <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-[100px] animate-pulse"></div>
                 <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px]"></div>
             </div>

             <div className="container mx-auto relative z-10">
                 <div className="text-center max-w-2xl mx-auto mb-16 animate-fadeIn">
                     <span className="inline-block py-1 px-3 rounded-full bg-white/20 border border-white/40 text-white text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm shadow-md">
                        System Showcase
                     </span>
                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                        The <span className="text-purple-100">ABPartners Ecosystem</span>
                     </h2>
                     <p className="text-white/90 text-lg">
                         A unified tech stack connecting Partners, Customers, and Insurers in real-time.
                     </p>
                 </div>

                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
                     <SystemGalleryCard 
                        title="RM Dashboard" 
                        icon={LayoutDashboard} 
                        desc="Analytics for tracking gross premiums, policy trends, and sales performance."
                        color="blue"
                        onClick={() => setActiveModule('dashboard')}
                     />
                     <SystemGalleryCard 
                        title="PRM Suite" 
                        icon={Users} 
                        desc="Partner Relationship Management. Onboard new agents and manage hierarchies."
                        color="emerald"
                        onClick={() => setActiveModule('prm')}
                     />
                     <SystemGalleryCard 
                        title="CRM Suite" 
                        icon={Briefcase} 
                        desc="Customer Relationship Management for lead tracking and conversion analytics."
                        color="purple"
                        onClick={() => setActiveModule('crm')}
                     />
                     <SystemGalleryCard 
                        title="Partner 360" 
                        icon={User} 
                        desc="A holistic 360-degree view of individual partners, earnings, and retention rates."
                        color="amber"
                        onClick={() => setActiveModule('partner360')}
                     />
                      <SystemGalleryCard 
                        title="VRM 360" 
                        icon={Globe} 
                        desc="Virtual Relationship Manager tools. Schedule video meets and manage chat support."
                        color="pink"
                        onClick={() => setActiveModule('vrm')}
                     />
                      {/* Coming Soon Glass Card */}
                      <div className="relative border border-dashed border-white/30 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors group cursor-not-allowed backdrop-blur-sm">
                           <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                               <Layers size={24} className="text-white/50" />
                           </div>
                           <h3 className="text-xl font-bold text-white/50 mb-2">Claims Engine</h3>
                           <p className="text-white/50 text-sm">Coming Soon</p>
                      </div>
                 </div>
             </div>
        </div>
    );
};

export default SystemGallery;