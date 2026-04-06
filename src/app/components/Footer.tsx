import { Mail } from 'lucide-react';
import type { Lang } from '../types/lang';

type FooterProps = {
  lang: Lang;
};

export function Footer({ lang }: FooterProps) {
  const isZh = lang === 'zh';
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks =
    lang === 'zh'
      ? [
          { label: '首页', id: 'home' },
          { label: '关于我', id: 'about' },
          { label: '工作经历', id: 'experience' },
          { label: '项目', id: 'projects' },
          { label: '技能', id: 'skills' },
          { label: '联系我', id: 'contact' },
        ]
      : [
          { label: 'Home', id: 'home' },
          { label: 'About', id: 'about' },
          { label: 'Experience', id: 'experience' },
          { label: 'Projects', id: 'projects' },
          { label: 'Skills', id: 'skills' },
          { label: 'Contact', id: 'contact' },
        ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Peter Zhu
            </h3>
            <p className="text-gray-400">
              {isZh
                ? '全栈软件工程师：React、FastAPI、Spring Boot、数据处理与 Azure/AWS 云实践。'
                : 'Full-stack software engineer: React, FastAPI, Spring Boot, data pipelines, Azure/AWS.'}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{isZh ? '快速导航' : 'Quick Links'}</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{isZh ? '联系方式' : 'Contact'}</h4>
            <a
              href="mailto:hzhu1220@outlook.com"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
              hzhu1220@outlook.com
            </a>
            <p className="text-gray-500 text-sm mt-3">Edison, NJ</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} Peter Zhu</p>
        </div>
      </div>
    </footer>
  );
}
