import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  ChevronRight, 
  ArrowLeft, 
  Mail, 
  Link as LinkIcon, 
  Send,
  Layers,
  Monitor,
  Smartphone,
  FileText,
  CheckCircle
} from 'lucide-react';

// --- LOCAL ASSET IMPORTS ---
import campus from './assets/chronicals.png';
import food from './assets/back.png';
import enactus from './assets/enactusrecuitmentpng.png';
import chunt from './assets/cryptic1.png';
import san from './assets/sanchay.png';
import lanund from './assets/laundify.png';
import gui from './assets/Guidelinesfinal.png';
import cnest from './assets/clamnest.png';
import reg from './assets/Registerpage.png';
import flex from './assets/acmflex.jpg';
import biz from './assets/edcpost.png';
import hack from './assets/lips.png';
import pdf from './assets/NAYAPNBCASESTUDY.pdf';

const PROJECTS = [
  {
    id: 'pnb-case-study',
    title: 'New Better PNB - UI/UX Case Study',
    year: '2025',
    category: 'UI/UX Design',
    description: "A comprehensive redesign of the Punjab National Bank mobile application. This project addresses user pain points regarding complex navigation, visual clutter, and accessibility for older demographics.",
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800', 
    pdfLink: pdf, 
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=1200'
    ],
    details: [
      "Objective: Streamline fund transfers and bill payments.",
      "Design System: Modern accessible palette following PNB core branding.",
      "Key Result: 40% reduction in average task completion time."
    ]
  },
  {
    id: 'laundify',
    title: 'Laundify - Service App',
    year: '2025',
    category: 'Product Design',
    description: 'Laundry management for residential complexes with live status tracking.',
    thumbnail: lanund,
    images: [lanund]
  },
  {
    id: 'crptic-hunt',
    title: 'Crptic Hunt Instagram Grid',
    year: '2025',
    category: 'Graphic Design',
    description: 'Mystery-themed grid layout for puzzle solving events.',
    thumbnail: chunt,
    images: [chunt]
  },
  {
    id: 'fooddle-rebrand',
    title: 'Fooddle Re-branding Grid',
    year: '2025',
    category: 'Graphic Design',
    description: 'Vibrant re-branding assets for food-tech demographics.',
    thumbnail: food,
    images: [food]
  },
  {
    id: 'hackspirse',
    title: 'Hackspirse Instagram Grid',
    year: '2025',
    category: 'Graphic Design',
    description: 'Tech-focused promotional graphics with geometric patterns.',
    thumbnail: hack,
    images: [hack]
  },
  {
    id: 'sanchay-manager',
    title: 'Sanchay - Money Manager',
    year: '2025',
    category: 'Fintech Design',
    description: 'Personal finance tracking tool with clean data visualization.',
    thumbnail: san,
    images: [san]
  },
  {
    id: 'clam-nest',
    title: 'Clam Nest Website BTS',
    year: '2024',
    category: 'Branding / UI',
    description: 'Mental wellness platform with a calming visual aesthetic.',
    thumbnail: cnest,
    images: [cnest]
  },
  {
    id: 'campus-chronicles',
    title: 'Campus Chronicles Newsletter',
    year: '2025',
    category: 'Graphic Design',
    description: 'Monthly student reporting and campus culture layout.',
    thumbnail: campus,
    images: [campus]
  },
  {
    id: 'acm-flex-design',
    title: 'ACM Official Flex Banners',
    year: '2025',
    category: 'Branding',
    description: 'Large-scale print designs for professional event visibility.',
    thumbnail: flex,
    images: [flex]
  },
  {
    id: 'enactus',
    title: 'Enactus Recruitment Banner',
    year: '2025',
    category: 'Branding',
    description: 'Social impact messaging for organization talent acquisition.',
    thumbnail: enactus,
    images: [enactus]
  },
  {
    id: 'acmeventweb',
    title: 'Feature Creep Chaos',
    year: '2024',
    category: 'Web Design',
    description: 'Visual guidelines and register page interface designs.',
    thumbnail: gui,
    images: [gui, reg]
  },
  {
    id: 'edcpos',
    title: 'Poster for Tech event',
    year: '2024',
    category: 'Branding',
    description: 'Promotional visuals combining technical clarity with aesthetic appeal.',
    thumbnail: biz,
    images: [biz]
  }
];

// --- COMPONENTS ---

const Navbar = ({ currentView, setView }) => (
  <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 px-6 py-4 flex justify-between items-center border-b border-white/5">
    <div className="text-lg font-black tracking-tighter cursor-pointer uppercase" onClick={() => setView('home')}>lakshay jain</div>
    <div className="flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase">
      <button onClick={() => setView('home')} className={currentView === 'home' ? 'text-white underline underline-offset-4' : 'text-neutral-500'}>Home</button>
      <button onClick={() => setView('work')} className={currentView === 'work' ? 'text-white underline underline-offset-4' : 'text-neutral-500'}>Work</button>
      <a href="https://linktr.ee" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white flex items-center gap-1">Linktree <ExternalLink size={10} /></a>
      <button onClick={() => setView('contact')} className={currentView === 'contact' ? 'text-white underline underline-offset-4' : 'text-neutral-500'}>Contact</button>
    </div>
  </nav>
);

const HomeView = ({ setView }) => (
  <div className="min-h-screen flex flex-col md:flex-row bg-black">
    <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden group border-r border-white/5">
      <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200" alt="Hero" className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mix-blend-overlay uppercase leading-none text-center">Lakshay<br />Jain</h1>
        <p className="mt-6 text-white/50 text-xs font-bold tracking-[0.4em] uppercase text-center">Portfolio 2025</p>
      </div>
    </div>
    <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-neutral-900/30">
      <div className="max-w-md">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Product & Design</h2>
        <p className="text-lg text-neutral-400 mb-10 leading-relaxed font-light italic">"Every design here is my blueprint — conceived from scratch, crafted with care."</p>
        <div className="space-y-4 text-xs font-bold text-neutral-500 uppercase tracking-widest mb-12">
          <p className="flex items-center gap-2"><Smartphone size={14} /> UI/UX Strategist</p>
          <p className="flex items-center gap-2"><Layers size={14} /> Product Designer</p>
          <p className="flex items-center gap-2"><Monitor size={14} /> Visual Storyteller</p>
        </div>
        <button onClick={() => setView('work')} className="group px-10 py-4 bg-white text-black rounded-full flex items-center gap-3 font-black text-sm uppercase tracking-widest shadow-2xl transition-all hover:bg-neutral-200">
          Explore Work <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

const WorkView = ({ setView, setSelectedProject }) => (
  <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="max-w-xl mb-20">
      <p className="text-white/30 uppercase tracking-[0.3em] text-[10px] font-black mb-4">Selected Case Studies</p>
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Archive.</h2>
      <p className="text-neutral-500 italic border-l-2 border-neutral-800 pl-6">A meticulous collection of digital products and visual assets.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {PROJECTS.map((project) => (
        <div key={project.id} onClick={() => { setSelectedProject(project); setView('project-detail'); }} className="group cursor-pointer space-y-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 shadow-xl">
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
              {project.pdfLink && <FileText size={12} className="text-white" />}
              <span className="text-[10px] font-black uppercase text-white tracking-widest">View Case</span>
            </div>
          </div>
          <div className="px-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold tracking-tight group-hover:text-white">{project.title}</h3>
              <span className="text-[10px] font-bold text-neutral-600 border border-neutral-800 px-2 py-0.5 rounded uppercase">{project.year}</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">{project.category}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ProjectDetailView = ({ project, setView }) => {
  if (!project) return null;
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen pt-24 pb-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <button onClick={() => setView('work')} className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-16 uppercase tracking-widest text-[10px] font-black">
          <ArrowLeft size={14} /> Back to Archive
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">{project.title}</h1>
            <p className="text-xl text-neutral-400 font-light leading-relaxed italic border-l-2 border-white/10 pl-8">{project.description}</p>
            
            {/* PDF Action Button */}
            {project.pdfLink && (
              <a 
                href={project.pdfLink} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/10 text-white rounded-2xl hover:bg-white hover:text-black transition-all font-black uppercase text-xs tracking-widest mt-4"
              >
                <FileText size={18} /> View Case Study PDF
              </a>
            )}
          </div>
          
          <div className="bg-neutral-900/50 p-8 rounded-3xl border border-white/5 space-y-6 h-fit">
            <div><p className="text-[10px] font-black uppercase text-neutral-500 mb-1">Service</p><p className="text-sm font-bold">{project.category}</p></div>
            <div><p className="text-[10px] font-black uppercase text-neutral-500 mb-1">Year</p><p className="text-sm font-bold">{project.year}</p></div>
            {project.details && (
              <div className="pt-4 border-t border-white/5 space-y-3">
                {project.details.map((d, i) => <p key={i} className="text-xs text-neutral-400 flex gap-2"><span className="text-white mt-1">•</span> {d}</p>)}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-16">
          {project.images.map((img, idx) => (
            <div key={idx} className="w-full bg-neutral-900 rounded-[2rem] overflow-hidden shadow-2xl border border-white/5">
              <img src={img} alt="Detail" className="w-full h-auto" />
            </div>
          ))}
        </div>

        <div className="mt-32 pt-24 border-t border-white/10 text-center">
            <button onClick={() => setView('work')} className="text-3xl md:text-5xl font-black hover:text-neutral-400 uppercase tracking-tighter">Next Project</button>
        </div>
      </div>
    </div>
  );
};

const ContactView = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 5000); };
  return (
    <div className="min-h-screen pt-40 pb-24 px-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">Get In<br />Touch.</h1>
          <p className="text-neutral-500 text-lg font-light italic mb-12">Accepting inquiries for 2025.</p>
          <div className="space-y-6 text-neutral-400">
            <span className="text-[10px] font-black uppercase text-neutral-600">Direct Email</span>
            <a href="mailto:lakshayjain148@gmail.com" className="text-xl font-bold hover:text-white transition-colors block">lakshayjain148@gmail.com</a>
          </div>
        </div>
        <div className="bg-neutral-900/50 p-10 rounded-[2rem] border border-white/5 shadow-2xl">
          {submitted ? (
            <div className="py-20 text-center space-y-6"><div className="w-20 h-20 bg-white/10 text-white rounded-full flex items-center justify-center animate-pulse mx-auto"><CheckCircle size={32} /></div><h3 className="text-2xl font-black uppercase">Sent</h3></div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <input type="text" required placeholder="Name" className="w-full bg-black border-b border-white/10 py-3 focus:outline-none focus:border-white text-sm" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} />
              <input type="email" required placeholder="Email" className="w-full bg-black border-b border-white/10 py-3 focus:outline-none focus:border-white text-sm" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} />
              <textarea rows="4" required placeholder="Message" className="w-full bg-black border-b border-white/10 py-3 focus:outline-none focus:border-white text-sm" value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})} />
              <button type="submit" className="w-full bg-white text-black font-black uppercase py-5 rounded-2xl flex items-center justify-center gap-3 text-xs shadow-xl active:scale-[0.98]">Send Message <Send size={16} /></button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [view]);
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {view !== 'home' && <Navbar currentView={view} setView={setView} />}
      <main className="transition-all duration-700 ease-in-out">
        {view === 'home' && <HomeView setView={setView} />}
        {view === 'work' && <WorkView setView={setView} setSelectedProject={setSelectedProject} />}
        {view === 'project-detail' && <ProjectDetailView project={selectedProject} setView={setView} />}
        {view === 'contact' && <ContactView />}
      </main>
      <footer className="py-16 border-t border-white/5 text-center text-neutral-500 text-[9px] uppercase font-bold">&copy; {new Date().getFullYear()} Lakshay Jain | Crafted with Passion</footer>
    </div>
  );
}
