import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ExternalLink, Calendar, Search, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { newsArticles, type NewsArticle } from '@/lib/newsData';

const NewsCard: React.FC<{ article: NewsArticle; index?: number }> = ({ article, index = 0 }) => {
  return (
    <Card 
      className="group overflow-hidden border border-border/40 hover:border-tech-blue/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-background/80 backdrop-blur-sm animate-in slide-in-from-bottom-4"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden">
        {article.type === 'blog' && article.blogId ? (
          <Link to={`/blog/${article.blogId}`} state={{ from: 'news' }} className="block">
            <img 
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f3f4f6'/%3E%3Ctext x='200' y='100' text-anchor='middle' dy='0.35em' font-family='system-ui' font-size='16' fill='%236b7280'%3ENews Image%3C/text%3E%3C/svg%3E`;
              }}
            />
          </Link>
        ) : (
          <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="block">
            <img 
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f3f4f6'/%3E%3Ctext x='200' y='100' text-anchor='middle' dy='0.35em' font-family='system-ui' font-size='16' fill='%236b7280'%3ENews Image%3C/text%3E%3C/svg%3E`;
              }}
            />
          </a>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {article.featured && (
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-tech-blue rounded-md">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="mb-3">
          <span className="inline-block px-2 py-1 text-xs font-medium text-tech-blue bg-tech-blue/10 rounded-md">
            {article.source}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight transition-colors duration-200 line-clamp-2">
          {article.type === 'blog' && article.blogId ? (
            <Link
              to={`/blog/${article.blogId}`}
              state={{ from: 'news' }}
              className="hover:text-tech-blue transition-colors duration-200 cursor-pointer"
            >
              {article.title}
            </Link>
          ) : (
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tech-blue transition-colors duration-200 cursor-pointer"
            >
              {article.title}
            </a>
          )}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
          {article.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{article.date}</span>
            </div>
            {article.readTime && (
              <div className="flex items-center space-x-1">
                <BookOpen className="w-3 h-3" />
                <span>{article.readTime}</span>
              </div>
            )}
          </div>
          
          {article.type === 'blog' && article.blogId ? (
            <Link
              to={`/blog/${article.blogId}`}
              state={{ from: 'news' }}
              className="flex items-center space-x-1 text-tech-blue hover:text-tech-blue/80 font-medium transition-colors duration-200"
            >
              <span>Baca Selengkapnya</span>
              <BookOpen className="w-3 h-3" />
            </Link>
          ) : (
            <a 
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-tech-blue hover:text-tech-blue/80 font-medium transition-colors duration-200"
            >
              <span>Baca Selengkapnya</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const News: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to parse date string to Date object for comparison
  const parseDate = (dateString: string): Date => {
    // Handle Indonesian month names
    const monthMap: { [key: string]: number } = {
      'januari': 0, 'februari': 1, 'maret': 2, 'april': 3,
      'mei': 4, 'juni': 5, 'juli': 6, 'agustus': 7,
      'september': 8, 'oktober': 9, 'november': 10, 'desember': 11
    };

    const parts = dateString.toLowerCase().split(' ');
    if (parts.length === 3) {
      const day = parseInt(parts[1].replace(',', ''));
      const month = monthMap[parts[0]];
      const year = parseInt(parts[2]);
      return new Date(year, month, day);
    }
    
    // Fallback: try to parse as is
    return new Date(dateString);
  };

  const filteredArticles = newsArticles
    .filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesSearch;
    })
    .sort((a, b) => {
      // Sort by date in descending order (newest first)
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
        <div className="pt-16 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Latest News</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest achievements, innovations, and activities from Team Bandhayudha UNDIP
            </p>
          </div>
        </section>

          {/* Search Section */}
          <div className="mb-12 mt-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border-border/60 focus:border-tech-blue transition-colors duration-200"
                />
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <NewsCard key={article.id} article={article} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-muted-foreground text-lg mb-4">No articles found</div>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your search terms
                </p>
              </div>
            )}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-12">
            <Button className="px-8 py-3 bg-tech-blue text-white font-medium rounded-lg hover:bg-tech-blue/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Load More Articles
            </Button>
          </div>

          {/* News Sources */}
          <div className="mb-10 mt-12 pt-8 border-t border-border/40">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">News Sources</h3>
              <p className="text-muted-foreground text-sm">Our latest updates from various trusted sources</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-center">
                <span className="text-sm font-medium text-muted-foreground">UNDIP Official</span>
              </div>
              <div className="text-center">
                <span className="text-sm font-medium text-muted-foreground">FT UNDIP</span>
              </div>
              <div className="text-center">
                <span className="text-sm font-medium text-muted-foreground">Redaksi Bandhayudha</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
