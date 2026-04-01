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
import pbn from './assets/pnbb.png';
import aavana from './assets/aavana_study.png';

// --- CATEGORY DEFINITIONS ---
const CATEGORY_MAP = {
  'pnb-case-study':      'UI Design',
  'laundify':            'Product',
  'sanchay-manager':     'UI Design',
  'clam-nest':           'Branding',
  'crptic-hunt':         'Poster',
  'fooddle-rebrand':     'Branding',
  'hackspirse':          'Poster',
  'campus-chronicles':   'Printables',
  'acm-flex-design':     'Printables',
  'enactus-recruitment': 'Merch',
  'acm-chaos':           'Product',
  'edc-poster':          'Poster',
  'aavana-brand':        'Branding',
};

const ALL_CATEGORIES = ['All', 'UI Design', 'Branding', 'Product', 'Printables', 'Poster', 'Merch'];

const PROJECTS = [
  {
    id: 'pnb-case-study',
    title: 'New Better PNB Bank',
    year: '2025',
    category: 'UI/UX Design',
    description: 'Redefining legacy banking by bridging the gap between complex financial systems and human intuition.',
    thumbnail: pbn,
    banner: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=1584&h=396',
    pdfLink: pdf,
    story: [
      { type: 'heading', content: 'The Brief' },
      { type: 'text', content: 'Punjab National Bank is one of India\'s oldest public sector banks. That legacy is both its strength and its design problem. The existing app felt like a digital photocopy of a paper form, not a product built for people. I was asked to reimagine it from the ground up.' },
      { type: 'text', content: 'The real users were not startup founders or tech enthusiasts. They were shopkeepers, pensioners, and first-generation smartphone users. Designing for them meant unlearning a lot of what looks good on a Dribbble shot.' },
      { type: 'heading', content: 'The Process' },
      { type: 'text', content: 'I started by mapping every task a user might need to do: check balance, transfer money, pay bills, download statements. Then I asked one question for each: how many taps does this currently take, and how many should it take? The answer to the first question was always too many.' },
      { type: 'text', content: 'I introduced progressive disclosure across the entire flow. Nothing is dumped on the screen at once. Each screen does one job. The home screen shows your balance and your three most recent transactions. That is it. Everything else lives one tap away, clearly labelled.' },
      { type: 'image', src: pbn },
      { type: 'heading', content: 'The Challenge' },
      { type: 'text', content: 'The hardest part was not the visual design, it was trust. Banking apps carry the weight of someone\'s entire financial life. Making something feel simple without making it feel flimsy was a constant tension. Every design decision had to earn its place by reducing fear, not just reducing clutter.' },
      { type: 'heading', content: 'The Result' },
      { type: 'text', content: 'Task completion time dropped by 40 percent in testing. But the number that meant more to me was this: users stopped calling the UI confusing. That was the real win. Not the visual polish, but the quiet confidence users felt navigating something that used to intimidate them.' },
      { type: 'quote', content: 'Simple is not dumbed down. Simple is deeply considered.' },
    ]
  },
  {
    id: 'laundify',
    title: 'Laundrify',
    year: '2025',
    category: 'Product Design',
    description: 'A comprehensive digital solution to the chaotic experience of shared campus laundry facilities.',
    thumbnail: lanund,
    banner: 'https://images.unsplash.com/photo-1545173153-5dd736fb688a?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'heading', content: 'The Brief' },
      { type: 'text', content: 'Laundrify started with a very specific kind of frustration. You walk down to the laundry room, arms full, only to find every machine occupied. You walk back. You try again later. You forget. You repeat this four times. It is a small thing, but it happens every week, and small things that happen every week become genuinely exhausting.' },
      { type: 'text', content: 'The ask was to design a campus laundry management app that let students check machine availability, book a slot, and get notified when their cycle was done. Straightforward on paper. Surprisingly rich once I started digging.' },
      { type: 'heading', content: 'The Process' },
      { type: 'text', content: 'I spent time in the actual laundry room watching how students behaved. Most people glanced at machines from the doorway before deciding whether to stay. That single insight shaped the entire home screen: a real-time grid of machines, colour-coded by status, visible at a glance without touching your phone.' },
      { type: 'image', src: lanund },
      { type: 'heading', content: 'The Design' },
      { type: 'text', content: 'The visual system is deliberately high contrast. Laundry rooms are often dim, fluorescent-lit spaces. The app needed to be readable in that environment. I tested every colour combination against low-brightness conditions before locking anything in.' },
      { type: 'text', content: 'The booking flow is three taps: pick a machine, pick a time, confirm. No account setup friction, no unnecessary fields. The notification system is opt-in and respectful. It does not nag. It just tells you when your clothes are done, and reminds you once more if you have not moved them in 15 minutes.' },
      { type: 'heading', content: 'The Result' },
      { type: 'text', content: 'What started as a utility app became something students actually looked forward to using. When the design removes the anxiety from a task, the product earns a little bit of trust every single time. That trust compounds.' },
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
      { type: 'heading', content: 'The Brief' },
      { type: 'text', content: 'Sanchay means to save in Hindi. The brief was to design a personal finance tracker that felt less like a tool for accountants and more like a mirror for your own habits. Most finance apps tell you what you spent. Sanchay was supposed to help you understand why.' },
      { type: 'text', content: 'The target user was a young working professional or student who knew they should be tracking money but found every existing app either too complex or too cold. The emotional barrier to using finance tools is almost always overlooked in product design. I wanted to tackle it directly.' },
      { type: 'heading', content: 'The Process' },
      { type: 'text', content: 'I replaced the standard bar chart with spending heatmaps: a calendar view where the intensity of colour tells you how heavy a spending day was. You do not need to read numbers. You feel the pattern. A dark cluster mid-month stands out immediately. That is the conversation starter between you and your own data.' },
      { type: 'image', src: san },
      { type: 'heading', content: 'The Design' },
      { type: 'text', content: 'Typography plays a central role. The numbers are large but never alarming. The colour palette is warm and grounded, not the cold blue-grey of most fintech products. Every design decision was calibrated against a single question: does this feel like stress or does this feel like clarity?' },
      { type: 'heading', content: 'The Challenge' },
      { type: 'text', content: 'The hardest thing was designing for negative moments. What does the screen look like when you have overspent? How do you show a budget breach without making someone feel attacked? I landed on gentle, non-judgmental nudges over harsh red alerts. The app is on your side, not against you.' },
      { type: 'quote', content: 'Your money has a story. Sanchay just helps you read it.' },
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
      { type: 'heading', content: 'The Brief' },
      { type: 'text', content: 'Clam Nest is a therapy and mental wellness platform. The founder came to me with a clear conviction: most mental health apps feel clinical, cold, or performatively cheerful. None of them feel like a space you actually want to sit in. She wanted something different.' },
      { type: 'text', content: 'My job was to design a brand identity and UI that felt like the digital equivalent of a well-designed therapist\'s office. Calm without being sterile. Warm without being saccharine. A space that communicated safety before a single word was read.' },
      { type: 'heading', content: 'The Design' },
      { type: 'text', content: 'The colour palette is built on muted sage, warm ivory, and deep ocean tones. Nothing vibrates. Nothing demands attention. The typography is set in a soft serif that reads like a journal, not a dashboard. Every element was chosen to lower the heart rate, not raise it.' },
      { type: 'image', src: cnest },
      { type: 'heading', content: 'The Process' },
      { type: 'text', content: 'I studied how physical therapeutic spaces use light, texture, and proportion to create safety. Then I translated those principles into digital decisions: generous padding to avoid crowding, rounded corners throughout to soften sharp edges, and micro-animations that breathe rather than pop.' },
      { type: 'heading', content: 'The Challenge' },
      { type: 'text', content: 'The challenge was restraint. Every instinct as a designer pulls you toward adding visual interest. Here, the opposite was true. Adding too much meant breaking the silence that made the space feel safe. The final design is proof that doing less takes more skill.' },
      { type: 'quote', content: 'Good design for mental wellness is invisible. It just feels like relief.' },
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
      { type: 'heading', content: 'The Brief' },
      { type: 'text', content: 'The Cryptic Hunt was a campus-wide puzzle event. The organisers wanted social media promotion, but they did not want the usual countdown posts and announcement graphics. They wanted the social media presence itself to be part of the puzzle. That brief was the most exciting I have received.' },
      { type: 'text', content: 'The idea: design a nine-tile Instagram grid where each individual post looks abstract and incomplete, but together they form a hidden map with clues embedded in the visual. Participants had to follow the account and piece together the grid to find their first hint.' },
      { type: 'heading', content: 'The Process' },
      { type: 'text', content: 'I designed the full 3x3 grid as a single canvas first, then sliced it into nine posts. Each tile had to work as a standalone visual that looked intentional but incomplete. The clues were hidden in the negative space, in the alignment of shapes across tiles, and in the colour transitions that only read correctly when all nine were seen together.' },
      { type: 'image', src: chunt },
      { type: 'heading', content: 'The Design' },
      { type: 'text', content: 'The visual language was deliberately cryptic: dark backgrounds, abstract geometric forms, fragments of text that only resolved into meaning when combined. I used a monochromatic palette broken by a single accent colour that appeared in different positions across tiles, like a thread weaving through the grid.' },
      { type: 'heading', content: 'The Result' },
      { type: 'text', content: 'The campaign generated a 300 percent increase in social shares compared to previous events. Students were screenshotting, debating, and tagging each other in the comments trying to decode the grid. The design did not just promote the event. It became the event.' },
      { type: 'quote', content: 'The best campaigns make the audience part of the creative.' },
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
      { type: 'heading', content: 'The Brief' },
      { type: 'text', content: 'Fooddle was a campus food delivery service that had grown organically and never really thought about its identity. The logo was an afterthought, the colour palette was inconsistent, and the visual language on social media felt like it belonged to three different brands. They knew something was wrong. They just did not know where to start.' },
      { type: 'text', content: 'My job was to rebuild the brand from the ground up. Not a refresh, a full reframe. Fooddle needed to stop looking like a logistics operation and start feeling like a food culture brand that students actually wanted to be associated with.' },
      { type: 'heading', content: 'The Process' },
      { type: 'text', content: 'I started by auditing what made Fooddle different from its competitors. The answer was energy. Fooddle was fast, local, and personal. The riders knew your name. The kitchens were run by the same campus vendors students trusted. That human, kinetic quality was entirely absent from the visual identity.' },
      { type: 'image', src: food },
      { type: 'heading', content: 'The Design' },
      { type: 'text', content: 'The new identity leans into bold, saturated colour. High-contrast pairings that feel electric. The typography is confident and slightly playful, with custom lettering for the wordmark that feels handcrafted but professional. Motion was baked into the system: every asset was designed with the assumption that it would live on a screen, not a menu board.' },
      { type: 'heading', content: 'The Result' },
      { type: 'text', content: 'The rebrand gave Fooddle a visual voice that matched the experience of actually using it. When your delivery arrives hot and your rider greets you by name, the brand should feel as alive as that moment. Now it does.' },
      { type: 'quote', content: 'A brand is not a logo. It is the feeling that arrives before the food does.' },
    ]
  },
  {
    id: 'hackspirse',
    title: 'Hackspirse',
    year: '2025',
    category: 'Event Branding',
    description: 'Capturing the raw energy of high-octane creation through geometric precision.',
    thumbnail: hack,
    banner: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'heading', content: 'The Brief' },
      { type: 'text', content: 'Hackspirse was a 24-hour hackathon. The organisers wanted branding that matched what the event actually felt like: high pressure, creative chaos, late nights, and the particular kind of electricity that comes from building something from nothing in a single day.' },
      { type: 'text', content: 'Most hackathon branding defaults to circuit board aesthetics and neon colours. I wanted to do something that felt more like the human experience of a hackathon rather than a generic tech poster.' },
      { type: 'heading', content: 'The Design' },
      { type: 'text', content: 'The visual system is built on geometric fragmentation. Shapes that look like they are mid-collision, pulled apart and reassembled. It represents the hackathon process: breaking a problem into pieces, restructuring the logic, building something new. The forms are precise but the composition is deliberately tense.' },
      { type: 'image', src: hack },
      { type: 'heading', content: 'The Process' },
      { type: 'text', content: 'I created a modular system of shapes that could be recombined across different assets: the main poster, social cards, name badges, and digital displays. Every format used the same visual language but composed differently, so the branding felt alive across contexts rather than copy-pasted.' },
      { type: 'heading', content: 'The Challenge' },
      { type: 'text', content: 'The hardest balance was between legibility and attitude. Event branding needs to communicate information clearly: the name, the date, the call to action. But if it looks too clean and corporate, it loses the raw energy the event actually has. I ended up doing multiple rounds to find the point where both things were true.' },
      { type: 'quote', content: 'Build in a day. Design for the feeling of building.' },
    ]
  },
  {
    id: 'campus-chronicles',
    title: 'Campus Chronicles',
    year: '2025',
    category: 'Layout Design',
    description: 'Modernizing student journalism by applying a digital-first grid to long-form storytelling.',
    thumbnail: campus,
    banner: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'heading', content: 'The Brief' },
      { type: 'text', content: 'Campus Chronicles is the student journalism publication at Thapar. It had great writing but a layout that made it hard to read. The typography was inconsistent, the grid was broken, and the visual hierarchy pushed readers away rather than pulling them in. Good stories were dying in bad design.' },
      { type: 'text', content: 'The brief was a full layout redesign for the digital publication. Not a new CMS, not a new name, just a visual system that finally matched the quality of the writing it contained.' },
      { type: 'heading', content: 'The Process' },
      { type: 'text', content: 'I studied how publications like The Athletic, Rest of World, and Delayed Gratification use layout to slow readers down and create a sense of occasion around long-form content. The goal is not to make reading faster. It is to make it feel worth doing.' },
      { type: 'image', src: campus },
      { type: 'heading', content: 'The Design' },
      { type: 'text', content: 'The new layout uses a strict modular grid with generous white space. Headlines are large and confident. Pull quotes break up long sections and give skimmers a reason to stop. The type scale is designed for screen reading: comfortable line lengths, generous line height, and a body font chosen for long-form legibility rather than headlines.' },
      { type: 'heading', content: 'The Result' },
      { type: 'text', content: 'When the writing is good and the design is honest, readers stay longer. The redesign gave Campus Chronicles a visual identity that said: this is serious journalism and it deserves your full attention. The writing always deserved that. Now the design says so too.' },
      { type: 'quote', content: 'Layout is not decoration. It is the architecture that holds the story up.' },
    ]
  },
  {
    id: 'acm-flex-design',
    title: 'ACM Thapar Chapter: Flex Banner Design',
    year: '2024',
    category: 'Print Branding',
    description: 'A versatile flex banner for the ACM Thapar student chapter — built to work across campus events, workshops, and tech talks.',
    thumbnail: flex,
    banner: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'heading', content: 'The Brief' },
      { type: 'text', content: "The ACM Thapar student chapter needed a flex banner for general branding — something that could work across campus events, workshops, and tech talks. No specific event, just a versatile visual identity that represents their community." },
      { type: 'text', content: "The challenge? Make tech feel welcoming. Balance credibility with approachability. Professional but not corporate." },
      { type: 'heading', content: 'The Design' },
      { type: 'text', content: "Geometric Background. Overlapping diamond shapes in blue gradients create depth and movement. They hint at connectivity — nodes in a network, students in a community. Tech symbolism that doesn't hit you over the head." },
      { type: 'text', content: "Color Palette. Deep ocean blue to bright cyan. Modern, digital, energetic. Blue communicates trust and intelligence, but the gradient adds dynamism. The light background keeps it clean and versatile — works for formal talks or casual hackathons." },
      { type: 'text', content: 'Typography, Layout. "thapar" in lowercase, rounded sans-serif — friendly and approachable. The ACM logo sits in a diamond frame that mirrors the background pattern, creating visual cohesion.' },
      { type: 'quote', content: 'Collaborate. Elevate. Innovate.' },
      { type: 'text', content: "Three words. Three pillars. Each gets its own gradient color, creating rhythm and progression. The underlines add a modern, UI-inspired touch while anchoring the message." },
      { type: 'image', src: flex },
      { type: 'heading', content: 'The Challenge' },
      { type: 'text', content: 'Balancing "tech aesthetic" with "student community vibe." Too corporate feels like a company poster. Too playful loses credibility. I landed on "clean with personality" — professional enough for faculty, approachable enough for first-years.' },
      { type: 'heading', content: 'The Result' },
      { type: 'text', content: "A banner that works everywhere. Scalable from 6-foot backdrops to social media graphics. It doesn't just say \"ACM Thapar exists\" — it says \"We're a community. Join us.\"" },
      { type: 'text', content: "Sometimes the best design isn't the most creative — it's the one that works exactly where it needs to work." },
    ]
  },
  {
    id: 'enactus-recruitment',
    title: 'Enactus Recruitment',
    year: '2025',
    category: 'Visual Identity',
    description: 'Impactful visuals designed for social enterprise talent acquisition.',
    thumbnail: enactus,
    banner: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'heading', content: 'The Brief' },
      { type: 'text', content: 'Enactus is a student-run social enterprise organisation. Every year they recruit new members, and every year they compete for attention against dozens of other campus clubs and societies all running their own campaigns simultaneously. Standing out is genuinely hard.' },
      { type: 'text', content: 'They needed a recruitment visual campaign that communicated something specific: this is not just a club, it is a community that does real work in the world. The design had to attract students who are mission-driven, not just resume-padding.' },
      { type: 'heading', content: 'The Process' },
      { type: 'text', content: 'I spent time understanding what Enactus members actually felt about being part of the organisation. The answers were not about achievements. They were about belonging, about solving problems that mattered, and about the particular feeling of working alongside people who are genuinely trying to do something good. That became the brief.' },
      { type: 'image', src: enactus },
      { type: 'heading', content: 'The Design' },
      { type: 'text', content: 'The campaign leads with people over product. Warm, editorial-style photography paired with a typographic system that feels intimate and direct. The copy is written in first person. The visuals avoid the polished corporate look that most organisations reach for and instead feel like something a friend made to tell you about something they love.' },
      { type: 'heading', content: 'The Result' },
      { type: 'text', content: 'Recruitment numbers were the metric. But the quality of applicants was the real signal. The campaign attracted students who already understood what Enactus stood for before they walked into the room. Good design pre-qualifies. It finds the right people before anyone has to say a word.' },
      { type: 'quote', content: 'Recruit for mission, not just for headcount.' },
    ]
  },
  {
    id: 'acm-chaos',
    title: 'Chaos Web Interface',
    year: '2025',
    category: 'Web Design',
    description: 'User registration flows and interface systems for complex event networks.',
    thumbnail: gui,
    banner: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'heading', content: 'The Brief' },
      { type: 'text', content: 'Chaos is ACM Thapar\'s annual technical fest. The event spans multiple days, dozens of sub-events, hundreds of participants, and a registration system that had historically been a source of confusion, duplicate entries, and frustrated emails to the organisers. My job was to fix that.' },
      { type: 'text', content: 'The design challenge was not just visual. It was structural. The registration flow needed to handle complex conditional logic: different forms for different events, team sizes that varied, eligibility criteria that changed by category. All of it had to feel effortless to the user.' },
      { type: 'heading', content: 'The Process' },
      { type: 'text', content: 'I mapped every registration path before opening a design tool. There were eleven distinct journeys depending on which events a participant wanted to join. I collapsed them into a single adaptive flow that showed only the relevant steps at each point. The user never saw the complexity. They just saw their path.' },
      { type: 'image', src: reg },
      { type: 'image', src: gui },
      { type: 'heading', content: 'The Design' },
      { type: 'text', content: 'The interface uses a clean, dark-mode-first system that matches the technical identity of ACM. Progress indicators at every stage. Inline validation so errors are caught before submission, not after. Confirmation screens that feel like a receipt, not an afterthought. Every decision was made with the understanding that this system would be used by stressed students on their phones, probably during class.' },
      { type: 'heading', content: 'The Result' },
      { type: 'text', content: 'Duplicate registrations dropped to near zero. Support queries to the team fell significantly. The system handled peak traffic on the first day without breaking. But the measure that mattered most: students stopped dreading the registration process. That is the real definition of a successful product.' },
      { type: 'quote', content: 'A registration form is the first impression of your event. Make it count.' },
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
      { type: 'heading', content: 'The Brief' },
      { type: 'text', content: 'The Entrepreneurship Development Cell runs a series of talks, workshops, and competitions across the academic year. Each one needs its own visual identity, but all of them need to feel like they belong to the same family. The brief was to create a poster system that was flexible enough to serve different events while staying immediately recognisable as EDC.' },
      { type: 'text', content: 'The audience was students with entrepreneurial ambitions and faculty who needed to take the events seriously. The visuals had to speak to both without compromising for either.' },
      { type: 'heading', content: 'The Process' },
      { type: 'text', content: 'I developed a modular poster system rather than designing each event from scratch. A consistent grid, a defined set of typographic styles, and a colour system that could shift in warmth and tone to suit the nature of each event while sharing the same structural DNA. A talk by a startup founder could feel intimate. A business plan competition could feel high-stakes. Same system, different mood.' },
      { type: 'image', src: biz },
      { type: 'heading', content: 'The Design' },
      { type: 'text', content: 'The visual language blends technical references with editorial confidence. Thin rule lines evoke diagrams and blueprints. The typography is sharp and contemporary. Abstract geometric accents are used sparingly to add visual interest without overwhelming the core information. The hierarchy is always clear: what is the event, when is it, and why should you care.' },
      { type: 'heading', content: 'The Result' },
      { type: 'text', content: 'The system scaled across eight events without feeling repetitive. Each poster felt like its own thing while clearly belonging to the same family. That is the mark of a well-designed system: it does not limit creativity, it channels it. Every designer who picks up the system can make something new without starting from zero.' },
      { type: 'quote', content: 'A good design system is a constraint that sets you free.' },
    ]
  },
  {
    id: 'aavana-brand',
    title: 'AAVANA Energy Bar',
    year: '2025',
    category: 'Branding / Packaging',
    description: 'A full brand built from scratch in 30 hours. Naming, identity, packaging, and a working e-commerce website for a modern Indian energy bar.',
    thumbnail: aavana,
    banner: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1584&h=396',
    story: [
      { type: 'heading', content: 'The Brief' },
      { type: 'text', content: 'This one started with boredom and a long weekend. I practically lived on energy bars through college: late nights, back-to-back classes, projects that never seemed to end. But every bar on the shelf looked the same. Either aggressively gym-bro with neon and skulls, or cold and clinical like something from a hospital dispensary. Neither felt like something I actually wanted to carry around.' },
      { type: 'text', content: 'So I made one. Not a real product, but a real brand. AAVANA started as a personal design experiment and turned into 30 hours of obsessive work that I could not stop even when I wanted to.' },
      { type: 'heading', content: 'The Process' },
      { type: 'text', content: 'I handled everything from naming to shipping flow. The name AAVANA came from wanting something that felt rooted but modern, Indian without being a cliche. The positioning landed on aspirational simplicity: for people who take their nutrition seriously but do not want to be lectured about it.' },
      { type: 'text', content: 'I built the complete visual identity first: logo, colour system, typography. Then packaging for three flavours. Then a full website with cart and checkout functionality, deployed and live. The constraint of doing everything alone in a single weekend meant every decision had to be fast and confident. There was no time to overthink.' },
      { type: 'image', src: aavana },
      { type: 'heading', content: 'The Design' },
      { type: 'text', content: 'The palette is built on black and white as the foundation, broken by bold flavour-specific accent colours: orange for citrus, deep brown for chocolate, red for berry. The typography leads with Montserrat ExtraBold for headlines and Futura PT Heavy for the wordmark. It reads like a brand that knows exactly what it is.' },
      { type: 'text', content: 'The packaging design was the hardest part. Packaging lives in a physical world with light, shadow, and competing products on either side. I designed it flat, then stress-tested every composition against mockups to make sure it held up. The AAVANA wordmark wraps the bar at an angle, creating movement even when the product is sitting still.' },
      { type: 'heading', content: 'The Challenge' },
      { type: 'text', content: 'Making healthy snacking feel aspirational without being preachy is genuinely difficult. The design philosophy was simple: black and white as the base, bold flavour colours as accents, clean typography, no noise. But landing on simple takes longer than landing on complicated. Every unnecessary element had to be argued out of existence.' },
      { type: 'heading', content: 'The Result' },
      { type: 'text', content: 'AAVANA is live at aavana.vercel.app. It is not a real product yet, but it is a real demonstration of what I can do when left alone with a brief and enough coffee. Full brand strategy, visual identity, packaging across three SKUs, and a working e-commerce website. Built in a weekend. Shipped because sitting on it felt worse than putting it out.' },
      { type: 'quote', content: 'Ship it. A finished thing you are nervous about is worth more than a perfect thing that does not exist.' },
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
      <a href="https://linktr.ee/lakshay.j" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Linktree</a>
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
        <p className="text-lg md:text-xl text-neutral-400 mb-8 md:mb-12 leading-relaxed font-light border-l-2 border-white/10 pl-6 font-serif">"I build high-performance visual systems and intuitive digital products that bridge the gap between complexity and human clarity."</p>
        <button onClick={() => setView('work')} className="group w-full md:w-auto px-10 md:px-12 py-5 bg-white text-black rounded-full flex items-center justify-center gap-3 font-black text-sm uppercase tracking-widest shadow-2xl transition-all hover:scale-105 active:scale-95 font-sans">
          Explore Archive <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

// ─── ONLY CHANGED COMPONENT ──────────────────────────────────────────────────
const WorkView = ({ setView, setSelectedProject }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => CATEGORY_MAP[p.id] === activeCategory);

  const countFor = (cat) =>
    cat === 'All' ? PROJECTS.length : PROJECTS.filter(p => CATEGORY_MAP[p.id] === cat).length;

  return (
    <div className="min-h-screen bg-black font-sans pt-[57px]">
      <div className="flex min-h-[calc(100vh-57px)]">

        {/* ── Vertical sidebar rail — desktop only, fixed full height ── */}
        <aside className="hidden md:flex flex-col fixed top-[57px] left-0 h-[calc(100vh-57px)] w-[192px] shrink-0 border-r border-white/5 pt-14 pb-8 px-5 z-[80] bg-black">

          <p className="text-[9px] font-black uppercase tracking-[0.35em] text-neutral-700 mb-5 px-3">Filter</p>

          <nav className="flex flex-col gap-0.5 flex-1">
            {ALL_CATEGORIES.map(cat => {
              const isActive = activeCategory === cat;
              const count = countFor(cat);
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    group w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left
                    transition-all duration-150
                    ${isActive
                      ? 'bg-white'
                      : 'hover:bg-white/5'
                    }
                  `}
                >
                  <span className={`text-[10px] font-black uppercase tracking-[0.15em] transition-colors
                    ${isActive ? 'text-black' : 'text-neutral-600 group-hover:text-neutral-200'}`}>
                    {cat}
                  </span>
                  <span className={`text-[9px] font-bold tabular-nums transition-colors
                    ${isActive ? 'text-black/40' : 'text-neutral-800 group-hover:text-neutral-500'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Bottom brand stamp */}
          <div className="pt-6 border-t border-white/5 px-3">
            <p className="text-[8px] font-black uppercase tracking-[0.25em] text-neutral-800 leading-loose">
              Lakshay Jain<br />Visual Systems<br />© 2026
            </p>
          </div>
        </aside>

        {/* ── Mobile: horizontal pill strip below navbar ── */}
        <div className="md:hidden fixed top-[57px] left-0 right-0 z-[90] bg-black/95 backdrop-blur-xl border-b border-white/5">
          <div className="flex overflow-x-auto scrollbar-none px-4 gap-2 py-3">
            {ALL_CATEGORIES.map(cat => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    flex-shrink-0 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em]
                    transition-all border
                    ${isActive
                      ? 'bg-white text-black border-white'
                      : 'text-neutral-600 border-white/10 hover:text-white hover:border-white/30'
                    }
                  `}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Main content ── */}
        <main className="flex-1 min-w-0 pt-10 md:pt-14 pb-24 px-6 md:px-12 mt-12 md:mt-0 md:ml-[192px]">

          {/* Archive heading */}
          <div className="max-w-2xl mb-14 md:mb-20">
            <p className="text-white/20 uppercase tracking-[0.4em] text-[10px] font-black mb-4 underline underline-offset-8 decoration-white/10">
              Selected Works
            </p>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic">The Archive.</h2>
            <p className="text-neutral-500 text-lg md:text-xl border-l-2 border-neutral-800 pl-8 leading-relaxed italic font-serif">
              {activeCategory === 'All'
                ? 'A curated collection of design-led solutions.'
                : `${activeCategory} — ${filteredProjects.length} project${filteredProjects.length !== 1 ? 's' : ''}`}
            </p>
          </div>

          {/* Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-20">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => { setSelectedProject(project); setView('project-detail'); }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-neutral-900 border border-white/5 shadow-2xl transition-all duration-700 group-hover:border-white/20">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                      <span className="text-[10px] font-black uppercase text-white tracking-[0.3em] flex items-center gap-3">
                        View Case Study <ChevronRight size={14} />
                      </span>
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
          ) : (
            <div className="flex flex-col items-center justify-center py-40 text-center">
              <p className="text-neutral-700 text-[10px] font-black uppercase tracking-[0.6em] mb-4">Nothing here yet</p>
              <p className="text-neutral-600 text-sm italic font-serif">Projects in this category are coming soon.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
// ─────────────────────────────────────────────────────────────────────────────

const ProjectDetailView = ({ project, setView }) => {
  if (!project) return null;
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen pb-24 bg-black font-sans">
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
            className="flex items-center gap-2 text-neutral-500 hover:text-white transition-all uppercase tracking-[0.3em] text-[10px] font-black group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Archive
          </button>
        </div>

        <div className="mb-16 md:mb-24">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-12 italic">{project.title}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <p className="text-lg md:text-2xl text-neutral-300 font-light leading-relaxed italic border-l-4 border-white/10 pl-6 md:pl-10 font-serif">
                {project.description}
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 border-t lg:border-t-0 border-white/5 pt-8 lg:pt-0 text-neutral-500">
              <div><p className="text-[10px] font-black uppercase mb-1">Service</p><p className="text-xs md:text-sm font-bold uppercase text-white">{project.category}</p></div>
              <div><p className="text-[10px] font-black uppercase mb-1">Year</p><p className="text-xs md:text-sm font-bold text-white">{project.year}</p></div>
            </div>
          </div>

          {project.pdfLink && (
            <a href={project.pdfLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full md:w-auto gap-3 px-10 md:px-12 py-5 bg-white text-black rounded-2xl hover:bg-neutral-200 transition-all font-black uppercase text-[10px] md:text-xs tracking-widest mt-12 shadow-xl">
              <FileText size={18} /> View Case Study PDF
            </a>
          )}
        </div>

        <div className="space-y-10 md:space-y-14">
          {project.story ? (
            project.story.map((item, idx) => (
              <div key={idx} className="max-w-4xl mx-auto">
                {item.type === 'heading' ? (
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mt-2">{item.content}</h3>
                ) : item.type === 'quote' ? (
                  <blockquote className="border-l-4 border-white/30 pl-8 py-2">
                    <p className="text-2xl md:text-3xl font-black italic text-white tracking-tight">{item.content}</p>
                  </blockquote>
                ) : item.type === 'text' ? (
                  <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light italic font-serif">
                    {item.content.split(/(".*?")/g).map((part, i) =>
                      /^".*"$/.test(part)
                        ? <strong key={i} className="font-black not-italic text-neutral-200">{part}</strong>
                        : part
                    )}
                  </p>
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

        <div className="mt-40 pt-24 border-t border-white/10 text-center">
          <p className="text-neutral-600 uppercase text-[9px] md:text-[10px] font-black tracking-[0.6em] mb-8 italic">The story continues</p>
          <button onClick={() => setView('work')} className="text-3xl md:text-5xl font-black hover:text-neutral-400 uppercase tracking-tighter transition-all italic underline decoration-white/10 underline-offset-[16px]">Next Project</button>
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
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-tight mb-8">Get In<br />Touch.</h1>
          <p className="text-neutral-500 text-lg font-light leading-relaxed italic mb-12">Currently accepting new project inquiries. Let's build something impactful.</p>
          <div className="space-y-6">
            <div><span className="text-xs font-black uppercase text-neutral-600 tracking-widest mb-1">Direct Email</span><a href="mailto:lakshayjain148@gmail.com" className="text-xl font-bold hover:text-neutral-400 transition-colors block">lakshayjain148@gmail.com</a></div>
            <div><span className="text-xs font-black uppercase text-neutral-600 tracking-widest mb-1">Social Hub</span><a href="https://linktr.ee" target="_blank" rel="noreferrer" className="text-xl font-bold hover:text-neutral-400 transition-colors flex items-center gap-2">Linktree <ExternalLink size={18} /></a></div>
          </div>
        </div>
        <div className="bg-neutral-900/50 p-10 rounded-3xl border border-white/5 shadow-2xl">
          {submitted ? (
            <div className="py-20 flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-white/10 text-white rounded-full flex items-center justify-center animate-pulse"><Send size={32} /></div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Message Sent</h3>
              <p className="text-neutral-500 text-sm italic">Thank you! I'll respond within 24 hours.</p>
            </div>
          ) : (
            <div className="space-y-8">
              <div><label className="text-xs font-black uppercase text-neutral-500 tracking-widest ml-1">Name</label><input type="text" required placeholder="Your name" className="w-full bg-black border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors text-sm font-medium px-1" value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })} /></div>
              <div><label className="text-xs font-black uppercase text-neutral-500 tracking-widest ml-1">Email</label><input type="email" required placeholder="hello@example.com" className="w-full bg-black border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors text-sm font-medium px-1" value={formState.email} onChange={e => setFormState({ ...formState, email: e.target.value })} /></div>
              <div><label className="text-xs font-black uppercase text-neutral-500 tracking-widest ml-1">Message</label><textarea rows="4" required placeholder="Describe your vision..." className="w-full bg-black border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors resize-none text-sm font-medium px-1" value={formState.message} onChange={e => setFormState({ ...formState, message: e.target.value })} /></div>
              <button onClick={handleSubmit} className="w-full bg-white text-black font-black uppercase tracking-widest py-5 rounded-2xl hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 text-xs shadow-xl active:scale-95">Send Message <Send size={16} /></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handlePopState = () => {
      if (view === 'project-detail') setView('work');
      else if (view === 'work' || view === 'contact') setView('home');
    };
    window.addEventListener('popstate', handlePopState);
    if (view !== 'home') window.history.pushState({ view }, '');
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
