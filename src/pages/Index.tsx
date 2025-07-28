import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedPower, setSelectedPower] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Электродрель PowerMax 750W',
      price: 8500,
      originalPrice: 10000,
      brand: 'PowerMax',
      power: '750W',
      category: 'drill',
      image: '/img/d05b4176-d954-4ce3-b95c-77c1d97a36eb.jpg',
      description: 'Мощная дрель с аккумулятором для профессиональных работ',
      rating: 4.8,
      inStock: true
    },
    {
      id: 2,
      name: 'Угловая шлифмachine ProTool 1200W',
      price: 12000,
      originalPrice: 14500,
      brand: 'ProTool',
      power: '1200W',
      category: 'grinder',
      image: '/img/953c9185-d1da-4eb0-a853-59863d4e10d0.jpg',
      description: 'Профессиональная УШМ для резки и шлифовки металла',
      rating: 4.9,
      inStock: true
    },
    {
      id: 3,
      name: 'Циркулярная пила ElectroMax 1500W',
      price: 15000,
      originalPrice: 18000,
      brand: 'ElectroMax',
      power: '1500W',
      category: 'saw',
      image: '/img/c88d0ede-c05b-42ac-a3b6-7a1b6a7ce328.jpg',
      description: 'Высокопроизводительная пила для точного реза',
      rating: 4.7,
      inStock: true
    },
    {
      id: 4,
      name: 'Перфоратор MegaDrill 850W',
      price: 13500,
      originalPrice: 16000,
      brand: 'MegaDrill',
      power: '850W',
      category: 'drill',
      image: '/img/d05b4176-d954-4ce3-b95c-77c1d97a36eb.jpg',
      rating: 4.6,
      inStock: true,
      description: 'Мощный перфоратор для бетона и кирпича'
    },
    {
      id: 5,
      name: 'Болгарка CompactTool 900W',
      price: 6500,
      originalPrice: 8000,
      brand: 'CompactTool',
      power: '900W',
      category: 'grinder',
      image: '/img/953c9185-d1da-4eb0-a853-59863d4e10d0.jpg',
      rating: 4.4,
      inStock: false,
      description: 'Компактная болгарка для домашних работ'
    },
    {
      id: 6,
      name: 'Лобзик PrecisionCut 650W',
      price: 7200,
      originalPrice: 9000,
      brand: 'PrecisionCut',
      power: '650W',
      category: 'saw',
      image: '/img/c88d0ede-c05b-42ac-a3b6-7a1b6a7ce328.jpg',
      rating: 4.5,
      inStock: true,
      description: 'Точный лобзик для фигурной резки дерева'
    }
  ];

  const filteredProducts = products.filter(product => {
    return (selectedCategory === 'all' || product.category === selectedCategory) &&
           (selectedBrand === 'all' || product.brand === selectedBrand) &&
           (selectedPower === 'all' || product.power === selectedPower);
  });

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-brand p-2 rounded-lg">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-brand bg-clip-text text-transparent">
                  PowerTools Store
                </h1>
                <p className="text-sm text-gray-600">Электроинструмент премиум-класса</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors">Каталог</a>
              <a href="#delivery" className="text-gray-700 hover:text-primary transition-colors">Доставка</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
              <div className="relative">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Icon name="ShoppingCart" size={20} />
                  <span>Корзина</span>
                  {cartItems > 0 && (
                    <Badge className="ml-2 bg-primary text-white">{cartItems}</Badge>
                  )}
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-brand py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">
            Профессиональный электроинструмент
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Мощные, надёжные инструменты для профессионалов и любителей. 
            Гарантия качества, быстрая доставка, лучшие цены.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 animate-scale-in">
            <Icon name="ArrowDown" size={20} className="mr-2" />
            Смотреть каталог
          </Button>
        </div>
      </section>

      {/* Filters */}
      <section id="catalog" className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Каталог товаров</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2">Тип инструмента</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Все категории" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="drill">Дрели</SelectItem>
                  <SelectItem value="grinder">Шлифмашины</SelectItem>
                  <SelectItem value="saw">Пилы</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Бренд</label>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger>
                  <SelectValue placeholder="Все бренды" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все бренды</SelectItem>
                  <SelectItem value="PowerMax">PowerMax</SelectItem>
                  <SelectItem value="ProTool">ProTool</SelectItem>
                  <SelectItem value="ElectroMax">ElectroMax</SelectItem>
                  <SelectItem value="MegaDrill">MegaDrill</SelectItem>
                  <SelectItem value="CompactTool">CompactTool</SelectItem>
                  <SelectItem value="PrecisionCut">PrecisionCut</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Мощность</label>
              <Select value={selectedPower} onValueChange={setSelectedPower}>
                <SelectTrigger>
                  <SelectValue placeholder="Любая мощность" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любая мощность</SelectItem>
                  <SelectItem value="650W">650W</SelectItem>
                  <SelectItem value="750W">750W</SelectItem>
                  <SelectItem value="850W">850W</SelectItem>
                  <SelectItem value="900W">900W</SelectItem>
                  <SelectItem value="1200W">1200W</SelectItem>
                  <SelectItem value="1500W">1500W</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end">
              <Button className="w-full bg-gradient-brand text-white">
                <Icon name="Search" size={20} className="mr-2" />
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-card">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </Badge>
                    {product.inStock ? (
                      <Badge className="absolute top-2 left-2 bg-green-500 text-white">
                        В наличии
                      </Badge>
                    ) : (
                      <Badge className="absolute top-2 left-2 bg-gray-500 text-white">
                        Нет в наличии
                      </Badge>
                    )}
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h4>
                  
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className={i < Math.floor(product.rating) ? 'fill-current' : ''}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <Badge variant="outline" className="mr-2">{product.brand}</Badge>
                    <Badge variant="outline">{product.power}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">{product.price.toLocaleString()} ₽</span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {product.originalPrice.toLocaleString()} ₽
                      </span>
                    </div>
                  </div>
                  
                  <Button
                    className="w-full bg-gradient-brand text-white hover:opacity-90"
                    onClick={addToCart}
                    disabled={!product.inStock}
                  >
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    {product.inStock ? 'В корзину' : 'Товар закончился'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Package" size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Товары не найдены</h3>
              <p className="text-gray-500">Попробуйте изменить параметры фильтрации</p>
            </div>
          )}
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Наши бренды</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {['PowerMax', 'ProTool', 'ElectroMax', 'MegaDrill', 'CompactTool', 'PrecisionCut'].map((brand) => (
              <div key={brand} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                <div className="bg-gradient-brand p-3 rounded-full w-12 h-12 mx-auto mb-3">
                  <Icon name="Wrench" size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-gray-800">{brand}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-brand p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Быстрая доставка</h4>
              <p className="text-gray-600">Доставим заказ в течение 1-2 дней по всей России</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-brand p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Гарантия качества</h4>
              <p className="text-gray-600">2 года гарантии на все электроинструменты</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-brand p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Headphones" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Поддержка 24/7</h4>
              <p className="text-gray-600">Консультации и техподдержка круглосуточно</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section id="delivery" className="py-16 bg-gradient-brand text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Доставка и оплата</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <Icon name="MapPin" size={48} className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Доставка</h4>
              <p>По Москве — бесплатно от 5000₽<br />По России — от 300₽</p>
            </div>
            <div>
              <Icon name="CreditCard" size={48} className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Оплата</h4>
              <p>Наличными, картой, переводом<br />Рассрочка 0% до 12 месяцев</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">О компании PowerTools Store</h3>
            <p className="text-lg text-gray-600 mb-8">
              Более 10 лет мы поставляем качественный электроинструмент для профессионалов 
              и любителей. В нашем ассортименте только проверенные бренды и надёжные модели.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600">лет на рынке</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-600">товаров в каталоге</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50k+</div>
                <div className="text-gray-600">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Контакты</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Icon name="Phone" size={32} className="mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Телефон</h4>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </div>
            
            <div className="text-center">
              <Icon name="Mail" size={32} className="mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-gray-600">info@powertools.ru</p>
            </div>
            
            <div className="text-center">
              <Icon name="Clock" size={32} className="mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Режим работы</h4>
              <p className="text-gray-600">Ежедневно 9:00-21:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-brand p-2 rounded-lg mr-3">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold">PowerTools Store</span>
          </div>
          <p className="text-gray-400 mb-4">
            © 2024 PowerTools Store. Все права защищены.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;