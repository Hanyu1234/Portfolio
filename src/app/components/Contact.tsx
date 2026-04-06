import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import type { Lang } from '../types/lang';

type ContactProps = {
  lang: Lang;
};

export function Contact({ lang }: ContactProps) {
  const isZh = lang === 'zh';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(isZh ? '感谢留言，我会尽快回复你。' : 'Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Mail, label: isZh ? '邮箱' : 'Email', value: 'hzhu1220@outlook.com', link: 'mailto:hzhu1220@outlook.com' },
    { icon: Phone, label: isZh ? '电话' : 'Phone', value: '(202) 594-5029', link: 'tel:+12025945029' },
    { icon: MapPin, label: isZh ? '所在地' : 'Location', value: 'Edison, NJ', link: null },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">{isZh ? '联系我' : 'Get In Touch'}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {isZh
              ? '欢迎沟通工作机会、项目合作与技术交流'
              : 'Open to relevant opportunities - reach out by email or the form below'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl mb-6">{isZh ? '欢迎联系' : "Let's Talk"}</h3>
            <p className="text-gray-600 mb-8">
              {isZh
                ? '我目前在 GOFO 担任全栈工程师，常驻新泽西。你可以通过邮件快速联系到我。'
                : "I'm a full-stack engineer based in New Jersey, currently working at GOFO. Email is the fastest way to reach me."}
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-gradient-to-r from-blue-900 to-cyan-700 p-3 rounded-lg">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className="text-lg hover:text-blue-900 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 p-6 bg-gradient-to-br from-slate-100 to-blue-50 rounded-xl"
            >
              <h4 className="text-xl mb-2">{isZh ? '当前状态' : 'Availability'}</h4>
              <p className="text-gray-700">
                {isZh
                  ? '目前在 GOFO 全职工作，也欢迎沟通后续机会与合适的合作项目。'
                  : 'Full-time at GOFO. I still welcome messages about future roles or side projects when timing aligns.'}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {isZh ? '你的名字' : 'Your Name'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition bg-white"
                    placeholder={isZh ? '请输入你的名字' : 'Your name'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {isZh ? '邮箱地址' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition bg-white"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {isZh ? '主题' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition bg-white"
                    placeholder={isZh ? '项目合作 / 工作机会' : 'Project or role'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {isZh ? '留言内容' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none bg-white"
                    placeholder={isZh ? '简单介绍你的需求...' : 'Tell me about your project or opportunity...'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {isZh ? '发送消息' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
