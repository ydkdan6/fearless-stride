import React, { useState, useRef } from 'react';
import { Calendar, User, ArrowRight, Clock, ArrowLeft } from 'lucide-react';

const Blog = () => {
  const ref = useRef(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleReadMore = (articleId) => {
    setSelectedArticle(articleId);
  };

  const handleBackToBlog = () => {
    setSelectedArticle(null);
  };

  const blogPosts = [

    {
  id: 'featured-nurse-ai-actionplan-2024',
  title: 'AI & The Future of Nursing; From Resistance to Readiness: Your AI Action Plan',
  excerpt: 'AI can be a powerful tool—but only if it starts with the real pain points nurses face on the floor. This three-step action plan empowers frontline nurses to map a time-consuming task, explore tested AI solutions, and co-design a workflow that works.',
  content: `
    <h2>AI & The Future of Nursing; From Resistance to Readiness: Your AI Action Plan</h2>
    <p>Let’s close this series with something you can do right now. You don’t need an AI lab or a grant—just one shift, one routine task, and a mindset shift from resistance to readiness.</p>
    <p><strong>Step 1: Pinpoint the pain.</strong> Choose one part of your shift that eats up your time—maybe during handoff, med pass, or patient calls. Jot down the one task that repeatedly disrupts your flow (e.g., <em>“charting vitals,” “phone triage,” “med reconciliation”</em>). No timers or tools needed—just your attention in the moment.</p>
    <p><strong>Step 2: Browse for solutions.</strong> During a break, spend five minutes browsing a hospital newsletter, a clinical update, or a trusted digital health site. Look for one AI-driven tool already in use elsewhere—like a predictive triage bot, or a vitals trend graph that updates without clicks. Note the one feature that feels tailored to your challenge.</p>
    <p><strong>Step 3: Loop in your team.</strong> Bring it to your next huddle. Ask: <em>“What would make you trust a machine-generated alert or assistant?”</em> Capture the answers—“I need mobile access,” “No pop-ups, please,” “We need nurse-reviewed responses”—and draft a success checklist together:</p>
    <ul>
      <li>Alerts must land in our current workflow tool</li>
      <li>Bot scripts need nurse approval</li>
      <li>A 5-minute in-service before rollout</li>
    </ul>
    <p>This is how real adoption begins—not with a product launch, but with curiosity, context, and co-creation. AI won’t replace your clinical instincts. It’s here to enhance them. By aligning tech with frontline reality, we turn hype into help—without losing what makes nursing human.</p>
    <p><strong>🧭 What’s one small action you can take this week to explore AI in your work?</strong> Let’s build momentum, one shift at a time.</p>
  `,
  author: 'Fearless Strides',
  date: '2025-06-27',
  readTime: '7 min read',
  category: 'Technology',
  image: '/i1.jpg',
  featured: true
},

    {
  id: 'featured-nurse-design-table-2024',
  title: 'AI & The Future of Nursing; Nurses Belong at the AI Design Table',
  excerpt: 'Healthcare tech too often treats nurses as end-users instead of co-creators. But nurses bring deep insight into patient behavior, workflow realities, and cultural nuance—making them essential partners in designing safe, equitable, and effective AI tools.',
  content: `
    <h2>AI & The Future of Nursing; Nurses Belong at the AI Design Table</h2>
    <p>Too often, digital health tools are built <em>for</em> nurses, not <em>with</em> us. This disconnect can lead to AI systems that overlook the very nuances that define quality care.</p>
    <p>From my experience serving on curriculum redesign panels and mentorship boards, I know that co-creation leads to smarter solutions. The same principle must guide AI development. Nurses—especially those in diverse, high-acuity settings like oncology and palliative care—must be involved from the very beginning.</p>
    <p>We see things others might miss: how chemo lab values evolve post-cycle four, how palliative care discussions shift in non-English-speaking families, or how pain is expressed nonverbally. When those insights shape data dictionaries, model training, and interface design, we move from tech that works in theory to solutions that truly work in practice.</p>
    <p>Imagine an AI triage dashboard built with bedside nurses. It would:</p>
    <ul>
      <li>Surface culturally sensitive pain scales for nonverbal patients</li>
      <li>Highlight advance care plans and family preferences</li>
      <li>Use alert colors that stand out from existing monitor clutter</li>
      <li>Track performance by ethnicity, language, and income for equity auditing</li>
    </ul>
    <p>In fast-paced units, these design decisions are not just helpful—they’re lifesaving.</p>
    <p>Mentorship also plays a critical role. Pairing seasoned nurses with AI developers fosters clinical-tech fluency. These “bilingual” champions translate frontline needs into algorithm adjustments—and vice versa. That’s how we grow a future-proof pipeline of nurse-informaticists and build tools that support, not replace, our practice.</p>
    <p>Ask yourself:</p>
    <ul>
      <li>Are nurses included in testing before tools go live?</li>
      <li>Is our feedback actively shaping product updates?</li>
      <li>Are we part of defining what data gets labeled as “normal”?</li>
    </ul>
    <p><strong>🧭 Have you ever been asked to co-design or review a digital health tool? Would you like to?</strong> The future of AI in nursing depends on us showing up—and being heard—at the design table.</p>
  `,
  author: 'Fearless Strides',
  date: '2025-06-27',
  readTime: '9 min read',
  category: 'Technology',
  image: '/i2.jpg',
  featured: true
},

{
  id: 'featured-nurse-ai-burnout-2024',
  title: 'AI & The Future of Nursing; AI Burnout? Yes, It’s Real.',
  excerpt: 'Instead of easing workloads, poorly implemented AI can flood nurses with alerts, overwhelm clinical judgment, and contribute to a silent epidemic—digital burnout. It’s time we co-design smarter, calmer systems that respect the rhythm of real patient care.',
  content: `
    <h2>AI & The Future of Nursing; AI Burnout? Yes, It’s Real.</h2>
    <p>Technology should simplify care—not complicate it. Yet across many clinical settings, nurses report a growing wave of digital overload: dozens of alerts per hour, fragmented attention, and rising “alarm fatigue.”</p>
    <p>Alarm fatigue is no minor inconvenience. It’s a documented safety hazard that arises when clinicians become desensitized to constant alerts, risking missed emergencies. Ironically, AI—designed to improve decision-making—can make this worse if alerts are poorly tuned or delivered without context.</p>
    <p>In many ICUs, nurses face more than 200 alerts per shift, from ventilators, pumps, and monitors. Add AI-driven prompts—often without clinical nuance—and you have a recipe for paralysis. I’ve seen nurses freeze between competing alerts: a ventilator alarm vs. an AI lab order. Which one do you trust first?</p>
    <p>We need balance, not bandwidth drain. Here’s how:</p>
    <ul>
      <li><strong>Co-design thresholds with nurses:</strong> Alert logic must reflect real patient acuity and staffing realities. Update them quarterly, not yearly.</li>
      <li><strong>Tier alerts by urgency:</strong> Use sound only for life-critical events, visual cues for moderate ones, and silent logging for info-only updates. ICU pilots using this model cut noise by 60%.</li>
      <li><strong>Consolidate alert dashboards:</strong> Stop forcing nurses to juggle 5+ screens. Aggregate monitors, pumps, and AI prompts into one view.</li>
      <li><strong>Enable “snooze with accountability”:</strong> Let nurses pause alerts that are resolved—with audit trails—to prevent redundancy.</li>
      <li><strong>Train AI on real response patterns:</strong> Machine learning can reduce false alerts when it adapts to patient baselines and nurse behaviors.</li>
      <li><strong>Support—not override—clinical judgment:</strong> Every alert should be paired with context: vitals trends, last interventions, and suggested next steps—not just “Act now.”</li>
    </ul>
    <p>Burnout doesn’t just come from long hours—it comes from broken workflows. AI burnout is real when systems add noise, not clarity. The cure? Nurse-led co-creation, data-tuned alerts, and smart escalation logic that respects the rhythm of care.</p>
    <p><strong>🧭 Have you faced alert overload? What helped you regain control?</strong> Let’s share what works—because the future of AI must include the lived realities of those at the bedside.</p>
  `,
  author: 'Fearless Strides',
  date: '2025-06-27',
  readTime: '8 min read',
  category: 'Technology',
  image: 'i6.jpg',
  featured: true
},

    {
  id: 'featured-nurse-data-privacy-2024',
  title: 'AI & The Future of Nursing; Data Privacy in the AI Era: Are We Ready?',
  excerpt: 'AI systems thrive on sensitive patient data—from genomic profiles to home-monitoring feeds. But with this power comes great responsibility. Nurses are not just caregivers; they are data stewards, legally and ethically accountable for protecting the privacy of every patient in the digital era.',
  content: `
    <h2>AI & The Future of Nursing; Data Privacy in the AI Era: Are We Ready?</h2>
    <p>Every gain in AI’s clinical accuracy depends on access to more—and often more personal—patient data. Think genomic sequencing, smart home health monitors, and social determinants of health. These data points fuel better predictions, but they also heighten the risk of breaches, misuse, and patient mistrust.</p>
    <p>Under privacy regulations like Ontario’s PHIPA and Alberta’s HIA, nurses share accountability with IT teams for safeguarding patient information. This is not a future concern—it’s a frontline issue. We must advocate for strong consent frameworks, end-to-end encryption, and anonymization by design, because <strong>trust is the foundation of care</strong>.</p>
    <p>When breaches occur, the consequences are severe. A re‑identified record doesn’t just breach confidentiality—it can lead to discrimination, financial fraud, and loss of employment or insurance coverage. For patients from Indigenous, immigrant, or gender-diverse communities, these risks are magnified by existing inequities in care access and trust.</p>
    <p>And it’s not just patients at risk. Nurses can face professional investigations, financial penalties, and damaged reputations. In one infamous case, the 2019 LifeLabs breach compromised the data of over 15 million Canadians—showing just how quickly public confidence in digital health can collapse.</p>
    <p>Protecting health data is not just an IT policy—it’s a nursing imperative. It demands:</p>
    <ul>
      <li>Clear, culturally appropriate informed consent processes</li>
      <li>Systems that default to encryption and role-based access</li>
      <li>Mandatory training in digital ethics and cybersecurity</li>
    </ul>
    <p>When patients fear exposure, they withhold the very details—mental health symptoms, undocumented meds, or personal trauma—that nurses need to deliver safe, effective care. Breaches don’t just compromise data; they unravel relationships and disrupt clinical workflows.</p>
    <p><strong>Safeguarding privacy is now a core nursing competency.</strong> It’s time to treat data security as essential to patient safety—not as a technical afterthought.</p>
    <p>🧭 What kind of data privacy training should be standard for every nurse today?</p>
  `,
  author: 'Fearless Strides',
  date: '2025-06-27',
  readTime: '9 min read',
  category: 'Technology',
  image: 'i4.jpg',
  featured: true
    },

    {
  id: 'featured-nurse-ai-readiness-2024',
  title: 'AI & The Future of Nursing; From Resistance to Readiness',
  excerpt: 'Nurses don’t need to become data scientists—but they do need a voice in how AI tools are designed, introduced, and used in daily workflows. The first step? Translate AI hype into one practical action that solves a real pain point in your shift.',
  content: `
    <h2>AI & The Future of Nursing; From Resistance to Readiness</h2>
    <p>Let’s close this series with something you can act on right now. You don’t need a degree in machine learning to bring AI into your practice—you just need to start with one small shift in your routine.</p>
    <p>First, identify one task that slows you down every shift. Maybe it’s <strong>charting vitals</strong>, <strong>handling phone triage</strong>, or <strong>doing med reconciliations</strong>. Notice when it interrupts your flow—especially during crunch times like shift handoff or med pass.</p>
    <p>Next, explore one AI tool that’s already in use elsewhere. Maybe it’s a chatbot that handles FAQs, or a trend graph that updates vitals without extra clicks. On your next break, take five minutes to skim a hospital newsletter, vendor handout, or trusted clinical blog. Jot down one feature that directly speaks to your need.</p>
    <p>Finally, bring your team into the conversation. In your next huddle or meeting, ask: <em>“What would make you trust a machine-generated alert or AI assistant?”</em> Gather input—concerns like <em>“I don’t want more pop-ups”</em> or needs like <em>“I want mobile access”</em>—and turn that into a shared success checklist. For example: <strong>“Alerts must appear in our existing workflow tool”</strong> or <strong>“Bot responses must be nurse-reviewed.”</strong></p>
    <p>AI isn’t here to replace clinical judgment—it’s here to empower it. When nurses lead the process, from identifying real-world workflow friction to shaping success criteria, AI becomes a tool for better care, not another layer of complexity.</p>
    <p>So, what’s <strong>one micro-action</strong> you can take this week to test how AI could support your work? Let’s move from curiosity to confidence—together.</p>
  `,
  author: 'Fearless Strides',
  date: '2025-06-27',
  readTime: '7 min read',
  category: 'Technology',
  image: 'i5.jpg',
  featured: true
    },
    {
      id: 'featured-nurse-credentials-2024',
      title: 'AI & The Future of Nursing; Let\'s Talk About Algorithmic Bias',
      excerpt: 'Artificial intelligence detects patterns in historical data to improve its understanding. However, if that data fails to adequately reflect certain cultures, skin colors, genders, or social contexts, the algorithms might unintentionally perpetuate existing health disparities instead of mitigating them.',
      content: `
        <h2>AI & The Future of Nursing; Let's Talk About Algorithmic Bias</h2>
        <p>Artificial intelligence detects patterns in historical data to improve its understanding. However, if that data fails to adequately reflect certain cultures, skin colors, genders, or social contexts, the algorithms might unintentionally perpetuate existing health disparities instead of mitigating them. This is precisely why frontline nurses, who witness and document the day‑to‑day realities of diverse patients, must be involved in curating, labelling, and auditing those datasets from the start.</p>
        <p>As an immigrant nurse, standing shoulder‑to‑shoulder with internationally educated colleagues who are still learning the unspoken rules of Canadian healthcare, I have felt the sting of systemic bias in ways statistics alone can't capture. I vividly recall a young woman of African heritage whose subtle deterioration went unnoticed by an early‑warning algorithm because her baseline vitals fell outside the "average" dataset.</p>
        <p>We must ask (and answer): Who builds and labels the data, and are nurses at the table when those decisions are made? Without nursing insight during data curation, critical cultural, gender-based, and age-related nuances can get lost.</p>
        <p>Nurses bring lived experience to these gaps, and our voices must be heard in tech design rooms.</p>
      `,
      author: 'Fearless Strides',
      date: '2024-01-15',
      readTime: '12 min read',
      category: 'Career Development',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: 'professional-networking-immigrants-2024',
      title: 'AI & The Future of Nursing; Virtual Nursing Assistants: Hype or Help?',
      excerpt: 'As someone mentoring Internationally Educated Nurses (IENs), I often explore tools that reduce workload and let nurses focus on complex care.',
      content: `
        <h2>Virtual Nursing Assistants: The Reality Check</h2>
        <p>As someone mentoring Internationally Educated Nurses (IENs), I often explore tools that reduce workload and let nurses focus on complex care. However, it is important to recognize that many digital health apps marketed as featuring "virtual nursing assistants" often do not involve real nurses in their design or implementation.</p>
        <p>When done right, virtual nursing assistants can be powerful allies in nursing practice. These AI-powered tools are stepping in to remind patients to take medications, respond to frequently asked questions, and triage low-risk calls.</p>
        <p>To truly support frontline care, nurses must be actively involved in the development, testing, and deployment of these tools. This involves co-designing workflows, validating clinical scripts, and ensuring that AI systems reflect real-world nursing knowledge.</p>
      `,
      author: 'Fearless Strides',
      date: '2025-01-10',
      readTime: '8 min read',
      category: 'Networking',
      image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?w=800&h=600&fit=crop'
    },
    {
      id: 'imposter-syndrome-immigrant-professionals-2024',
      title: 'AI & The Future of Nursing; AI + Patient Monitoring = Safer, Smarter Hospitals',
      excerpt: 'From busy days working as a Charge Nurse to today\'s work at an in-patient cancer unit, I have witnessed just how overwhelming it can be to track every patient signal.',
      content: `
        <h2>Smart Monitoring Revolution</h2>
        <p>Smart monitoring systems now track facial expressions, voice patterns, and movement. They integrate with wearable sensors for real-time feedback and reduce response times to critical deterioration.</p>
        <p>These aren't gimmicks; they are already supporting critical care nurses in several leading hospitals. But tech without trust won't work. While many healthcare AI tools have historically been designed with physicians in mind, nurses are often left adapting these tools to their workflows.</p>
        <p>Nurses must be involved in the design, training, and testing of these tools to ensure they support clinical judgment, documentation, communication, and care coordination from a nursing perspective.</p>
      `,
      author: 'Fearless Strides',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'Personal Growth',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop'
    },
    {
      id: 'healthcare-cultural-adaptation-2024',
      title: 'AI & The Future of Nursing; Transforming Patient Care with AI',
      excerpt: 'Predictive Analytics: A Nurse\'s Crystal Ball. Imagine being alerted to a patient\'s condition before their health deteriorates.',
      content: `
        <h2>Predictive Analytics: A Nurse's Crystal Ball</h2>
        <p>Imagine being alerted to a patient's condition before their health deteriorates. That's the power of AI-driven predictive analytics. As a Registered Nurse who's worked in both acute medicine and oncology, I have seen how early detection can change outcomes.</p>
        <p>AI doesn't replace judgment. It enhances it. It analyzes vitals, labs, nursing assessments, and clinical notes to flag high-risk patients using predictive models. These AI-driven systems can detect subtle trends that precede clinical deterioration.</p>
        <p>It helps prioritize rounds and interventions by providing nurses with real-time risk scores or deterioration indices at the start of their shift, reducing burnout by catching what eyes might miss during high workload.</p>
      `,
      author: 'Fearless Strides',
      date: '2024-01-05',
      readTime: '11 min read',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop'
    },
    {
      id: 'immigrant-financial-planning-guide-2024',
      title: '3 Ways AI Is Already Supporting Nurses That You Might Not Have Realized',
      excerpt: 'You do not need to work in a high-tech hospital to benefit from AI. Chances are, you already do.',
      content: `
        <h2>AI Support in Everyday Nursing</h2>
        <p>Here are three real examples from frontline care: Predictive Alerts flagging patient deterioration using AI-trained vitals and labs, Virtual Nursing Assistants guiding patients and answering questions, and Intelligent Monitoring detecting subtle patient cues like facial tension or voice changes.</p>
        <p>Bottom line? These tools are already here and designed to empower, not replace, clinical decision-making. One pitfall could be that AI in the hospital can generate false alarms and dangerous advice. This is why, as nurses, we have to see these tools as support tools, not replace critical thinking and evaluation.</p>
      `,
      author: 'Fearless Strides',
      date: '2024-01-02',
      readTime: '13 min read',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop'
    },
    {
      id: 'work-life-balance-immigrant-women-2024',
      title: 'What AI in Nursing Really Means (And Why It is Not Replacing You)',
      excerpt: 'AI isn\'t here to take your stethoscope. It gives you more time to use it where it counts.',
      content: `
        <h2>Redefining AI's Role in Nursing</h2>
        <p>As a registered nurse, clinical instructor, and mentor, I have seen firsthand how overwhelming the shift to digital healthcare can be. But here's the truth: AI is not designed to replace nurses. Instead, it is intended to support us.</p>
        <p>Whether it is automating documentation, catching early signs of patient deterioration, or streamlining shift handovers, AI is a powerful partner in enhancing what we already do best: patient-centered care.</p>
        <p>AI doesn't mean less compassion. It means more time for meaningful care. It means fewer hours on admin and more on advocacy.</p>
      `,
      author: 'Fearless Strides',
      date: '2023-12-28',
      readTime: '9 min read',
      category: 'Work-Life Balance',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop'
    }
  ];

  // Article Detail Component
  const ArticleDetail = ({ article }) => (
    <div className="min-h-screen bg-white animate-in fade-in duration-500">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={handleBackToBlog}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-8 group transition-all duration-300 hover:-translate-x-1"
        >
          <ArrowLeft className="w-5 h-5 group-hover:animate-pulse" />
          <span className="font-semibold">Back to Articles</span>
        </button>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center space-x-6 text-gray-500 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span className="font-semibold">{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ 
                __html: article.content.replace(/<h2>/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">')
                                         .replace(/<h3>/g, '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">')
                                         .replace(/<p>/g, '<p class="mb-4 text-gray-700 leading-relaxed">')
              }} 
            />
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Take the Next Step?</h3>
            <p className="text-gray-600 mb-6">
              Connect with our community of successful immigrant professionals and get personalized guidance for your career journey.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Find the selected article
  const currentArticle = selectedArticle ? blogPosts.find(post => post.id === selectedArticle) : null;

  // If an article is selected, show the detail view
  if (currentArticle) {
    return <ArticleDetail article={currentArticle} />;
  }

  return (
    <section id="blog" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-800">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Insights & Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, success stories, and practical guidance to support your professional journey.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-800 delay-200">
          <div className="bg-primary rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 text-white">
                <div className="text-yellow-200 text-sm font-semibold mb-2">{blogPosts[0].category}</div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">{blogPosts[0].title}</h3>
                <p className="text-blue-100 mb-6 text-lg leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-blue-200 text-sm">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <button
                    className="flex items-center space-x-2 text-secondary hover:text-secondary transition-all duration-300 hover:translate-x-1"
                    onClick={() => handleReadMore(blogPosts[0].id)}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={post.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-600"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <button
                    className="flex items-center space-x-1 text-secondary hover:text-secondary font-semibold transition-all duration-300 hover:translate-x-1"
                    onClick={() => handleReadMore(post.id)}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-800 delay-1000">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;