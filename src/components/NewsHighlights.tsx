import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsArticles, type NewsArticle } from '@/lib/newsData';

const NewsCard: React.FC<{ article: NewsArticle; index: number; isLarge?: boolean }> = ({ 
  article, 
  index, 
  isLarge = false 
}) => {
  const parseDate = (dateString: string): Date => {
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
    
    return new Date(dateString);
  };

  const getTypeLabel = (article: NewsArticle) => {
    if (article.sourceUrl?.includes('youtube')) return { label: 'Video', color: 'bg-red-500' };
    return null; // No label for blog articles or regular news
  };

  const typeInfo = getTypeLabel(article);

  return (
    <Card 
      className={`group overflow-hidden border border-border/40 hover:border-tech-blue/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-background/80 backdrop-blur-sm animate-in slide-in-from-bottom-4 h-full flex flex-col`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden">
        {article.type === 'blog' && article.blogId ? (
          <Link to={`/blog/${article.blogId}`} className="block">
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
        
        {/* Featured Badge */}
        {article.featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-tech-blue rounded-md">
              Featured
            </span>
          </div>
        )}
        
        {/* Type Label - Only show if typeInfo exists */}
        {typeInfo && (
          <div className="absolute top-4 left-4">
            <span className={`inline-block px-3 py-1 text-xs font-medium text-white rounded-md ${typeInfo.color}`}>
              {typeInfo.label}
            </span>
          </div>
        )}
      </div>
      
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="mb-3">
          <span className="inline-block px-2 py-1 text-xs font-medium text-tech-blue bg-tech-blue/10 rounded-md">
            {article.source}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight transition-colors duration-200 line-clamp-2 flex-shrink-0">
          {article.type === 'blog' && article.blogId ? (
            <Link
              to={`/blog/${article.blogId}`}
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
        
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-grow">
          {article.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
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
        </div>
      </CardContent>
    </Card>
  );
};

const NewsHighlights: React.FC = () => {
  // Sort articles by date and take top 4
  const parseDate = (dateString: string): Date => {
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
    
    return new Date(dateString);
  };

  const sortedArticles = newsArticles
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 4);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/95 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              News
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay updated with our latest achievements, innovations, and breakthrough developments in robotics technology
            </p>
          </div>
          
          <Link
            to="/news"
            className="group inline-flex items-center px-6 py-3 bg-tech-blue/10 text-tech-blue rounded-lg hover:bg-tech-blue hover:text-white transition-all duration-300 font-medium"
          >
            View All Resources
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedArticles.map((article, index) => (
            <NewsCard 
              key={article.id} 
              article={article} 
              index={index}
              isLarge={false} // All cards same size
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsHighlights;
