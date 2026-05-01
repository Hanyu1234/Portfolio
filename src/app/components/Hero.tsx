import { motion } from 'motion/react';
import { Mail, Phone, ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Lang } from '../types/lang';

type HeroProps = {
  lang: Lang;
};

export function Hero({ lang }: HeroProps) {
  const isZh = lang === 'zh';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 -z-10" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4">
              {isZh ? '你好，我是 ' : "Hi, I'm "}
              <span className="bg-gradient-to-r from-blue-900 to-cyan-700 bg-clip-text text-transparent">
                Peter Zhu
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              {isZh ? '全栈软件工程师' : 'Full-Stack Software Engineer'}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              {isZh
                ? '我专注于端到端的数据驱动产品开发：React/TypeScript 前端、FastAPI 与 Spring Boot 后端、SQL/ETL 数据链路和 Azure/AWS 云集成。目前在 GOFO 负责区域级 KPI 平台建设。'
                : 'I build data-backed web products end to end: React/TypeScript frontends, FastAPI and Spring Boot services, SQL/ETL pipelines, and cloud integrations (Azure, AWS). Currently shipping region-scale KPI tooling at GOFO.'}
            </p>

            <div className="flex gap-4 mb-8">
              <a
                href="mailto:hzhu1220@outlook.com"
                className="p-3 bg-cyan-700 text-white rounded-full hover:bg-cyan-800 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+14104587621"
                className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('experience')}
                className="px-8 py-3 bg-gradient-to-r from-blue-900 to-cyan-700 text-white rounded-lg hover:shadow-lg transition-all"
              >
                {isZh ? '查看经历' : 'View Experience'}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-slate-700 text-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-all"
              >
                {isZh ? '联系我' : 'Get in Touch'}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/images/profile-placeholder.svg"
                alt="Peter Zhu"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-cyan-700/20" />
            </div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-4 max-w-[220px]"
            >
              <p className="text-sm font-semibold">M.S. ECE · Johns Hopkins</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4 max-w-[220px]"
            >
              <p className="text-sm font-semibold">Software Engineer @ GOFO</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600"
        aria-label="Scroll to about"
      >
        <ArrowDown size={32} />
      </motion.button>
    </section>
  );
}
