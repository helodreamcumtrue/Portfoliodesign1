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
    title: 'New Better PNB',
    year: '2025',
    category: 'UI/UX Design',
    description: "A redesign of the PNB mobile app focusing on accessibility and simplified navigation for all age groups.",
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800', 
    pdfLink: pdf, 
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=1200'
    ],
    details: ["Goal: Streamline banking.", "Result: 40% faster task speed."]
  },
  {
    id: 'laundify',
    title: 'Laundify',
    year: '2025',
    category: 'Product Design',
    description: 'A service-based app for real-time laundry tracking in residential and campus hubs.',
    thumbnail: lanund,
    // Story allows interleaved images and text
    story: [
      { type: 'text', content: 'The challenge was to create a system that bridges the gap between hostel students and laundry staff through automated status updates.' },
      { type: 'image', src: lanund },
      { type: 'text', content: 'We focused on a "one-tap" scheduling system to minimize friction for the user during peak academic hours.' },
      { type: 'image', src: gui },
      { type: 'text', content: 'The final UI uses high-contrast elements to ensure readability in different lighting conditions.' }
    ]
  },
  {
    id: 'crptic-hunt',
    title: 'Crptic Hunt',
    year: '2025',
    category: 'Graphic Design',
    description: 'Mystery-themed Instagram grid for puzzle-solving events.',
    thumbnail: chunt,
    images: [chunt]
  },
  {
    id: 'fooddle-rebrand',
    title: 'Fooddle Rebrand',
    year: '2025',
    category: 'Graphic Design',
    description: 'Vibrant, modern branding assets for a young food-tech demographic.',
    thumbnail: food,
    images: [food]
  },
  {
    id: 'hackspirse',
    title: 'Hackspirse',
    year: '2025',
    category: 'Graphic Design',
    description: 'Tech-focused promotional graphics using geometric visual systems.',
    thumbnail: hack,
    images: [hack]
  },
  {
    id: 'sanchay-manager',
    title: 'Sanchay',
    year: '2025',
    category: 'Fintech Design',
    description: 'Personal finance tool with clean data visualization and spending analytics.',
    thumbnail: san,
    images: [san]
  },
  {
    id: 'clam-nest',
    title: 'Clam Nest',
    year: '2024',
    category: 'Branding / UI',
    description: 'A mental wellness platform featuring a calming visual aesthetic and professional matching.',
    thumbnail: cnest,
    images: [cnest]
  },
  {
    id: 'campus-chronicles',
    title: 'Campus Chronicles',
    year: '2025',
    category: 'Graphic Design',
    description: 'Layout design for a monthly student-led reporting and culture newsletter.',
    thumbnail: campus,
    images: [campus]
  },
  {
    id: 'acm-flex-design',
    title: 'ACM Banners',
    year: '2025',
    category: 'Branding',
    description: 'Large-scale print designs for professional event visibility and layout.',
    thumbnail: flex,
    images: [flex]
  },
  {
    id: 'enactus',
    title: 'Enactus Recruitment',
    year: '2025',
    category: 'Branding',
    description: 'Impactful visuals designed for social enterprise talent acquisition.',
    thumbnail: enactus,
    images: [enactus]
  },
  {
    id: 'acmeventweb',
    title: 'Chaos Web',
    year: '2024',
    category: 'Web Design',
    description: 'Interface designs for event registration and visual system guidelines.',
    thumbnail: gui,
    images: [gui, reg]
  },
  {
    id: 'edcpos',
    title: 'Tech Poster',
    year: '2024',
    category: 'Branding',
    description: 'Promotional visuals combining technical clarity with high-impact aesthetics.',
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
      <button onClick={() => setView('contact')} className={currentView === 'contact' ? 'text-white underline underline-offset-4' : 'text-neutral-500'}>Contact</button>
    </div>
  </nav>
);

const HomeView = ({ setView }) => (
  <div className="min-h-screen flex flex-col md:flex-row bg-black">
    <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden group border-r border-white/5">
      <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200" alt="Hero" className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mix-blend-overlay uppercase leading-none">Lakshay<br />Jain</h1>
        <p className="mt-6 text-white/50 text-xs font-bold tracking-[0.4em] uppercase">Portfolio 2025</p>
      </div>
    </div>
    <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-neutral-900/30">
      <div className="max-w-md">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Product & Design</h2>
        <p className="text-lg text-neutral-400 mb-10 leading-relaxed font-light italic">"Conceived from scratch, crafted with care."</p>
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
      <p className="text-white/30 uppercase tracking-[0.3em] text-[10px] font-black mb-4">Selected Archive</p>
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Works.</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {PROJECTS.map((project) => (
        <div key={project.id} onClick={() => { setSelectedProject(project); setView('project-detail'); }} className="group cursor-pointer space-y-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 shadow-xl">
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-black uppercase text-white tracking-widest">View Detail</span>
            </div>
          </div>
          <div className="px-1 flex justify-between items-center">
            <h3 className="text-lg font-bold tracking-tight group-hover:text-white transition-colors">{project.title}</h3>
            <span className="text-[9px] font-bold text-neutral-600 border border-neutral-800 px-2 py-0.5 rounded uppercase">{project.year}</span>
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
      <div className="max-w-4xl mx-auto px-6">
        <button onClick={() => setView('work')} className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-16 uppercase tracking-widest text-[10px] font-black">
          <ArrowLeft size={14} /> Back to Archive
        </button>
        
        <div className="mb-20">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">{project.title}</h1>
          <p className="text-xl text-neutral-400 font-light italic border-l-2 border-white/10 pl-8">{project.description}</p>
          
          {project.pdfLink && (
            <a href={project.pdfLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/10 text-white rounded-2xl hover:bg-white hover:text-black transition-all font-black uppercase text-xs tracking-widest mt-8">
              <FileText size={18} /> View Case Study PDF
            </a>
          )}
        </div>

        {/* Dynamic Story Layout (Images between text) */}
        {project.story ? (
          <div className="space-y-12">
            {project.story.map((item, idx) => (
              <div key={idx} className="animate-fade-in">
                {item.type === 'text' ? (
                  <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl font-light italic">{item.content}</p>
                ) : (
                  <div className="w-full bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/5 my-8">
                    <img src={item.src} alt="Process visual" className="w-full h-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Default Image Stack */
          <div className="space-y-12">
            {project.images?.map((img, idx) => (
              <div key={idx} className="w-full bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                <img src={img} alt="Detail" className="w-full h-auto" />
              </div>
            ))}
          </div>
        )}

        <div className="mt-32 pt-24 border-t border-white/10 text-center">
            <button onClick={() => setView('work')} className="text-2xl font-black hover:text-neutral-400 uppercase tracking-tighter">View More Projects</button>
        </div>
      </div>
    </div>
  );
};

const ContactView = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 5000); };
  
  return (
    <div className="min-h-screen pt-40 pb-24 px-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">Let's<br />Talk.</h1>
          <a href="mailto:lakshayjain148@gmail.com" className="text-xl font-bold hover:text-white transition-colors block">lakshayjain148@gmail.com</a>
        </div>
        <div className="bg-neutral-900/50 p-10 rounded-[2rem] border border-white/5 shadow-2xl">
          {submitted ? (
            <div className="py-20 text-center space-y-6"><CheckCircle size={32} className="mx-auto" /> <h3 className="text-2xl font-black uppercase">Sent</h3></div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <input type="text" required placeholder="Name" className="w-full bg-black border-b border-white/10 py-3 focus:outline-none focus:border-white text-sm" />
              <textarea rows="4" required placeholder="Project Details" className="w-full bg-black border-b border-white/10 py-3 focus:outline-none focus:border-white text-sm" />
              <button type="submit" className="w-full bg-white text-black font-black uppercase py-5 rounded-2xl flex items-center justify-center gap-3 text-xs shadow-xl active:scale-[0.98]">Dispatch Message</button>
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
      <main className="transition-all duration-700 ease-in-out">
        {view === 'home' && <HomeView setView={setView} />}
        {view === 'work' && <WorkView setView={setView} setSelectedProject={setSelectedProject} />}
        {view === 'project-detail' && <ProjectDetailView project={selectedProject} setView={setView} />}
        {view === 'contact' && <ContactView />}
      </main>
      <footer className="py-16 border-t border-white/5 text-center text-neutral-600 text-[9px] uppercase font-bold tracking-[0.2em]">&copy; {new Date().getFullYear()} Lakshay Jain // Product Strategy</footer>
    </div>
  );
}
