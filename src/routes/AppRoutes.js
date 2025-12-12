import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home/Home';
import ForWhom from '../pages/ForWhom/ForWhom';
import TechnicalDetails from '../pages/TechnicalDetails/TechnicalDetails';
import PlatformComparison from '../pages/PlatformComparison/PlatformComparison';
import DiyVsUs from '../pages/DiyVsUs/DiyVsUs';
import CommonMistakes from '../pages/CommonMistakes/CommonMistakes';
import FAQ from '../pages/FAQ/FAQ';
import SecurityTips from '../pages/SecurityTips/SecurityTips';
import Testimonials from '../pages/Testimonials/Testimonials';
import Instruction from '../pages/Instruction/Instruction';
import EditInstruction from '../pages/EditInstruction/EditInstruction';
import Briefs from '../pages/Briefs/Briefs';
import Bonus from '../pages/Bonus/Bonus';
import Contact from '../pages/Contact/Contact';
import About from '../pages/About/About';
import Skills from '../pages/Skills/Skills';
import Achievements from '../pages/Achievements/Achievements';
import Social from '../pages/Social/Social';
import CertificateGift from '../pages/CertificateGift/CertificateGift';
import InteractiveQuiz from '../pages/InteractiveQuiz/InteractiveQuiz';
import Promo from '../pages/Promo/Promo';
import Pricing from '../pages/Pricing/Pricing';
import WebStartLab from '../pages/WebStartLab/WebStartLab';
import YouTubeChannel from '../pages/YouTubeChannel/YouTubeChannel';
import CanvaServices from '../pages/CanvaServices/CanvaServices';
import NotFound from '../pages/NotFound/NotFound';

// Generators
import PortfolioTextGenerator from '../pages/Generators/PortfolioTextGenerator/PortfolioTextGenerator';
import ProjectChecker from '../pages/Generators/ProjectChecker/ProjectChecker';
import ResumeStructureGenerator from '../pages/Generators/ResumeStructureGenerator/ResumeStructureGenerator';

// Templates
import PortfolioTemplates from '../pages/Templates/PortfolioTemplates/PortfolioTemplates';
import ResumeTemplates from '../pages/Templates/ResumeTemplates/ResumeTemplates';
import LandingTemplates from '../pages/Templates/LandingTemplates/LandingTemplates';

// Services
import WebApps from '../pages/Services/WebApps/WebApps';
import SEOInfo from '../pages/Services/SEO/SEOInfo';
import SocialMedia from '../pages/Services/SocialMedia/SocialMedia';
import Animations from '../pages/Services/Animations/Animations';
import Ecommerce from '../pages/Services/Ecommerce/Ecommerce';
import Blog from '../pages/Services/Blog/BlogInfo';
import PersonalizedLanding from '../pages/Services/PersonalizedLanding/PersonalizedLanding';


// Blog
import LandingTrends from '../pages/Blog/LandingTrends/LandingTrends';
import PortfolioTips from '../pages/Blog/PortfolioTips/PortfolioTips';
import ResumeTips from '../pages/Blog/ResumeTips/ResumeTips';

// AI Services
import AIAutomation from '../pages/AIServices/AIAutomation/AIAutomation';
import AIPrompting from '../pages/AIServices/AIPrompting/AIPrompting';
import PromptEditor from '../pages/AIServices/PromptEditor/PromptEditor';
import PromptStudio from '../pages/AIServices/PromptStudio/PromptStudio';

// Google Ads
import GoogleAdsSetup from '../pages/Additional/GoogleAds/Setup/Setup';

// International
import English from '../pages/international/English/English';
import Francais from '../pages/international/Français/Français';
import Polski from '../pages/international/Polski/Polski';
import Cestina from '../pages/international/Cestina/Cestina';
import Svenska from '../pages/international/Svenska/Svenska';
import Deutsch from '../pages/international/Deutsch/Deutsch';

// Assistant
import Assistant from '../pages/Assistant/Assistant';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Main */}
            <Route path="/" element={<Home />} />

            {/* Info Pages */}
            <Route path="/for-whom" element={<ForWhom />} />
            <Route path="/technical-details" element={<TechnicalDetails />} />
            <Route path="/platform-comparison" element={<PlatformComparison />} />
            <Route path="/diy-vs-us" element={<DiyVsUs />} />
            <Route path="/common-mistakes" element={<CommonMistakes />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/security-tips" element={<SecurityTips />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/interactive-quiz" element={<InteractiveQuiz />} />
            <Route path="/promo" element={<Promo />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/webstart-lab" element={<WebStartLab />} />
            <Route path="/youtube-channel" element={<YouTubeChannel />} />
            <Route path="/canva-services" element={<CanvaServices />} />
            <Route path="*" element={<NotFound />} />

            {/* Generators */}
            <Route path="/generators/portfolio-text" element={<PortfolioTextGenerator />} />
            <Route path="/generators/project-checker" element={<ProjectChecker />} />
            <Route path="/generators/resume-structure" element={<ResumeStructureGenerator />} />

            {/* Templates */}
            <Route path="/templates/portfolio" element={<PortfolioTemplates />} />
            <Route path="/templates/resume" element={<ResumeTemplates />} />
            <Route path="/templates/landing" element={<LandingTemplates />} />

            {/* Services */}
            <Route path="/services/web-apps" element={<WebApps />} />
            <Route path="/services/seo" element={<SEOInfo />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route path="/services/animations" element={<Animations />} />
            <Route path="/services/ecommerce" element={<Ecommerce />} />
            <Route path="/services/blog" element={<Blog />} />
            <Route path="/services/personalized-landing" element={<PersonalizedLanding />} />

            {/* Instructions */}
            <Route path="/instruction" element={<Instruction />} />
            <Route path="/edit-instruction" element={<EditInstruction />} />
            <Route path="/briefs" element={<Briefs />} />

            {/* Bonus & Gifts */}
            <Route path="/bonus" element={<Bonus />} />
            <Route path="/certificate-gift" element={<CertificateGift />} />

            {/* Blog */}
            <Route path="/blog/landing-trends" element={<LandingTrends />} />
            <Route path="/blog/portfolio-tips" element={<PortfolioTips />} />
            <Route path="/blog/resume-tips" element={<ResumeTips />} />

            {/* AI Services */}
            <Route path="/ai-automation" element={<AIAutomation />} />
            <Route path="/ai-prompting" element={<AIPrompting />} />
            <Route path="/prompt-editor" element={<PromptEditor />} />
            <Route path="/prompt-studio" element={<PromptStudio />} />

            {/* Google Ads */}
            <Route path="/google-ads/setup" element={<GoogleAdsSetup />} />

            {/* About & Contact */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/social" element={<Social />} />

            {/* International */}
            <Route path="/international/en" element={<English />} />
            <Route path="/international/fr" element={<Francais />} />
            <Route path="/international/pl" element={<Polski />} />
            <Route path="/international/cz" element={<Cestina />} />
            <Route path="/international/sv" element={<Svenska />} />
            <Route path="/international/de" element={<Deutsch />} />

            {/*Assistant*/}
            <Route path="/assistant" element={<Assistant />} />
        </Routes>
    );
};

export default AppRoutes;