import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import Home from './components/Home';
import SystemGallery from './components/SystemGallery';
import DashboardModule from './components/modules/Dashboard';
import PRMModule from './components/modules/PRM';
import Partner360Module from './components/modules/Partner360';
import CustomerBookModule from './components/modules/CustomerBook';

const ModuleWrapper = ({ children, title, onBack }: { children: React.ReactNode, title: string, onBack: () => void }) => (
  <div className="min-h-screen pt-20 px-4 pb-8 flex flex-col h-screen">
    <div className="flex items-center gap-4 mb-4">
      <button 
        onClick={onBack}
        className="text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-bold border border-white/20 backdrop-blur-sm transition-all"
      >
        ← Back to Ecosystem
      </button>
      <h2 className="text-xl font-bold text-white drop-shadow-md">{title}</h2>
    </div>
    <div className="flex-1 bg-white/90 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm relative">
       {children}
    </div>
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'system'>('home');
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to handle navigation between System Gallery and Specific Modules
  const renderSystemContent = () => {
    if (!activeModule) {
      return <SystemGallery setActiveModule={setActiveModule} />;
    }
    
    const handleBack = () => setActiveModule(null);

    switch (activeModule) {
      case 'dashboard': return <ModuleWrapper title="RM Dashboard" onBack={handleBack}><DashboardModule /></ModuleWrapper>;
      case 'prm': return <ModuleWrapper title="Partner Relationship Management" onBack={handleBack}><PRMModule /></ModuleWrapper>;
      case 'partner360': return <ModuleWrapper title="Partner 360 View" onBack={handleBack}><Partner360Module /></ModuleWrapper>;
      case 'crm': return <ModuleWrapper title="Customer Book (CRM)" onBack={handleBack}><CustomerBookModule /></ModuleWrapper>;
      case 'vrm': return <ModuleWrapper title="VRM 360" onBack={handleBack}><DashboardModule /></ModuleWrapper>; // Reusing Dashboard for VRM as per prototype similarity
      default: return <SystemGallery setActiveModule={setActiveModule} />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-purple-300 selection:text-purple-900 bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border-b border-white/20 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => { setActiveTab('home'); setActiveModule(null); }}>
            <div className="relative w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg transform transition-transform group-hover:rotate-12">
              <Shield className="text-white w-6 h-6 drop-shadow-md" />
            </div>
            <span className="text-2xl font-bold text-white drop-shadow-md">
              AB<span className="text-purple-200">Partners</span>
            </span>
          </div>

          <div className="hidden md:flex items-center bg-white/10 p-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-inner">
            <button 
              onClick={() => { setActiveTab('home'); setActiveModule(null); }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'home' ? 'bg-white/20 text-white shadow-lg border border-white/30' : 'text-blue-50 hover:text-white hover:bg-white/10'}`}
            >
              POSP Partners
            </button>
            <button 
              onClick={() => setActiveTab('system')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'system' ? 'bg-white/20 text-white shadow-lg border border-white/30' : 'text-blue-50 hover:text-white hover:bg-white/10'}`}
            >
              System Showcase
            </button>
          </div>

          <div className="hidden md:flex gap-4">
            <button className="text-white/90 hover:text-white transition-colors text-sm font-semibold hover:drop-shadow-md">Login</button>
            <button className="bg-white hover:bg-purple-50 text-purple-600 border border-white/50 px-6 py-2 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Register Now
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-purple-900/90 backdrop-blur-xl border-b border-white/20 p-4 flex flex-col gap-4 shadow-2xl">
             <button 
              onClick={() => { setActiveTab('home'); setActiveModule(null); setMobileMenuOpen(false); }}
              className={`w-full py-3 rounded-xl text-center font-medium border ${activeTab === 'home' ? 'bg-white/20 border-white/30 text-white' : 'border-transparent text-blue-100'}`}
            >
              POSP Partners
            </button>
            <button 
              onClick={() => { setActiveTab('system'); setMobileMenuOpen(false); }}
              className={`w-full py-3 rounded-xl text-center font-medium border ${activeTab === 'system' ? 'bg-white/20 border-white/30 text-white' : 'border-transparent text-blue-100'}`}
            >
              System Showcase
            </button>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      {activeTab === 'home' ? (
        <Home setActiveTab={setActiveTab} />
      ) : (
        renderSystemContent()
      )}

    </div>
  );
};

export default App;