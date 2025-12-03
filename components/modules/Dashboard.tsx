import React from 'react';
import { 
  Activity, TrendingDown, Target, AlertCircle, UserPlus, Phone, 
  MessageCircle, ArrowRight, Clock, Briefcase, Filter
} from 'lucide-react';

const DASHBOARD_DATA = {
  todaysLogins: [
    { id: 1, name: "Ramesh Gupta", time: "10:30 AM", activity: "Generated Health Quote", status: "online" },
    { id: 2, name: "Sita Verma", time: "10:15 AM", activity: "Shared Motor Payment Link", status: "offline" },
    { id: 3, name: "Amit Singh", time: "09:45 AM", activity: "Checked Payout Statement", status: "offline" },
  ],
  leadGenerators: [
    { id: 1, name: "Priya Sharma", leads: 12, topProduct: "Term Life" },
    { id: 2, name: "Karan Mehta", leads: 7, topProduct: "Motor Private" },
  ],
  targetMisses: [
    { id: 1, name: "Vikram Sethi", tier: "Gold", target: 500000, achieved: 220000, gap: "56%" },
    { id: 2, name: "Anjali Devi", tier: "Platinum", target: 1000000, achieved: 750000, gap: "25%" },
  ],
  decliningTrends: [
    { id: 1, name: "Rajesh Kumar", currentVol: 50000, avgHistory: 250000, drop: "-80%" },
    { id: 2, name: "Sneha Patil", currentVol: 120000, avgHistory: 180000, drop: "-33%" },
  ],
  pendingTickets: [
    { id: 1, name: "Manoj Tiwari", type: "Payout Mismatch", aging: "4 Days", priority: "High" },
    { id: 2, name: "Zara Khan", type: "App Login Error", aging: "1 Day", priority: "Medium" },
  ],
  newlyAssigned: [
    { id: 1, name: "Deepak Chopra", assignedDate: "2 Dec 2025", status: "Exam Pending" },
  ],
};

const Card = ({ title, icon: Icon, colorClass, children, actionLabel, className }: any) => (
  <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full ${className}`}>
    <div className={`px-4 py-3 border-b border-gray-100 flex justify-between items-center ${colorClass || 'bg-gray-50'}`}>
      <div className="flex items-center gap-2">
        {Icon && <Icon size={18} className="text-gray-700" />}
        <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
      </div>
      {actionLabel && <button className="text-xs text-blue-600 hover:underline">{actionLabel}</button>}
    </div>
    <div className="p-4 flex-1 overflow-y-auto">
      {children}
    </div>
  </div>
);

const ActionButtons = () => (
  <div className="flex gap-2 ml-auto">
    <button className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors"><Phone size={14} /></button>
    <button className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors"><MessageCircle size={14} /></button>
  </div>
);

export default function DashboardModule() {
  return (
    <div className="bg-gray-100 p-6 min-h-full font-sans text-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Cohort GWP</p>
              <TrendingDown size={14} className="text-green-500 rotate-180" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">₹42.5 L</p>
            <span className="text-xs text-green-600 font-medium bg-green-50 px-1.5 py-0.5 rounded w-fit mt-1">↑ 8% vs Last Week</span>
         </div>
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Active POSPs</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">86</p>
            <div className="w-full bg-gray-100 h-1 mt-2 rounded-full overflow-hidden">
              <div className="bg-blue-500 w-[65%] h-full"></div>
            </div>
         </div>
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
               <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Pending Quotes</p>
               <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">12</p>
         </div>
         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm bg-gradient-to-br from-white to-blue-50 flex flex-col justify-between">
            <p className="text-xs text-blue-600 uppercase font-semibold tracking-wider">VRM Incentive</p>
            <p className="text-2xl font-bold text-blue-700 mt-2">₹18k</p>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <Card title="High Perf. POSP Risk" icon={Target} colorClass="bg-red-50 text-red-700" actionLabel="View All">
          <div className="space-y-4">
            {DASHBOARD_DATA.targetMisses.map((partner) => (
              <div key={partner.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-medium text-gray-900 text-sm hover:text-blue-600 cursor-pointer">{partner.name}</p>
                    <span className="text-[10px] uppercase font-bold bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded border border-yellow-200">{partner.tier}</span>
                  </div>
                  <ActionButtons />
                </div>
                <div className="mt-2">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Achieved: {partner.achieved.toLocaleString()}</span>
                    <span>Gap: <span className="text-red-600 font-bold">{partner.gap}</span></span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-red-500 h-1.5 rounded-full" style={{ width: `${(partner.achieved / partner.target) * 100}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="High Perf. Decline Alert" icon={TrendingDown} colorClass="bg-orange-50 text-orange-800" actionLabel="Analyze">
          <div className="space-y-4">
            {DASHBOARD_DATA.decliningTrends.map((partner) => (
              <div key={partner.id} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm hover:text-blue-600 cursor-pointer">{partner.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-400 line-through">Avg: {partner.avgHistory / 1000}k</span>
                    <ArrowRight size={12} className="text-gray-300"/>
                    <span className="text-xs text-gray-900 font-bold">Now: {partner.currentVol / 1000}k</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="flex items-center text-xs font-bold text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">{partner.drop}</span>
                  <ActionButtons />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Pending Tickets" icon={AlertCircle} colorClass="bg-yellow-50 text-yellow-800" actionLabel="Resolve">
          <div className="space-y-3">
            {DASHBOARD_DATA.pendingTickets.map((ticket) => (
              <div key={ticket.id} className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm relative pl-4 hover:shadow-md transition-shadow group cursor-pointer">
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-lg ${ticket.priority === 'High' ? 'bg-red-500' : 'bg-yellow-400'}`}></div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">{ticket.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{ticket.type}</p>
                  </div>
                  <span className="text-[10px] font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-100">{ticket.aging}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card title="Today's Active POSPs" icon={Activity} colorClass="bg-white" actionLabel={<Filter size={14}/>}>
          <div className="space-y-4">
            {DASHBOARD_DATA.todaysLogins.map((login) => (
              <div key={login.id} className="flex items-start gap-3 group">
                <div className={`mt-2 w-2 h-2 rounded-full ring-2 ring-offset-1 ${login.status === 'online' ? 'bg-green-500 ring-green-100 animate-pulse' : 'bg-gray-300 ring-gray-100'}`}></div>
                <div className="flex-1 pb-3 border-b border-dashed border-gray-100 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer">{login.name}</p>
                    <span className="text-[10px] text-gray-400 flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded"><Clock size={10} /> {login.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 truncate w-full flex items-center gap-1">
                     <span className="w-1 h-1 bg-blue-400 rounded-full inline-block"></span>
                     {login.activity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

         <Card title="Lead Generators" icon={Briefcase} colorClass="bg-white">
           <div className="space-y-2">
            {DASHBOARD_DATA.leadGenerators.map((partner) => (
              <div key={partner.id} className="flex items-center justify-between p-2.5 hover:bg-green-50 rounded-lg transition-colors border border-transparent hover:border-green-100 group">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-700 w-9 h-9 flex flex-col items-center justify-center rounded-lg font-bold text-sm shadow-sm">
                    <span>{partner.leads}</span>
                    <span className="text-[8px] leading-none font-normal">LEADS</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-green-700">{partner.name}</p>
                    <p className="text-xs text-gray-500">Focus: <span className="font-medium">{partner.topProduct}</span></p>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                   <ActionButtons />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Newly Assigned POSPs" icon={UserPlus} colorClass="bg-white">
          <div className="space-y-3">
            {DASHBOARD_DATA.newlyAssigned.map((partner) => (
              <div key={partner.id} className="border border-gray-100 rounded-lg p-3 bg-gray-50/50">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{partner.name}</p>
                    <p className="text-xs text-gray-500 mt-1">Assigned: {partner.assignedDate}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wide font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded border border-purple-100">{partner.status}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </div>
  );
}