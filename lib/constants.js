// ==========================================
// GOODSHORT DATA CONSTANTS
// Extracted from scraping goodshort.com
// ==========================================

export const BASE_URL = 'https://www.goodshort.com';
export const SITE_NAME = 'GoodShort';
export const COMPANY = 'NewReading PTE.LTD';
export const CONTACT_EMAIL = 'contact@goodshort.com';
export const LOGO_URL = 'https://www.goodshort.com/public/img/gs-icon.jpg';

// ==========================================
// GENRES / CATEGORIES (10)
// ==========================================
export const GENRES = [
  { id: 'all', slug: 'lakon', name: 'SEMUA', nameEn: 'All', totalPages: 63 },
  { id: '135', slug: 'fantasi-135-lakon', name: 'Fantasi', nameEn: 'Fantasy', totalPages: 4 },
  { id: '136', slug: 'urban-136-lakon', name: 'Urban', nameEn: 'Urban' },
  { id: '137', slug: 'romansa-137-lakon', name: 'Romansa', nameEn: 'Romance' },
  { id: '138', slug: 'komedi-138-lakon', name: 'Komedi', nameEn: 'Comedy' },
  { id: '139', slug: 'thriller-139-lakon', name: 'Thriller', nameEn: 'Thriller' },
  { id: '140', slug: 'superpower-140-lakon', name: 'Superpower', nameEn: 'Superpower' },
  { id: '141', slug: 'drama-kostum-141-lakon', name: 'Drama Kostum', nameEn: 'Costume Drama' },
  { id: '148', slug: 'lgbt-148-lakon', name: 'LGBT', nameEn: 'LGBT' },
  { id: '149', slug: 'misteri-149-lakon', name: 'Misteri', nameEn: 'Mystery' },
];

// ==========================================
// CHANNELS (6)
// ==========================================
export const CHANNELS = [
  { slug: 'Paling-Tren', name: 'Paling Tren', nameEn: 'Most Trending' },
  { slug: 'Terbaru', name: 'Terbaru', nameEn: 'Latest' },
  { slug: 'Cerita-Romantis', name: 'Cerita Romantis', nameEn: 'Romantic Stories' },
  { slug: 'Eksklusif', name: 'Eksklusif', nameEn: 'Exclusive' },
  { slug: 'Rekomendasi-Penonton', name: 'Rekomendasi Penonton', nameEn: 'Viewer Recommendations' },
  { slug: 'Popular-Now', name: 'Popular Now', nameEn: 'Popular Now' },
];

// ==========================================
// THEME TAGS (26)
// ==========================================
export const THEME_TAGS = [
  'Sakit Hati', 'Manis', 'Pernikahan', 'Kebangkitan', 'Dunia Hiburan',
  'Perjalanan Waktu', 'Keluarga', 'Identitas Tersembunyi', 'Reinkarnasi',
  'Romansa Gelap', 'Balas Dendam', 'CLBK', 'Takdir', 'Penuh Intrik',
  'Fantasi Timur', 'Sejarah', 'Lingkungan Sosial', 'Dewasa Muda',
  'Politik dan Intrik', 'Sistem', 'Sekolah', 'Kultivasi', 'Romansa Kantor',
  'Penebusan', 'Olahraga', 'Anime',
];

// ==========================================
// CHARACTER TAGS (45)
// ==========================================
export const CHARACTER_TAGS = [
  'CEO', 'Anak Lucu', 'Menantu Pria', 'Alpha', 'Luna', 'Budak',
  'Dokter Ajaib', 'Mafia', 'Manusia Serigala', 'Naga', 'Dominan',
  'Monster', 'Vampir', 'Miliuner', 'Wanita Kuat', 'Iblis', 'Sekretaris',
  'OB', 'Orang Biasa', 'Dewa Masak', 'Ratu', 'Ibu Rumah Tangga',
  'Kaisar Wanita', 'CEO Wanita', 'Pengganti', 'Disayangi Semua',
  'Tuan Putri', 'Dewa Perang', 'Dewa Perang Wanita', 'Pewaris',
  'Pewaris Wanita', 'Pengasuh', 'Pengacara', 'Profesor', 'Pemburu',
  'Penyihir', 'Ayah Tunggal', 'Pengawal', 'Bangsawan', 'Atlet',
  'Petinju', 'Cinderella', 'Bad Girl', 'Anak Ajaib', 'Pembunuh',
];

// ==========================================
// PLOT TAGS (44)
// ==========================================
export const PLOT_TAGS = [
  'Pahlawan Kembali', 'Cinta Satu Malam', 'Harem', 'Nikah Kilat',
  'Benci', 'Cinta Segitiga', 'Pembalasan', 'Nikah Kontrak',
  'Pengkhianatan', 'Perceraian', 'Benci Jadi Cinta',
  'Konflik Keluarga dan Negara', 'Pasangan Kuat', 'Teman Masa Kecil',
  'Romansa Guru-Murid', 'Cinta Setelah Menikah', 'Intrik Istana',
  'Pewaris Asli dan Palsu', 'Perang Bisnis', 'Romansa Usia Dewasa',
  'Mencari Keluarga', 'Perselingkuhan', 'Pernikahan Pengganti',
  'Cinta Terlarang', 'Cinta dan Benci', 'Perjodohan',
  'Kabur dari Pernikahan', 'Salah Paham', 'Perbedaan Usia',
  'Kehamilan', 'Dibantu Bayi Lucu', 'Mengejar Istri',
  'Cinta Diam-diam Jadi Kenyataan', 'Kesalahan Identitas',
  'Menghukum Mantan Jahat', 'Master Turun Gunung', 'Amnesia',
  'Pura-pura Bodoh', 'Saling Kejar', 'SM', 'Bullying',
  'Berubah Kurus', 'BL', 'Penyesalan',
];

// ==========================================
// ADDITIONAL/POPULAR TAGS (10)
// ==========================================
export const ADDITIONAL_TAGS = [
  'humoris', 'pembalasan dendam', 'kaya', 'humor', 'hamil',
  'kasar', 'dewasa', 'mandiri', 'pintar', 'manis',
];

// ==========================================
// SORT OPTIONS
// ==========================================
export const SORT_OPTIONS = ['Popular', 'Recommendation', 'Updated'];

// ==========================================
// SUPPORTED LANGUAGES (11)
// ==========================================
export const LANGUAGES = [
  { code: 'en', name: 'English', path: '/' },
  { code: 'ko', name: '한국어', path: '/ko' },
  { code: 'th', name: 'ภาษาไทย', path: '/th' },
  { code: 'id', name: 'Indonesia', path: '/id' },
  { code: 'es', name: 'Español', path: '/es' },
  { code: 'de', name: 'Deutsch', path: '/de' },
  { code: 'fr', name: 'Français', path: '/fr' },
  { code: 'ja', name: '日本語', path: '/ja' },
  { code: 'pt', name: 'Português', path: '/pt' },
  { code: 'ar', name: 'العربية', path: '/ar' },
  { code: 'zh-tw', name: '繁體中文', path: '/zh-tw' },
];

// ==========================================
// SAMPLE DRAMAS (from scraping)
// ==========================================
export const SAMPLE_DRAMAS = [
  { id: '31001165594', slug: 'ayah-nakal-kau-ketahuan-31001165594', title: 'Ayah Nakal, Kau Ketahuan!', tags: ['Anak Lucu', 'Keluarga', 'CEO', 'Pahlawan Kembali', 'Nikah Kilat'] },
  { id: '31000885871', slug: 'putri-licik-menakluk-hati-31000885871', title: 'Putri Licik Menakluk Hati', tags: ['Pernikahan', 'Identitas Tersembunyi', 'Pewaris Wanita', 'Kesalahan Identitas', 'Salah Paham'] },
  { id: '31001238759', slug: 'mawar-putih-dan-kisah-masa-lalu-31001238759', title: 'Mawar Putih dan Kisah Masa Lalu', tags: ['Pewaris', 'Cinderella', 'Penyesalan', 'Identitas Tersembunyi'] },
  { id: '31001069305', slug: 'sulih-suara-pacarku-dominan-dan-liar-31001069305', title: '[Sulih Suara] Pacarku Dominan dan Liar', tags: ['Identitas Tersembunyi', 'Pahlawan Kembali', 'Mafia', 'Pasangan Kuat'] },
  { id: '31001226348', slug: 'sang-pengendali-hantu-terkuat-akhir-dari-era-kegelapan-31001226348', title: 'Sang Pengendali Hantu Terkuat: Akhir dari Era Kegelapan', tags: ['Kebangkitan', 'Pembalasan', 'Pahlawan Kembali', 'Orang Biasa', 'Anime'] },
  { id: '31000888236', slug: 'mendadak-jadi-istri-miliuner-31000888236', title: 'Mendadak Jadi Istri Miliuner', tags: ['Kehamilan', 'Manis', 'CEO'] },
  { id: '31000851823', slug: 'teknisi-hati-ceo-kaya-31000851823', title: 'Teknisi Hati CEO Kaya', tags: ['Manis', 'CEO', 'Wanita Kuat', 'Nikah Kilat', 'Cinta Setelah Menikah'] },
  { id: '31001076632', slug: 'kau-obatku-31001076632', title: 'Kau Obatku', tags: ['Manis', 'Mengejar Istri', 'CEO', 'Cinta Satu Malam'] },
  { id: '31001049775', slug: 'janji-manis-sang-bos-mafia-1-31001049775', title: 'Janji Manis Sang Bos Mafia 1', tags: ['Mafia', 'Nikah Kontrak', 'Takdir', 'Cinta Setelah Menikah', 'Mengejar Istri'] },
  { id: '31000913646', slug: 'terkekang-oleh-suami-gubernurku-31000913646', title: 'Terkekang oleh Suami Gubernurku', tags: ['Takdir', 'Romansa Kantor', 'Bangsawan', 'Cinta Satu Malam', 'Saling Kejar'] },
  { id: '31001026710', slug: 'gairah-yang-berbahaya-31001026710', title: 'Gairah Yang Berbahaya', tags: ['Takdir', 'Mafia', 'Cinderella', 'Kehamilan'] },
  { id: '31001167458', slug: 'api-dendam-yang-gelap-31001167458', title: 'Api Dendam yang Gelap', tags: ['Kebangkitan', 'Balas Dendam', 'Pembalasan', 'Dominan'] },
  { id: '31000958734', slug: 'master-tersembunyi-31000958734', title: 'Master Tersembunyi', tags: ['Identitas Tersembunyi', 'Balas Dendam', 'Miliuner', 'Pengkhianatan', 'Pembalasan'] },
  { id: '31001165588', slug: 'sulih-suara-master-tersembunyi-31001165588', title: '[Sulih Suara] Master Tersembunyi', tags: ['Identitas Tersembunyi', 'Balas Dendam', 'Miliuner', 'Pengkhianatan', 'Pembalasan'] },
  { id: '31000992205', slug: 'sulih-suara-cinta-di-titik-akhir-31000992205', title: '[Sulih Suara] Cinta di Titik Akhir', tags: ['Manis', 'Pernikahan', 'CEO', 'Nikah Kilat', 'Cinta Setelah Menikah'] },
  { id: '31001165192', slug: 'temani-kau-sampai-tua-31001165192', title: 'Temani Kau Sampai Tua', tags: ['Reinkarnasi', 'Kebangkitan', 'Pewaris Wanita', 'Cinta Diam-diam Jadi Kenyataan'] },
];

// ==========================================
// STATIC PAGES
// ==========================================
export const STATIC_PAGES = [
  { path: '/contact', name: 'Contact' },
  { path: '/login', name: 'Login' },
  { path: '/term-of-use', name: 'Term of Use' },
  { path: '/privacy-policy', name: 'Privacy Policy' },
  { path: '/business', name: 'Business' },
  { path: '/download-android-ios', name: 'Download App' },
  { path: '/library', name: 'Library (Watchlist)' },
  { path: '/subscription', name: 'Subscription' },
  { path: '/tags/id', name: 'All Tags' },
  { path: '/resources', name: 'Resources' },
  { path: '/hot-searches/all', name: 'Hot Searches' },
];

// ==========================================
// URL PATTERN HELPERS
// ==========================================
export const URL_PATTERNS = {
  drama: (slug) => `${BASE_URL}/drama/${slug}`,
  dramas: (genreSlug, page = 1) => page > 1 
    ? `${BASE_URL}/dramas/${genreSlug}?page=${page}` 
    : `${BASE_URL}/dramas/${genreSlug}`,
  tag: (tagSlug) => `${BASE_URL}/tag/${tagSlug}-lakon-video`,
  channel: (channelSlug) => `${BASE_URL}/channel/${channelSlug}-channel`,
  homepage: (lang = 'id') => lang === 'en' ? BASE_URL : `${BASE_URL}/${lang}`,
};

// ==========================================
// NAV ITEMS FOR DOCS
// ==========================================
export const NAV_ITEMS = [
  { title: 'Getting Started', href: '/docs/getting-started', icon: '🚀' },
  { title: 'Authentication', href: '/docs/authentication', icon: '🔒' },
  { title: 'Dramas', href: '/docs/dramas', icon: '🎬' },
  { title: 'Categories', href: '/docs/categories', icon: '📂' },
  { title: 'Tags', href: '/docs/tags', icon: '🏷️' },
  { title: 'Channels', href: '/docs/channels', icon: '📺' },
  { title: 'Search', href: '/docs/search', icon: '🔍' },
  { title: 'Errors', href: '/docs/errors', icon: '⚠️' },
];
