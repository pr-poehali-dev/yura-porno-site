import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ChevronRight } from "lucide-react";

const products = [
  {
    id: "miner-pro",
    name: "Miner Pro X1",
    hashrate: "85 TH/s",
    power: "3200W",
    price: "₽450,000",
    features: [
      "Автоматическая оптимизация",
      "Водяное охлаждение",
      "Тихая работа",
      "Гарантия 2 года"
    ]
  },
  {
    id: "miner-ultra",
    name: "Miner Ultra X2",
    hashrate: "125 TH/s",
    power: "3500W",
    price: "₽650,000",
    features: [
      "Продвинутая система охлаждения",
      "Оптимизация под разные алгоритмы",
      "Дистанционное управление",
      "Гарантия 3 года"
    ]
  },
  {
    id: "miner-enterprise",
    name: "Miner Enterprise X3",
    hashrate: "180 TH/s",
    power: "4100W",
    price: "₽950,000",
    features: [
      "Корпоративное решение",
      "Максимальная надежность",
      "Интеграция с дата-центрами",
      "Расширенная техподдержка 24/7",
      "Гарантия 5 лет"
    ]
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши продукты</h2>
          <p className="text-muted-foreground text-lg">
            Выберите оборудование, которое соответствует вашим потребностям майнинга
          </p>
        </div>
        
        <Tabs defaultValue="miner-pro" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="miner-pro">Pro X1</TabsTrigger>
            <TabsTrigger value="miner-ultra">Ultra X2</TabsTrigger>
            <TabsTrigger value="miner-enterprise">Enterprise X3</TabsTrigger>
          </TabsList>
          
          {products.map((product) => (
            <TabsContent key={product.id} value={product.id} className="mt-0">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/2">
                  <div className="relative aspect-square max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl backdrop-blur-sm border border-white/10"></div>
                    <img 
                      src="/placeholder.svg" 
                      alt={product.name} 
                      className="absolute inset-0 w-full h-full object-contain p-8"
                    />
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold">{product.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-4">
                        <p className="text-muted-foreground">Хешрейт</p>
                        <p className="text-2xl font-bold">{product.hashrate}</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-4">
                        <p className="text-muted-foreground">Энергопотребление</p>
                        <p className="text-2xl font-bold">{product.power}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold">{product.price}</span>
                      <span className="ml-2 text-muted-foreground">включая НДС</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="gap-2">
                        Заказать сейчас <ChevronRight size={16} />
                      </Button>
                      <Button size="lg" variant="outline">
                        Узнать детали
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductShowcase;