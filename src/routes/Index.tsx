import { Routes, Route } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Insights from "@/pages/CMS/Insights";
import Approvals from "@/pages/Approvals/Approvals";
import VideoLibrary from "@/pages/CMS/VideoLibrary";
import InTheNews from "@/pages/CMS/InTheNews";
import Testimonials from "@/pages/CMS/Testimonials";
import TeamDirectory from "@/pages/CMS/TeamDirectory";
import Libraries from "@/pages/CMS/Libraries";
import Surveys from "@/pages/CMS/Surveys";
import HelpArticles from "@/pages/CMS/HelpArticles";
import FAQSPage from "@/pages/CMS/FAQ";
import Explorer from "@/pages/Users/Explorer/Explorer";
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/insights" element={<Insights />} />
            <Route path="/explorers" element={<Explorer />} />

            <Route path="/approvals" element={<Approvals />} />
            <Route path="/videoLibrary" element={<VideoLibrary />} />
            <Route path="/inTheNews" element={<InTheNews />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/teamDirectory" element={<TeamDirectory />} />
            <Route path="/libraries" element={<Libraries />} />
            <Route path="/surveys" element={<Surveys />} />
            <Route path="/helpArticles" element={<HelpArticles />} />
            <Route path="/faqspages" element={<FAQSPage />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
