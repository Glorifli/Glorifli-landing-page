import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-black text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
           <span className="text-xl font-bold font-heading tracking-tight text-white">Glorifli</span>
           <p className="text-gray-500">© 2025 Glorifli Inc. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-gray-400">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>
        
        <div className="flex gap-4">
          {/* Social placeholders */}
          <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary hover:text-black flex items-center justify-center transition-colors cursor-pointer">
            𝕏
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary hover:text-black flex items-center justify-center transition-colors cursor-pointer">
            in
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;