import { useState, useEffect, useRef } from "react";
import { Accessibility, X, Type, SunMoon, Pause } from "lucide-react";

const STORAGE_KEY = "a11y_settings";

interface A11ySettings {
  highContrast: boolean;
  largeText: boolean;
  reduceMotion: boolean;
}

const defaults: A11ySettings = {
  highContrast: false,
  largeText: false,
  reduceMotion: false,
};

const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(defaults);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setSettings(JSON.parse(saved));
    } catch { /* ignore */ }
  }, []);

  // Apply classes to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("a11y-high-contrast", settings.highContrast);
    root.classList.toggle("a11y-large-text", settings.largeText);
    root.classList.toggle("a11y-reduce-motion", settings.reduceMotion);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const toggle = (key: keyof A11ySettings) =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  const resetAll = () => setSettings(defaults);

  const options: { key: keyof A11ySettings; label: string; icon: React.ReactNode }[] = [
    { key: "highContrast", label: "Hoher Kontrast", icon: <SunMoon size={18} /> },
    { key: "largeText", label: "Größere Schrift", icon: <Type size={18} /> },
    { key: "reduceMotion", label: "Animationen reduzieren", icon: <Pause size={18} /> },
  ];

  return (
    <>
      {/* Floating button */}
      <button
        ref={btnRef}
        onClick={() => setOpen(!open)}
        aria-label="Barrierefreiheit-Einstellungen öffnen"
        aria-expanded={open}
        className="fixed bottom-6 left-6 z-[60] w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-secondary-teal transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {open ? <X size={20} /> : <Accessibility size={20} />}
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Barrierefreiheit-Einstellungen"
          className="fixed bottom-20 left-6 z-[60] w-72 bg-card border border-border rounded-xl shadow-xl p-5 animate-in fade-in slide-in-from-bottom-2"
        >
          <h2 className="text-sm font-semibold text-secondary-foreground mb-4 flex items-center gap-2">
            <Accessibility size={16} className="text-primary" />
            Barrierefreiheit
          </h2>

          <div className="space-y-3">
            {options.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => toggle(key)}
                aria-pressed={settings[key]}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 text-left ${
                  settings[key]
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "bg-muted text-foreground hover:bg-muted/80 border border-transparent"
                }`}
              >
                <span className="flex-shrink-0">{icon}</span>
                <span className="flex-1">{label}</span>
                <span
                  className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center transition-colors ${
                    settings[key] ? "bg-primary border-primary" : "border-muted-foreground/30"
                  }`}
                >
                  {settings[key] && (
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={resetAll}
            className="mt-4 w-full text-xs text-muted-foreground hover:text-foreground transition-colors text-center py-1"
          >
            Alle zurücksetzen
          </button>
        </div>
      )}
    </>
  );
};

export default AccessibilityWidget;