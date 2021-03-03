const categories = document.querySelector(".categories-wrapper");
const leisureBtn = document.querySelector(".leisure-btn");
const educationBtn = document.querySelector(".education-btn");
const healthBtn = document.querySelector(".health-btn");
const shopBtn = document.querySelector(".shop-btn");
const surpriseBtn = document.querySelector(".surprise-btn");
const leisure = document.querySelector(".leisure-wrapper");
const education = document.querySelector(".education-wrapper");
const health = document.querySelector(".health-wrapper");
const shop = document.querySelector(".shop-wrapper");
const giftWrapper = document.querySelector(".gift-wrapper");
const gift = document.querySelector(".gift");

const backLeisureСategory = document.querySelector(".back-leisure-category");
const backEducationСategory = document.querySelector(
  ".back-education-category"
);
const backHealthСategory = document.querySelector(".back-health-category");
const backShopСategory = document.querySelector(".back-shop-category");
const backGiftСategory = document.querySelector(".back-gift-category");

const iviBtn = document.querySelector(".ivi-btn");
const litresBtn = document.querySelector(".litres-btn");
const spotifyBtn = document.querySelector(".spotify-btn");
const steamBtn = document.querySelector(".steam-btn");
const yandexBtn = document.querySelector(".yandex-btn");
const books1cBtn = document.querySelector(".firstC-btn");
const cosmeticsBtn = document.querySelector(".cosmetics-btn");
const sportBtn = document.querySelector(".sport-btn");
const barbershopBtn = document.querySelector(".barbershop-btn");
const ozonBtn = document.querySelector(".ozon-btn");
const promuaBtn = document.querySelector(".promua-btn");
const headphonesBtn = document.querySelector(".headphones-btn");
const mouseBtn = document.querySelector(".mouse-btn");
const powerbankBtn = document.querySelector(".powerbank-btn");
const hddBtn = document.querySelector(".hdd-btn");

const iviGifts = [
  "1 месяц подписки",
  "3 месяца подписки",
  "Коллеги поют любимую песню"
];
const litresGifts = ["3 месяца подписки"];
const spotifyGifts = ["Сертификат на 3 месяц", "Сертификат на 6 месяца"];
const steamGifts = [
  "Сертификат на 750 рублей",
  "Сертификат на 1500 рублей",
  "Получить объятья от коллег"
];
const yandexGifts = [
  "3 месяца подписки",
  "6 месяцев подписки",
  "12 месяцев подписки",
  "Получить объятья от коллег"
];
const books1cGifts = [
  "Сертификат на 700 рублей/250 грн.",
  "Сертификат на 1000 рублей/350 грн."
];
const cosmeticsGifts = [
  "Сертификат на 700 рублей/250 грн.",
  "Сертификат на 1000 рублей/350 грн."
];
const sportGifts = [
  "Сертификат на 700 рублей/250 грн.",
  "Сертификат на 1000 рублей/350 грн."
];
const barbershopGifts = [
  "Сертификат на 700 рублей/250 грн.",
  "Сертификат на 1000 рублей/350 грн."
];
const ozonGifts = [
  "Сертификат на 700 рублей/250 грн.",
  "Сертификат на 1000 рублей/350 грн."
];
const surpriseGifts = [
  "Кружка",
  "Ежедневник",
  "Цветы",
  "Палка колбасы",
  "Семейные трусы",
  "Носки",
  "Руководитель весь день обращается к вам “Господин/Госпожа”"
];

function closeCategory(category) {
  category.classList.add("hidden");
  categories.classList.remove("hidden");
}

function openCategory(category) {
  categories.classList.add("hidden");
  category.classList.remove("hidden");
}

function closeGiftCategory() {
  giftWrapper.classList.add("hidden");
  categories.classList.remove("hidden");
}

function randomId(length) {
  return Math.floor(Math.random() * length);
}

function openGift(category, arr) {
  category.classList.add("hidden");
  const i = randomId(arr.length);
  gift.textContent = arr[i];
  giftWrapper.classList.remove("hidden");
}

function translateText() {
  const bigHeaders = document.querySelectorAll(".big-headers");
  const littleHeaders = document.querySelectorAll(".little-headers");
  window.onload = function translateHeaders() {
    bigHeaders.forEach(header => {
      header.style.transform = "translateY(0)";
    });
    littleHeaders.forEach(header => {
      header.style.transform = "translateX(0)";
    });
  };
}

leisureBtn.addEventListener("click", () => {
  openCategory(leisure);
});

educationBtn.addEventListener("click", () => {
  openCategory(education);
});

healthBtn.addEventListener("click", () => {
  openCategory(health);
});

shopBtn.addEventListener("click", () => {
  openCategory(shop);
});

backLeisureСategory.addEventListener("click", () => {
  closeCategory(leisure);
});

backEducationСategory.addEventListener("click", () => {
  closeCategory(education);
});

backHealthСategory.addEventListener("click", () => {
  closeCategory(health);
});

backShopСategory.addEventListener("click", () => {
  closeCategory(shop);
});

backGiftСategory.addEventListener("click", closeGiftCategory);

iviBtn.addEventListener("click", () => {
  openGift(leisure, iviGifts);
});

litresBtn.addEventListener("click", () => {
  openGift(education, litresGifts);
});

spotifyBtn.addEventListener("click", () => {
  openGift(leisure, spotifyGifts);
});

steamBtn.addEventListener("click", () => {
  openGift(leisure, steamGifts);
});

yandexBtn.addEventListener("click", () => {
  openGift(leisure, yandexGifts);
});

books1cBtn.addEventListener("click", () => {
  openGift(education, books1cGifts);
});

cosmeticsBtn.addEventListener("click", () => {
  openGift(health, cosmeticsGifts);
});

sportBtn.addEventListener("click", () => {
  openGift(health, sportGifts);
});

barbershopBtn.addEventListener("click", () => {
  openGift(health, barbershopGifts);
});

ozonBtn.addEventListener("click", () => {
  openGift(shop, ozonGifts);
});

promuaBtn.addEventListener("click", () => {
  openGift(shop, ozonGifts);
});

surpriseBtn.addEventListener("click", () => {
  openGift(categories, surpriseGifts);
});

translateText();
