
# Privia Siber Savaş Akademisi Case

Bu proje, MockAPI'den gelen verileri kullanarak bir kullanıcı tablosu oluşturur. Kullanıcılar, ad veya e-posta adresine göre aranabilir, tablo içerisinde silme ve düzenleme işlemleri yapılabilir ve seçili kullanıcılar toplu olarak silinebilir. Ayrıca, kullanıcıları rollerine göre ayıran bir navigasyon çubuğu (nav bar) bulunmaktadır. Kullanıcılar, rollerine tıklayarak o roldeki kullanıcılara erişebilirler. Kullanıcı ekleme özelliği de mevcuttur; kullanıcı ekleme butonuna tıklayarak yeni kullanıcılar ekleyebilirsiniz.

## Kullanılan Teknolojiler

- **İstemci**: ReactJS, MaterialUI
- **Araçlar**: MockAPI

## Demo

Uygulamanın demo versiyonuna aşağıdaki linkten ulaşabilirsiniz:

[https://siber-savas-akademisi-case.vercel.app/](https://siber-savas-akademisi-case.vercel.app/)

## Ekran Görüntüleri


![Uygulama Ekran Görüntüsü](https://private-user-images.githubusercontent.com/115845068/331865604-866d53ca-83e3-40c4-83d3-58dab7c6f7c2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTYxMTYzNDEsIm5iZiI6MTcxNjExNjA0MSwicGF0aCI6Ii8xMTU4NDUwNjgvMzMxODY1NjA0LTg2NmQ1M2NhLTgzZTMtNDBjNC04M2QzLTU4ZGFiN2M2ZjdjMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxOVQxMDU0MDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MTNjYTEyNjM2MWY3N2E0NGNiYzU2ZDU1NjZjNTVkNDU1YmVlZTZkOTEzNTY0Zjc1NTZkY2JmYzRkMTIyMTA0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.5aZUMyjXPsnZTiEmlg3tWGz_ZQnN8PDkVhtBeOO0xGo)
![Uygulama Ekran Görüntüsü](https://private-user-images.githubusercontent.com/115845068/331865602-d94305ba-f540-47a3-a02a-3405d309931b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTYxMTYzNDEsIm5iZiI6MTcxNjExNjA0MSwicGF0aCI6Ii8xMTU4NDUwNjgvMzMxODY1NjAyLWQ5NDMwNWJhLWY1NDAtNDdhMy1hMDJhLTM0MDVkMzA5OTMxYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxOVQxMDU0MDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00M2VkZTc2ZWIwNjc1Yzg1ZTEwNDk5OTg0YTZlMTAyNzEzZDU4MjIyMjEzYmM5OWMyNWNlZWQ4ZjE4Y2E2NzRkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.jkTHRZfg7y3-VryxT6UBoCKWnxLO4mn4h0adEOF7B_Q)


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
