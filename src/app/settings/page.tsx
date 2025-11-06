'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SettingsSidebar from './components/SettingsSidebar';
import AccountSettings from './components/AccountSettings';
import NotificationSettings from './components/NotificationSettings';
import PrivacySettings from './components/PrivacySettings';
import PreferencesSettings from './components/PreferencesSettings';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Settings state
  const [settings, setSettings] = useState({
    // Account
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    priceAlerts: true,
    newsAlerts: false,
    weeklyReport: true,
    
    // Privacy
    profileVisibility: 'public',
    showEmail: false,
    showPortfolio: false,
    dataSharing: false,
    
    // Preferences
    currency: 'USD',
    language: 'en',
    timezone: 'America/New_York',
    theme: 'dark',
    compactView: false,
  });

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/login');
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      setSettings(prev => ({ ...prev, email: payload.email || '' }));
    } catch (error) {
      console.error('Failed to decode token:', error);
      router.push('/login');
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  const handleToggle = (field: string) => {
    setSettings(prev => ({ ...prev, [field]: !prev[field as keyof typeof prev] }));
  };

  const handleChange = (field: string, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // TODO: Save settings to backend
    alert('Settings saved successfully!');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A1929] via-[#0D1B2A] to-[#1B263B] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00D4FF]"></div>
      </div>
    );
  }

  const tabs = [
    { id: 'account', label: 'Account', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'notifications', label: 'Notifications', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
    { id: 'privacy', label: 'Privacy & Security', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { id: 'preferences', label: 'Preferences', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1929] via-[#0D1B2A] to-[#1B263B] pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00A8E8]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">Settings</h1>
          <p className="text-[#B0BEC5] mt-2">Manage your account settings and preferences</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Tabs */}
          <SettingsSidebar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-[#141B2D]/80 backdrop-blur-xl border border-[#263238] rounded-2xl p-8">
              {/* Account Settings */}
              {activeTab === 'account' && (
                <AccountSettings
                  email={settings.email}
                  currentPassword={settings.currentPassword}
                  newPassword={settings.newPassword}
                  confirmPassword={settings.confirmPassword}
                  onPasswordChange={handleChange}
                />
              )}

              {/* Notifications Settings */}
              {activeTab === 'notifications' && (
                <NotificationSettings
                  emailNotifications={settings.emailNotifications}
                  pushNotifications={settings.pushNotifications}
                  priceAlerts={settings.priceAlerts}
                  newsAlerts={settings.newsAlerts}
                  weeklyReport={settings.weeklyReport}
                  onToggle={handleToggle}
                />
              )}

              {/* Privacy Settings */}
              {activeTab === 'privacy' && (
                <PrivacySettings
                  profileVisibility={settings.profileVisibility}
                  showEmail={settings.showEmail}
                  showPortfolio={settings.showPortfolio}
                  dataSharing={settings.dataSharing}
                  onVisibilityChange={(value) => handleChange('profileVisibility', value)}
                  onToggle={handleToggle}
                />
              )}

              {/* Preferences Settings */}
              {activeTab === 'preferences' && (
                <PreferencesSettings
                  currency={settings.currency}
                  language={settings.language}
                  timezone={settings.timezone}
                  theme={settings.theme}
                  compactView={settings.compactView}
                  onChange={handleChange}
                  onToggle={handleToggle}
                />
              )}

              {/* Save Button */}
              <div className="mt-8 pt-6 border-t border-[#263238] flex justify-end">
                <button
                  onClick={handleSave}
                  className="px-8 py-3 bg-gradient-to-r from-[#00D4FF] to-[#00A8E8] text-white font-semibold rounded-xl hover:shadow-[0_0_24px_rgba(0,212,255,0.4)] transition-all duration-300"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

