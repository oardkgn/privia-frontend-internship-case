
# Privia Siber Savaş Akademisi Case

Bu proje, MockAPI'den gelen verileri kullanarak bir kullanıcı tablosu oluşturur. Kullanıcılar, ad veya e-posta adresine göre aranabilir, tablo içerisinde silme ve düzenleme işlemleri yapılabilir ve seçili kullanıcılar toplu olarak silinebilir. 
Ayrıca, kullanıcıları rollerine göre ayıran bir navigasyon çubuğu (nav bar) bulunmaktadır. Kullanıcılar, rollerine tıklayarak o roldeki kullanıcılara erişebilirler. Kullanıcı ekleme özelliği de mevcuttur; kullanıcı ekleme butonuna tıklayarak yeni kullanıcılar ekleyebilirsiniz.

## Kullanılan Teknolojiler

- **İstemci**: ReactJS, MaterialUI
- **Araçlar**: MockAPI

## Demo

Uygulamanın demo versiyonuna aşağıdaki linkten ulaşabilirsiniz:

[https://privia-frontend-internship-case.vercel.app/](https://privia-frontend-internship-case.vercel.app/)

## Ekran Görüntüleri


![Uygulama Ekran Görüntüsü](https://firebasestorage.googleapis.com/v0/b/inker-19943.appspot.com/o/images%2Fscreencapture-localhost-5173-2024-05-19-12_48_57.png?alt=media&token=b90cec5b-a88c-47a2-9372-968535d4ee47)

![Uygulama Ekran Görüntüsü](https://firebasestorage.googleapis.com/v0/b/inker-19943.appspot.com/o/images%2Fscreencapture-localhost-5173-2024-05-19-12_49_46.png?alt=media&token=2bd416da-f5e8-4cfe-96c3-9373c4c2d70b)


## Rozetler

![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

## Fonksiyonlar

### Navigasyon Çubuğu

- Kullanıcıları rollerine göre ayıran bir nav bar bulunmaktadır.
- Her bir role tıklayarak, o roldeki kullanıcılara erişim sağlayabilirsiniz.

### Kullanıcı Ekleme

- Yeni bir kullanıcı eklemek için, "Kullanıcı Ekle" butonuna tıklayın ve gerekli bilgileri girin.

### Kullanıcı Silme

- Bir kullanıcıyı silmek için, tabloda kullanıcının yanındaki silme ikonuna tıklayın.Silme işlemini onaylamak için bir popup çıkacaktır ve işlemi onaylar iseniz kullanıcı silme işlemi gerçekleştirilir.

### Kullanıcı Düzenleme

- Bir kullanıcıyı düzenlemek için, tabloda kullanıcının yanındaki düzenleme ikonuna tıklayın.

### Toplu Silme

- Birden fazla kullanıcıyı toplu olarak silmek için, ilgili kullanıcıları seçip tablonun üstündeki silme butonuna tıklayın ve çift aşamalı onay kutusunda silme işlemizi onaylayın.

### Arama

- Kullanıcıları aramak için, arama kutusuna ilgili kişinin kullanıcı adını veya e-posta adresini girin.



## API Komutlar

### Tüm Kullanıcıları Getir

GET /api/v1/users



### Bir Kullanıcıyı Getir

GET /api/v1/users/${id}



| Parametre | Tip    | Açıklama                           |
|-----------|--------|------------------------------------|
| id        | object | Gerekli. Çağrılacak kullanıcının anahtar değeri |

### Bir Kullanıcıyı Sil

DELETE /api/v1/users/${id}

| Parametre | Tip    | Açıklama                           |
|-----------|--------|------------------------------------|
| id        | object | Gerekli. Silinecek kullanıcının anahtar değeri |

### Bir Kullanıcıyı Güncelle

PUT /api/v1/users/${id}


| Parametre | Tip    | Açıklama                           |
|-----------|--------|------------------------------------|
| id        | object | Gerekli. Güncellenecek kullanıcının anahtar değeri |

### Bir Kullanıcı Ekle

POST /api/v1/users


| Parametre | Tip    | Açıklama                           |
|-----------|--------|------------------------------------|
| body      | object | Gerekli. Eklenilecek kullanıcının verileri |

## Bilgisayarınızda Çalıştırın

### Projeyi Klonlayın

```
git clone https://github.com/oardkgn/privia-frontend-internship-case

```

### Proje Dizinine Gidin

```
cd privia-frontend-internship-case
```
### Gerekli Paketleri Yükleyin

```
npm install
```
### Sunucuyu Çalıştırın

```
npm run dev
```
## Katkıda Bulunma

1.Bu depoyu çatallayın ve 
yeni bir dal oluşturun.
```
(git checkout -b feature/fooBar)
```
2.Değişikliklerinizi yapın ve adlandırın.
Değişikliklerinizi kaydedin.
```
(git commit -am 'Add some fooBar')
```
3.Dalınıza itin.
```
(git push origin feature/fooBar)
```
4.Bir birleştirme isteği oluşturun.
