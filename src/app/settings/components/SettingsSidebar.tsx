interface Tab {
  id: string;
  label: string;
  icon: string;
}

interface SettingsSidebarProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function SettingsSidebar({ tabs, activeTab, onTabChange }: SettingsSidebarProps) {
  return (
    <div className="lg:col-span-1">
      <div className="bg-[#141B2D]/80 backdrop-blur-xl border border-[#263238] rounded-2xl p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-[#00D4FF] to-[#00A8E8] text-white shadow-lg'
                : 'text-[#B0BEC5] hover:bg-[#1E293B] hover:text-white'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
            </svg>
            <span className="font-medium text-sm">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
