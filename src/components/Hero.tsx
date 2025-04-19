import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Декоративные элементы */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-2">
              <Cpu size={16} className="mr-2" /> Новая эра майнинга
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Высокодоходный майнинг <span className="text-primary">криптовалюты</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Наше оборудование обеспечивает максимальную производительность при минимальном потреблении энергии. Начните зарабатывать прямо сейчас!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2">
                Начать майнить <ArrowRight size={16} />
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <BarChart3 className="text-primary h-6 w-6" />
                </div>
                <div>
                  <p className="text-xl font-bold">+245%</p>
                  <p className="text-sm text-muted-foreground">ROI за год</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Cpu className="text-secondary h-6 w-6" />
                </div>
                <div>
                  <p className="text-xl font-bold">24/7</p>
                  <p className="text-sm text-muted-foreground">Техподдержка</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl backdrop-blur-sm border border-white/10"></div>
              <img 
                src="/placeholder.svg" 
                alt="Майнинг установка" 
                className="absolute inset-0 w-full h-full object-contain p-8"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg border border-border shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <p className="font-medium">Активный майнинг</p>
                </div>
                <p className="text-sm text-muted-foreground">125.4 TH/s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;