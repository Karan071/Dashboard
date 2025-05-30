import { Routes, Route } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Insights from "@/pages/CMS/Insights";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/insights" element={<Insights />} />
            
            {/*
            <Route path="/insights" element={<CmsInsights />} />
            <Route path="/videos" element={<VideoLibrary />} /> */}

            

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
