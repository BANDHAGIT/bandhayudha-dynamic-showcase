// Shared news articles data that can be imported by both News.tsx and NewsHighlights.tsx

export interface NewsArticle {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  sourceUrl: string;
  source: string;
  type?: 'external' | 'blog';
  blogId?: string;
  readTime?: string;
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 9,
    title: "Inovatif, Mahasiswa Undip Ciptakan Basketball Robot",
    description: "Robot cerdas buatan Tim Bandhayudha Universitas Diponegoro yang bergerak mengitari lapangan basket layaknya pemain profesional.",
    date: "Juli 28, 2025",
    imageUrl: "https://img.youtube.com/vi/Wgq3qAqtIPE/maxresdefault.jpg",
    sourceUrl: "https://youtu.be/Wgq3qAqtIPE?si=L2jnq6AdDp7_1eg1",
    source: "KOMPASTV JATENG",
    type: "external",
    readTime: "3 menit",
    featured: true
  },
  {
    id: 8,
    title: "Draw for Harmony: Working Drawing Reading and PCB Design Training",
    description: "Webinar GRATIS tentang Altium & SolidWorks dengan narasumber berpengalaman! Upgrade skill kamu dalam Working Drawing Reading dan PCB Design. Daftar sekarang dan jangan lewatkan kesempatan ini! 🚀",
    date: "Februari 23, 2025",
    imageUrl: "/bandhayudha-photo/BandhaEdu_Thumbnail.png",
    sourceUrl: "https://www.instagram.com/p/DGX0WN8Ssee/",
    source: "Bandhayudha",
    type: "external",
    featured: false
  },
  {
    id: 1,
    title: "Tim Bandhayudha UNDIP Juara: Ciptakan Robot Basket Pertama di Indonesia",
    description: "Tim Riset Bandhayudha Universitas Diponegoro menjadi finalis pada Kontes Robot Abu Indonesia (KRAI) 2025 dengan menciptakan robot basket pertama di Indonesia yang menggunakan mekanisme dribble dan shooting canggih.",
    date: "Juli 22, 2025",
    imageUrl: "https://undip.ac.id/wp-content/uploads/2025/07/DSC04042-edit.jpg",
    sourceUrl: "https://undip.ac.id/post/49765/tim-bandhayudha-undip-juara-ciptakan-robot-basket-pertama-di-indonesia-dengan-mekanisme-dribble-shooting.html",
    source: "UNDIP Official",
    type: "external",
    featured: true
  },
  {
    id: 2,
    title: "Main Basket Lawan Robot? Robot Buatan UNDIP dapat Bikin Panik Pemain Basket Asli Lho!",
    description: "Tim Riset Robotika Bandhayudha memperkenalkan Basketball Robot yang dipersiapkan untuk tampil di KRAI 2025. Robot ini diuji coba langsung dengan pemain basket asli di GOR Prof. Dr. dr. Susilo Wibowo.",
    date: "Juli 6, 2025",
    imageUrl: "https://undip.ac.id/wp-content/uploads/2025/07/Picture1.webp",
    sourceUrl: "https://undip.ac.id/post/49297/main-basket-lawan-robot-robot-buatan-undip-dapat-bikin-panik-pemain-basket-asli-lho.html",
    source: "UNDIP Official",
    type: "external",
    featured: true
  },
  {
    id: 3,
    title: "Tim Bandhayudha Melaju ke KRAI 2025 Tingkat Nasional di ITB",
    description: "Tim Bandhayudha berhasil melaju ke Kontes Robot ABU Indonesia (KRAI) 2025 tingkat Nasional, yang akan berlangsung pada tanggal 6-9 Juli 2025 di Institut Teknologi Bandung (ITB).",
    date: "Juli 6, 2025",
    imageUrl: "https://undip.ac.id/wp-content/uploads/2025/07/DSCF2481-1-1024x683-edit.webp",
    sourceUrl: "https://undip.ac.id/post/49303/tim-bandhayudha-melaju-ke-krai-2025-tingkat-nasional-di-itb.html",
    source: "UNDIP Official",
    type: "external",
    featured: true
  },
  {
    id: 4,
    title: "Tim Bandhayudha Universitas Diponegoro Berhasil Meraih Juara 3 Tingkat Nasional dan Penghargaan Desain Terbaik pada Ajang KRI 2023",
    description: "Tim Bandhayudha UNDIP meraih Juara 3 tingkat nasional dan penghargaan Desain Terbaik dalam Kontes Robot Indonesia (KRI) 2023 divisi KRAI. Tim lintas bidang ilmu ini berhasil mengalahkan tim dari berbagai universitas terbaik.",
    date: "Juli 4, 2023",
    imageUrl: "https://undip.ac.id/wp-content/uploads/2023/07/Tim-Bandhayudha-Universitas-Diponegoro-Berhasil-Meraih-Juara-3-Tingkat-Nasional-dan-Penghargaan-Desain-Terbaik-pada-Ajang-Kontes-Robot-Indonesia-KRI-2023-1.jpg",
    sourceUrl: "https://undip.ac.id/post/29853/tim-bandhayudha-universitas-diponegoro-berhasil-meraih-juara-3-tingkat-nasional-dan-penghargaan-desain-terbaik-pada-ajang-kontes-robot-indonesia-kri-2023.html",
    source: "UNDIP Official",
    type: "external",
    featured: true
  },
  {
    id: 5,
    title: "Rancang Desain Robot Kompleks dan Elegan, Tim Bandhayudha FT Undip Berhasil Raih Juara 3 dan Penghargaan Desain Terbaik di Seleksi Wilayah II KRAI 2024",
    description: "Tim Bandhayudha Fakultas Teknik Universitas Diponegoro berhasil mencetak prestasi kembali dengan memenangkan juara 3 dan penghargaan desain robot terbaik untuk Wilayah II dalam ajang Kontes Robot ABU Indonesia (KRAI) 2024.",
    date: "Juni 5, 2024",
    imageUrl: "https://ft.undip.ac.id/wp-content/uploads/WhatsApp-Image-2024-06-13-at-18.24.30-980x551.jpeg",
    sourceUrl: "https://ft.undip.ac.id/rancang-desain-robot-kompleks-dan-elegan-tim-bandhayudha-ft-undip-berhasil-raih-juara-3-dan-penghargaan-desain-terbaik-di-seleksi-wilayah-ii-krai-2024/",
    source: "FT UNDIP",
    type: "external",
    featured: true
  },
  {
    id: 6,
    title: "Inovasi Robot Basket Bandhayudha: Terobosan Teknologi Robotika Indonesia 2025",
    description: "Mengupas tuntas perjalanan Tim Bandhayudha dalam mengembangkan robot basket pertama di Indonesia dengan teknologi AI dan computer vision.",
    date: "Agustus 5, 2025",
    imageUrl: "/bandhayudha-photo/R1_25_CROP.jpg",
    sourceUrl: "",
    source: "Bandhayudha",
    type: "blog",
    blogId: "inovasi-robot-basket-bandhayudha-2025",
    readTime: "12 menit",
    featured: false
  },
  {
    id: 7,
    title: "Perjalanan Menuju Podium: Cerita di Balik Juara 3 KRI 2023",
    description: "Mengintip perjuangan Tim Bandhayudha dalam meraih Juara 3 dan Best Design Award di Kontes Robot Indonesia 2023.",
    date: "Juli 15, 2023",
    imageUrl: "",
    sourceUrl: "",
    source: "Bandhayudha",
    type: "blog",
    blogId: "perjalanan-tim-bandhayudha-kri-2023",
    readTime: "15 menit",
    featured: true
  }
];
