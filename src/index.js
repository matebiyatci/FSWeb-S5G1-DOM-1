const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const navigationItems = document.querySelectorAll('nav a');

for (let i = 0; i < navigationItems.length; i++) {
  navigationItems[i].textContent = siteContent.nav[`nav-item-${i+1}`];
  navigationItems[i].setAttribute('class', 'italic');
}

//navigationItems[0].textContent = siteContent.nav["nav-item-1"];
//navigationItems[0].setAttribute('class', 'italic');

const logoImage = document.getElementById('logo-img');
logoImage.src = siteContent.images["logo-img"];

var mainText = document.querySelector('.cta-text');
mainText.querySelector('h1').textContent = siteContent.cta.h1;
mainText.querySelector('button').textContent = siteContent.cta.button;

const mainImage = document.getElementById('cta-img');
mainImage.src = siteContent.images["cta-img"];

const h4Content = document.querySelectorAll('.top-content .text-content h4');
h4Content[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
h4Content[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];

const icerikContent = document.querySelectorAll('.top-content .text-content p');
icerikContent[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
icerikContent[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

const middleImage = document.getElementById('middle-img');
middleImage.src = siteContent.images["accent-img"];

const buttomh4 = document.querySelectorAll('.bottom-content .text-content h4');
buttomh4[0].textContent = siteContent["ana-içerik"]["servisler-h4"];
buttomh4[1].textContent = siteContent["ana-içerik"]["ürünler-h4"];
buttomh4[2].textContent = siteContent["ana-içerik"]["vizyon-h4"];

const buttomIcerik = document.querySelectorAll('.bottom-content .text-content p');
buttomIcerik[0].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
buttomIcerik[1].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
buttomIcerik[2].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

const contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent.iletisim["iletişim-h4"];

const contactContent = document.querySelectorAll('.contact p');
contactContent[0].textContent = siteContent.iletisim.adres;
contactContent[1].textContent = siteContent.iletisim.email;
contactContent[2].textContent = siteContent.iletisim.telefon;

const footerText = document.querySelector("footer a");
footerText.classList.add("bold");
footerText.textContent = siteContent.footer.copyright;