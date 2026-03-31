/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Terminal, 
  Server, 
  ShieldCheck, 
  Cpu, 
  ChevronRight, 
  Mail, 
  Github, 
  Linkedin, 
  Code2,
  Database,
  Cloud
} from 'lucide-react';

export default function App() {
  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-awis-500" />,
      title: "Desarrollo a Medida",
      description: "Creamos software robusto y escalable adaptado a las necesidades específicas de tu negocio, utilizando las últimas tecnologías web y móviles."
    },
    {
      icon: <Cloud className="w-8 h-8 text-awis-500" />,
      title: "Arquitectura Cloud",
      description: "Diseño, migración y gestión de infraestructuras en la nube (AWS, Google Cloud, Azure) para garantizar alta disponibilidad y rendimiento."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-awis-500" />,
      title: "Ciberseguridad",
      description: "Auditorías de seguridad, pentesting y fortificación de sistemas para proteger los datos más críticos de tu empresa."
    },
    {
      icon: <Cpu className="w-8 h-8 text-awis-500" />,
      title: "IA & Automatización",
      description: "Integración de modelos de Inteligencia Artificial y automatización de procesos (RPA) para multiplicar la productividad de tu equipo."
    }
  ];

  const projects = [
    {
      title: "Sistema ERP Cloud",
      category: "Desarrollo Web",
      image: "https://picsum.photos/seed/erp/800/600?blur=2",
      description: "Plataforma integral de gestión empresarial con módulos de facturación, inventario y RRHH."
    },
    {
      title: "App Logística B2B",
      category: "Desarrollo Móvil",
      image: "https://picsum.photos/seed/logistics/800/600?blur=2",
      description: "Aplicación móvil para el rastreo de flotas en tiempo real con optimización de rutas mediante IA."
    },
    {
      title: "Migración Infraestructura",
      category: "Cloud Computing",
      image: "https://picsum.photos/seed/server/800/600?blur=2",
      description: "Migración de centro de datos on-premise a AWS con arquitectura serverless y microservicios."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-awis-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-awis-500" />
            <span className="font-display font-bold text-xl text-white tracking-tight">AWIS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#portafolio" className="hover:text-white transition-colors">Portafolio</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
            <a href="https://wa.me/56939580988" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full transition-all">
              Agendar Llamada
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-awis-900/20 via-slate-950 to-slate-950 -z-10"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-awis-500/10 border border-awis-500/20 text-awis-400 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-awis-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-awis-500"></span>
                </span>
                Disponible para nuevos proyectos
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight mb-6">
                Soluciones IT que <span className="text-transparent bg-clip-text bg-gradient-to-r from-awis-400 to-indigo-400">escalan tu negocio.</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
                Soy <strong className="text-white font-medium">Armin Salazar</strong>, CEO de Awis. 
                Transformamos problemas complejos en arquitecturas de software elegantes, seguras y de alto rendimiento.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#contacto" className="inline-flex items-center justify-center gap-2 bg-white text-slate-950 hover:bg-slate-100 px-6 py-3.5 rounded-full font-medium transition-colors">
                  Iniciar un Proyecto
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a href="#portafolio" className="inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white px-6 py-3.5 rounded-full font-medium transition-colors">
                  Ver Portafolio
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:ml-auto"
            >
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-tr from-awis-500/20 to-transparent mix-blend-overlay z-10"></div>
                <img 
                  src="https://picsum.photos/seed/workspace/800/800" 
                  alt="Armin Salazar Workspace" 
                  className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-slate-950/80 backdrop-blur-md border border-slate-800 p-4 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-awis-500/20 flex items-center justify-center text-awis-400">
                      <Server className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Infraestructura Awis</p>
                      <p className="text-sm text-slate-400">99.99% Uptime garantizado</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Servicios Especializados</h2>
            <p className="text-slate-400 text-lg">
              Cubrimos el ciclo de vida completo del desarrollo tecnológico, desde la concepción de la arquitectura hasta el despliegue y mantenimiento.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-awis-500/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portafolio" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Casos de Éxito</h2>
              <p className="text-slate-400 text-lg">
                Proyectos destacados donde hemos implementado soluciones tecnológicas que generan impacto real.
              </p>
            </div>
            <a href="#contacto" className="inline-flex items-center gap-2 text-awis-400 hover:text-awis-300 font-medium transition-colors">
              Ver todos los proyectos <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-slate-800">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-medium bg-slate-950/80 backdrop-blur-md text-white rounded-full border border-slate-800">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-2 group-hover:text-awis-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee (Simplified) */}
      <section className="py-12 border-y border-slate-800/50 bg-slate-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-widest mb-8">Tecnologías que dominamos</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
            {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'TypeScript'].map((tech) => (
              <span key={tech} className="text-xl md:text-2xl font-display font-bold text-slate-400">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-awis-900/20 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            ¿Listo para escalar tu infraestructura?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Agenda una consultoría técnica gratuita de 30 minutos para evaluar la arquitectura actual de tu proyecto.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:contacto@awis.com" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-full font-medium text-lg transition-colors">
              <Mail className="w-5 h-5" />
              Contactar a Armin
            </a>
            <a href="https://wa.me/56939580988" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors">
              Agendar Llamada
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-awis-500" />
            <span className="font-display font-bold text-lg text-white tracking-tight">AWIS</span>
          </div>
          
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Awis IT Services. Armin Salazar. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
