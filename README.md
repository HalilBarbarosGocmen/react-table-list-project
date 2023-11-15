Proje Dökümantasyonu:

Bu dökümantasyon, Vite kullanılarak React ve Tailwind CSS ile geliştirilen bir projedir. Projeyi anlamak, geliştirmek ve sürdürmek için aşağıdaki bilgileri içermektedir.

Projenin Kurulumu -Projeyi klonlayın. -Projenin olduğu dizinde 1- npm i 2- npm run dev yaptığınız zaman proje çalışacaktır.

Proje Genel Bakışı
1.1 Proje Yapısı Proje, modüler bir yapıda olup ana dizin içerisindeki src klasöründe aşağıdaki alt klasörleri içermektedir:

1.2 Teknolojiler React: Kullanıcı arayüzü oluşturmak ve bileşenleri yönetmek için kullanılmıştır. Tailwind CSS: Hızlı ve esnek bir şekilde stil oluşturmak için kullanılmıştır. API: Uygulama, dışarıdan bir API'dan ürün bilgilerini çekmektedir.

Özellikler
2.1 Ürün Listeleme ve Filtreleme API'den alınan ürün bilgileri kategori ve fiyat filtrelemeleri ile liste halinde gösterilir. Kullanıcılar ürünleri kategorilere göre filtreleyebilir ve belirli fiyat aralıklarını seçebilir. Arama çubuğu ile hızlı bir şekilde istenilen ürün aranabilir.

2.2 Sayfalama Sayfalama özelliği ile kullanıcılar büyük ürün listeleri arasında gezinebilir. Her sayfada belirli sayıda ürün gösterilir.

2.3 Ürün Ekleme, Düzenleme ve Silme Kullanıcılar yeni ürün ekleyebilir, mevcut ürünleri düzenleyebilir ve silebilir. Ürün eklenirken veya güncellenirken kullanıcıdan tüm gerekli bilgileri doldurması istenir. Hatalı giriş durumunda kullanıcıya bilgilendirme mesajları gösterilir.

2.4 Yönlendirme ve Ana Sayfa Seçenekleri Ana sayfada, ürünler ve kullanıcılar arasında geçiş yapmak için iki adet seçenek bulunur. Her seçenek, ilgili sayfaya yönlendirme yapar.

2.5 Görsel Hata Yönetimi API'den gelen fotoğrafsız ürünler için default "image not found" görseli eklenmiştir. Hatalı durumları kullanıcıya anlatmak için hata mesajları ve bildirimler kullanılmıştır.

2.6 Bilgilendirme Ekranları ve Animasyonlar Ürün eklenme ve güncellenme işlemlerinde başarılı olunca ekranın sağ üstünde bilgilendirme ekranları çıkar. Animasyonlar, kullanıcı deneyimini artırmak için kullanılmıştır.

Geliştirme ve Sürdürülebilirlik Uygulama, modüler bir yapıda olduğu için yeni özellikler eklemek veya mevcutları güncellemek kolaydır. Stil dosyaları Tailwind CSS ile oluşturulduğu için hızlı ve esnek bir şekilde düzenlenebilir. API servisi, ayrı bir dosyada bulunduğu için API değişikliklerine karşı dayanıklıdır.
