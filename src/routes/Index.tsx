import { Routes, Route } from "react-router-dom";
import NotFound from "@/pages/NotFound";
// import VideoLibrary from "@/pages/CMS/Vi";
// import { CmsInsights } from "@/pages/CMS/CmsInsights";

export default function AppRoutes() {
    return (
        <Routes>
            {/* <Route path="/" element={<CmsInsights />} />
            <Route path="/insights" element={<CmsInsights />} />
            <Route path="/videos" element={<VideoLibrary />} /> */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
