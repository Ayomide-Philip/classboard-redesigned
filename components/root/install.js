"use client";
import { useEffect, useState } from "react";

export default function InstallWebApp() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Listen for the 'beforeinstallprompt' event
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the default install prompt
      e.preventDefault();
      setDeferredPrompt(e); // Store the event
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };
  return (
    <button
      onClick={handleInstallClick}
      className="h-12 px-6 rounded-lg bg-foreground text-background font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
    >
      Download Web App
    </button>
  );
}
