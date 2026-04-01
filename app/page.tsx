import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Scale, Briefcase, FileText, Gavel, Users, Home, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function AsistenciaJuridica() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-amber-500" />
            <span className="text-xl font-bold">Carlos Gómez - Asistente Judicial</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#inicio" className="hover:text-amber-500 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-amber-500 transition-colors">Servicios</a>
            <a href="#sobre-mi" className="hover:text-amber-500 transition-colors">Sobre Mí</a>
            <a href="#contacto" className="hover:text-amber-500 transition-colors">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Justicia y Asesoramiento Legal de Calidad
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Profesional altamente capacitado para defender tus derechos en Rosario, Argentina
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
            <a href="#contacto">Solicitar Consulta Gratuita</a>
          </Button>
        </div>
      </section>

      {/* Sobre Mí */}
      <section id="sobre-mi" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Sobre Mí</h2>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-32 h-32 bg-slate-300 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="h-16 w-16 text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Carlos Gómez</h3>
            <p className="text-amber-600 font-medium mb-4">Asistente Judicial - Rosario, Argentina</p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Soy un asistente judicial profesional dedicado a brindar soluciones legales integrales a mis clientes. 
              Con amplia experiencia, he ayudado a cientos de personas y empresas a resolver sus conflictos 
              legales de manera efectiva y ética. Mi compromiso es defender tus derechos con profesionalismo 
              y dedicación.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Servicios Legales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-amber-500">
              <CardHeader>
                <Scale className="h-10 w-10 text-amber-500 mb-2" />
                <CardTitle>Derecho Laboral</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Asesoramiento en conflictos laborales, contratos y derechos de trabajadores
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-amber-500">
              <CardHeader>
                <FileText className="h-10 w-10 text-amber-500 mb-2" />
                <CardTitle>Derecho Civil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Resolución de disputas civiles, herencias y propiedades
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-amber-500">
              <CardHeader>
                <Gavel className="h-10 w-10 text-amber-500 mb-2" />
                <CardTitle>Derecho Penal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Defensa legal en casos penales y asesoramiento jurídico especializado
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-amber-500">
              <CardHeader>
                <Briefcase className="h-10 w-10 text-amber-500 mb-2" />
                <CardTitle>Derecho Mercantil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Asesoramiento empresarial, contratos comerciales y regulaciones
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-amber-500">
              <CardHeader>
                <Users className="h-10 w-10 text-amber-500 mb-2" />
                <CardTitle>Derecho Familiar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Divorcios, custodia de menores y acuerdos familiares
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-amber-500">
              <CardHeader>
                <Home className="h-10 w-10 text-amber-500 mb-2" />
                <CardTitle>Derecho Inmobiliario</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Compraventa de propiedades, arrendamientos y litigios inmobiliarios
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contáctame</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info de contacto */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Ubicación</h4>
                  <p className="text-slate-300">Rosario, Santa Fe, Argentina</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href="mailto:gomezcarlosa98@gmail.com" className="text-slate-300 hover:text-amber-500 transition-colors">
                    gomezcarlosa98@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Horario de Atención</h4>
                  <p className="text-slate-300">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-800 rounded-lg">
                <p className="text-amber-500 font-semibold text-lg mb-2">Primera Consulta Gratuita</p>
                <p className="text-slate-300">
                  Contáctame sin compromiso para evaluar tu caso y brindarte la mejor asesoría legal.
                </p>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-white rounded-lg p-8">
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Tu Nombre" 
                    className="bg-slate-50 border-slate-200 text-slate-900"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Tu Email" 
                    className="bg-slate-50 border-slate-200 text-slate-900"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Asunto" 
                    className="bg-slate-50 border-slate-200 text-slate-900"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Describe tu caso brevemente..." 
                    rows={5}
                    className="bg-slate-50 border-slate-200 text-slate-900"
                  />
                </div>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Scale className="h-6 w-6 text-amber-500" />
            <span className="text-white font-semibold">Carlos Gómez - Asistente Judicial</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Carlos Gómez. Todos los derechos reservados. Rosario, Argentina.
          </p>
        </div>
      </footer>
    </div>
  )
}
