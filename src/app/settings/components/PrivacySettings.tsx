import ToggleItem from './ToggleItem';

interface PrivacySettingsProps {
  profileVisibility: string;
  showEmail: boolean;
  showPortfolio: boolean;
  dataSharing: boolean;
  onVisibilityChange: (value: string) => void;
  onToggle: (field: string) => void;
}

export default function PrivacySettings({
  profileVisibility,
  showEmail,
  showPortfolio,
  dataSharing,
  onVisibilityChange,
  onToggle,
}: PrivacySettingsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Privacy & Security</h2>
        <p className="text-[#B0BEC5]">Control your privacy and data sharing preferences</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[#B0BEC5] mb-3">Profile Visibility</label>
          <select
            value={profileVisibility}
            onChange={(e) => onVisibilityChange(e.target.value)}
            className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="friends">Friends Only</option>
          </select>
        </div>

        <ToggleItem
          label="Show Email Address"
          description="Display your email on your public profile"
          checked={showEmail}
          onChange={() => onToggle('showEmail')}
        />
        <ToggleItem
          label="Show Portfolio"
          description="Allow others to see your portfolio holdings"
          checked={showPortfolio}
          onChange={() => onToggle('showPortfolio')}
        />
        <ToggleItem
          label="Data Sharing"
          description="Share anonymized data to improve our services"
          checked={dataSharing}
          onChange={() => onToggle('dataSharing')}
        />

        <div className="pt-6 border-t border-[#263238]">
          <h3 className="text-lg font-semibold text-white mb-2">Two-Factor Authentication</h3>
          <p className="text-[#B0BEC5] text-sm mb-4">Add an extra layer of security to your account</p>
          <button className="px-6 py-2.5 bg-gradient-to-r from-[#00D4FF] to-[#00A8E8] text-white font-semibold rounded-xl hover:shadow-[0_0_24px_rgba(0,212,255,0.4)] transition-all duration-300">
            Enable 2FA
          </button>
        </div>
      </div>
    </div>
  );
}
