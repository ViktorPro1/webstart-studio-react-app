import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

/* ===== Loader ===== */
const Loader = () => <div className="page-loader">Завантаження…</div>;

/* ===== Pages ===== */
const Home = lazy(() => import('../pages/Home/Home'));
const ForWhom = lazy(() => import('../pages/ForWhom/ForWhom'));
const TechnicalDetails = lazy(() => import('../pages/TechnicalDetails/TechnicalDetails'));
const PlatformComparison = lazy(() => import('../pages/PlatformComparison/PlatformComparison'));
const DiyVsUs = lazy(() => import('../pages/DiyVsUs/DiyVsUs'));
const CommonMistakes = lazy(() => import('../pages/CommonMistakes/CommonMistakes'));
const FAQ = lazy(() => import('../pages/FAQ/FAQ'));
const SecurityTips = lazy(() => import('../pages/SecurityTips/SecurityTips'));
const Testimonials = lazy(() => import('../pages/Testimonials/Testimonials'));
const Instruction = lazy(() => import('../pages/Instruction/Instruction'));
const EditInstruction = lazy(() => import('../pages/EditInstruction/EditInstruction'));
const Briefs = lazy(() => import('../pages/Briefs/Briefs'));
const Bonus = lazy(() => import('../pages/Bonus/Bonus'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const About = lazy(() => import('../pages/About/About'));
const Skills = lazy(() => import('../pages/Skills/Skills'));
const Achievements = lazy(() => import('../pages/Achievements/Achievements'));
const Social = lazy(() => import('../pages/Social/Social'));
const CertificateGift = lazy(() => import('../pages/CertificateGift/CertificateGift'));
const InteractiveQuiz = lazy(() => import('../pages/InteractiveQuiz/InteractiveQuiz'));
const Promo = lazy(() => import('../pages/Promo/Promo'));
const Pricing = lazy(() => import('../pages/Pricing/Pricing'));
const WebStartLab = lazy(() => import('../pages/WebStartLab/WebStartLab'));
const YouTubeChannel = lazy(() => import('../pages/YouTubeChannel/YouTubeChannel'));
const CanvaServices = lazy(() => import('../pages/CanvaServices/CanvaServices'));
const PcService = lazy(() => import('../pages/PcService/PcService'));
const PolandTax = lazy(() => import('../pages/PolandTax/PolandTax'));
const Innovations = lazy(() => import('../pages/Innovations/Innovations'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const SurveyPage = lazy(() => import('../pages/SurveyPage/SurveyPage'));
const DataAnalytics = lazy(() => import('../pages/DataAnalytics/DataAnalytics'));

/* ===== Client Portal ===== */
const ClientPortal = lazy(() => import('../pages/ClientPortal/ClientPortal'));

/* ===== Legal ===== */
const PrivacyPolicy = lazy(() => import('../pages/Legal/PrivacyPolicy'));
const ThirdPartyCookies = lazy(() => import('../pages/Legal/ThirdPartyCookies'));


/* ===== Added Legal Pages ===== */
const PrivacyPolicyFull = lazy(() => import('../components/PrivacyPolicy/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('../components/TermsOfUse/TermsOfUse'));

/* ===== Generators ===== */
const PortfolioTextGenerator = lazy(() => import('../pages/Generators/PortfolioTextGenerator/PortfolioTextGenerator'));
const ProjectChecker = lazy(() => import('../pages/Generators/ProjectChecker/ProjectChecker'));
const ResumeStructureGenerator = lazy(() => import('../pages/Generators/ResumeStructureGenerator/ResumeStructureGenerator'));

/* ===== Templates ===== */
const PortfolioTemplates = lazy(() => import('../pages/Templates/PortfolioTemplates/PortfolioTemplates'));
const ResumeTemplates = lazy(() => import('../pages/Templates/ResumeTemplates/ResumeTemplates'));
const LandingTemplates = lazy(() => import('../pages/Templates/LandingTemplates/LandingTemplates'));

/* ===== Services ===== */
const WebApps = lazy(() => import('../pages/Services/WebApps/WebApps'));
const SEOInfo = lazy(() => import('../pages/Services/SEO/SEOInfo'));
const SocialMedia = lazy(() => import('../pages/Services/SocialMedia/SocialMedia'));
const Animations = lazy(() => import('../pages/Services/Animations/Animations'));
const Ecommerce = lazy(() => import('../pages/Services/Ecommerce/Ecommerce'));
const Blog = lazy(() => import('../pages/Services/Blog/BlogInfo'));
const PersonalizedLanding = lazy(() => import('../pages/Services/PersonalizedLanding/PersonalizedLanding'));

/* ===== Blog ===== */
const LandingTrends = lazy(() => import('../pages/Blog/LandingTrends/LandingTrends'));
const PortfolioTips = lazy(() => import('../pages/Blog/PortfolioTips/PortfolioTips'));
const ResumeTips = lazy(() => import('../pages/Blog/ResumeTips/ResumeTips'));

/* ===== AI ===== */
const AIAutomation = lazy(() => import('../pages/AIServices/AIAutomation/AIAutomation'));
const AIPrompting = lazy(() => import('../pages/AIServices/AIPrompting/AIPrompting'));
const PromptEditor = lazy(() => import('../pages/AIServices/PromptEditor/PromptEditor'));
const PromptShowcase = lazy(() => import('../pages/AIServices/PromptShowcase/PromptShowcase'));
const PromptStudio = lazy(() => import('../pages/AIServices/PromptStudio/PromptStudio'));

/* ===== Google Ads ===== */
const GoogleAdsLearning = lazy(() => import('../pages/Google-Ads/GoogleAdsLearning/GoogleAdsLearning'));
const GoogleAdsCalculator = lazy(() => import('../pages/Google-Ads/GoogleAdsCalculator/GoogleAdsCalculator'));
const GoogleAdsGenerator = lazy(() => import('../pages/Google-Ads/GoogleAdsGenerator/GoogleAdsGenerator'));
const GoogleAdsComparison = lazy(() => import('../pages/Google-Ads/GoogleAdsComparison/GoogleAdsComparison'));
const GoogleAdsGlossary = lazy(() => import('../pages/Google-Ads/GoogleAdsGlossary/GoogleAdsGlossary'));
const GoogleAdsKeywords = lazy(() => import('../pages/Google-Ads/GoogleAdsKeywords/GoogleAdsKeywords'));

/* ===== Facebook Ads ===== */
const AdCalculator = lazy(() => import('../pages/Facebook-Ads/AdCalculator/AdCalculator'));
const TargetAdvertising = lazy(() => import('../pages/Facebook-Ads/TargetAdvertising/TargetAdvertising'));
const TargetExplanation = lazy(() => import('../pages/Facebook-Ads/TargetExplanation/TargetExplanation'));
const UTMGenerator = lazy(() => import('../pages/Facebook-Ads/UTMGenerator/UTMGenerator'));

/* ===== International ===== */
const English = lazy(() => import('../pages/international/English/English'));
const Francais = lazy(() => import('../pages/international/Français/Français'));
const Polski = lazy(() => import('../pages/international/Polski/Polski'));
const Cestina = lazy(() => import('../pages/international/Cestina/Cestina'));
const Svenska = lazy(() => import('../pages/international/Svenska/Svenska'));
const Deutsch = lazy(() => import('../pages/international/Deutsch/Deutsch'));

/* ===== Assistant ===== */
const Assistant = lazy(() => import('../pages/Assistant/Assistant'));

/* ===== Updates ===== */
const Updates = lazy(() => import('../pages/Updates/Updates'));

const AppRoutes = () => (
    <Suspense fallback={<Loader />}>
        <Routes>

            {/* Home Page */}
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
            <Route path="/pc-service" element={<PcService />} />
            <Route path="/poland-tax" element={<PolandTax />} />
            <Route path="/innovations" element={<Innovations />} />
            <Route path="/survey" element={<SurveyPage />} />
            <Route path="/data-analytics" element={<DataAnalytics />} />

            {/* Client Portal */}
            <Route path="/client-portal" element={<ClientPortal />} />

            {/* Legal Pages */}
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/third-party-cookies" element={<ThirdPartyCookies />} />

            { /* Added Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicyFull />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />

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

            {/* Blog Posts */}
            <Route path="/blog/landing-trends" element={<LandingTrends />} />
            <Route path="/blog/portfolio-tips" element={<PortfolioTips />} />
            <Route path="/blog/resume-tips" element={<ResumeTips />} />

            {/* AI Services */}
            <Route path="/ai-automation" element={<AIAutomation />} />
            <Route path="/ai-prompting" element={<AIPrompting />} />
            <Route path="/prompt-editor" element={<PromptEditor />} />
            <Route path="/prompt-showcase" element={<PromptShowcase />} />
            <Route path="/prompt-studio" element={<PromptStudio />} />

            {/* Google Ads */}
            <Route path="/google-ads/learning" element={<GoogleAdsLearning />} />
            <Route path="/google-ads/calculator" element={<GoogleAdsCalculator />} />
            <Route path="/google-ads/generator" element={<GoogleAdsGenerator />} />
            <Route path="/google-ads/comparison" element={<GoogleAdsComparison />} />
            <Route path="/google-ads/glossary" element={<GoogleAdsGlossary />} />
            <Route path="/google-ads/keywords" element={<GoogleAdsKeywords />} />

            {/* Facebook Ads */}
            <Route path="/facebook-ads/ad-calculator" element={<AdCalculator />} />
            <Route path="/facebook-ads/target-advertising" element={<TargetAdvertising />} />
            <Route path="/facebook-ads/target-explanation" element={<TargetExplanation />} />
            <Route path="/facebook-ads/utm-generator" element={<UTMGenerator />} />

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

            {/* Updates */}
            <Route path="/updates" element={<Updates />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    </Suspense>
);

export default AppRoutes;
