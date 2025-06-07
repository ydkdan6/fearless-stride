import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, User, ArrowRight, Clock, ArrowLeft } from 'lucide-react';

const Blog: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const handleReadMore = (articleId: string) => {
    setSelectedArticle(articleId);
  };

  const handleBackToBlog = () => {
    setSelectedArticle(null);
  };

  const blogPosts = [
    {
      id: 'featured-nurse-credentials-2024',
      title: 'AI & The Future of Nursing;  Let’s Talk About Algorithmic BiasBreaking Through Barriers: Your Complete Guide to Nursing Credential Recognition',
      excerpt: 'From documentation to licensure exams, discover the step-by-step process that helped over 2,000 international nurses successfully transition to practice in North America.',
      content: `
        <h2>AI & The Future of Nursing;  Let’s Talk About Algorithmic Bias</h2>
        <p>Artificial intelligence detects patterns in historical data to improve its understanding. However, if that data fails to adequately reflect certain cultures, skin colors, genders, or social contexts, the algorithms might unintentionally perpetuate existing health disparities instead of mitigating them. This is precisely why frontline nurses, who witness and document the day‑to‑day realities of diverse patients, must be involved in curating, labelling, and auditing those datasets from the start.</br>
As an immigrant nurse, standing shoulder‑to‑shoulder with internationally educated colleagues who are still learning the unspoken rules of Canadian healthcare, I have felt the sting of systemic bias in ways statistics alone can’t capture. I vividly recall a young woman of African heritage whose subtle deterioration went unnoticed by an early‑warning algorithm because her baseline vitals fell outside the “average” dataset. Moments like that remind me that when our lived experiences and cultural contexts are missing from the data, the technology can quite literally look past us. Without diverse nurse voices shaping these tools, AI may continue to misinterpret darker skin tones, disregard accents, or downgrade pain scores, thereby recreating the very inequities we joined this profession to dismantle.</br>
We must ask (and answer):</br>
Who builds and labels the data, and are nurses at the table when those decisions are made? Without nursing insight during data curation, critical cultural, gender-based, and age-related nuances can get lost.</br>
Who validates the outputs, and does frontline nursing input shape that validation? Model performance must be stress-tested against real-world scenarios that nurses face every shift.
Who’s accountable when it’s wrong, and how do we fix it fast? Clear governance should empower nurses to flag bias, trigger model audits, and drive iterative improvements.</br>
Nurses bring lived experience to these gaps, and our voices must be heard in tech design rooms.</br>
🧭 What can we do to make AI tools fairer in healthcare? Nurses, developers, educators, let’s collaborate.
#HealthEquity #BiasInAI #NursingEthics #InclusiveTech #fearlessstrides</p>
      `,
      author: 'Fearless Strides',
      date: '2024-01-15',
      readTime: '12 min read',
      category: 'Career Development',
      image: 'https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/504381309_717020494032385_5960657070196215133_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE-ddicGjg62HuBwcQ2C5o5B1G9PrBE3mIHUb0-sETeYnJu9Oal8CV4cIFnSEmlzg_rVNurxsMJu5KtzQYDF661&_nc_ohc=lJV5MYlfNo0Q7kNvwEln937&_nc_oc=Adlc5ZB6Ko131GgKaLS0GN34etGeJTGGVWBvPo5RI5Ab_vPkLoAAVZkWEz5ufmImrJA&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=oiF9DYxA7FRahV7k3MDkkA&oh=00_AfPV0LLiEYyPOc5kQNeqW8tVnrWTg0Rb62V-WpszOrb_5A&oe=684A5367',
      featured: true
    },
    {
      id: 'professional-networking-immigrants-2024',
      title: 'AI & The Future of Nursing; Virtual Nursing Assistants: Hype or Help?',
      excerpt: 'As someone mentoring Internationally Educated Nurses (IENs), I often explore tools that reduce workload and let nurses focus on complex care.',
      content: `
        <h2>The Power of Strategic Networking</h2>
        <p>As someone mentoring Internationally Educated Nurses (IENs), I often explore tools that reduce workload and let nurses focus on complex care. However, it is important to recognize that many digital health apps marketed as featuring "virtual nursing assistants" often do not involve real nurses in their design or implementation. These tools may use the term 'nurse' loosely, even though they are powered by generic chatbots or voice assistants with limited clinical depth.</br>
When done right, virtual nursing assistants can be powerful allies in nursing practice. These AI-powered tools are stepping in to:
Remind patients to take medications at home or in post-discharge settings.
Respond to frequently asked questions, reducing call volumes for nurses.
Triage low-risk calls, ensuring that high-priority concerns reach nurses faster
Provide remote symptom tracking for patients with chronic diseases, enabling community health nurses to monitor them from afar.
Deliver patient education on topics like wound care, nutrition, or medication side effects using accessible, easy-to-understand language.
To truly support frontline care, nurses must be actively involved in the development, testing, and deployment of these tools. This involves co-designing workflows, validating clinical scripts, and ensuring that AI systems reflect real-world nursing knowledge rather than just medical algorithms designed for physicians.</br>
Nurses are already at the forefront of technological innovation. There are several inspiring examples of nurse-led digital innovations that demonstrate what's possible when nurses lead the way. This link highlights some of these innovations from around the world. When nurses are included in the development process, these tools reflect real patient needs and clinical realities. Inclusion matters not just for accuracy but for trust, adoption, and, ultimately, patient outcomes.</br>
Ultimately, nurse-designed AI tools can reduce burnout, improve care continuity, and make patient interactions more efficient and personalized.
This isn't sci-fi; it's a growing part of remote care and chronic disease management. And guess what? When my students or mentees ask me how to manage the clinical workload, my advice is to utilize digital support tools where available. Burnout isn't a badge of honor.</br>
🧭 What routine task do you wish an AI assistant could take off your hands?</br>
#DigitalSupport #VirtualNurses #NursingInnovation #CareEfficiency #fearlessstrides</p>
      `,
      author: 'Fearless Strides',
      date: '2025-01-10',
      readTime: '8 min read',
      category: 'Networking',
      image: 'https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/503269761_714948710906230_899814101554215318_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFg6bHcXV8T8fEWe90p0WbrG5NCmYLgMIMbk0KZguAwg2oI9sfHLX6mTmZJLN-6WIzg7vBYVTP6c0xo7xvimMDc&_nc_ohc=H469LNWesT4Q7kNvwFyH_-l&_nc_oc=Adm4g_xNvVcoEHNu_jvGYxW36oWx2FSezOP-DNQHPrC8oRBrzGV_XdVb6zjrbNk58gA&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&_nc_gid=SoYZ8yTEA2nEWCQ40qkcaw&oh=00_AfP545aY7C7OFg5bxDp10XiOnGKWcoqK6pNIA2LehRJiYg&oe=684A3999'
    },
    {
      id: 'imposter-syndrome-immigrant-professionals-2024',
      title: 'AI & The Future of Nursing; AI + Patient Monitoring = Safer, Smarter Hospitals ',
      excerpt: 'From busy days working as a Charge Nurse to todays work at an in-patient cancer unit, I have witnessed just how overwhelming it can be to track every patient signal. AI-powered monitoring can help.',
      content: `
        <h2>Understanding Imposter Syndrome in Immigration Context</h2>
        <p>Smart monitoring systems now:</br>
Track facial expressions, voice patterns, and movement</br>
Integrate with wearable sensors for real-time feedback</br>
Reduce response times to critical deterioration</br>
These aren't gimmicks; they are already supporting critical care nurses in several leading hospitals. For example, Mount Sinai Hospital has deployed an AI model to Improve Delirium Detection.</br></br>
But tech without trust won't work. While many healthcare AI tools have historically been designed with physicians in mind, nurses are often left adapting these tools to their workflows rather than having tools tailored to their unique needs. This gap leads to frustration, inefficiency, and missed opportunities to improve patient outcomes. Nurses must be involved in the design, training, and testing of these tools to ensure they support clinical judgment, documentation, communication, and care coordination from a nursing perspective.</br>
A study published in the Journal of Medical Internet Research Nursing (2025) emphasized the importance of involving nurses in the development and deployment of AI technologies to ensure that these tools enhance, rather than disrupt, nursing practice. Additionally, it aimed to create AI solutions aligned with nursing responsibilities.</br>
🧭 If I could redesign one monitoring feature on my unit, I would focus on creating an integrated, customizable, and predictive patient deterioration early warning system. Currently, most alarms are triggered after a critical threshold is breached, meaning interventions are often reactive. I would implement an AI-enhanced system that adjusts thresholds based on individualized patient baselines and trends over time, transforming monitoring from a reactive data display to a proactive, intelligent, and genuinely supportive tool for nurses, ultimately enhancing patient care on the units.</br></br>
What feature would you redesign on your unit to improve care and workflow?</br>
#SmartCare #AIinHospitals #NurseInformatics #FutureofMonitoring #fearlessstrides</p>
        `,
      author: 'Fearless Strides',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'Personal Growth',
      image: 'https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/502598185_712992894435145_5497473572836493639_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGVwwRnagKKdylihU8ZVBCfH2NxPAnQpkgfY3E8CdCmSCs3t5jZp1t-gJk_uo8JOS9gOk9iDp4qX8wqAX6nTjP3&_nc_ohc=66wubx4WfzQQ7kNvwHTEJB9&_nc_oc=AdkSkOxql-pj_TSR7tQTJ4R0mN1N3jEo6tA9ytC56QMFcGpf6U3fX2JCdYy8k2Cs0Nw&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&_nc_gid=s7oYVSNEGYC41NSV-Pdgcg&oh=00_AfNtk5T0MFzkRlcKDnIOtz6caBfHFb2_lV2TWDtxDZRFfw&oe=684A56F1'
    },
    {
      id: 'healthcare-cultural-adaptation-2024',
      title: 'AI & The Future of Nursing; Transforming Patient Care with AI',
      excerpt: "Predictive Analytics: A Nurse's Crystal Ball Imagine being alerted to a patients condition before their health deteriorates.",
      content: `
        <h2>Understanding HealthcareAI & The Future of Nursing; Transforming Patient Care with AI</h2>
<a style= "color: blue;" href="https://www.linkedin.com/.../predictive-analytics-nurses...">https://www.linkedin.com/.../predictive-analytics-nurses</a>
        <p>Predictive Analytics: A Nurse's Crystal Ball</br>
Imagine being alerted to a patient's condition before their health deteriorates.</br>
That's the power of AI-driven predictive analytics. As a Registered Nurse who's worked in both acute medicine and oncology, I have seen how early detection can change outcomes. A patient on my unit had subtle signs of sepsis; an alert from the EMR helped the team prioritize care and begin treatment before things worsened.
AI doesn't replace judgment. It enhances it.</br>
How it helps nurses:</br>
Analyzes vitals, labs, nursing assessments, and clinical notes to flag high-risk patients using predictive models. These AI-driven systems can detect subtle trends that precede clinical deterioration, such as a gradual rise in respiratory rate or slight changes in oxygen saturation, which might otherwise go unnoticed. For example, The Ottawa Hospital has used machine learning models to predict post-surgical complications, alerting nurses to changes that require early intervention. Meanwhile, Trillium Health Partners in Ontario utilizes AI analytics to help clinicians identify patients at a higher risk of hospital readmission, enabling more focused discharge planning and follow-up care.</br></br>
It helps prioritize rounds and interventions by providing nurses with real-time risk scores or deterioration indices at the start of their shift. For example, an innovative partnership between The Ottawa Hospital (TOH) and the Canadian technology company Lumenix is utilizing artificial intelligence (AI) to address some of the most enduring problems in healthcare, such as hand hygiene compliance and fall detection and prevention. This partnership is revolutionizing infection control and patient safety.</br></br>
Reduces burnout by catching what eyes might miss during high workload. For instance, during night shifts or high-acuity periods, nurses are expected to monitor multiple complex patients simultaneously. AI-powered early warning systems, such as those piloted at Toronto's University Health Network, analyze streaming data in the background and generate actionable alerts. This helps prevent information overload and ensures timely interventions, giving nurses peace of mind and reducing decision fatigue.</br>
🧭 Are predictive alerts part of your workflow yet? If yes, how's it going? If not, would you trust them?</br>
#PredictiveAnalytics #NursingLeadership #AIForGood #PatientSafety #FearlessStrides</p>
        `,
      author: 'Fearless Strides',
      date: '2024-01-05',
      readTime: '11 min read',
      category: 'Healthcare',
      image: 'https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/501525145_711265454607889_592725669606757193_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFtAv3EPjdoTG0rwBcxZ6MYBLebkPWoJi8Et5uQ9agmLwgV5jiuadxfNwOERtYwD2DhQWmXoXSMS4CWjs_Jotnh&_nc_ohc=hQfd38XPuV0Q7kNvwHk4q5v&_nc_oc=AdkR0HT09iYdu-EWrVABGNjVcFFm3OLgMZs0Wzj-4crGMkTGNv3EOUGbTsJyTqwfQkM&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=4LAE-NjaGZQGKOvDG3vv9g&oh=00_AfNxqKMbzyPsmeXepKQtTuJYTpoRaejCA_tpDB_uCtwCkQ&oe=684A5007'
    },
    {
      id: 'immigrant-financial-planning-guide-2024',
      title: '3 Ways AI Is Already Supporting Nurses That You Might Not Have Realized',
      excerpt: 'You do not need to work in a high-tech hospital to benefit from AI. Chances are, you already do.',
      content: `
        <h2>Financial Foundation Building</h2>
        <a style= "color: blue;" href="https://www.linkedin.com/.../3-ways-ai-already-supporting...">https://www.linkedin.com/.../3-ways-ai-already-supporting...</a>
<p>Here are three real examples from frontline care:</br>
Predictive Alerts: Flagging patient deterioration using AI-trained vitals and labs. For example, Trillium Health Partners in Ontario has integrated predictive analytics into their clinical workflows to help nurses and care teams identify patients at risk for readmission. Nova Scotia Health has entered a new partnership with Google Cloud to implement three digital solutions using artificial technology (AI) to transform the patient and clinician experience. These tools transform early intervention across Canadian hospitals by helping nurses respond faster and more effectively to subtle clinical changes.</br></br>
Virtual Nursing Assistants: Guiding patients, answering questions, and freeing up your time. In real-world settings, virtual assistants like "Molly," an AI virtual assistant developed by Sensely, have been used to guide patients through symptom checks and triage pathways. Similarly, some clinics in Ontario have piloted chatbots that use artificial intelligence to transcribe conversations with consenting patients into electronic medical notes automatically. These tools support patients remotely and help nurses focus on more complex, high-acuity care needs.</br></br>
Intelligent Monitoring: Detecting subtle patient cues like facial tension or voice changes. For example, Humber River Hospital in Toronto uses an AI-enhanced monitoring system in their command centre that tracks patient movement and expressions through video analytics to identify potential distress. Additionally, the Bruyère Research Institute in Ottawa is working to develop AI-powered sensors in long-term care facilities to detect vocal stress patterns and restlessness in dementia patients, helping nurses intervene before escalation.</br></br>
Bottom line? These tools are already here and designed to empower, not replace, clinical decision-making.</br></br>
🧭 What's one AI tool you'd love to have in your nursing workflow? Let's discuss possibilities and pitfalls.</br>
One pitfall could be that AI in the hospital can generate false alarms and dangerous advice. This is why, as nurses, we have to see these tools as support tools, not replace critical thinking and evaluation.</br>
#AIinNursing #PatientCareTech #SmartHospitals #NurseVoices #fearlessstrides</p>        
        `,
      author: 'Fearless Strides',
      date: '2024-01-02',
      readTime: '13 min read',
      category: 'Finance',
      image: 'https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/500656693_710013901399711_6599657126573032231_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEtFMgNJSuugn3xkT7qxpFZNsHN3dEYERI2wc3d0RgRErPu92iLOvoCTICB--dhq_hN5xugvkUjqjrT32IRODjK&_nc_ohc=VlCpIpRmMRUQ7kNvwF5Rkyh&_nc_oc=AdmDwqhPPKaiqXVUp6TXWxFeNuMYQf0xdpOKmrgpain3EjS81DDnHr-SjhzprLUA9-U&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=rMPQo_92mMs9sB8_unK8SA&oh=00_AfPzZI3MSJkA8eUDxk6lW8rNh0pS1TUcMXYBTpDAztfBgg&oe=684A39B5'
    },
    {
      id: 'work-life-balance-immigrant-women-2024',
      title: 'What AI in Nursing Really Means (And Why It is Not Replacing You)',
      excerpt: 'AI isn’t here to take your stethoscope. It gives you more time to use it where it counts.',
      content: `
        <h2>Redefining Success on Your Terms</h2>
<p>As a registered nurse, clinical instructor, and mentor, I have seen firsthand how overwhelming the shift to digital healthcare can be. But here’s the truth: AI is not designed to replace nurses. Instead, it is intended to support us.</br></br>
Whether it is automating documentation, catching early signs of patient deterioration, or streamlining shift handovers, AI is a powerful partner in enhancing what we already do best: patient-centered care. For example, at Humber River Hospital in Toronto, AI-driven command centers analyze patient flow and clinical indicators to optimize care delivery. Nurses receive alerts that help identify when a patient might be trending toward clinical decline, allowing for faster interventions. These systems give nurses a fuller clinical picture in real-time, ensuring we can focus on compassion while AI handles data behind the scenes.</br>
Let’s Reframe the Narrative:</br>
AI doesn’t mean less compassion.</br>
It means more time for meaningful care.</br>
It means fewer hours on admin and more on advocacy.</br>
🧭 Let’s start a conversation: What’s your biggest question or concern about AI in nursing?</br></br>
For me, the question is this: How do we ensure that AI supports but not overshadow clinical judgment, especially when training new nurses or mentoring Internationally Educated Nurses who are still navigating the system?</br></br>
Drop your thoughts in the comments or DM me to collaborate.</br>
#AIinHealthcare #FutureOfNursing #NurseLeadership #HealthTech #fearlessstrides</p>        
         `,
      author: 'Fearless Strides',
      date: '2023-12-28',
      readTime: '9 min read',
      category: 'Work-Life Balance',
      image: 'https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/499599205_706539925080442_8604869294894447772_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFG2Ch6ffrg5vspvxhaNNYnwQqQMzR1zqPBCpAzNHXOo-ZZY6CgyDEeLDZUb2Uz5EM1f7NA1XAlfuzf0s1uo1Pv&_nc_ohc=VQsoZQNXMVsQ7kNvwF9q_VR&_nc_oc=Adn9s10Slqk1ROOYmqBJcf_cMJzvpsOSrN9FtLFgtReWnmLcVYcpimXySQ6YfUelEOc&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=HkM_9EqTdzS9CfitNxVb7Q&oh=00_AfPJQT2iqt66PyatG2SywXTZbWdG-su2_5uHCorP7T1r9w&oe=684A516E'
    }
  ];

  const categories = ['All', 'Career Development', 'Healthcare', 'Personal Growth', 'Networking', 'Finance', 'Work-Life Balance'];

  // Article Detail Component
  const ArticleDetail = ({ article }: { article: typeof blogPosts[0] }) => (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.button
          onClick={handleBackToBlog}
          className="flex items-center space-x-2 text-primary hover:text-secondary mb-8 group"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5 group-hover:animate-pulse" />
          <span className="font-semibold">Back to Articles</span>
        </motion.button>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-primary/70 mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center space-x-6 text-primary/60 mb-8 pb-8 border-b border-primary/10">
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
              className="text-primary/80 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ 
                __html: article.content.replace(/<h2>/g, '<h2 class="text-2xl font-bold text-primary mt-8 mb-4">')
                                         .replace(/<h3>/g, '<h3 class="text-xl font-semibold text-primary mt-6 mb-3">')
                                         .replace(/<p>/g, '<p class="mb-4 text-primary/80 leading-relaxed">')
              }} 
            />
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Take the Next Step?</h3>
            <p className="text-primary/70 mb-6">
              Connect with our community of successful immigrant professionals and get personalized guidance for your career journey.
            </p>
            <motion.button
              className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Community
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Insights & Resources</h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Expert advice, success stories, and practical guidance to support your professional journey.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 text-white">
                <div className="text-secondary/80 text-sm font-semibold mb-2">{blogPosts[0].category}</div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">{blogPosts[0].title}</h3>
                <p className="text-cream/90 mb-6 text-lg leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-cream/80 text-sm">
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
                  <motion.button
                    className="flex items-center space-x-2 text-secondary hover:text-secondary-light transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    onClick={() => handleReadMore(blogPosts[0].id)}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-cream rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-primary px-2 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-primary/70 mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-primary/60 mb-4">
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
                  <span className="text-sm text-primary/60">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <motion.button
                    className="flex items-center space-x-1 text-secondary hover:text-secondary-light font-semibold"
                    whileHover={{ x: 3 }}
                    onClick={() => handleReadMore(post.id)}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.button
            className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;