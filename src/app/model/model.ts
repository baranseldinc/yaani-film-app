export interface film {
  filmName: string;
  description: string;
  filmId: string;
  director: string;
  imageSrc: string;
}

export interface category {
  categoryId: string;
  categoryName: string;
  list: film[];
}

let lorem: string =
  "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem ipsum' anahtar sözcükleri ile arama yapıldığında henüz tasarım aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli sürümleri geliştirilmiştir.";

lorem += lorem;
lorem += lorem;
lorem += lorem;

export const data: category[] = [
  {
    categoryId: 'dram',
    categoryName: 'Dram',
    list: [],
  },
  {
    categoryId: 'aksiyon',
    categoryName: 'Aksiyon',
    list: [
      {
        filmId: 'esaretin-bedeli',
        filmName: 'Esaretin Bedeli',
        description: 'Esaretin Bedeline ilişikin description',
        director: 'Frank Darabont',
        imageSrc:
          'https://i4.hurimg.com/i/hurriyet/75/750x422/55eabcc9f018fbb8f8938170.jpg',
      },
      {
        filmId: 'titanic',
        filmName: 'Titanik',
        description: 'Lorem ipsum dolor sit amet',
        director: 'James Cameroon',
        imageSrc:
          'https://www.donanimhaber.com/cache-v2/?t=20220627125602&width=-1&text=0&path=https://www.donanimhaber.com/images/images/haber/150070/titanic-beyaz-perdeye-geri-donuyor150070_0.jpg',
      },
    ],
  },
  {
    categoryId: 'macera',
    categoryName: 'Macera',
    list: [
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
    ],
  },
  {
    categoryId: 'komedi',
    categoryName: 'Komedi',
    list: [
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: lorem,
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
    ],
  },
  {
    categoryId: 'aile',
    categoryName: 'Aile',
    list: [
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
    ],
  },
  {
    categoryId: 'polisiye',
    categoryName: 'Polisiye',
    list: [
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
      {
        filmId: 'hizli-ve-ofkeli',
        filmName: 'Hızlı ve Öfkeli',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc: 'https://tr.web.img2.acsta.net/pictures/bzp/01/29173.jpg',
      },
      {
        filmId: 'matrix',
        filmName: 'Matrix',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Bedirhan DİNÇ',
        imageSrc:
          'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      },
      {
        filmId: '3-aptal',
        filmName: '3 Aptal',
        description: 'Lorem ipsum dolor sit amet',
        director: 'Baransel DİNÇ',
        imageSrc:
          'https://img.kitapyurdu.com/v1/getImage/fn:2306482/wh:true/wi:800',
      },
    ],
  },
];
