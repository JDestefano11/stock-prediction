import ToggleItem from './ToggleItem';

interface NotificationSettingsProps {
  emailNotifications: boolean;
  pushNotifications: boolean;
  priceAlerts: boolean;
  newsAlerts: boolean;
  weeklyReport: boolean;
  onToggle: (field: string) => void;
}

export default function NotificationSettings({
  emailNotifications,
  pushNotifications,
  priceAlerts,
  newsAlerts,
  weeklyReport,
  onToggle,
}: NotificationSettingsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Notification Preferences</h2>
        <p className="text-[#B0BEC5]">Choose how you want to be notified</p>
      </div>

      <div className="space-y-4">
        <ToggleItem
          label="Email Notifications"
          description="Receive notifications via email"
          checked={emailNotifications}
          onChange={() => onToggle('emailNotifications')}
        />
        <ToggleItem
          label="Push Notifications"
          description="Receive push notifications in your browser"
          checked={pushNotifications}
          onChange={() => onToggle('pushNotifications')}
        />
        <ToggleItem
          label="Price Alerts"
          description="Get notified when stock prices hit your targets"
          checked={priceAlerts}
          onChange={() => onToggle('priceAlerts')}
        />
        <ToggleItem
          label="News Alerts"
          description="Receive breaking news about your watchlist"
          checked={newsAlerts}
          onChange={() => onToggle('newsAlerts')}
        />
        <ToggleItem
          label="Weekly Report"
          description="Get a weekly summary of your portfolio performance"
          checked={weeklyReport}
          onChange={() => onToggle('weeklyReport')}
        />
      </div>
    </div>
  );
}
