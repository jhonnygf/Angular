import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MyServiceService } from '../../services/my-service.service';

type WeatherData ={
  city: string;
  temperature: string;
  humidity: string;
  weather: string;
}

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})

export class DetailComponent {
  cities = [
    {
      name: 'New York',
    image: 'https://nyc.eu/wp-content/uploads/2015/07/New_York_City-scaled.jpg',
    description: 'The city that never sleeps, featuring the iconic Times Square.',
    weather: null as WeatherData | null
  },
  {
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'The city of love and lights, home to the Eiffel Tower.',
    weather: null as WeatherData | null
  },
  {
    name: 'Tokyo',
    image: 'https://as1.ftcdn.net/v2/jpg/04/98/23/10/1000_F_498231018_6w6Zt0h2PdU4Muy5Tvph2VeNG67yTuwl.jpg',
    description: 'A bustling metropolis with rich traditions and the Tokyo Tower.',
    weather: null as WeatherData | null
  },
  {
    name: 'Sydney',
    image: 'https://www.civitatis.com/blog/wp-content/uploads/2018/01/vista-opera-house-sidney.jpg',
    description: 'A beautiful harbor city with the iconic Sydney Opera House.',
    weather: null as WeatherData | null
  },
  {
    name: 'Londres',
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'A city of history and modernity, featuring the Big Ben.',
    weather: null as WeatherData | null
  },
  {
    name: 'Rio de Janeiro',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQE-mF1ayHdhfw/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1690450951636?e=1736985600&v=beta&t=nkibmrlQHA4B9ubilYx9Mjc-NsmjDwvKSkkK9KlGXHc',
    description: 'Famous for its beaches and the Christ the Redeemer statue.',
    weather: null as WeatherData | null
  },
  {
    name: 'Barcelona',
    image: 'https://www.barcelo.com/guia-turismo/wp-content/uploads/que-visitar-en-barcelona-1.jpg',
    description: 'Known for the Sagrada Familia and its vibrant culture.',
    weather: null as WeatherData | null
  },
  {
    name: 'Dubai',
    image: 'https://viajesikea.com/wp-content/uploads/2022/02/dubai-body-of-water-coastal-and-oceanic-landforms-coast-tourism-water-1635192-pxhere.com_-870x480.jpg',
    description: 'A city of luxury, home to the Burj Khalifa.',
    weather: null as WeatherData | null
  },
  {
    name: 'Roma',
    image: 'https://st3.idealista.it/news/archivie/styles/amp_1200x675_16_9/public/2021-02/media/image/michele-bitetto-1AQTOjczEB0-unsplash.jpg?VersionId=SVamo0DfmeWzhBpxm46F1s4C_zaY9x3E&itok=HseQSbdb',
    description: 'The Eternal City, home to the Colosseum.',
    weather: null as WeatherData | null
  },
  {
    name: 'Estanbul',
    image: 'https://www.touristforum.net/wp-content/uploads/2022/09/Istambul-pont-desembre.jpg',
    description: 'A city bridging two continents, known for the Hagia Sophia.',
    weather: null as WeatherData | null
  },
  ];

  constructor(private router: Router, private weatherService: MyServiceService) {}

  getWeather(cityName: string) {
    const city = this.cities.find(c => c.name === cityName); // Encuentra la ciudad seleccionada
    if (!city) return; // Si no encuentra la ciudad, no hace nada

    this.weatherService.getWeatherByCity(cityName).subscribe(data => {
      city.weather = {
        city: `${data.name} (${data.sys.country})`,
        temperature: `${data.main.temp.toFixed(2)}ºC (${(data.main.temp + 273.15).toFixed(2)}K)`,
        humidity: `${data.main.humidity}%`,
        weather: `${data.weather[0].description} - ${data.weather[0].main}`,
      };
    });
  }


  goToLogin() {
    this.router.navigate(['/']); // Ajusta la ruta según tu configuración de enrutamiento
  }
  goToDetail() {
    this.router.navigate(['/detail']);
  }

  
}
