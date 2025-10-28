'use client';

import React from 'react';
import { Bell, TrendingUp, Brain, BarChart3, Zap, Shield, LineChart, Activity } from 'lucide-react';
import FeaturesHeader from './FeaturesHeader';
import StatsDashboard from './StatsDashboard';
import FeatureCard from './FeatureCard';


interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  comingSoon?: boolean;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Bell className="w-8 h-8" />,
      title: 'Real-Time Alerts',
      description: 'Get instant notifications for price movements, market events, and custom triggers. Never miss a trading opportunity.',
      gradient: 'from-[#00D4FF] to-[#00A8E8]'
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: 'Advanced Charts',
      description: 'Interactive TradingView charts with technical indicators, drawing tools, and multi-timeframe analysis.',
      gradient: 'from-[#00E676] to-[#00C853]'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms analyze market patterns and provide intelligent predictions for informed decisions.',
      gradient: 'from-[#FF1744] to-[#D50000]'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Live Market Data',
      description: 'Real-time stock prices, volume, and market depth data streamed directly to your dashboard.',
      gradient: 'from-[#FFD600] to-[#FFA000]'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Portfolio Analytics',
      description: 'Track performance, analyze risk metrics, and optimize your portfolio with comprehensive analytics tools.',
      gradient: 'from-[#E040FB] to-[#AA00FF]',
      comingSoon: true
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Execution',
      description: 'Lightning-fast order execution powered by Inngest for reliable, scalable background processing.',
      gradient: 'from-[#00D4FF] to-[#00E676]',
      comingSoon: true
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Trend Detection',
      description: 'Identify emerging trends and patterns with AI-powered technical analysis and sentiment indicators.',
      gradient: 'from-[#FF6E40] to-[#FF3D00]'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with encrypted data transmission and secure authentication protocols.',
      gradient: 'from-[#00BFA5] to-[#00897B]'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-[#0A0E27] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00E676]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          {/* Left Side - Use FeaturesHeader Component */}
          <FeaturesHeader />
          
          {/* Right Side - Use StatsDashboard Component */}
          <StatsDashboard />
        </div>

        {/* Features Grid - Use FeatureCard Component */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;