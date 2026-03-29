import { useState, useEffect, useRef } from "react";
import {
  Accessibility,
  X,
  Type,
  SunMoon,
  Pause,
  MousePointerClick,
  Underline,
  AlignJustify,
  RotateCcw,
} from "lucide-react";

const STORAGE_KEY = "a11y_settings";

interface A11ySettings {
  highContrast: boolean;
  largeText: boolean;
  extraLargeText: boolean;
  reduceMotion: boolean;
  highlightLinks: boolean;
  bigCursor: boolean;
  lineHeight: boolean;
}

const defaults: A11ySettings = {
  highContrast: false,
  largeText: false,
  extraLargeText: false,
  reduceMotion: false,
  highlightLinks: false,
  bigCursor: false,
  lineHeight: false,
};

const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(defaults);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setSettings(JSON.parse(saved));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("a11y-high-contrast", settings.highContrast);
    root.classList.toggle("a11y-large-text", settings.largeText && !settings.extraLargeText);
    root.classList.toggle("a11y-xl-text", settings.extraLargeText);
    root.classList.toggle("a11y-reduce-motion", settings.reduceMotion);
    root.classList.toggle("a11y-highlight-links", settings.highlightLinks);
    root.classList.toggle("a11y-big-cursor", settings.bigCursor);
    root.classList.toggle("a11y-line-height", settings.lineHeight);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

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

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const toggle = (key: keyof A11ySettings) =>
    setSettings((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      // Mutually exclusive: largeText / extraLargeText
      if (key === "largeText" && next.largeText) next.extraLargeText = false;
      if (key === "extraLargeText" && next.extraLargeText) next.largeText = false;
      return next;
    });

  const resetAll = () => setSettings(defaults);

  const activeCount = Object.values(settings).filter(Boolean).length;

  const options: {
    key: keyof A11ySettings;
    label: string;
    desc: string;
    icon: React.ReactNode;
  }[] = [
    {
      key: "highContrast",
      label: "Hoher Kontrast",
      desc: "Verbessert die Lesbarkeit",
      icon: <SunMoon size={18} />,
    },
    {
      key: "largeText",
      label: "Größere Schrift",
      desc: "Text um 25 % vergrößern",
      icon: <Type size={18} />,
    },
    {
      key: "extraLargeText",
      label: "Sehr große Schrift",
      desc: "Text um 50 % vergrößern",
      icon: <Type size={20} strokeWidth={2.5} />,
    },
    {
      key: "reduceMotion",
      label: "Animationen stoppen",
      desc: "Keine Bewegungseffekte",
      icon: <Pause size={18} />,
    },
    {
      key: "highlightLinks",
      label: "Links hervorheben",
      desc: "Alle Links unterstreichen",
      icon: <Underline size={18} />,
    },
    {
      key: "bigCursor",
      label: "Großer Mauszeiger",
      desc: "Bessere Sichtbarkeit",
      icon: <MousePointerClick size={18} />,
    },
    {
      key: "lineHeight",
      label: "Größerer Zeilenabstand",
      desc: "Leichteres Lesen",
      icon: <AlignJustify size={18} />,
    },
  ];

  return (
    <>
      {/* Floating button */}
      <button
        ref={btnRef}
        onClick={() => setOpen(!open)}
        aria-label="Barrierefreiheit-Einstellungen öffnen"
        aria-expanded={open}
        className="group fixed bottom-6 left-6 z-[60] flex items-center gap-0 hover:gap-2 transition-all duration-300"
      >
        <span className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary-teal text-primary-foreground shadow-[0_4px_20px_rgba(0,116,125,0.3)] flex items-center justify-center hover:shadow-[0_6px_28px_rgba(0,116,125,0.4)] hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          {open ? <X size={22} /> : <Accessibility size={22} />}
          {activeCount > 0 && !open && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-cta-orange text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
              {activeCount}
            </span>
          )}
        </span>
        <span className="max-w-0 group-hover:max-w-[140px] overflow-hidden whitespace-nowrap text-xs font-semibold text-primary bg-card border border-border rounded-full py-1.5 px-0 group-hover:px-3 shadow-md transition-all duration-300">
          Barrierefreiheit
        </span>
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Barrierefreiheit-Einstellungen"
          className="fixed bottom-[88px] left-6 z-[60] w-80 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary-teal px-5 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Accessibility size={20} className="text-primary-foreground" />
                <div>
                  <h2 className="text-sm font-bold text-primary-foreground">Barrierefreiheit</h2>
                  <p className="text-[11px] text-primary-foreground/70">Seite individuell anpassen</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                aria-label="Schließen"
              >
                <X size={14} className="text-primary-foreground" />
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="p-3 max-h-[50vh] overflow-y-auto space-y-1.5">
            {options.map(({ key, label, desc, icon }) => (
              <button
                key={key}
                onClick={() => toggle(key)}
                aria-pressed={settings[key]}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200 ${
                  settings[key]
                    ? "bg-primary/8 ring-1 ring-primary/20"
                    : "hover:bg-muted/60"
                }`}
              >
                <span
                  className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                    settings[key]
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {icon}
                </span>
                <div className="flex-1 min-w-0">
                  <span className={`text-sm font-medium block ${settings[key] ? "text-primary" : "text-secondary-foreground"}`}>
                    {label}
                  </span>
                  <span className="text-[11px] text-muted-foreground">{desc}</span>
                </div>
                {/* Toggle switch */}
                <span
                  className={`relative w-9 h-5 rounded-full flex-shrink-0 transition-colors duration-200 ${
                    settings[key] ? "bg-primary" : "bg-border"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                      settings[key] ? "translate-x-[18px]" : "translate-x-0.5"
                    }`}
                  />
                </span>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-border flex items-center justify-between">
            <button
              onClick={resetAll}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <RotateCcw size={12} />
              Alle zurücksetzen
            </button>
            {activeCount > 0 && (
              <span className="text-[11px] font-medium text-primary">
                {activeCount} aktiv
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityWidget;