import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Calendar } from 'lucide-react';

interface NewsArticle {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  sourceUrl: string;
  source: string;
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Tim Bandhayudha UNDIP Juara: Ciptakan Robot Basket Pertama di Indonesia",
    description: "Tim Riset Bandhayudha Universitas Diponegoro menjadi finalis pada Kontes Robot Abu Indonesia (KRAI) 2025.",
    date: "Juli 22, 2025",
    imageUrl: "https://undip.ac.id/wp-content/uploads/2025/07/DSC04042-edit.jpg",
    sourceUrl: "https://undip.ac.id/post/49765/tim-bandhayudha-undip-juara-ciptakan-robot-basket-pertama-di-indonesia-dengan-mekanisme-dribble-shooting.html",
    source: "UNDIP"
  },
  {
    id: 2,
    title: "Prestasi Membanggakan Tim Robotika UNDIP di Kompetisi Internasional",
    description: "Tim Bandhayudha meraih juara 3 pada ABU Robocon 2024 dengan inovasi robot terbaru yang menggabungkan teknologi AI dan mekanika presisi.",
    date: "September 15, 2024",
    imageUrl: "/bandhayudha-photo/2024-Juara3R.jpeg",
    sourceUrl: "#",
    source: "UNDIP News"
  },
  {
    id: 3,
    title: "Inovasi Robot Autonomous Bandhayudha Memenangkan Kompetisi Regional",
    description: "Dengan teknologi navigasi autonomous terdepan, robot Bandhayudha berhasil menjuarai kompetisi robotika tingkat regional.",
    date: "Agustus 10, 2024",
    imageUrl: "/bandhayudha-photo/Robots/R1_25.JPG",
    sourceUrl: "#",
    source: "Tech News"
  },
  {
    id: 4,
    title: "Bandhayudha UNDIP Gelar Workshop Robotika untuk Mahasiswa",
    description: "Workshop intensif robotika diselenggarakan untuk meningkatkan kemampuan mahasiswa dalam bidang teknologi robotika modern.",
    date: "Juli 5, 2024",
    imageUrl: "/bandhayudha-photo/Team/Team_2025.JPG",
    sourceUrl: "#",
    source: "Campus News"
  }
];

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => {
  return (
    <Card className="group overflow-hidden border border-border/40 hover:border-tech-blue/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-background/80 backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f3f4f6'/%3E%3Ctext x='200' y='100' text-anchor='middle' dy='0.35em' font-family='system-ui' font-size='16' fill='%236b7280'%3ENews Image%3C/text%3E%3C/svg%3E`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6">
        <div className="mb-3">
          <span className="inline-block px-2 py-1 text-xs font-medium text-tech-blue bg-tech-blue/10 rounded-md">
            {article.source}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight group-hover:text-tech-blue transition-colors duration-200 line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
          {article.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span>{article.date}</span>
          </div>
          
          <a 
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-tech-blue hover:text-tech-blue/80 font-medium transition-colors duration-200"
          >
            <span>Baca Selengkapnya</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const News: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
      <div className="container mx-auto px-4 py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest <span className="text-tech-blue">News</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest achievements, innovations, and activities from Team Bandhayudha UNDIP
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-accent mx-auto mt-6"></div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {newsArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-tech-blue text-white font-medium rounded-lg hover:bg-tech-blue/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Load More Articles
          </button>
        </div>

        {/* News Sources */}
        <div className="mt-16 pt-8 border-t border-border/40">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-2">News Sources</h3>
            <p className="text-muted-foreground text-sm">Our latest updates from various trusted sources</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-center">
              <span className="text-sm font-medium text-muted-foreground">UNDIP Official</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-medium text-muted-foreground">Campus News</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-medium text-muted-foreground">Tech Media</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-medium text-muted-foreground">Robotics Journal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
