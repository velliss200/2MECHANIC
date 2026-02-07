document.addEventListener("DOMContentLoaded", function () {
  const AboutUsBtn = document.getElementById("AboutUsBtn");
  if (AboutUsBtn)
    AboutUsBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });

  const ServicesBtn = document.getElementById("ServicesBtn");
  if (ServicesBtn)
    ServicesBtn.addEventListener("click", () => {
      window.location.href = "services.html";
    });

  const ContactsBtn = document.getElementById("ContactsBtn");
  if (ContactsBtn)
    ContactsBtn.addEventListener("click", () => {
      window.location.href = "contacts.html";
    });

  const LearnMoreBtn = document.getElementById("LearnMoreBtn");
  if (LearnMoreBtn)
    LearnMoreBtn.addEventListener("click", () => {
      window.location.href = "services.html";
    });

  const lang = document.getElementById("lang");
  if (lang) {
    lang.addEventListener("change", function () {
      if (this.value === "english") {
        window.location.href = "index.html";
      }
      if (this.value === "bulgarian") {
        window.location.href = "indexBg.html";
      }
      if (this.value === "russian") {
        window.location.href = "indexRu.html";
      }
    });
  }
});
const AboutUsBtnRu = document.getElementById("AboutUsBtnRu");
if (AboutUsBtnRu)
  AboutUsBtnRu.addEventListener("click", () => {
    window.location.href = "indexRu.html";
  });

const ServicesBtnRu = document.getElementById("ServicesBtnRu");
if (ServicesBtnRu)
  ServicesBtnRu.addEventListener("click", () => {
    window.location.href = "servicesRu.html";
  });

const ContactsBtnRu = document.getElementById("ContactsBtnRu");
if (ContactsBtnRu)
  ContactsBtnRu.addEventListener("click", () => {
    window.location.href = "ContactsRu.html";
  });

const LearnMoreBtnRu = document.getElementById("LearnMoreBtnRu");
if (LearnMoreBtnRu)
  LearnMoreBtnRu.addEventListener("click", () => {
    window.location.href = "servicesRu.html";
  });

const AboutUsBtnBg = document.getElementById("AboutUsBtnBg");
if (AboutUsBtnBg)
  AboutUsBtnBg.addEventListener("click", () => {
    window.location.href = "indexBg.html";
  });

const ServicesBtnBg = document.getElementById("ServicesBtnBg");
if (ServicesBtnBg)
  ServicesBtnBg.addEventListener("click", () => {
    window.location.href = "servicesBg.html";
  });

const ContactsBtnBg = document.getElementById("ContactsBtnBg");
if (ContactsBtnBg)
  ContactsBtnBg.addEventListener("click", () => {
    window.location.href = "ContactsBg.html";
  });

const LearnMoreBtnBg = document.getElementById("LearnMoreBtnBg");
if (LearnMoreBtnBg)
  LearnMoreBtnBg.addEventListener("click", () => {
    window.location.href = "servicesBg.html";
  });




