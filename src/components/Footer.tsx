import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Mining Pro</h3>
            <p className="text-muted-foreground mb-4">
              Лидер в области майнинг-оборудования с инновационными решениями для максимальной прибыли.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Продукты</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Miner Pro X1</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Miner Ultra X2</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Miner Enterprise X3</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Аксессуары</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Запчасти</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">О компании</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Гарантия</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Блог</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Подписка на новости</h3>
            <p className="text-muted-foreground mb-4">
              Получайте последние новости и акции первыми
            </p>
            <div className="flex">
              <Input placeholder="Ваш email" className="rounded-r-none" />
              <Button type="submit" className="rounded-l-none">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © Mining Pro 2023. Все права защищены
          </p>
          
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Условия использования</a></li>
            <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Политика конфиденциальности</a></li>
            <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Карта сайта</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;