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
  CheckCircle,
  Users,
  Compass,
  Zap
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
    title: 'New Better PNB',
    year: '2025',
    category: 'UI/UX Design',
    description: "Reimagining legacy banking for a digital-first generation while maintaining accessibility for the elderly.",
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800', 
    pdfLink: pdf, 
    story: [
      { type: 'text', content: "The Punjab National Bank app had a challenge common to legacy systems: visual clutter and a high cognitive load that alienated older users. I stepped in to prove that 'secure' doesn't have to mean 'complicated'." },
      { type: 'image', src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200' },
      { type: 'text', content: "By implementing a clean grid-based navigation and high-contrast typography, I reduced the time taken for fund transfers by 40%. The goal was to build trust through clarity, ensuring every generation feels empowered to manage their finances independently." }
    ],
    details: ["Audience: 10M+ Users", "Focus: Inclusive Design", "Tools: Figma, Adobe Suite"]
  },
  {
    id: 'laundify',
    title: 'Laundify',
    year: '2025',
    category: 'Product Design',
    description: 'Transforming the chaotic laundry experience into a seamless, automated digital ecosystem.',
    thumbnail: lanund,
    story: [
      { type: 'text', content: "In bustling campus hubs, students often face 'laundry anxiety'—walking across campus only to find all machines full or their clothes sitting unattended. I designed Laundify to bridge this gap." },
      { type: 'image', src: lanund },
      { type: 'text', content: "I focused on real-time status updates and a 'one-tap' scheduling system. The UI was built around high-contrast visual cues so that even in the dim light of a basement laundry room, the app remains perfectly legible." },
      { type: 'text', content: "By digitizing the token system and adding automated notifications, Laundify doesn't just manage laundry—it saves students hours of wasted time every week." }
    ]
  },
  {
    id: 'sanchay-manager',
    title: 'Sanchay Manager',
    year: '2025',
    category: 'Fintech Design',
    description: 'A personal finance tool built to replace anxiety with clarity through visual storytelling of data.',
    thumbnail: san,
    story: [
      { type: 'text', content: "Most finance apps feel like spreadsheets—boring and intimidating. Sanchay was born from the idea that personal finance should feel like a conversation with your future self." },
      { type: 'image', src: san },
      { type: 'text', content: "I used vibrant data visualizations and a 'no-math-required' interface. Instead of just showing numbers, Sanchay tells users exactly where their money is going through intuitive icons and spending heatmaps." }
    ]
  },
  {
    id: 'clam-nest',
    title: 'Clam Nest',
    year: '2024',
    category: 'Branding / UI',
    description: 'Creating a safe digital sanctuary for mental wellness through soft visual systems.',
    thumbnail: cnest,
    story: [
      { type: 'text', content: "Mental health platforms can often feel clinical or cold. Working on Clam Nest, my mission was to use design as a form of therapy itself. I chose a soft, organic palette to immediately lower the user's stress level upon entry." },
      { type: 'image', src: cnest },
      { type: 'text', content: "I simplified the therapy-matching process into a calming 3-step journey, removing the friction that often prevents people from seeking the help they need." }
    ]
  },
  {
    id: 'crptic-hunt',
    title: 'Cryptic Hunt',
    year: '2025',
    category: 'Graphic Design',
    description: 'Hacking the Instagram algorithm through a unified mystery-driven visual narrative.',
    thumbnail: chunt,
    images: [chunt],
    story: [
      { type: 'text', content: "To drive engagement for the Cryptic Hunt event, I didn't just want to post flyers—I wanted to create an experience. I designed a 9-grid Instagram layout where every tile held a hidden clue." },
      { type: 'text', content: "The dark, neon-glitch aesthetic successfully captured the 'hacker' vibe, resulting in record-high participation and social sharing before the event even began." }
    ]
  },
  {
    id: 'fooddle-rebrand',
    title: 'Fooddle Rebrand',
    year: '2025',
    category: 'Graphic Design',
    description: 'Injecting personality and energy into a food-tech startup to appeal to Gen-Z.',
    thumbnail: food,
    images: [food],
    story: [
      { type: 'text', content: "Fooddle needed to move away from the generic 'delivery app' look. I overhauled the brand identity to be vibrant, playful, and energetic, focusing on the joy of eating rather than the logistics of delivery." }
    ]
  },
  {
    id: 'hackspirse',
    title: 'Hackspirse',
    year: '2025',
    category: 'Graphic Design',
    description: 'Capturing the high-octane energy of innovation through geometric precision.',
    thumbnail: hack,
    images: [hack],
    story: [
      { type: 'text', content: "Hackathons are about rapid creation. I used bold typography and high-contrast geometric visuals to reflect that energy, ensuring the event stood out in a crowded campus calendar." }
    ]
  },
  {
    id: 'campus-chronicles',
    title: 'Campus Chronicles',
    year: '2025',
    category: 'Graphic Design',
    description: 'Modernizing student journalism through high-fidelity layout design.',
    thumbnail: campus,
    images: [campus],
    story: [
      { type: 'text', content: "Campus newspapers often struggle with readability. I designed a newsletter layout that balanced long-form reporting with snackable visual content, significantly increasing the click-through rate for the digital edition." }
    ]
  }
];

// --- COMPONENTS ---

const Navbar = ({ currentView, setView }) => (
  <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-xl z-50 px-6 py-4 flex justify-between items-center border-b border-white/5">
    <div className="text-xl font-black tracking-tighter cursor-pointer uppercase hover:opacity-70 transition-all" onClick={() => setView('home')}>lakshay jain</div>
    <div className="flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase">
      <button onClick={() => setView('home')} className={currentView === 'home' ? 'text-white border-b border-white pb-1' : 'text-neutral-500 hover:text-white transition-colors'}>Home</button>
      <button onClick={() => setView('work')} className={currentView === 'work' ? 'text-white border-b border-white pb-1' : 'text-neutral-500 hover:text-white transition-colors'}>Work</button>
      <button onClick={() => setView('contact')} className={currentView === 'contact' ? 'text-white border-b border-white pb-1' : 'text-neutral-500 hover:text-white transition-colors'}>Contact</button>
    </div>
  </nav>
);

const HomeView = ({ setView }) => (
  <div className="min-h-screen flex flex-col md:flex-row bg-black">
    <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden group">
      <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200" alt="Hero" className="w-full h-full object-cover grayscale brightness-[0.3] group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-1000 ease-in-out" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
        <h1 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter mix-blend-overlay uppercase leading-none">Lakshay<br />Jain</h1>
        <p className="mt-8 text-white/40 text-xs font-black tracking-[0.6em] uppercase">Visual Systems // 2025</p>
      </div>
    </div>
    <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-neutral-900/40">
      <div className="max-w-md">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Strategic Design.</h2>
        <p className="text-xl text-neutral-400 mb-10 leading-relaxed font-light italic">"I build digital products that don't just look beautiful, but solve the complex frictions of everyday life."</p>
        <div className="grid grid-cols-1 gap-6 mb-12">
          <div className="flex items-center gap-4 text-neutral-500 group">
            <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-all"><Smartphone size={20} /></div>
            <p className="text-xs font-bold uppercase tracking-widest">UI/UX Strategy</p>
          </div>
          <div className="flex items-center gap-4 text-neutral-500 group">
            <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-all"><Layers size={20} /></div>
            <p className="text-xs font-bold uppercase tracking-widest">Product Ecosystems</p>
          </div>
        </div>
        <button onClick={() => setView('work')} className="group px-12 py-5 bg-white text-black rounded-full flex items-center gap-3 font-black text-sm uppercase tracking-widest shadow-2xl transition-all hover:scale-105 active:scale-95">
          View Projects <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

const WorkView = ({ setView, setSelectedProject }) => (
  <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="max-w-2xl mb-24">
      <p className="text-white/20 uppercase tracking-[0.4em] text-[10px] font-black mb-4">Case Studies</p>
      <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic">The Archive.</h2>
      <p className="text-neutral-500 text-lg border-l-2 border-neutral-800 pl-8 leading-relaxed italic">A selection of work where visual identity meets functional strategy.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      {PROJECTS.map((project) => (
        <div key={project.id} onClick={() => { setSelectedProject(project); setView('project-detail'); }} className="group cursor-pointer">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-white/20">
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
              <span className="text-[10px] font-black uppercase text-white tracking-widest flex items-center gap-2">Explore Story <ChevronRight size={12} /></span>
            </div>
          </div>
          <div className="mt-6 px-2 flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold tracking-tight group-hover:text-white transition-colors">{project.title}</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mt-1">{project.category}</p>
            </div>
            <span className="text-[10px] font-bold text-neutral-700 bg-white/5 px-2 py-1 rounded">{project.year}</span>
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
      <div className="max-w-5xl mx-auto px-6">
        <button onClick={() => setView('work')} className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-20 uppercase tracking-[0.3em] text-[10px] font-black">
          <ArrowLeft size={14} /> Back to Archive
        </button>
        
        <div className="mb-24">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-12 italic">{project.title}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <p className="text-2xl md:text-3xl text-neutral-300 font-light leading-relaxed italic border-l-4 border-white/10 pl-8">{project.description}</p>
            </div>
            <div className="space-y-6">
              <div><p className="text-[10px] font-black uppercase text-neutral-600 mb-2">Service</p><p className="text-sm font-bold">{project.category}</p></div>
              <div><p className="text-[10px] font-black uppercase text-neutral-600 mb-2">Year</p><p className="text-sm font-bold">{project.year}</p></div>
            </div>
          </div>
          
          {project.pdfLink && (
            <a href={project.pdfLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl hover:bg-neutral-200 transition-all font-black uppercase text-xs tracking-widest mt-12 shadow-xl">
              <FileText size={18} /> View Case Study PDF
            </a>
          )}
        </div>

        {/* Story Layout (Interleaved Text & Images) */}
        <div className="space-y-24">
          {project.story ? (
            project.story.map((item, idx) => (
              <div key={idx} className="max-w-4xl mx-auto">
                {item.type === 'text' ? (
                  <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-light italic">{item.content}</p>
                ) : (
                  <div className="w-full bg-neutral-900 rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
                    <img src={item.src} alt="Process visual" className="w-full h-auto" />
                  </div>
                )}
              </div>
            ))
          ) : (
            /* Default Image Stack fallback */
            project.images?.map((img, idx) => (
              <div key={idx} className="w-full bg-neutral-900 rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
                <img src={img} alt="Detail" className="w-full h-auto" />
              </div>
            ))
          )}
        </div>

        <div className="mt-40 pt-24 border-t border-white/10 text-center">
            <p className="text-neutral-600 uppercase text-[10px] font-black tracking-[0.5em] mb-8 italic">The story continues</p>
            <button onClick={() => setView('work')} className="text-4xl md:text-6xl font-black hover:text-neutral-400 uppercase tracking-tighter transition-all italic underline decoration-white/10 underline-offset-8">Next Case Study</button>
        </div>
      </div>
    </div>
  );
};

const ContactView = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 5000); };
  
  return (
    <div className="min-h-screen pt-48 pb-24 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] italic">New<br />Chapter.</h1>
          <p className="text-xl text-neutral-500 font-light italic leading-relaxed">Available for freelance opportunities and long-term product partnerships.</p>
          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase text-neutral-600 tracking-[0.3em] block">Inquiries</span>
            <a href="mailto:lakshayjain148@gmail.com" className="text-2xl md:text-3xl font-bold hover:text-neutral-400 transition-colors block border-b border-white/10 pb-4">lakshayjain148@gmail.com</a>
          </div>
        </div>
        <div className="bg-neutral-900/30 p-12 rounded-[3.5rem] border border-white/5 shadow-2xl backdrop-blur-xl">
          {submitted ? (
            <div className="py-24 text-center space-y-8">
                <CheckCircle size={48} className="mx-auto text-white animate-bounce" /> 
                <h3 className="text-3xl font-black uppercase italic tracking-tighter">Transmission Successful</h3>
                <p className="text-neutral-500 text-sm italic">Expect a response within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-neutral-600 ml-2">Name</label>
                  <input type="text" required placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white text-lg transition-all" />
              </div>
              <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-neutral-600 ml-2">Context</label>
                  <textarea rows="4" required placeholder="Project goals and timeline..." className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white text-lg transition-all" />
              </div>
              <button type="submit" className="w-full bg-white text-black font-black uppercase py-6 rounded-[2rem] flex items-center justify-center gap-3 text-sm shadow-2xl active:scale-[0.98] transition-all hover:bg-neutral-200 tracking-widest">Send Transmission <Send size={18} /></button>
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
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {view !== 'home' && <Navbar currentView={view} setView={setView} />}
      <main className="transition-all duration-1000 ease-in-out">
        {view === 'home' && <HomeView setView={setView} />}
        {view === 'work' && <WorkView setView={setView} setSelectedProject={setSelectedProject} />}
        {view === 'project-detail' && <ProjectDetailView project={selectedProject} setView={setView} />}
        {view === 'contact' && <ContactView />}
      </main>
      <footer className="py-20 border-t border-white/5 text-center text-neutral-700 text-[10px] uppercase font-black tracking-[1em]">&copy; {new Date().getFullYear()} Lakshay Jain // Product Strategy // Visual Systems</footer>
    </div>
  );
}
