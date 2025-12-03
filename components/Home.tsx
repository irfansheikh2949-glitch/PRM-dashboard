import React from 'react';
import { 
  Shield, Wallet, Laptop, Headphones, Megaphone, ArrowRight, Layers, 
  Briefcase, CheckCircle, Smartphone, Car, HeartPulse, Umbrella, 
  XCircle, Quote, ChevronDown
} from 'lucide-react';

const FloatingCard = ({ icon: Icon, title, desc, delay, position, color }: any) => (
  <div 
    className={`absolute ${position} w-64 bg-white/20 border border-white/30 backdrop-blur-lg p-4 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] animate-float z-20 flex flex-col gap-2`}
    style={{ animationDelay: delay }}
  >
    <div className="flex justify-between items-start">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-white/30 text-white shadow-sm`}>
        <Icon size={20} />
      </div>
    </div>
    <h3 className="text-white font-bold">{title}</h3>
    <p className="text-xs text-white/90">{desc}</p>
  </div>
);

const Home = ({ setActiveTab }: { setActiveTab: (tab: 'home'|'system') => void }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-400/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400/30 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white text-sm font-medium backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-purple-300 animate-ping"></span>
              Join 45,000+ Partners
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-md">
              Zero Investment, <br />
              <span className="text-purple-200">Unlimited Income</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-xl font-medium">
              Become a certified POSP with ABPartners. Sell policies from 20+ top insurers and earn industry-best commissions.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button className="relative group overflow-hidden bg-white text-purple-600 px-8 py-4 rounded-2xl text-lg font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-purple-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <button 
                onClick={() => setActiveTab('system')}
                className="bg-white/10 text-white border border-white/30 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all flex items-center gap-2 group backdrop-blur-md shadow-lg"
              >
                View Platform <ArrowRight className="group-hover:translate-x-1 transition-transform text-purple-200" />
              </button>
            </div>
          </div>

          {/* 3D Glass Visuals */}
          <div className="relative h-[600px] hidden lg:block perspective-1000">
            <div className="absolute inset-0 flex items-center justify-center transform-style-3d">
               <FloatingCard 
                 icon={Wallet} title="Instant Payouts" 
                 desc="Daily payouts. Click and receive payment instantly." 
                 position="top-0 right-10" delay="0s" color="white"
               />
               <FloatingCard 
                 icon={Laptop} title="Digital Comparison" 
                 desc="Compare quotes from 20+ insurers digitally." 
                 position="top-32 left-0" delay="1.5s" color="white"
               />
               <FloatingCard 
                 icon={Headphones} title="Partner Support" 
                 desc="Dedicated RMs available to solve your queries." 
                 position="bottom-32 right-0" delay="3s" color="white"
               />
               <FloatingCard 
                 icon={Megaphone} title="Marketing Support" 
                 desc="We market you to enhance your visibility." 
                 position="bottom-0 left-10" delay="4.5s" color="white"
               />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-white/5 backdrop-blur-lg border-t border-white/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-purple-200 font-bold tracking-widest text-xs uppercase">Why Join Us</span>
            <h2 className="text-3xl font-bold text-white mt-2">6 Reasons to Become a Partner</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Zero Investment", desc: "Start without capital. No registration fees.", icon: Wallet, color: "cyan" },
              { title: "Be Your Own Boss", desc: "Work from home or office, full-time or part-time.", icon: Briefcase, color: "orange" },
              { title: "Multi-Insurer Platform", desc: "Offer products from HDFC, ICICI, Tata AIG & 20+ others.", icon: Layers, color: "blue" },
              { title: "Recurring Income", desc: "Earn commissions on every policy renewal.", icon: CheckCircle, color: "emerald" },
              { title: "Dedicated Support", desc: "Get a personal Relationship Manager & 24/7 assistance.", icon: Headphones, color: "purple" },
              { title: "Digital Tools", desc: "Instant quotes & marketing posters via mobile app.", icon: Smartphone, color: "pink" },
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-2 shadow-lg hover:shadow-purple-500/10">
                <div className={`w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-inner`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Sell Everything Under One Roof</h2>
            <p className="text-white/80 mt-2">A comprehensive product suite for your customers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "General Insurance", icon: Car, items: ["Car & Bike Insurance", "Commercial Vehicle", "Travel Insurance"], color: "cyan" },
              { title: "Health Insurance", icon: HeartPulse, items: ["Individual Health", "Family Floater", "Critical Illness"], color: "emerald" },
              { title: "Life Insurance", icon: Umbrella, items: ["Term Life", "Investment Plans (ULIP)", "Pension Plans"], color: "purple" },
            ].map((prod, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/10 border border-white/20 hover:border-white/40 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 text-white mx-auto shadow-inner`}>
                  <prod.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-6 text-center">{prod.title}</h3>
                <ul className="space-y-4">
                  {prod.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/90 text-sm">
                      <CheckCircle size={16} className="text-purple-200" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Onboarding Section */}
      <div className="py-24 bg-gradient-to-b from-white/5 to-transparent border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-purple-200 font-bold tracking-widest text-xs uppercase">Onboarding</span>
            <h2 className="text-3xl font-bold text-white mt-2">Start Earning in 4 Simple Steps</h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "1", title: "Sign Up", desc: "Fill details & upload KYC documents." },
                { step: "2", title: "Training", desc: "Complete 15-hour online training." },
                { step: "3", title: "Certification", desc: "Pass simple online exam." },
                { step: "4", title: "Start Selling", desc: "Login & start issuing policies." }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 mx-auto bg-white/10 border-2 border-white/30 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg group-hover:bg-white group-hover:text-purple-600 transition-all backdrop-blur-md">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Traditional Agent vs. <span className="text-purple-200">ABPartners POSP</span></h2>
          </div>
          <div className="rounded-2xl border border-white/20 overflow-hidden bg-white/10 backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-12 text-sm border-b border-white/20 bg-white/5">
              <div className="col-span-4 p-6 font-bold text-white">Feature</div>
              <div className="col-span-4 p-6 text-center font-bold text-white/70 border-x border-white/20">Traditional Agent</div>
              <div className="col-span-4 p-6 text-center font-bold text-white bg-white/10">ABPartners POSP</div>
            </div>
            {[
              { feat: "Insurance Options", trad: "Single Insurer", posp: "20+ Insurers" },
              { feat: "Product Basket", trad: "Limited (Life OR General)", posp: "All In One" },
              { feat: "Onboarding", trad: "Physical Exam", posp: "100% Online" },
              { feat: "Payout Speed", trad: "Monthly/Delayed", posp: "Instant Daily Payout" },
              { feat: "Technology", trad: "Paperwork", posp: "Mobile App & Portal" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-12 text-sm border-b border-white/10 hover:bg-white/5 transition-colors text-white">
                <div className="col-span-4 p-5 font-medium">{row.feat}</div>
                <div className="col-span-4 p-5 text-center text-white/70 border-x border-white/10 flex items-center justify-center gap-2">
                  <XCircle size={14} className="text-red-300" /> {row.trad}
                </div>
                <div className="col-span-4 p-5 text-center font-semibold bg-white/5 flex items-center justify-center gap-2">
                  <CheckCircle size={14} className="text-emerald-300" /> {row.posp}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 border-t border-white/20 bg-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What is a POSP?", a: "POSP (Point of Sales Person) is an insurance agent certified to sell policies directly to customers, introduced by IRDAI to increase penetration." },
              { q: "Is there any joining fee?", a: "No, joining ABPartners is completely free. We do not charge any registration or hidden fees." },
              { q: "What documents are required?", a: "You need a PAN Card, Aadhaar Card, cancelled cheque, and 10th standard mark sheet." },
              { q: "How much can I earn?", a: "There is no limit! Your earnings depend on the number of policies you sell. With high commissions and renewal income, the potential is unlimited." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white/10 border border-white/20 rounded-xl open:bg-white/20 transition-all shadow-md">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-white list-none">
                  {faq.q}
                  <ChevronDown className="text-white group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-white/80 text-sm leading-relaxed border-t border-white/10 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-white/10 border-t border-white/20 text-center backdrop-blur-lg">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your career?</h2>
            <button className="bg-white hover:bg-purple-50 text-purple-600 px-10 py-4 rounded-full text-lg font-bold shadow-lg transition-all transform hover:scale-105 border border-white/50">
              Register as Partner
            </button>
         </div>
      </div>
    </>
  );
};

export default Home;