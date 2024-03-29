import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        create: "Create",
      },
      fetchData: "Fetch Data",
      edit: "Edit",
      pageTitles: {
        home: "Welcome {{username}} to GraphQL App",
        create: "Create Photo",
        edit: "Edit Photo",
      },
      submitBtn: {
        isloading: {
          create: "Creating...",
          edit: "Editing...",
        },
        create: "Create",
        edit: "Edit",
      },
      formPlaceholder: {
        photoUrl: "Photo Url...",
        description: "Description...",
      },
    },
  },
  tr: {
    translation: {
      nav: {
        home: "Ana Sayfa",
        create: "Oluştur",
      },
      fetchData: "Veri Çek",
      edit: "Düzenle",
      pageTitles: {
        home: "GraphQL Uygulamasına Hoşgeldiniz {{username}}",
        create: "Fotoğraf Oluştur",
        edit: "Fotoğraf Düzenle",
      },
      submitBtn: {
        isloading: {
          create: "Oluşturuluyor...",
          edit: "Düzenleniyor...",
        },
        create: "Oluştur",
        edit: "Düzenle",
      },
      formPlaceholder: {
        photoUrl: "Fotoğraf Url...",
        description: "Açıklama...",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,

  fallbackLng: ["en", "tr"],
  supportedLngs: ["en", "tr"],
});

export default i18n;
