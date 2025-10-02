import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Database, BarChart3, Code, Globe, Award, Calendar } from 'lucide-react'
import profilePhoto from './assets/profile-photo.jpg'
import pythonLogo from './assets/python-logo.webp'
import bigqueryLogo from './assets/bigquery-logo.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const skills = [
    { name: 'SQL', level: 90, icon: Database, description: 'JOIN, CTE, Window Functions, agregações, pivôs' },
    { name: 'Python', level: 85, icon: Code, description: 'pandas, numpy, automações (Colab/cron)' },
    { name: 'BigQuery', level: 80, icon: BarChart3, description: 'Partição/cluster, otimização de custos' },
    { name: 'Power BI', level: 75, icon: BarChart3, description: 'DAX básico, dashboards executivos' },
    { name: 'Looker Studio', level: 85, icon: BarChart3, description: 'Visualizações e relatórios' },
    { name: 'Inglês', level: 95, icon: Globe, description: 'Fluente - colaboração internacional' }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-commerce Analytics (end-to-end)',
      description: 'Análise completa de e-commerce com KPIs de receita, ticket médio, margem e coortes 30/60/90d. Modelo estrela com 10+ queries complexas e storytelling executivo por SKU/canal.',
      technologies: ['Python', 'CSV', 'BigQuery', 'Power BI', 'Looker'],
      status: 'Em construção',
      highlights: ['Modelo estrela', '10+ queries com CTE/janelas', 'Storytelling executivo']
    },
    {
      id: 2,
      title: 'Marketing Analytics (GA4 → BigQuery)',
      description: 'Pipeline de dados de marketing com foco em aquisição, funil de conversão e análise de CAC/ROI por canal. Inclui conector GA4 e análise pré/pós-campanha.',
      technologies: ['GA4', 'BigQuery', 'Looker Studio'],
      status: 'Em construção',
      highlights: ['Conector GA4', 'Atribuição simplificada', 'Análise pré/pós-campanha']
    },
    {
      id: 3,
      title: 'Operações Agro (pecuária/soja)',
      description: 'Consolidação de planilhas operacionais do agronegócio com análise de produtividade, custos e DRE operacional. Dashboard para acompanhamento de tendências.',
      technologies: ['Google Sheets', 'BigQuery', 'Painel Operacional'],
      status: 'Em construção',
      highlights: ['Consolidação de planilhas', 'Produtividade/custos', 'DRE operacional']
    }
  ]

  const experience = [
    {
      title: 'Freelancer',
      company: 'Design gráfico e de moda',
      period: '2019 - atual',
      description: 'Organização de bases em planilhas, acompanhamento de métricas simples e relatórios visuais para decisões rápidas.'
    },
    {
      title: 'Projeto Nota Legal',
      company: 'Secretaria de Finanças de Rondônia',
      period: 'Experiência complementar',
      description: 'Atendimento ao público e suporte administrativo do início ao fim; melhoria de registro e organização de dados.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-purple-900/95 backdrop-blur-sm border-b border-purple-700 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-white">Gabriel Preti Perin</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-cyan-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section === 'home' ? 'Início' : 
                   section === 'about' ? 'Sobre' :
                   section === 'skills' ? 'Competências' :
                   section === 'projects' ? 'Projetos' :
                   section === 'experience' ? 'Experiência' : 'Contato'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-6">
                ANALISTA DE DADOS
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                GABRIEL
                <br />
                <span className="text-cyan-400">PRETI</span>
                <br />
                PERIN
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Transformo dados em <span className="text-cyan-400 font-semibold">insights estratégicos</span> para negócios através de análises end-to-end e storytelling executivo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg"
                >
                  Ver Projetos
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline" 
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 text-lg"
                >
                  Entrar em Contato
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl">
                  <img 
                    src={profilePhoto} 
                    alt="Gabriel Preti Perin" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-cyan-500 text-white p-3 rounded-full">
                  <BarChart3 size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-purple-800/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Sobre Mim</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Analista de Dados com <strong className="text-cyan-400">inglês fluente</strong> e formação EBAC em conclusão. 
                Especializado em construir dashboards executivos, pipelines leves e modelagem dimensional para 
                transformar perguntas de negócio em KPIs e insights acionáveis.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Confortável em <strong className="text-cyan-400">colaboração assíncrona</strong> com times internacionais, 
                com disponibilidade para sobreposição com ET/Europa. Experiência em projetos end-to-end desde 
                coleta até storytelling executivo.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <MapPin className="text-cyan-400" size={20} />
                  <span className="text-gray-300">Florianópolis/SC</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-cyan-400" size={20} />
                  <span className="text-gray-300">Remoto (UTC-3)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-cyan-400" size={20} />
                  <span className="text-gray-300">EBAC (em conclusão)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-cyan-400" size={20} />
                  <span className="text-gray-300">Disponível ET/Europa</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="bg-purple-700/30 border-purple-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Award className="text-cyan-400" size={20} />
                    Formação
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">EBAC - Profissão: Analista de Dados</p>
                      <p className="text-sm text-gray-400">Em conclusão (dezembro/2025)</p>
                    </div>
                    <div>
                      <p className="font-semibold">UNISUL - Relações Internacionais</p>
                      <p className="text-sm text-gray-400">Bacharelado em curso</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-purple-700/30 border-purple-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Globe className="text-cyan-400" size={20} />
                    Idiomas
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span>🇧🇷 Português (nativo)</span>
                    <span>🇺🇸 Inglês (fluente)</span>
                    <span>🇪🇸 Espanhol (avançado)</span>
                    <span>🇫🇷 Francês (intermediário)</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Competências Técnicas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-purple-700/30 border-purple-600 hover:border-cyan-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <skill.icon className="text-cyan-400" size={24} />
                    {skill.name}
                  </CardTitle>
                  <div className="w-full bg-purple-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-purple-800/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Projetos em Destaque</h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Projetos autorais end-to-end prontos para portfólio. Links para GitHub/demos serão adicionados em breve.
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-purple-700/30 border-purple-600 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-3xl font-bold text-cyan-400">0{project.id}</div>
                    <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-cyan-400 mb-2">Tecnologias:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="border-purple-500 text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-cyan-400 mb-2">Destaques:</p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {project.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-600">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-purple-500 text-gray-400" disabled>
                        <Github size={16} className="mr-2" />
                        GitHub
                      </Button>
                      <Button size="sm" variant="outline" className="border-purple-500 text-gray-400" disabled>
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Experiência</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                      <p className="text-orange-400 font-semibold">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="border-orange-400 text-orange-400 w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Vamos Conversar?</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Entre em Contato</h3>
                <p className="text-gray-300 mb-8">
                  Estou disponível para projetos remotos e colaboração internacional. 
                  Vamos transformar seus dados em insights valiosos!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500 p-3 rounded-full">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-300">gabrielpretiperin@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500 p-3 rounded-full">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Telefone</p>
                      <p className="text-gray-300">+55 69 99254-5318</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500 p-3 rounded-full">
                      <Linkedin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-semibold">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/gabriel-preti-perin-92832825a/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:text-orange-300 transition-colors"
                      >
                        gabriel-preti-perin
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="bg-purple-700/30 border-purple-600">
                <CardHeader>
                  <CardTitle className="text-white">Disponibilidade</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Modalidade</span>
                    <Badge className="bg-green-500/20 text-green-400">PJ/Contractor</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Plataformas</span>
                    <span className="text-white">Deel/Upwork</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Fuso Horário</span>
                    <span className="text-white">UTC-3 (Brasil)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Sobreposição</span>
                    <Badge className="bg-blue-500/20 text-blue-400">ET/Europa</Badge>
                  </div>
                  <div className="pt-4 border-t border-slate-600">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <Mail className="mr-2" size={16} />
                      Enviar Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Gabriel Preti Perin. Todos os direitos reservados.
            </div>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/gabriel-preti-perin-92832825a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:gabrielpretiperin@gmail.com"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
