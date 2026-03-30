import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Impressum from "./pages/Impressum.tsx";
import Datenschutz from "./pages/Datenschutz.tsx";
import Barrierefreiheit from "./pages/Barrierefreiheit.tsx";
import Stuttgart from "./pages/Stuttgart.tsx";
import CookieBanner from "./components/CookieBanner.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import AccessibilityWidget from "./components/AccessibilityWidget.tsx";
import PortalLogin from "./pages/portal/PortalLogin.tsx";
import CustomerDashboard from "./pages/portal/CustomerDashboard.tsx";
import AdminDashboard from "./pages/portal/AdminDashboard.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import ProtectedRoute from "./components/portal/ProtectedRoute.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <BrowserRouter>
            <ScrollToTop />
            <CookieBanner />
            <AccessibilityWidget />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/startseite/stuttgart" element={<Stuttgart />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/barrierefreiheit" element={<Barrierefreiheit />} />

              {/* Portal routes */}
              <Route path="/portal" element={<Navigate to="/portal/login" replace />} />
              <Route path="/portal/login" element={<PortalLogin />} />
              <Route
                path="/portal/dashboard"
                element={
                  <ProtectedRoute>
                    <CustomerDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/portal/admin"
                element={
                  <ProtectedRoute adminOnly>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
