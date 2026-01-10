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
    title: 'New Better PNB Bank',
    year: '2025',
    category: 'UI/UX Design',
    description: "Redefining legacy banking by bridging the gap between complex financial systems and human intuition.",
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800', 
    banner: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=1584&h=396', 
    pdfLink: pdf, 
    story: [
      { type: 'text', content: "The Punjab National Bank application faced a common hurdle in legacy tech: a high cognitive load that often intimidated users, particularly the older generation. My mission was to prove that 'secure' and 'simple' can coexist. I wanted to create an interface where a 70-year-old grandfather could transfer funds with the same confidence as a 20-year-old student." },
      { type: 'image', src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200' },
      { type: 'text', content: "I focused on 'Progressive Disclosure'—showing only what is necessary at each step. By stripping away visual noise and implementing a grid-based navigation system inspired by physical bank branch queues, I managed to reduce task completion time by 40% in user testing." }
    ]
  },
  {
    id: 'laundify',
    title: 'Laundify',
    year: '2025',
    category: 'Product Design',
    description: 'A comprehensive digital solution to the chaotic experience of shared campus laundry facilities.',
    thumbnail: lanund,
    banner: 'https://images.unsplash.com/photo-1545173153-5dd736fb688a?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'text', content: "Laundify was born out of a personal frustration: 'Laundry Anxiety.' In bustling student hubs, time is the most valuable currency, yet hours are wasted walking to laundry rooms only to find machines full." },
      { type: 'image', src: lanund },
      { type: 'text', content: "The design system uses high-contrast visual status indicators. Even in the dim light of a basement laundry room, the app remains perfectly legible. I integrated a real-time tracking system and a 'one-tap' scheduling feature." },
      { type: 'text', content: "By digitizing the token system and adding automated 'Cycle Finished' notifications, Laundify doesn't just manage clothes—it gives students back their peace of mind." }
    ]
  },
  {
    id: 'sanchay-manager',
    title: 'Sanchay Finance BTS',
    year: '2025',
    category: 'Fintech Design',
    description: 'Moving personal finance away from intimidating spreadsheets and toward visual storytelling.',
    thumbnail: san,
    banner: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'text', content: "People avoid tracking their money because bank statements look like math homework—scary and boring. Sanchay (meaning 'to save') was designed to feel like a conversation with your future self." },
      { type: 'image', src: san },
      { type: 'text', content: "I replaced dense rows of numbers with 'Spending Heatmaps.' Sanchay treats every transaction as a piece of data that tells a story about your lifestyle." }
    ]
  },
  {
    id: 'clam-nest',
    title: 'Clam Nest Therapy',
    year: '2025',
    category: 'Branding / UI',
    description: 'Creating a digital sanctuary for mental wellness where the design itself acts as a calming agent.',
    thumbnail: cnest,
    banner: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'text', content: "In a mental health crisis, the last thing a user needs is a cluttered, loud interface. For Clam Nest, my philosophy was 'Design as a digital exhale.' I utilized a soft, organic palette and generous whitespace to create a sense of safety." },
      { type: 'image', src: cnest }
    ]
  },
  {
    id: 'crptic-hunt',
    title: 'Cryptic Hunt Grid',
    year: '2025',
    category: 'Visual Strategy',
    description: 'Using mystery as a currency to hack engagement and drive community participation.',
    thumbnail: chunt,
    banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'text', content: "For the Cryptic Hunt, I created a unified 9-grid Instagram layout where every tile revealed a hidden map. This visual strategy resulted in a 300% increase in social sharing." },
      { type: 'image', src: chunt }
    ]
  },
  {
    id: 'fooddle-rebrand',
    title: 'Fooddle Rebranding',
    year: '2025',
    category: 'Graphic Design',
    description: 'Transforming a utility service into a lifestyle brand that celebrates the energy of flavor.',
    thumbnail: food,
    banner: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'text', content: "Fooddle needed to break away from generic logistics visuals. I moved the brand toward 'Editorial Food-Tech' with high-saturation palettes." },
      { type: 'image', src: food }
    ]
  },
  {
    id: 'hackspirse',
    title: 'Hackspirse',
    year: '2026',
    category: 'Event Branding',
    description: 'Capturing the raw energy of high-octane creation through geometric precision.',
    thumbnail: hack,
    banner: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'text', content: "Hackathons are organized chaos. For Hackspirse, I designed a visual system based on bold geometric lines to represent the logic of code and innovation." },
      { type: 'image', src: hack }
    ]
  },
  {
    id: 'campus-chronicles',
    title: 'Campus Chronicles',
    year: '2026',
    category: 'Layout Design',
    description: 'Modernizing student journalism by applying a digital-first grid to long-form storytelling.',
    thumbnail: campus,
    banner: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'text', content: "I redesigned the Chronicles to feel like a high-fidelity magazine, utilizing modular grids to increase readability for a digital generation." },
      { type: 'image', src: campus }
    ]
  },
  {
    id: 'acm-flex-design',
    title: 'ACM Banner',
    year: '2026',
    category: 'Print Branding',
    description: 'Large-scale print designs for professional event visibility.',
    thumbnail: flex,
    banner: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'text', content: "The challenge was translating digital identity into large-format physical assets without losing visual fidelity." },
      { type: 'image', src: flex }
    ]
  },
  {
    id: 'enactus-recruitment',
    title: 'Enactus Recruitment',
    year: '2026',
    category: 'Visual Identity',
    description: 'Impactful visuals designed for social enterprise talent acquisition.',
    thumbnail: enactus,
    banner: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'text', content: "For Enactus, I created a visual narrative that emphasized community and social impact to attract mission-driven students." },
      { type: 'image', src: enactus }
    ]
  },
  {
    id: 'acm-chaos',
    title: 'Chaos Web Interface',
    year: '2025',
    category: 'Web Design',
    description: 'User registration flows and interface systems for complex event networks.',
    thumbnail: reg,
    banner: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'text', content: "I designed a seamless registration flow that handled heavy user traffic while maintaining a clean, error-free experience." },
      { type: 'image', src: reg }
    ]
  },
  {
    id: 'edc-poster',
    title: 'Tech Event Visuals',
    year: '2025',
    category: 'Graphic Design',
    description: 'Promotional visuals combining technical clarity with aesthetic appeal.',
    thumbnail: biz,
    banner: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'text', content: "By blending technical diagrams with abstract aesthetics, I created a poster series that intrigued both developers and designers." },
      { type: 'image', src: biz }
    ]
  }
];

// --- COMPONENTS ---

const Navbar = ({ currentView, setView }) => (
  <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-xl z-[100] px-4 md:px-6 py-4 flex justify-between items-center border-b border-white/5">
    <div className="text-xl font-black tracking-tighter cursor-pointer uppercase hover:opacity-70 transition-all font-sans" onClick={() => setView('home')}>lakshay jain</div>
    <div className="flex gap-4 md:gap-8 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-400 font-sans">
      <button onClick={() => setView('home')} className={currentView === 'home' ? 'text-white border-b border-white pb-1' : 'hover:text-white transition-colors'}>Home</button>
      <button onClick={() => setView('work')} className={currentView === 'work' ? 'text-white border-b border-white pb-1' : 'hover:text-white transition-colors'}>Work</button>
      <button onClick={() => setView('contact')} className={currentView === 'contact' ? 'text-white border-b border-white pb-1' : 'hover:text-white transition-colors'}>Contact</button>
    </div>
  </nav>
);

const HomeView = ({ setView }) => (
  <div className="min-h-screen flex flex-col md:flex-row bg-black overflow-x-hidden">
    <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden group">
      <img 
        src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1600" 
        alt="Abstraction" 
        className="w-full h-full object-cover grayscale brightness-[0.2] group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-50 transition-all duration-[2000ms] ease-in-out" 
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center">
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white italic tracking-tighter mix-blend-overlay uppercase leading-none select-none font-sans">Lakshay<br />Jain</h1>
        <p className="mt-6 md:mt-8 text-white/40 text-[10px] md:text-xs font-black tracking-[0.4em] md:tracking-[0.8em] uppercase font-sans">Visual Systems // 2026</p>
      </div>
    </div>
    <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 bg-neutral-900/40">
      <div className="max-w-md">
        <h2 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tighter font-sans">Strategic Design.</h2>
        <p className="text-lg md:text-xl text-neutral-400 mb-8 md:mb-12 leading-relaxed font-light italic border-l-2 border-white/10 pl-6 font-serif">"I architect digital products that solve the complex frictions of everyday human life."</p>
        <button onClick={() => setView('work')} className="group w-full md:w-auto px-10 md:px-12 py-5 bg-white text-black rounded-full flex items-center justify-center gap-3 font-black text-sm uppercase tracking-widest shadow-2xl transition-all hover:scale-105 active:scale-95 font-sans">
          Explore Archive <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

const WorkView = ({ setView, setSelectedProject }) => (
  <div className="min-h-screen pt-24 md:pt-32 pb-24 px-4 md:px-12 max-w-7xl mx-auto font-sans">
    <div className="max-w-2xl mb-16 md:mb-24">
      <p className="text-white/20 uppercase tracking-[0.4em] text-[10px] font-black mb-4 underline underline-offset-8 decoration-white/10">Selected Works</p>
      <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic">The Archive.</h2>
      <p className="text-neutral-500 text-lg md:text-xl border-l-2 border-neutral-800 pl-8 leading-relaxed italic font-serif">A curated collection of design-led solutions.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-20">
      {PROJECTS.map((project) => (
        <div key={project.id} onClick={() => { setSelectedProject(project); setView('project-detail'); }} className="group cursor-pointer">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-neutral-900 border border-white/5 shadow-2xl transition-all duration-700 group-hover:border-white/20">
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
              <span className="text-[10px] font-black uppercase text-white tracking-[0.3em] flex items-center gap-3">View Case Study <ChevronRight size={14} /></span>
            </div>
          </div>
          <div className="mt-6 px-1 flex justify-between items-start">
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-white transition-colors">{project.title}</h3>
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 mt-2">{project.category}</p>
            </div>
            <span className="text-[9px] font-bold text-neutral-700 bg-white/5 px-3 py-1.5 rounded-full">{project.year}</span>
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
    <div className="min-h-screen pb-24 bg-black">
      {/* NARROW PROJECT BANNER */}
      <div className="w-full h-[15vh] md:h-[25vh] overflow-hidden relative border-b border-white/5">
        <img 
          src={project.banner || 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1584&h=396'} 
          alt="Banner" 
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="pt-8 md:pt-12 mb-12">
          <button 
            onClick={() => setView('work')} 
            className="flex items-center gap-2 text-neutral-500 hover:text-white transition-all uppercase tracking-[0.3em] text-[10px] font-black font-sans group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Archive
          </button>
        </div>
        
        <div className="mb-16 md:mb-24">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-12 italic font-sans">{project.title}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <p className="text-lg md:text-2xl text-neutral-300 font-light leading-relaxed italic border-l-4 border-white/10 pl-6 md:pl-10 font-serif">
                {project.description}
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 border-t lg:border-t-0 border-white/5 pt-8 lg:pt-0 font-sans text-neutral-500">
              <div><p className="text-[10px] font-black uppercase mb-1">Service</p><p className="text-xs md:text-sm font-bold uppercase text-white">{project.category}</p></div>
              <div><p className="text-[10px] font-black uppercase mb-1">Year</p><p className="text-xs md:text-sm font-bold text-white">{project.year}</p></div>
            </div>
          </div>
          
          {project.pdfLink && (
            <a href={project.pdfLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full md:w-auto gap-3 px-10 md:px-12 py-5 bg-white text-black rounded-2xl hover:bg-neutral-200 transition-all font-black uppercase text-[10px] md:text-xs tracking-widest mt-12 shadow-xl font-sans">
              <FileText size={18} /> View Case Study PDF
            </a>
          )}
        </div>

        <div className="space-y-16 md:space-y-32">
          {project.story ? (
            project.story.map((item, idx) => (
              <div key={idx} className="max-w-4xl mx-auto">
                {item.type === 'text' ? (
                  <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light italic font-serif">{item.content}</p>
                ) : (
                  <div className="w-full max-w-4xl mx-auto bg-neutral-900 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 my-8 md:my-0 group">
                    <img src={item.src} alt="Process visual" className="w-full h-auto transform transition-transform duration-[1200ms] group-hover:scale-105" />
                  </div>
                )}
              </div>
            ))
          ) : (
            project.images?.map((img, idx) => (
              <div key={idx} className="w-full max-w-4xl mx-auto bg-neutral-900 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
                <img src={img} alt="Detail" className="w-full h-auto" />
              </div>
            ))
          )}
        </div>

        <div className="mt-40 pt-24 border-t border-white/10 text-center font-sans">
            <p className="text-neutral-600 uppercase text-[9px] md:text-[10px] font-black tracking-[0.6em] mb-8 italic">The story continues</p>
            <button onClick={() => setView('work')} className="text-3xl md:text-5xl font-black hover:text-neutral-400 uppercase tracking-tighter transition-all italic underline decoration-white/10 underline-offset-[16px]">Next Project</button>
        </div>
      </div>
    </div>
  );
};

const ContactView = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 5000); };
  
  return (
    <div className="min-h-screen pt-32 md:pt-48 pb-24 px-4 md:px-6 max-w-5xl mx-auto font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div className="space-y-10 md:space-y-16">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] italic">New<br />Chapter.</h1>
          <p className="text-xl md:text-2xl text-neutral-500 font-light italic leading-relaxed font-serif">Available for high-impact partnerships for 2026.</p>
          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase text-neutral-600 tracking-[0.4em] block">Direct Access</span>
            <a href="mailto:lakshayjain148@gmail.com" className="text-xl sm:text-2xl md:text-4xl font-bold hover:text-neutral-400 transition-colors block border-b border-white/10 pb-6 overflow-hidden text-ellipsis">lakshayjain148@gmail.com</a>
          </div>
        </div>
        <div className="bg-neutral-900/30 p-8 md:p-16 rounded-[2.5rem] md:rounded-[4.5rem] border border-white/5 shadow-2xl backdrop-blur-xl">
          {submitted ? (
            <div className="py-16 md:py-24 text-center space-y-8">
                <CheckCircle size={48} className="mx-auto text-white animate-bounce" /> 
                <h3 className="text-3xl font-black uppercase italic tracking-tighter">Success</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10 md:space-y-12">
              <input type="text" required placeholder="Name or Organization" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white text-lg md:text-2xl transition-all font-light" />
              <textarea rows="3" required placeholder="Project goals..." className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white text-lg md:text-2xl transition-all font-light resize-none" />
              <button type="submit" className="w-full bg-white text-black font-black uppercase py-6 rounded-full flex items-center justify-center gap-3 text-sm md:text-base shadow-2xl active:scale-[0.98] transition-all hover:bg-neutral-200 tracking-widest">Send Transmission <Send size={20} /></button>
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

  // Sync state with browser navigation
  useEffect(() => {
    const handlePopState = (event) => {
      if (view === 'project-detail') setView('work');
      else if (view === 'work' || view === 'contact') setView('home');
    };
    window.addEventListener('popstate', handlePopState);
    if (view !== 'home') window.history.pushState({ view }, "");
    return () => window.removeEventListener('popstate', handlePopState);
  }, [view]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden antialiased">
      {view !== 'home' && <Navbar currentView={view} setView={setView} />}
      <main className="transition-all duration-1000 ease-in-out">
        {view === 'home' && <HomeView setView={setView} />}
        {view === 'work' && <WorkView setView={setView} setSelectedProject={setSelectedProject} />}
        {view === 'project-detail' && <ProjectDetailView project={selectedProject} setView={setView} />}
        {view === 'contact' && <ContactView />}
      </main>
      <footer className="py-16 md:py-24 border-t border-white/5 text-center text-neutral-700 text-[8px] md:text-[10px] uppercase font-black tracking-[0.8em] md:tracking-[1.2em] px-6 font-sans">
        &copy; {new Date().getFullYear()} Lakshay Jain // Product Strategy // Visual Systems
      </footer>
    </div>
  );
}
