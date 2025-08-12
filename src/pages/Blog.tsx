import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl: string;
  featured: boolean;
}

// Database blog posts - nanti bisa dipindah ke file terpisah atau API
const blogPosts: BlogPost[] = [
  {
    id: 'inovasi-robot-basket-bandhayudha-2025',
    title: 'Inovasi Robot Basket Bandhayudha: Terobosan Teknologi Robotika Indonesia 2025',
    excerpt: 'Mengupas tuntas perjalanan Tim Bandhayudha dalam mengembangkan robot basket pertama di Indonesia dengan teknologi AI dan computer vision.',
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="lead">Tim Bandhayudha UNDIP telah menciptakan sejarah baru dalam dunia robotika Indonesia dengan mengembangkan robot basket pertama yang mampu bermain layaknya pemain profesional. Inovasi ini menjadi bukti nyata kemampuan mahasiswa Indonesia dalam menghadapi tantangan teknologi global.</p>

        <h2>Latar Belakang Pengembangan</h2>
        <p>Proyek robot basket ini berawal dari tantangan Kontes Robot ABU Indonesia (KRAI) 2025 yang mengangkat tema "Robot Basketball". Tim Bandhayudha, yang telah berpengalaman dalam berbagai kompetisi robotika nasional dan internasional, melihat ini sebagai peluang untuk mengembangkan teknologi yang belum pernah ada di Indonesia.</p>

        <blockquote>
          <p>"Kami tidak hanya ingin berpartisipasi, tetapi menciptakan sesuatu yang benar-benar baru dan dapat menginspirasi generasi robotika Indonesia selanjutnya," ujar Helmi Yusuf, Ketua Tim Bandhayudha.</p>
        </blockquote>

        <h2>Teknologi yang Diterapkan</h2>
        <p>Robot basket Bandhayudha menggabungkan berbagai teknologi canggih:</p>
        
        <ul>
          <li><strong>Computer Vision:</strong> Sistem pengenalan bola dan ring dengan akurasi tinggi</li>
          <li><strong>Artificial Intelligence:</strong> Algoritma pembelajaran mesin untuk prediksi trajectory</li>
          <li><strong>Autonomous Navigation:</strong> Sistem navigasi mandiri di lapangan</li>
          <li><strong>Precision Mechanics:</strong> Mekanisme shooting dan dribbling yang presisi</li>
          <li><strong>Real-time Processing:</strong> Pemrosesan data real-time untuk respon cepat</li>
        </ul>

        <h2>Proses Pengembangan</h2>
        <p>Pengembangan robot ini memakan waktu lebih dari 8 bulan dengan melibatkan mahasiswa dari berbagai disiplin ilmu:</p>
        
        <h3>1. Fase Perancangan (Bulan 1-2)</h3>
        <p>Tim mulai dengan riset mendalam tentang dinamika permainan basket dan analisis gerakan pemain profesional. Tahap ini melibatkan simulasi komputer untuk menentukan desain optimal.</p>

        <h3>2. Fase Prototyping (Bulan 3-5)</h3>
        <p>Pembuatan prototipe pertama dan pengujian berbagai komponen. Tim menghadapi berbagai tantangan teknis, terutama dalam mengintegrasikan sistem mekanis dengan AI.</p>

        <h3>3. Fase Testing & Optimization (Bulan 6-8)</h3>
        <p>Pengujian intensif di lapangan basket sesungguhnya, termasuk uji coba melawan pemain basket UKM UNDIP untuk mengukur performa robot.</p>

        <h2>Tantangan yang Dihadapi</h2>
        <p>Beberapa tantangan utama dalam pengembangan ini antara lain:</p>

        <ol>
          <li><strong>Akurasi Shooting:</strong> Mengembangkan algoritma yang dapat menghitung trajectory dengan mempertimbangkan berbagai faktor seperti jarak, sudut, dan kekuatan angin.</li>
          <li><strong>Stabilitas Gerak:</strong> Memastikan robot tetap stabil saat bergerak cepat dan melakukan manuver kompleks.</li>
          <li><strong>Real-time Decision Making:</strong> Mengintegrasikan AI yang dapat membuat keputusan cepat dalam situasi dinamis.</li>
          <li><strong>Keterbatasan Hardware:</strong> Mengoptimalkan performa dengan keterbatasan resource dan budget.</li>
        </ol>

        <h2>Prestasi dan Pengakuan</h2>
        <p>Robot basket Bandhayudha telah meraih berbagai pencapaian membanggakan:</p>
        
        <ul>
          <li>Finalist KRAI 2025</li>
          <li>Mendapat pengakuan dari komunitas robotika internasional</li>
          <li>Menjadi robot basket pertama buatan Indonesia</li>
          <li>Menciptakan viral moment saat uji coba melawan pemain basket asli</li>
        </ul>

        <h2>Dampak dan Masa Depan</h2>
        <p>Inovasi ini tidak hanya berhenti pada kompetisi. Tim Bandhayudha melihat potensi besar untuk pengembangan lebih lanjut:</p>

        <h3>Aplikasi Komersial</h3>
        <p>Teknologi yang dikembangkan dapat diterapkan dalam:</p>
        <ul>
          <li>Training partner untuk atlet basket profesional</li>
          <li>Entertainment robot untuk acara dan pertunjukan</li>
          <li>Educational tool untuk pembelajaran robotika</li>
          <li>Research platform untuk pengembangan AI sports</li>
        </ul>

        <h3>Kontribusi Terhadap Pendidikan</h3>
        <p>Proyek ini telah menjadi inspirasi bagi mahasiswa teknik di seluruh Indonesia. Beberapa universitas lain mulai mengembangkan program serupa, menciptakan ekosistem robotika yang lebih dinamis.</p>

        <h2>Testimoni Tim</h2>
        <blockquote>
          <p>"Melihat robot kita bisa shooting dengan akurasi tinggi untuk pertama kali adalah moment yang tidak akan pernah kami lupakan. Semua kerja keras selama 8 bulan terbayar lunas," kenang Brian Fari Firmansyah, Lead Programmer Tim Bandhayudha.</p>
        </blockquote>

        <blockquote>
          <p>"Sebagai mahasiswa teknik mesin, mengintegrasikan precision mechanics dengan AI adalah tantangan yang sangat menarik. Ini membuktikan bahwa kolaborasi interdisipliner menghasilkan inovasi terbaik," tambah Amalia Inana Kesuma Putri, Mechanical Engineer Tim.</p>
        </blockquote>

        <h2>Kesimpulan</h2>
        <p>Robot basket Bandhayudha bukan sekadar proyek kompetisi, melainkan simbol kemampuan mahasiswa Indonesia dalam menghadapi tantangan teknologi global. Dengan semangat inovasi dan kolaborasi, tim ini telah membuktikan bahwa Indonesia mampu menjadi pionir dalam teknologi robotika.</p>

        <p>Keberhasilan ini diharapkan dapat menginspirasi lebih banyak mahasiswa untuk terjun ke dunia robotika dan menciptakan inovasi-inovasi yang dapat membanggakan Indonesia di kancah internasional.</p>

        <hr>

        <p><em>Artikel ini ditulis berdasarkan wawancara mendalam dengan Tim Bandhayudha UNDIP dan observasi langsung proses pengembangan robot basket pada periode Januari-Agustus 2025.</em></p>
      </div>
    `,
    author: 'Tim Editorial Bandhayudha',
    date: 'Agustus 5, 2025',
    readTime: '12 menit',
    category: 'Teknologi',
    tags: ['Robotika', 'AI', 'KRAI 2025', 'Inovasi', 'Basketball'],
    imageUrl: 'https://undip.ac.id/wp-content/uploads/2025/07/DSC04042-edit.jpg',
    featured: true
  },
  {
    id: 'perjalanan-tim-bandhayudha-kri-2023',
    title: 'Perjalanan Menuju Podium: Cerita di Balik Juara 3 KRI 2023',
    excerpt: 'Mengintip perjuangan Tim Bandhayudha dalam meraih Juara 3 dan Best Design Award di Kontes Robot Indonesia 2023.',
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="lead">Tahun 2023 menjadi tahun bersejarah bagi Tim Bandhayudha UNDIP. Setelah melalui persiapan intensif selama berbulan-bulan, tim berhasil meraih Juara 3 dan penghargaan Best Design pada Kontes Robot Indonesia (KRI) 2023. Namun, di balik kesuksesan ini tersimpan cerita perjuangan yang penuh tantangan.</p>

        <h2>Awal Mula Persiapan</h2>
        <p>Persiapan KRI 2023 dimulai sejak November 2022. Tim yang dipimpin oleh Miftahul Anwar ini menyadari bahwa kompetisi tahun ini akan jauh lebih ketat dibandingkan tahun-tahun sebelumnya.</p>

        <blockquote>
          <p>"Kami tahu bahwa untuk bisa bersaing di level nasional, kami tidak bisa mengandalkan pengalaman lama. Kami harus inovasi dan bekerja lebih keras," ujar Miftahul Anwar, Ketua Tim 2023.</p>
        </blockquote>

        <h2>Tantangan Teknis</h2>
        <p>KRI 2023 mengangkat tema robot yang harus mampu melemparkan ring ke dalam tiang dengan dua jenis robot: Rabbit Robot (RR) dan Elephant Robot (ER). Tantangan utamanya adalah koordinasi antara kedua robot dan akurasi lemparan.</p>

        <h3>Rabbit Robot (RR)</h3>
        <p>Robot yang dirancang untuk kecepatan dan agility ini memiliki spesifikasi:</p>
        <ul>
          <li>Sistem navigasi autonomous dengan sensor LIDAR</li>
          <li>Mekanisme pengambilan ring otomatis</li>
          <li>Komunikasi real-time dengan Elephant Robot</li>
          <li>Berat maksimal 15kg dengan dimensi terbatas</li>
        </ul>

        <h3>Elephant Robot (ER)</h3>
        <p>Robot yang fokus pada akurasi dan kekuatan ini dilengkapi:</p>
        <ul>
          <li>Sistem shooting dengan presisi tinggi</li>
          <li>Algoritma trajectory calculation</li>
          <li>Mekanisme stabilisasi untuk akurasi maksimal</li>
          <li>Interface komunikasi dengan operator</li>
        </ul>

        <h2>Momen Kritis</h2>
        <p>Dua bulan sebelum kompetisi, tim mengalami kegagalan besar saat testing. Rabbit Robot mengalami kerusakan sistem navigasi yang membuatnya tidak bisa beroperasi dengan baik.</p>

        <p>"Itu adalah momen terkelam kami. Sudah 4 bulan kerja keras, tiba-tiba semuanya seperti sia-sia. Tapi justru di situlah kekuatan tim kami teruji," kenang Sirojudin Munir, Lead Electronics Engineer.</p>

        <h3>Solusi Kreatif</h3>
        <p>Tim tidak menyerah. Mereka melakukan redesign total sistem navigasi dalam waktu 3 minggu, dengan kerja lembur hampir 18 jam sehari. Mahasiswa dari berbagai fakultas bergotong-royong:</p>

        <ul>
          <li><strong>Teknik Elektro:</strong> Merancang ulang sistem kontrol dan sensor</li>
          <li><strong>Teknik Mesin:</strong> Memodifikasi struktur mekanis untuk efisiensi</li>
          <li><strong>Teknik Komputer:</strong> Mengoptimalkan algoritma dan software</li>
          <li><strong>Sekolah Vokasi:</strong> Precision manufacturing komponen custom</li>
        </ul>

        <h2>Hari Kompetisi</h2>
        <p>Kompetisi berlangsung di Universitas Semarang pada 21-26 Juni 2023. Tim Bandhayudha harus berhadapan dengan 62 tim terbaik dari seluruh Indonesia.</p>

        <h3>Babak Penyisihan</h3>
        <p>Pada babak penyisihan, robot Bandhayudha tampil konsisten. Rabbit Robot berhasil mengumpulkan ring dengan efisien, sementara Elephant Robot menunjukkan akurasi shooting yang impresif dengan success rate 85%.</p>

        <h3>Babak Semifinal</h3>
        <p>Lawan di semifinal adalah tim dari Institut Teknologi Sepuluh Nopember (ITS) yang dikenal sangat kuat. Pertandingan berlangsung sengit, namun tim Bandhayudha berhasil unggul dengan strategi koordinasi yang superior.</p>

        <h3>Babak Final</h3>
        <p>Di final, tim Bandhayudha berhadapan dengan tim dari Universitas Indonesia. Meskipun tidak berhasil meraih juara 1, performa yang ditunjukkan sangat memukau juri dan penonton.</p>

        <h2>Best Design Award</h2>
        <p>Yang membuat tim Bandhayudha istimewa adalah desain robot yang elegant dan fungsional. Juri terkesan dengan:</p>

        <ol>
          <li><strong>Innovative Mechanism:</strong> Sistem pengambilan dan pelemparan ring yang unik</li>
          <li><strong>Aesthetic Design:</strong> Desain yang tidak hanya fungsional tapi juga indah dipandang</li>
          <li><strong>Build Quality:</strong> Kualitas manufaktur yang sangat baik</li>
          <li><strong>Technical Documentation:</strong> Dokumentasi teknis yang lengkap dan profesional</li>
        </ol>

        <blockquote>
          <p>"Tim Bandhayudha menunjukkan bahwa engineering bukan hanya soal fungsi, tapi juga estetika. Desain mereka menginspirasi tim-tim lain," komentar Prof. Dr. Ahmad Susanto, Ketua Juri KRI 2023.</p>
        </blockquote>

        <h2>Dampak dan Legacy</h2>
        <p>Prestasi KRI 2023 ini membawa dampak besar bagi Tim Bandhayudha dan UNDIP:</p>

        <h3>Untuk Tim Bandhayudha</h3>
        <ul>
          <li>Meningkatnya reputasi di kancah robotika nasional</li>
          <li>Bertambahnya anggota baru yang tertarik robotika</li>
          <li>Dukungan lebih besar dari universitas dan sponsor</li>
          <li>Undangan sebagai pembicara di berbagai seminar robotika</li>
        </ul>

        <h3>Untuk UNDIP</h3>
        <ul>
          <li>Penguatan program studi teknik di UNDIP</li>
          <li>Meningkatnya minat mahasiswa pada bidang robotika</li>
          <li>Kerjasama penelitian dengan industri</li>
          <li>Media coverage yang positif secara nasional</li>
        </ul>

        <h2>Pelajaran yang Dipetik</h2>
        <p>Dari perjalanan KRI 2023 ini, tim Bandhayudha memetik beberapa pelajaran berharga:</p>

        <h3>1. Teamwork is Everything</h3>
        <p>"Tidak ada individu yang bisa menyelesaikan robot kompleks sendirian. Kekuatan tim yang solid adalah kunci sukses," refleksi Layaalin Mutmainah, Lead Software Engineer.</p>

        <h3>2. Embrace Failure</h3>
        <p>"Kegagalan adalah bagian dari proses pembelajaran. Yang penting adalah bagaimana kita bangkit dan belajar dari kesalahan," tambah Bima Arya Wichaksana, Mechanical Designer.</p>

        <h3>3. Innovation Never Stops</h3>
        <p>"Setelah KRI 2023, kami tidak berhenti. Kami terus mengembangkan teknologi baru untuk kompetisi selanjutnya," ungkap Muhammad Faizul Kirom, Research & Development Lead.</p>

        <h2>Kata Terakhir</h2>
        <p>KRI 2023 bukan akhir dari perjalanan, melainkan milestone penting dalam sejarah Tim Bandhayudha. Prestasi ini menjadi motivasi untuk terus berinovasi dan mengharumkan nama Indonesia di kancah robotika internasional.</p>

        <p>Bagi adik-adik mahasiswa yang tertarik dengan robotika, tim Bandhayudha selalu membuka pintu untuk kolaborasi dan pembelajaran bersama. Karena pada akhirnya, robotika bukan hanya tentang teknologi, tapi tentang membangun masa depan yang lebih baik.</p>

        <hr>

        <p><em>Artikel ini disusun berdasarkan wawancara dengan para anggota Tim Bandhayudha KRI 2023 dan dokumentasi lengkap persiapan kompetisi.</em></p>
      </div>
    `,
    author: 'Redaksi Bandhayudha',
    date: 'Juli 15, 2023',
    readTime: '15 menit',
    category: 'Kompetisi',
    tags: ['KRI 2023', 'Juara 3', 'Best Design', 'Tim Story'],
    imageUrl: 'https://undip.ac.id/wp-content/uploads/2023/07/Tim-Bandhayudha-Universitas-Diponegoro-Berhasil-Meraih-Juara-3-Tingkat-Nasional-dan-Penghargaan-Desain-Terbaik-pada-Ajang-Kontes-Robot-Indonesia-KRI-2023-1.jpg',
    featured: false
  }
];

const Blog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [backPath, setBackPath] = useState('/news');
  const [backLabel, setBackLabel] = useState('Back to News');
  
  useEffect(() => {
    // Check if user came from home page or news highlights
    const referrer = document.referrer;
    const state = location.state as { from?: string } | null;
    
    if (state?.from === 'home' || referrer.includes('/#') || referrer.endsWith('/')) {
      setBackPath('/');
      setBackLabel('Back to Home');
    } else if (referrer.includes('/news')) {
      setBackPath('/news');
      setBackLabel('Back to News');
    } else {
      // Default behavior - if unsure, use browser back
      setBackPath('');
      setBackLabel('Back to News');
    }
  }, [location]);
  
  const handleBackClick = (e: React.MouseEvent) => {
    if (backPath === '') {
      e.preventDefault();
      navigate(-1); // Go back in browser history
    }
  };
  
  // Find blog post by ID
  const post = blogPosts.find(p => p.id === id);
  
  if (!post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5 pt-16">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            {backPath ? (
              <Link 
                to={backPath}
                className="inline-flex items-center text-tech-blue hover:text-tech-blue/80 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {backLabel}
              </Link>
            ) : (
              <button
                onClick={handleBackClick}
                className="inline-flex items-center text-tech-blue hover:text-tech-blue/80 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {backLabel}
              </button>
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
        {/* Hero Section */}
        <div className="pt-16 pb-8">
          <div className="container mx-auto px-4">
            {/* Back Navigation */}
            <div className="mb-8">
              {backPath ? (
                <Link 
                  to={backPath}
                  className="inline-flex items-center text-tech-blue hover:text-tech-blue/80 font-medium transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {backLabel}
                </Link>
              ) : (
                <button
                  onClick={handleBackClick}
                  className="inline-flex items-center text-tech-blue hover:text-tech-blue/80 font-medium transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {backLabel}
                </button>
              )}
            </div>

            {/* Article Header */}
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-sm font-medium text-tech-blue bg-tech-blue/10 rounded-md mb-4">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {post.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} baca</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-12">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f3f4f6'/%3E%3Ctext x='400' y='200' text-anchor='middle' dy='0.35em' font-family='system-ui' font-size='24' fill='%236b7280'%3EBlog Image%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-lg prose-slate max-w-none prose-headings:text-foreground prose-p:text-foreground prose-p:leading-relaxed prose-li:text-foreground prose-blockquote:border-tech-blue prose-blockquote:text-foreground prose-strong:text-foreground prose-a:text-tech-blue hover:prose-a:text-tech-blue/80"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground mr-2">Tags:</span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 text-xs font-medium text-tech-blue bg-tech-blue/10 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
