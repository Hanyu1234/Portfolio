import { motion } from 'motion/react';
import { Building2, MapPin, Calendar } from 'lucide-react';
import type { Lang } from '../types/lang';

type ExperienceItem = {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  bullets: string[];
};

type ExperienceProps = {
  lang: Lang;
};

export function Experience({ lang }: ExperienceProps) {
  const isZh = lang === 'zh';

  const experiences: ExperienceItem[] = isZh
    ? [
        {
          company: 'GOFO',
          role: '软件工程师',
          type: '全职',
          location: 'Carteret, NJ',
          period: '2025.09 – 至今',
          bullets: [
            '使用 React(Vite/TypeScript) + Python(FastAPI) 构建 18 个站点（约 80 万件/天）的区域级 KPI 大屏，并通过 JWT(RBAC/ABAC) 保护 REST API。',
            '设计并实现 Pandas/NumPy 的 ETL 与数据校验流程，落库 Azure SQL Server（T-SQL）并优化视图/模型以支持快速钻取分析。',
            '实现指标管理与看板消费的 CRUD/查询 API，统一分页、筛选和错误处理规范。',
            '集成 Lark Open API（Bitable、Bot Events、Webhooks）实现指标同步与自动告警流程。',
          ],
        },
        {
          company: 'NextTier',
          role: '软件工程师',
          type: '实习',
          location: 'Newark, CA',
          period: '2024.05 – 2024.08',
          bullets: [
            '基于 Spring Boot(MVC/Data/Cloud) + JPA 搭建任务管理平台后端，模块化且可扩展。',
            '使用 Spring Security + JWT 做 RBAC 权限控制，接口通过 Swagger/OpenAPI 文档化。',
            '实现任务 CRUD、检索筛选、状态流转和参数校验，保障事务一致性。',
          ],
        },
        {
          company: 'Eth Tech',
          role: '软件工程师',
          type: '实习',
          location: 'Sacramento, CA',
          period: '2023.05 – 2023.09',
          bullets: [
            '实现配送追踪系统，支持地图上的实时位置更新。',
            '通过 Terraform 管理 AWS（Lambda、S3、DynamoDB、API Gateway）基础设施。',
            'React + Google Maps API + WebSocket 模拟实时路径更新，配合 Jenkins CI/CD。',
          ],
        },
      ]
    : [
        {
          company: 'GOFO',
          role: 'Software Engineer',
          type: 'Full-time',
          location: 'Carteret, NJ',
          period: 'Sep 2025 – Present',
          bullets: [
            'Built a full-stack region-level KPI dashboard for 18 sites (~800K/day shipments) using React (Vite/TypeScript) + Python (FastAPI) with JWT-protected REST APIs.',
            'Developed ETL + validation with Pandas/NumPy and persisted curated metrics in Azure SQL Server (T-SQL) for fast drilldowns.',
            'Implemented standardized CRUD/query APIs with pagination, filtering, and consistent error handling.',
            'Integrated Lark Open API (Bitable, Bot Events, Webhooks) for metrics sync and automated alerts.',
          ],
        },
        {
          company: 'NextTier',
          role: 'Software Engineer',
          type: 'Intern',
          location: 'Newark, CA',
          period: 'May 2024 – Aug 2024',
          bullets: [
            'Built a task management platform with Spring Boot (MVC/Data/Cloud) + JPA.',
            'Implemented Spring Security + JWT RBAC with Swagger/OpenAPI documentation.',
            'Delivered workflow features including CRUD, filtering, transitions, and validation.',
          ],
        },
        {
          company: 'Eth Tech',
          role: 'Software Engineer',
          type: 'Intern',
          location: 'Sacramento, CA',
          period: 'May 2023 – Sep 2023',
          bullets: [
            'Built full-stack delivery tracking with real-time map updates.',
            'Provisioned AWS via Terraform (Lambda, S3, DynamoDB, API Gateway).',
            'Built React + Google Maps + WebSocket-style updates with Jenkins CI/CD.',
          ],
        },
      ];

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
          <h2 className="text-4xl md:text-5xl mb-4">{isZh ? '工作经历' : 'Work Experience'}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {isZh
              ? '覆盖全栈开发、数据链路与云端交付'
              : 'Full-stack development, data pipelines, and cloud delivery'}
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
                    <span className="text-gray-500 font-normal"> · {job.type}</span>
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
