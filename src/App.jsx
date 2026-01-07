import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  ChevronRight, 
  ArrowLeft, 
  Mail, 
  Link as LinkIcon, 
  Send,
  Camera, 
  Layers,
  Monitor,
  Smartphone
} from 'lucide-react';

// --- LOCAL ASSET IMPORTS ---
// Ensure these files exist in your src/assets/ folder
import campus from './assets/chronicals.png';
import fooddle from './assets/fooddle.png';
import hack from './assets/hackgrid.png';
import enactus from './assets/enactusrecuitmentpng.png';
import chunt from './assets/cryptic1.png';

// --- DATA STRUCTURED FROM DRIVE & LOCAL ASSETS ---
const PROJECTS = [
  {
    id: 'pnb-case-study',
    title: 'New Better PNB - UI/UX Case Study',
    year: '2025',
    category: 'UI/UX Design',
    description: "A comprehensive redesign of the Punjab National Bank mobile application. This project addresses user pain points regarding complex navigation, visual clutter, and accessibility for older demographics.",
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800', 
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=1200'
    ],
    details: [
      "Objective: Streamline fund transfers and bill payments.",
      "Design System: Created a modern, accessible color palette following PNB branding.",
      "Key Result: Reduced task completion time by 40% in user testing."
    ]
  },
  {
    id: 'laundify',
    title: 'Laundify - Service App',
    year: '2025',
    category: 'Product Design',
    description: 'A specialized application for laundry management within residential complexes and hostels. Features include live status tracking, scheduling, and payment integration.',
    thumbnail: enactus,
    images: [enactus]
  },
  {
    id: 'crptic-hunt',
    title: 'Crptic Hunt Instagram Grid',
    year: '2025',
    category: 'Graphic Design',
    description: 'A dynamic Instagram grid layout designed for the Cryptic Hunt event, featuring a dark, mysterious aesthetic to match the puzzle-solving theme.',
    thumbnail: chunt,
    images: [chunt],
    details: [
      "Visuals designed for maximum engagement.",
      "Consistent dark theme across all grid tiles."
    ]
  },
  {
    id: 'fooddle-rebrand',
    title: 'Fooddle Re-branding Instagram Grid',
    year: '2025',
    category: 'Graphic Design',
    description: 'Fresh re-branding assets for Fooddle, focused on vibrant colors and modern food-tech vibes to appeal to a younger demographic.',
    thumbnail: fooddle,
    images: [fooddle],
    details: ["Social media campaign visuals."]
  },
  {
    id: 'hackspirse',
    title: 'Hackspirse Instagram Grid',
    year: '2025',
    category: 'Graphic Design',
    description: 'Promotional graphics for Hackspirse, emphasizing innovation and technology through bold geometric patterns and high-contrast typography.',
    thumbnail: hack,
    images: [hack],
    details: ["Event branding and social media strategy."]
  },
  {
    id: 'sanchay-manager',
    title: 'Sanchay - Money Manager',
    year: '2025',
    category: 'Fintech Design',
    description: 'Sanchay is a personal finance tool that helps users track expenses, set savings goals, and visualize their financial health through clean charts.',
    thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'clam-nest',
    title: 'Clam Nest Therapy Platform',
    year: '2024',
    category: 'Branding / UI',
    description: 'An ACM-backed project focused on mental wellness. Clam Nest provides tools for therapy matching and mental health resources with a calming visual aesthetic.',
    thumbnail: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee1?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1527137342181-19aab11a8ee1?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'campus-chronicles',
    title: 'Campus Chronicles Newsletter',
    year: '2025',
    category: 'Graphic Design',
    description: 'A monthly newsletter layout designed for university students, focusing on event reporting and campus culture.',
    thumbnail: campus,
    images: [campus]
  },
  {
    id: 'acm-flex-design',
    title: 'ACM Official Flex Banners',
    year: '2025',
    category: 'Branding',
    description: 'Large-scale print designs for ACM events, ensuring high-impact visibility and clear communication of event details.',
    thumbnail: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];

  {
    id: 'enactus',
    title: 'Recruitment Banner',
    year: '2025',
    category: 'Branding',
    description: 'Large-scale print designs for ACM events, ensuring high-impact visibility and clear communication of event details.',
    thumbnail: enactus,
    images: [
    enactus    ]
  }
];

// --- COMPONENTS ---

const Navbar = ({ currentView, setView }) => {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 px-6 py-4 flex justify-between items-center border-b border-white/5">
      <div 
        className="text-lg font-black tracking-tighter cursor-pointer hover:opacity-70 transition-opacity uppercase"
        onClick={() => setView('home')}
      >
        lakshay jain
      </div>
      <div className="flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase">
        <button 
          onClick={() => setView('home')} 
          className={`hover:text-white transition-colors ${currentView === 'home' ? 'text-white underline underline-offset-4' : 'text-neutral-500'}`}
        >
          Home
        </button>
        <button 
          onClick={() => setView('work')} 
          className={`hover:text-white transition-colors ${currentView === 'work' ? 'text-white underline underline-offset-4' : 'text-neutral-500'}`}
        >
          Work
        </button>
        <a href="https://linktr.ee" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-1">
          Linktree <ExternalLink size={10} />
        </a>
        <button 
          onClick={() => setView('contact')} 
          className={`hover:text-white transition-colors ${currentView === 'contact' ? 'text-white underline underline-offset-4' : 'text-neutral-500'}`}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

const HomeView = ({ setView }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black">
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden group border-r border-white/5">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200" 
          alt="Creative Background"
          className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
          <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mix-blend-overlay uppercase leading-none">
            Lakshay<br />Jain
          </h1>
          <p className="mt-6 text-white/50 text-xs font-bold tracking-[0.4em] uppercase">Portfolio 2025</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-neutral-900/30">
        <div className="max-w-md">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Product & Design</h2>
          <p className="text-lg text-neutral-400 mb-10 leading-relaxed font-light italic">
            "Every design here is my blueprint — conceived from scratch, crafted with care, and rightfully mine in vision and rights."
          </p>
          <div className="space-y-4 text-xs font-bold text-neutral-500 uppercase tracking-widest mb-12">
            <p className="flex items-center gap-2"><Smartphone size={14} /> UI/UX Strategist</p>
            <p className="flex items-center gap-2"><Layers size={14} /> Product Designer</p>
            <p className="flex items-center gap-2"><Monitor size={14} /> Visual Storyteller</p>
          </div>
          <button 
            onClick={() => setView('work')}
            className="group px-10 py-4 bg-white text-black hover:bg-neutral-200 transition-all rounded-full flex items-center gap-3 font-black text-sm uppercase tracking-widest shadow-2xl"
          >
            Explore Work <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

const WorkView = ({ setView, setSelectedProject }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-xl">
          <p className="text-white/30 uppercase tracking-[0.3em] text-[10px] font-black mb-4 underline decoration-white/20 underline-offset-8">Selected Case Studies</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Archive.</h2>
          <p className="text-neutral-500 italic text-sm md:text-base border-l-2 border-neutral-800 pl-6 leading-relaxed">
            A meticulous collection of digital products and visual assets built with a deep understanding of user needs and aesthetic precision.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            onClick={() => {
              setSelectedProject(project);
              setView('project-detail');
            }}
            className="group cursor-pointer space-y-4"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 shadow-xl transition-all duration-500 group-hover:shadow-white/5">
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black uppercase text-white tracking-widest">View Case</span>
              </div>
            </div>
            <div className="px-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold tracking-tight group-hover:text-white transition-colors">{project.title}</h3>
                <span className="text-[10px] font-bold text-neutral-600 border border-neutral-800 px-2 py-0.5 rounded uppercase">{project.year}</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectDetailView = ({ project, setView }) => {
  if (!project) return null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <button 
          onClick={() => setView('work')}
          className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-16 uppercase tracking-widest text-[10px] font-black"
        >
          <ArrowLeft size={14} /> Back to Archive
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">{project.title}</h1>
            <p className="text-xl text-neutral-400 font-light leading-relaxed italic border-l-2 border-white/10 pl-8">
              {project.description}
            </p>
          </div>
          <div className="bg-neutral-900/50 p-8 rounded-3xl border border-white/5 space-y-6 h-fit">
            <div>
              <p className="text-[10px] font-black uppercase text-neutral-500 tracking-widest mb-1">Service</p>
              <p className="text-sm font-bold">{project.category}</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-neutral-500 tracking-widest mb-1">Year</p>
              <p className="text-sm font-bold">{project.year}</p>
            </div>
            {project.details && (
              <div className="pt-4 border-t border-white/5 space-y-3">
                {project.details.map((d, i) => (
                  <p key={i} className="text-xs text-neutral-400 flex gap-2">
                    <span className="text-white mt-1">•</span> {d}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-16">
          {project.images.map((img, idx) => (
            <div key={idx} className="w-full bg-neutral-900 rounded-[2rem] overflow-hidden shadow-2xl border border-white/5">
              <img src={img} alt="Project detail" className="w-full h-auto" />
            </div>
          ))}
        </div>

        <div className="mt-32 pt-24 border-t border-white/10 text-center">
            <p className="text-neutral-500 uppercase text-[10px] font-black tracking-[0.4em] mb-6">Discovery continues</p>
            <button 
                onClick={() => setView('work')}
                className="text-3xl md:text-5xl font-black hover:text-neutral-400 transition-all uppercase tracking-tighter"
            >
                Next Project
            </button>
        </div>
      </div>
    </div>
  );
};

const ContactView = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen pt-40 pb-24 px-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">Get In<br />Touch.</h1>
          <p className="text-neutral-500 text-lg font-light leading-relaxed italic mb-12">
            Currently accepting new project inquiries for 2025. Let's build something impactful.
          </p>
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-neutral-600 tracking-widest mb-1">Direct Email</span>
              <a href="mailto:lakshayjain148@gmail.com" className="text-xl font-bold hover:text-neutral-400 transition-colors">lakshayjain148@gmail.com</a>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-neutral-600 tracking-widest mb-1">Social Hub</span>
              <a href="https://linktr.ee" target="_blank" rel="noreferrer" className="text-xl font-bold hover:text-neutral-400 transition-colors flex items-center gap-2">Linktree <LinkIcon size={18} /></a>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900/50 p-10 rounded-[2rem] border border-white/5 shadow-2xl backdrop-blur-sm">
          {submitted ? (
            <div className="py-20 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-20 h-20 bg-white/10 text-white rounded-full flex items-center justify-center animate-pulse">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Transmission Sent</h3>
              <p className="text-neutral-500 text-sm italic">Thank you for reaching out. Expect a response within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-neutral-500 tracking-widest ml-1">Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Lakshay Jain"
                  className="w-full bg-black border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors text-sm font-medium px-1"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-neutral-500 tracking-widest ml-1">Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="hello@example.com"
                  className="w-full bg-black border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors text-sm font-medium px-1"
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-neutral-500 tracking-widest ml-1">Message</label>
                <textarea 
                  rows="4"
                  required
                  placeholder="Describe your vision..."
                  className="w-full bg-black border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors resize-none text-sm font-medium px-1"
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-black font-black uppercase tracking-widest py-5 rounded-2xl hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 text-xs shadow-xl active:scale-[0.98]"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [view, setView] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black font-sans">
      {/* Dynamic Navbar: Hidden on home page */}
      {view !== 'home' && <Navbar currentView={view} setView={setView} />}
      
      <main className="transition-all duration-700 ease-in-out">
        {view === 'home' && <HomeView setView={setView} />}
        {view === 'work' && <WorkView setView={setView} setSelectedProject={setSelectedProject} />}
        {view === 'project-detail' && <ProjectDetailView project={selectedProject} setView={setView} />}
        {view === 'contact' && <ContactView />}
      </main>

      <footer className="py-16 border-t border-white/5 px-6 text-center">
        <p className="text-neutral-700 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
          Visual Systems & Strategy
        </p>
        <p className="text-neutral-500 text-[9px] font-bold uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Lakshay Jain | Crafted with Passion
        </p>
      </footer>
    </div>
  );
}




