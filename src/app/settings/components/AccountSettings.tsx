interface AccountSettingsProps {
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  onPasswordChange: (field: string, value: string) => void;
}

export default function AccountSettings({
  email,
  currentPassword,
  newPassword,
  confirmPassword,
  onPasswordChange,
}: AccountSettingsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Account Settings</h2>
        <p className="text-[#B0BEC5]">Manage your account information and security</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#B0BEC5] mb-2">Email Address</label>
          <input
            type="email"
            value={email}
            disabled
            className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-white opacity-60 cursor-not-allowed"
          />
          <p className="text-xs text-[#78909C] mt-1">Email cannot be changed</p>
        </div>

        <div className="pt-6 border-t border-[#263238]">
          <h3 className="text-lg font-semibold text-white mb-4">Change Password</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#B0BEC5] mb-2">Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => onPasswordChange('currentPassword', e.target.value)}
                className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent"
                placeholder="Enter current password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#B0BEC5] mb-2">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => onPasswordChange('newPassword', e.target.value)}
                className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent"
                placeholder="Enter new password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#B0BEC5] mb-2">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => onPasswordChange('confirmPassword', e.target.value)}
                className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent"
                placeholder="Confirm new password"
              />
            </div>

            <button className="px-6 py-2.5 bg-gradient-to-r from-[#00D4FF] to-[#00A8E8] text-white font-semibold rounded-xl hover:shadow-[0_0_24px_rgba(0,212,255,0.4)] transition-all duration-300">
              Update Password
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-[#263238]">
          <h3 className="text-lg font-semibold text-white mb-2">Danger Zone</h3>
          <p className="text-[#B0BEC5] text-sm mb-4">Permanently delete your account and all associated data</p>
          <button className="px-6 py-2.5 bg-[#FF1744] text-white font-semibold rounded-xl hover:bg-[#D50000] transition-all duration-300">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
