"use client";
import { useEffect, useState } from "react";

export default function InstallWebApp() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installReady, setInstallReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const existingPrompt = window.deferredPWAInstallPrompt;
    if (existingPrompt) {
      setDeferredPrompt(existingPrompt);
      setInstallReady(true);
    }

    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      window.deferredPWAInstallPrompt = event;
      setDeferredPrompt(event);
      setInstallReady(true);
    };

    const handleAppInstalled = () => {
      window.deferredPWAInstallPrompt = null;
      setDeferredPrompt(null);
      setInstallReady(false);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    const promptEvent = deferredPrompt || window.deferredPWAInstallPrompt;
    if (!promptEvent) {
      console.warn("Install prompt not available yet.");
      return;
    }

    try {
      await promptEvent.prompt();
      const { outcome } = await promptEvent.userChoice;
      console.log(`PWA install ${outcome}`);
    } finally {
      window.deferredPWAInstallPrompt = null;
      setDeferredPrompt(null);
      setInstallReady(false);
    }
  };

  return (
    <button
      onClick={handleInstallClick}
      disabled={!installReady}
      className={`h-12 px-6 rounded-lg border font-medium flex items-center gap-2 transition-opacity ${
        installReady
          ? "cursor-pointer bg-foreground text-background hover:bg-background hover:text-foreground hover:opacity-90"
          : "cursor-not-allowed bg-foreground/40 text-background/70 opacity-60"
      }`}
    >
      {installReady ? "Download Web App" : "Install unavailable"}
    </button>
  );
}
