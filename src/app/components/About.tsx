import { motion } from 'motion/react';
import { GraduationCap, Code2, Database, Cloud } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Delivery',
      description:
        'React (Vite/TS), FastAPI, Spring Boot, REST/OpenAPI, JWT and RBAC',
    },
    {
      icon: Database,
      title: 'Data & SQL',
      description:
        'ETL with Pandas/NumPy, Azure SQL Server, modeling for dashboards',
    },
    {
      icon: Cloud,
      title: 'Cloud & Integrations',
      description:
        'Azure, AWS, Docker, Kubernetes, Jenkins, GitHub Actions, Lark APIs',
    },
    {
      icon: GraduationCap,
      title: 'Strong Foundations',
      description:
        'M.S. Electrical & Computer Engineering; B.S. Computer Science',
    },
  ];

  const education = [
    {
      school: 'Johns Hopkins University',
      degree: 'Master of Science in Electrical and Computer Engineering',
      location: 'Baltimore, MD',
      period: 'Jan 2024 – May 2025',
    },
    {
      school: 'Arizona State University',
      degree: 'Bachelor of Science in Computer Science',
      location: 'Tempe, AZ',
      period: 'Aug 2020 – Dec 2023',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Engineer focused on scalable backends, clear APIs, and analytics
            that operations teams can trust
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1754548930550-be9fa88874f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzc1MjM0MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Workspace"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl mb-4">Background</h3>
            <p className="text-gray-700 mb-4">
              I completed my M.S. in Electrical and Computer Engineering at
              Johns Hopkins and my B.S. in Computer Science at Arizona State
              University. Along the way I interned in full-stack and cloud
              roles—from Spring Boot task platforms and AWS serverless systems
              to Shopify and POS integrations—before joining GOFO as a software
              engineer.
            </p>
            <p className="text-gray-700 mb-6">
              Today I work on region-level KPI dashboards, ETL and validation,
              SQL-backed metrics, and integrations (e.g. Lark/Feishu) so teams
              can monitor performance at scale.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Education
            </h4>
            <ul className="space-y-4">
              {education.map((e) => (
                <li
                  key={e.school}
                  className="border-l-4 border-cyan-700 pl-4 text-gray-700"
                >
                  <p className="font-medium text-gray-900">{e.school}</p>
                  <p>{e.degree}</p>
                  <p className="text-sm text-gray-500">
                    {e.period} · {e.location}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-100 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-r from-blue-900 to-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-white" size={24} />
              </div>
              <h4 className="text-xl mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
