import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Lang } from '../types/lang';

type Project = {
  title: string;
  description: string;
  meta: string;
  image: string;
  tech: string[];
  link?: string;
};

type ProjectsProps = {
  lang: Lang;
};

export function Projects({ lang }: ProjectsProps) {
  const isZh = lang === 'zh';

  const projects: Project[] = isZh
    ? [
        {
          title: 'Medical AI — ECG 心电分割',
          meta: '科研项目 · Johns Hopkins · 2025.02 – 2025.05',
          description:
            '基于 PyTorch 的 ECG 分割流程，覆盖预处理、标注、CNN/SegNet + LSTM 建模与 F1 等指标评估。',
          image:
            'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          tech: ['PyTorch', 'Python', 'Signal processing', 'Research'],
          link: 'https://hanyu1234.github.io/MedicalAI-ECGSegment/',
        },
        {
          title: '学生记录聚类与考勤系统',
          meta: '课程项目 · ASU · 2024.01 – 2024.05',
          description:
            '实现 C++ 批处理引擎解析并聚类学生记录，使用 GDB/Valgrind 排障，采用 CMake 与单测提升维护性。',
          image:
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          tech: ['C++', 'CMake', 'GDB', 'Valgrind'],
        },
        {
          title: '配送追踪系统',
          meta: 'Eth Tech 实习 · 2023.05 – 2023.09',
          description:
            '在地图上进行实时配送轨迹追踪，Terraform 管理 AWS 资源，React + Google Maps + WebSocket 更新。',
          image:
            'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          tech: ['React', 'AWS', 'Terraform', 'DynamoDB', 'Jenkins'],
        },
      ]
    : [
        {
          title: 'Medical AI — ECG Segmentation',
          meta: 'Research · Johns Hopkins · Feb 2025 – May 2025',
          description:
            'Deep learning pipeline for ECG segmentation in PyTorch: preprocessing, labeling, CNN/SegNet + LSTM modeling, and F1-based evaluation.',
          image:
            'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          tech: ['PyTorch', 'Python', 'Signal processing', 'Research'],
          link: 'https://hanyu1234.github.io/MedicalAI-ECGSegment/',
        },
        {
          title: 'Student Records Clustering & Attendance',
          meta: 'Academic project · ASU · Jan 2024 – May 2024',
          description:
            'C++ engine for large record parsing and clustering, with GDB/Valgrind debugging and CMake + unit tests.',
          image:
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          tech: ['C++', 'CMake', 'GDB', 'Valgrind'],
        },
        {
          title: 'Delivery Tracking System',
          meta: 'Eth Tech Intern · May 2023 – Sep 2023',
          description:
            'Real-time delivery tracking with Terraform-managed AWS and React + Google Maps + WebSocket-style updates.',
          image:
            'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          tech: ['React', 'AWS', 'Terraform', 'DynamoDB', 'Jenkins'],
        },
      ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">{isZh ? '项目与研究' : 'Projects & Research'}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {isZh
              ? '展示与工作经历互补的科研与实战项目'
              : 'Selected academic and internship work complementing my professional experience'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <p className="text-sm text-cyan-800 font-medium mb-1">{project.meta}</p>
                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 text-blue-900 hover:text-cyan-700 font-medium transition-colors"
                  >
                    View Project {'->'}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
