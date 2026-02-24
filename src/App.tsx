import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Heart, Globe, MapPin, Mail, MessageCircle, Video, Code, TrendingUp, X, Languages } from 'lucide-react';

const TRANSLATIONS = {
  en: {
    roles: ["Bilibili Content Creator", "Cross-border Specialist", "Marketing Strategist", "Vibe Coding"],
    tags: "Tourism Management Graduate • CET-6",
    greeting: "Hi, I'm",
    name: "Han Wenbo",
    description: "Bridging the gap between creative content creation and professional corporate strategy. Passionate about data-driven marketing and cross-border business.",
    dataTitle: "The Power of Data",
    dataSubtitle: "Metrics that drive my creative and professional journey.",
    stats: [
      { value: "3.5M+", label: "Total Views", desc: "Viral Content" },
      { value: "22,000+", label: "Community", desc: "0-1 Growth" },
      { value: "CET-6", label: "Bilingual", desc: "Interpretation" },
      { value: "Expert", label: "Global Ops", desc: "e-term Proficient" }
    ],
    journeyTitle: "Career Journey",
    journeySubtitle: "Exploring the intersection of media and management.",
    tabCreative: "Creative / Media",
    tabCorporate: "Corporate / Mgmt",
    timeline: {
      creative: [
        { year: "Present", title: "Bilibili Content Creator", description: "Spearheaded 0-1 community growth, achieving 3.5M+ viral views. Expert in leveraging data analytics to drive content creation and capture Gen Z traffic trends." },
        { year: "Past", title: "Tour Guide & Itinerary Expert", description: "Crafted unique travel experiences, utilizing strong communication and planning skills to manage diverse groups." }
      ],
      corporate: [
        { year: "Recent", title: "China Post Management Experience", description: "Demonstrated strong field execution by achieving a breakthrough in high-end logistics services through proactive on-site support and client relationship building." },
        { year: "Previous", title: "Xunku Data Ops", description: "Handled data operations, leveraging analytical tools to drive insights and optimize processes." }
      ]
    },
    skillsTitle: "Toolkit & Expertise",
    skillsSubtitle: "A versatile skill set for modern business challenges.",
    skillGroups: [
      { title: "Creative & Media", skills: ["PR", "PS", "Video Editing", "Social Media Growth", "Content Strategy"] },
      { title: "Analytical & Tech", skills: ["Python Scraping", "Excel", "Market Research", "Data Ops"] },
      { title: "Business & Management", skills: ["e-term", "English Interpretation", "Client Relations", "Cross-border Business"] }
    ],
    ctaTitle: "Let's Collaborate",
    ctaSubtitle: "Looking for a dynamic Marketing Trainee or Cross-border Assistant? Let's connect and create something impactful together.",
    wechatBtn: "WeChat ID Available",
    footer: `© ${new Date().getFullYear()} Han Wenbo. All rights reserved.`
  },
  zh: {
    roles: ["B站内容创作者", "跨境业务专员", "基层网点运营", "AI编程"],
    tags: "旅游管理专业 • 英语六级",
    greeting: "你好，我是",
    name: "韩文博",
    description: "连接创意内容制作与专业企业策略。对数据驱动的营销与跨境业务充满热情。",
    dataTitle: "数据驱动力",
    dataSubtitle: "推动我创意与职业旅程的核心数据。",
    stats: [
      { value: "350万+", label: "累计播放量", desc: "现象级传播" },
      { value: "2.2万+", label: "社区粉丝", desc: "0-1 矩阵增长" },
      { value: "CET-6", label: "双语沟通", desc: "即时口译经验" },
      { value: "精通", label: "跨境系统", desc: "熟练操作 e-term" }
    ],
    journeyTitle: "职业旅程",
    journeySubtitle: "探索媒体与管理的交汇点。",
    tabCreative: "创意 / 媒体",
    tabCorporate: "企业 / 管理",
    timeline: {
      creative: [
        { year: "至今", title: "B站内容创作者", description: "主导 0-1 社群增长，达成 350 万+ 现象级传播。擅长通过数据反哺内容创作，精准捕捉 Z 世代流量红利。" },
        { year: "过去", title: "导游与行程规划师", description: "打造独特的旅行体验，运用出色的跨文化沟通与统筹能力，独立管理并制定多元化团队行程。" }
      ],
      corporate: [
        { year: "近期", title: "中国邮政基层运营", description: "具备极强的实地执行力，通过主动驻点服务与专业时效讲解，成功获取农户信任，实现高端物流业务的零突破。" },
        { year: "早期", title: "讯库数据运营", description: "负责底层数据运营，利用分析工具深挖市场洞察，持续优化数据流转效率。" }
      ]
    },
    skillsTitle: "技能与专长",
    skillsSubtitle: "应对现代商业挑战的全面技能组合。",
    skillGroups: [
      { title: "创意与新媒体", skills: ["PR", "PS", "视频剪辑", "社群增长", "内容策略"] },
      { title: "数据与技术", skills: ["Python爬虫", "Excel", "市场调研", "数据运营"] },
      { title: "商业与管理", skills: ["e-term", "英语口译", "客户关系", "跨境业务"] }
    ],
    ctaTitle: "期待合作",
    ctaSubtitle: "正在寻找具备破局能力的营销管培生或跨境业务助理？期待与您建立联系，共同创造商业价值。",
    wechatBtn: "点击此处添加微信",
    footer: `© ${new Date().getFullYear()} 韩文博. 保留所有权利。`
  }
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('zh');
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTimeline, setActiveTimeline] = useState<'creative' | 'corporate'>('creative');
  const [showWechat, setShowWechat] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % t.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [t.roles.length]);

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans selection:bg-[#FB7299]/30">
      {/* Background Ambient Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#00A1D6]/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#FB7299]/20 blur-[120px]" />
      </div>

      {/* Language Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all text-sm font-medium"
        >
          <Languages className="w-4 h-4" />
          {lang === 'en' ? '中文' : 'English'}
        </button>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-32">
        
        {/* 1. Dynamic Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#00A1D6] mb-4"
            >
              {t.tags}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight"
            >
              <span className="block md:inline">{t.greeting}</span>
              <br className="hidden md:block" />
              <span className="block md:inline text-white font-extrabold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] mt-2 md:mt-0">
                {t.name}
              </span>
            </motion.h1>
            
            <div className="h-12 md:h-16 flex items-center justify-center md:justify-start overflow-hidden pt-2 md:pt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex + lang}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl md:text-4xl font-semibold text-slate-300"
                >
                  {t.roles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0 pt-2 md:pt-0"
            >
              {t.description}
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00A1D6] via-[#FB7299] to-[#1E3A8A] animate-spin-slow blur-md opacity-70" />
            <div className="absolute inset-1 rounded-full bg-[#0a0f1c] z-10" />
            <div className="absolute inset-2 rounded-full overflow-hidden z-20 border-2 border-transparent">
              <img 
                src="/profile.jpg" 
                alt="Han Wenbo" 
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/hanwenbo/400/400";
                }}
              />
            </div>
          </motion.div>
        </section>

        {/* 2. "The Power of Data" Dashboard */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t.dataTitle}</h2>
            <p className="text-slate-400">{t.dataSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <Play className="w-6 h-6 md:w-8 md:h-8 text-[#00A1D6]" />, ...t.stats[0] },
              { icon: <Heart className="w-6 h-6 md:w-8 md:h-8 text-[#FB7299]" />, ...t.stats[1] },
              { icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-[#1E3A8A]" />, ...t.stats[2] },
              { icon: <MapPin className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />, ...t.stats[3] }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 space-y-3 md:space-y-4">
                  <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-white/5 inline-block">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm font-medium text-slate-300">{stat.label}</div>
                    <div className="text-[10px] md:text-xs text-slate-500 mt-1">{stat.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Dual-Path Career Timeline */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t.journeyTitle}</h2>
              <p className="text-slate-400">{t.journeySubtitle}</p>
            </div>
            
            <div className="flex p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <button 
                onClick={() => setActiveTimeline('creative')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTimeline === 'creative' ? 'bg-gradient-to-r from-[#00A1D6] to-[#FB7299] text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                {t.tabCreative}
              </button>
              <button 
                onClick={() => setActiveTimeline('corporate')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTimeline === 'corporate' ? 'bg-gradient-to-r from-[#1E3A8A] to-indigo-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                {t.tabCorporate}
              </button>
            </div>
          </div>

          <div className="relative pl-4 md:pl-8 border-l border-white/10 space-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTimeline + lang}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {t.timeline[activeTimeline].map((item, i) => (
                  <div key={i} className="relative">
                    <div className={`absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full border-4 border-[#0a0f1c] ${activeTimeline === 'creative' ? 'bg-[#FB7299]' : 'bg-[#1E3A8A]'}`} />
                    <div className="space-y-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${activeTimeline === 'creative' ? 'text-[#00A1D6]' : 'text-indigo-400'}`}>
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed max-w-2xl">{item.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* 4. Skill Tags & Tools */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t.skillsTitle}</h2>
            <p className="text-slate-400">{t.skillsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Video className="w-5 h-5 text-[#FB7299]" />, ...t.skillGroups[0] },
              { icon: <Code className="w-5 h-5 text-[#00A1D6]" />, ...t.skillGroups[1] },
              { icon: <TrendingUp className="w-5 h-5 text-[#1E3A8A]" />, ...t.skillGroups[2] }
            ].map((group, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/5">
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <span 
                      key={j}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 text-slate-300 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Call to Action (CTA) */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden p-12 md:p-20 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A1D6]/20 via-[#FB7299]/20 to-[#1E3A8A]/20" />
          <div className="absolute inset-0 backdrop-blur-3xl" />
          <div className="absolute inset-0 border border-white/10 rounded-[3rem]" />
          
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white">{t.ctaTitle}</h2>
            <p className="text-lg text-slate-300">
              {t.ctaSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a 
                href="mailto:hanwenbo_job@163.com"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0a0f1c] font-bold hover:scale-105 transition-transform w-full sm:w-auto justify-center"
              >
                <Mail className="w-5 h-5" />
                hanwenbo_job@163.com
              </a>
              <button 
                onClick={() => setShowWechat(true)}
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-bold border border-white/20 hover:bg-white/20 transition-colors w-full sm:w-auto justify-center group"
              >
                <MessageCircle className="w-5 h-5 group-hover:text-[#00A1D6] transition-colors" />
                {t.wechatBtn}
              </button>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="pt-12 pb-6 text-center border-t border-white/10">
          <p className="text-sm text-slate-500">
            {t.footer}
          </p>
        </footer>
      </main>

      {/* WeChat QR Modal */}
      <AnimatePresence>
        {showWechat && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowWechat(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative p-8 rounded-3xl bg-[#0a0f1c] border border-white/10 shadow-2xl max-w-sm w-full text-center space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowWechat(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">WeChat</h3>
                <p className="text-slate-400 text-sm">Scan to connect</p>
              </div>
              
              <div className="bg-white p-4 rounded-2xl mx-auto inline-block">
                <img 
                  src="/wechat-qr.png" 
                  alt="WeChat QR Code" 
                  className="w-48 h-48 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=WeChatID";
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
