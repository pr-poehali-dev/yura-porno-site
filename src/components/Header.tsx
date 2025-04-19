import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full border-b border-border/40 bg-background/80 backdrop-blur-md z-50">
      {/* Верхняя полоса с контактной информацией */}
      <div className="hidden md:block bg-muted/30 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <span>+7 (800) 555-35-35</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@mining-pro.ru</span>
              </div>
            </div>
            <div>
              <Button variant="link" size="sm" className="text-sm">Войти</Button>
              <Button variant="link" size="sm" className="text-sm">Регистрация</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Основное меню */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold flex items-center">
              <span className="text-primary">Mining</span>Pro
            </a>
          </div>
          
          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#" className="font-medium hover:text-primary transition-colors">Продукты</a>
            <a href="#" className="font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#" className="font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#" className="font-medium hover:text-primary transition-colors">Контакты</a>
            <Button>Заказать</Button>
          </nav>
          
          {/* Мобильное меню */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <a 
                  href="#" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Главная
                </a>
                <a 
                  href="#" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Продукты
                </a>
                <a 
                  href="#" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Преимущества
                </a>
                <a 
                  href="#" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Отзывы
                </a>
                <a 
                  href="#" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Контакты
                </a>
                <Button className="mt-4">Заказать</Button>
                
                <div className="pt-8 border-t border-border mt-4">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>+7 (800) 555-35-35</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>info@mining-pro.ru</span>
                    </div>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;