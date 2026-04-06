import { motion } from 'motion/react';
import { Building2, MapPin, Calendar } from 'lucide-react';

type ExperienceItem = {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  bullets: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: 'GOFO',
    role: 'Software Engineer',
    type: 'Full-time',
    location: 'Carteret, NJ',
    period: 'Sep 2025 – Present',
    bullets: [
      'Built a full-stack region-level KPI dashboard for 18 sites (~800K/day shipments) using React (Vite/TypeScript) + Python (FastAPI); REST APIs (OpenAPI/Swagger) with JWT auth (RBAC/ABAC).',
      'Developed backend ETL + data validation (Pandas/NumPy) and persisted curated metrics in Azure SQL Server (T-SQL) via optimized schemas/views for fast drilldowns.',
      'Implemented CRUD + query APIs with standardized pagination/filtering and consistent error handling.',
      'Integrated Lark Open API (Bitable, Bot Events, Webhooks) for canonical metrics sync and automated workflows/alerts.',
      'Delivered reporting views across Power BI, Tableau, and Lark/Feishu Bitable for weekly/quarterly KPI reporting.',
    ],
  },
  {
    company: 'NextTier',
    role: 'Software Engineer',
    type: 'Intern',
    location: 'Newark, CA',
    period: 'May 2024 – Aug 2024',
    bullets: [
      'Built a full-stack task management platform with Spring Boot (MVC/Data/Cloud), JPA, and a modular backend.',
      'Spring Security + JWT with RBAC; Swagger/OpenAPI-documented APIs.',
      'Core task/workflow features: CRUD, search/filter, status transitions, Bean Validation, transactional consistency.',
      'Web SPA (TypeScript, HTML5/CSS3) with Axios and Redux/Thunk for auth and async actions.',
    ],
  },
  {
    company: 'Eth Tech',
    role: 'Software Engineer',
    type: 'Intern',
    location: 'Sacramento, CA',
    period: 'May 2023 – Sep 2023',
    bullets: [
      'Full-stack delivery tracking with real-time dasher location on an interactive map.',
      'AWS via Terraform: Lambda, S3, DynamoDB, API Gateway.',
      'React SPA with Google Maps API and WebSocket-simulated route updates.',
      'Jenkins CI/CD; prototyped OpenAI API–based inquiry responses.',
    ],
  },
  {
    company: 'Vct Auto Performance',
    role: 'Software Engineer',
    type: 'Intern',
    location: 'Phoenix, AZ',
    period: 'May 2022 – Sep 2022',
    bullets: [
      'Refactored Shopify storefront (Liquid, HTML5/CSS3, JS) for mobile responsiveness.',
      'Dynamic product filtering with Shopify Metafields API.',
      'Python sync tool (Shopify Admin + Square POS APIs), scheduled sync, reducing manual work and inventory errors.',
      'A/B testing on product layouts; improved engagement ~20%.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Full-stack development, data pipelines, and cloud delivery across
            logistics, SaaS, and e-commerce
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-10">
          {experiences.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {job.role}
                    <span className="text-gray-500 font-normal">
                      {' '}
                      · {job.type}
                    </span>
                  </h3>
                  <p className="text-lg text-blue-900 font-medium mt-1 flex items-center gap-2">
                    <Building2 className="inline shrink-0" size={20} />
                    {job.company}
                  </p>
                </div>
                <div className="text-sm text-gray-600 md:text-right shrink-0 space-y-1">
                  <p className="flex items-center gap-2 md:justify-end">
                    <Calendar size={16} className="shrink-0" />
                    {job.period}
                  </p>
                  <p className="flex items-center gap-2 md:justify-end">
                    <MapPin size={16} className="shrink-0" />
                    {job.location}
                  </p>
                </div>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
