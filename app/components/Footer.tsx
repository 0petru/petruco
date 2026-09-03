import React from "react";

interface FooterProps {
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-4 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Sistem de Prezență Digitală pentru
            Psihologi | 0petru.com | Toate drepturile rezervate.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hover:text-slate-400 cursor-pointer">
              Confidențialitate &amp; GDPR
            </span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">
              Termeni &amp; Condiții
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
