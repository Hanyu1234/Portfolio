import { motion } from 'motion/react';

const skillCategories: { title: string; items: string[] }[] = [
  {
    title: 'Programming Languages',
    items: [
      'Python',
      'Java',
      'JavaScript',
      'TypeScript',
      'SQL',
      'C++',
    ],
  },
  {
    title: 'Development',
    items: [
      'React (Vite)',
      'FastAPI',
      'Spring Boot (MVC/Data/Cloud)',
      'RESTful APIs',
      'JWT (JOSE)',
      'HTML5 / CSS3',
      'Node.js',
      'Tailwind CSS',
      'PyTorch',
      'Swagger / OpenAPI',
    ],
  },
  {
    title: 'Data & Analytics',
    items: [
      'Pandas',
      'NumPy',
      'Power BI (DAX / Power Query)',
      'Excel (Pivot / Power Query)',
    ],
  },
  {
    title: 'Database Systems',
    items: [
      'Azure SQL Server',
      'MySQL',
      'MongoDB',
      'Oracle',
      'Snowflake',
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'Azure',
      'AWS',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'GitHub Actions',
      'Git',
      'Swagger',
      'Postman',
    ],
  },
];

const alsoFamiliar = [
  'Spring Security',
  'JPA',
  'Redux / Thunk',
  'Axios',
  'Google Maps API',
  'WebSocket',
  'Terraform',
  'Lambda',
  'DynamoDB',
  'API Gateway',
  'Shopify (Liquid, Admin API)',
  'Lark / Feishu Open API',
  'Tableau',
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stack and tools from my resume—aligned with recent full-stack and
            data work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <h3 className="text-xl mb-4 bg-gradient-to-r from-blue-900 to-cyan-700 bg-clip-text text-transparent font-semibold">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-50 text-slate-800 rounded-lg text-sm border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl mb-6">Also Used in Projects & Internships</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {alsoFamiliar.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-blue-900 hover:text-blue-900 transition-colors cursor-default text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
