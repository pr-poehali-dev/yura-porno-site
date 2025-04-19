import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Server, Cpu, ArrowUpRight, BarChart3 } from "lucide-react";

const featuresData = [
  {
    icon: <Cpu className="h-12 w-12 text-primary" />,
    title: "Высокая производительность",
    description: "Оборудование последнего поколения с максимальной вычислительной мощностью для эффективного майнинга"
  },
  {
    icon: <Zap className="h-12 w-12 text-primary" />,
    title: "Энергоэффективность",
    description: "Низкое энергопотребление при максимальной производительности для увеличения вашей прибыли"
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Надежная защита",
    description: "Встроенные системы защиты от перегрева и скачков напряжения для долгой службы оборудования"
  },
  {
    icon: <Server className="h-12 w-12 text-primary" />,
    title: "Простая настройка",
    description: "Интуитивно понятный интерфейс и готовые профили для быстрого старта майнинга"
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-primary" />,
    title: "Мониторинг в реальном времени",
    description: "Отслеживайте производительность и доходность вашего оборудования в любое время"
  },
  {
    icon: <ArrowUpRight className="h-12 w-12 text-primary" />,
    title: "Масштабируемость",
    description: "Легко расширяйте вашу майнинговую ферму, добавляя новые устройства к существующей инфраструктуре"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Преимущества нашего оборудования</h2>
          <p className="text-muted-foreground text-lg">
            Мы создали идеальное решение для майнинга, сочетающее в себе высокую производительность, 
            надежность и энергоэффективность
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;