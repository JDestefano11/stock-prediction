import ToggleItem from './ToggleItem';

interface PreferencesSettingsProps {
  currency: string;
  language: string;
  timezone: string;
  theme: string;
  compactView: boolean;
  onChange: (field: string, value: string) => void;
  onToggle: (field: string) => void;
}

export default function PreferencesSettings({
  currency,
  language,
  timezone,
  theme,
  compactView,
  onChange,
  onToggle,
}: PreferencesSettingsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">App Preferences</h2>
        <p className="text-[#B0BEC5]">Customize your experience</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#B0BEC5] mb-3">Currency</label>
          <select
            value={currency}
            onChange={(e) => onChange('currency', e.target.value)}
            className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent"
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="CAD">CAD - Canadian Dollar</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#B0BEC5] mb-3">Language</label>
          <select
            value={language}
            onChange={(e) => onChange('language', e.target.value)}
            className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#B0BEC5] mb-3">Timezone</label>
          <select
            value={timezone}
            onChange={(e) => onChange('timezone', e.target.value)}
            className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent"
          >
            <option value="America/New_York">Eastern Time (ET)</option>
            <option value="America/Chicago">Central Time (CT)</option>
            <option value="America/Denver">Mountain Time (MT)</option>
            <option value="America/Los_Angeles">Pacific Time (PT)</option>
            <option value="Europe/London">London (GMT)</option>
            <option value="Asia/Tokyo">Tokyo (JST)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#B0BEC5] mb-3">Theme</label>
          <select
            value={theme}
            onChange={(e) => onChange('theme', e.target.value)}
            className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="auto">Auto (System)</option>
          </select>
        </div>

        <ToggleItem
          label="Compact View"
          description="Show more information in less space"
          checked={compactView}
          onChange={() => onToggle('compactView')}
        />
      </div>
    </div>
  );
}
