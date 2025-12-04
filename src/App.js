import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';


// ForWhom
import ForWhom from './pages/ForWhom/ForWhom';

// AI Services
import AIAutomation from './pages/AIServices/AIAutomation/AIAutomation';
// import AIPrompting from './pages/AIServices/AIPrompting/AIPrompting';
// import PersonalPrompting from './pages/AIServices/PersonalPrompting/PersonalPrompting';
// import CreateAIAgent from './pages/AIServices/CreateAIAgent/CreateAIAgent';

// Web Development
// import Landing from './pages/WebDevelopment/Landing/Landing';
// import Portfolio from './pages/WebDevelopment/Portfolio/Portfolio';
// import Resume from './pages/WebDevelopment/Resume/Resume';
// import Corporate from './pages/WebDevelopment/Corporate/Corporate';

// Design
// import UIUX from './pages/Design/UIUX/UIUX';
// import Logo from './pages/Design/Logo/Logo';
// import Branding from './pages/Design/Branding/Branding';

// Other
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';

// Google Ads
import GoogleAdsSetup from './pages/Additional/GoogleAds/Setup/Setup';
// import GoogleAdsOptimization from './pages/Additional/GoogleAds/Optimization/Optimization';
// import GoogleAdsAnalytics from './pages/Additional/GoogleAds/Analytics/Analytics';
// import GoogleAdsKeywords from './pages/Additional/GoogleAds/Keywords/Keywords';
// import GoogleAdsBudget from './pages/Additional/GoogleAds/Budget/Budget';
// import GoogleAdsRemarketing from './pages/Additional/GoogleAds/Remarketing/Remarketing';

// Facebook Ads
// import FacebookAdsSetup from './pages/Additional/FacebookAds/Setup/Setup';
// import FacebookAdsTargeting from './pages/Additional/FacebookAds/Targeting/Targeting';
// import FacebookAdsCreatives from './pages/Additional/FacebookAds/Creatives/Creatives';
// import FacebookAdsInstagram from './pages/Additional/FacebookAds/Instagram/Instagram';
// import FacebookAdsAnalytics from './pages/Additional/FacebookAds/Analytics/Analytics';
// import FacebookAdsConversion from './pages/Additional/FacebookAds/Conversion/Conversion';

// Tax Refund
// import TaxRefundDocuments from './pages/Additional/TaxRefund/Documents/Documents';
// import TaxRefundProcess from './pages/Additional/TaxRefund/Process/Process';
// import TaxRefundCalculation from './pages/Additional/TaxRefund/Calculation/Calculation';
// import TaxRefundConsultation from './pages/Additional/TaxRefund/Consultation/Consultation';

// PC Cleaning
// import PCCleaningDiagnostics from './pages/Additional/PCCleaning/Diagnostics/Diagnostics';
// import PCCleaningVirusRemoval from './pages/Additional/PCCleaning/VirusRemoval/VirusRemoval';
// import PCCleaningOptimization from './pages/Additional/PCCleaning/Optimization/Optimization';
// import PCCleaningSupport from './pages/Additional/PCCleaning/Support/Support';

import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="app-content">
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <main className={`main-wrapper ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* ForWhom */}
            <Route path="/for-whom" element={<ForWhom />} />

            {/* AI Services Routes */}
            <Route path="/ai-automation" element={<AIAutomation />} />
            {/* <Route path="/ai-prompting" element={<AIPrompting />} />
            <Route path="/personal-prompting" element={<PersonalPrompting />} />
            <Route path="/create-ai-agent" element={<CreateAIAgent />} /> */}

            {/* Web Development Routes */}
            {/* <Route path="/landing" element={<Landing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/corporate" element={<Corporate />} /> */}

            {/* Design Routes */}
            {/* <Route path="/ui-ux" element={<UIUX />} />
            <Route path="/logo" element={<Logo />} />
            <Route path="/branding" element={<Branding />} /> */}

            {/* Other Routes */}
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}

            {/* Google Ads Routes */}
            <Route path="/google-ads/setup" element={<GoogleAdsSetup />} />
            {/* <Route path="/google-ads/optimization" element={<GoogleAdsOptimization />} />
            <Route path="/google-ads/analytics" element={<GoogleAdsAnalytics />} />
            <Route path="/google-ads/keywords" element={<GoogleAdsKeywords />} />
            <Route path="/google-ads/budget" element={<GoogleAdsBudget />} />
            <Route path="/google-ads/remarketing" element={<GoogleAdsRemarketing />} /> */}

            {/* Facebook Ads Routes */}
            {/* <Route path="/facebook-ads/setup" element={<FacebookAdsSetup />} />
            <Route path="/facebook-ads/targeting" element={<FacebookAdsTargeting />} />
            <Route path="/facebook-ads/creatives" element={<FacebookAdsCreatives />} />
            <Route path="/facebook-ads/instagram" element={<FacebookAdsInstagram />} />
            <Route path="/facebook-ads/analytics" element={<FacebookAdsAnalytics />} />
            <Route path="/facebook-ads/conversion" element={<FacebookAdsConversion />} /> */}

            {/* Tax Refund Routes */}
            {/* <Route path="/tax-refund/documents" element={<TaxRefundDocuments />} />
            <Route path="/tax-refund/process" element={<TaxRefundProcess />} />
            <Route path="/tax-refund/calculation" element={<TaxRefundCalculation />} />
            <Route path="/tax-refund/consultation" element={<TaxRefundConsultation />} /> */}

            {/* PC Cleaning Routes */}
            {/* <Route path="/pc-cleaning/diagnostics" element={<PCCleaningDiagnostics />} />
            <Route path="/pc-cleaning/virus-removal" element={<PCCleaningVirusRemoval />} />
            <Route path="/pc-cleaning/optimization" element={<PCCleaningOptimization />} />
            <Route path="/pc-cleaning/support" element={<PCCleaningSupport />} /> */}
          </Routes>
        </main>
        <Footer isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
}

export default App;

