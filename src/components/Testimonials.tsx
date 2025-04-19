import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "После внедрения этого майнинг-оборудования моя прибыль выросла на 40%. Отличное соотношение цены и качества!",
    author: "Алексей Семенов",
    role: "Частный майнер",
    avatar: "/placeholder.svg"
  },
  {
    quote: "Уже полгода работаю с этим оборудованием. Никаких сбоев, стабильный доход, минимальные затраты на электричество.",
    author: "Елена Павлова",
    role: "CEO майнинг-компании",
    avatar: "/placeholder.svg"
  },
  {
    quote: "Пробовал разное оборудование, но это — лучшее на рынке. Техподдержка всегда на связи, помогли с настройкой.",
    author: "Михаил Иванов",
    role: "Владелец майнинг-фермы",
    avatar: "/placeholder.svg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-muted-foreground text-lg">
            Узнайте, что говорят о нашем оборудовании те, кто уже успешно зарабатывает с его помощью
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border/50">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-10 w-10 text-primary/50" />
                
                <p className="text-lg">"{testimonial.quote}"</p>
                
                <div className="flex items-center pt-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;