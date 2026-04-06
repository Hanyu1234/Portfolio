import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Project = {
  title: string;
  description: string;
  meta: string;
  image: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: 'Medical AI — ECG Segmentation',
    meta: 'Research · Johns Hopkins · Feb 2025 – May 2025',
    description:
      'Deep learning pipeline for ECG signal segmentation (QRS/P/T boundaries) in PyTorch: preprocessing, labeling, CNN/SegNet-style encoder–decoder plus LSTM, and evaluation with precision/recall/F1 and visual error analysis.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tech: ['PyTorch', 'Python', 'Signal processing', 'Research'],
  },
  {
    title: 'Student Records Clustering & Attendance',
    meta: 'Academic project · ASU · Jan 2024 – May 2024',
    description:
      'C++ engine to parse and cluster large student record files for faster batch analysis; stability work with GDB/Valgrind; CMake build and unit tests for maintainability.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tech: ['C++', 'CMake', 'GDB', 'Valgrind'],
  },
  {
    title: 'Delivery Tracking System',
    meta: 'Eth Tech Intern · May 2023 – Sep 2023',
    description:
      'Full-stack tracking with real-time dasher locations on a map; Terraform on AWS (Lambda, S3, DynamoDB, API Gateway); React with Google Maps and WebSocket-style updates; Jenkins CI/CD.',
    image:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tech: ['React', 'AWS', 'Terraform', 'DynamoDB', 'Jenkins'],
  },
  {
    title: 'Shopify Storefront & POS Sync',
    meta: 'Vct Auto Performance Intern · May 2022 – Sep 2022',
    description:
      'Shopify redesign with Liquid and responsive UI; Metafields-based filtering; Python tool syncing Shopify Admin and Square POS on a schedule, cutting manual work and inventory errors.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tech: ['Shopify', 'Python', 'JavaScript', 'REST APIs'],
  },
];

export function Projects() {
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
          <h2 className="text-4xl md:text-5xl mb-4">Projects & Research</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selected academic and internship work complementing my professional
            experience
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
                <p className="text-sm text-cyan-800 font-medium mb-1">
                  {project.meta}
                </p>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
