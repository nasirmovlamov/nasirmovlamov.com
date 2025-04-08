import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const resources = {
  az: {
    translation: {
      home: 'Ana səhifə',
      about: 'Haqqımda',
      dashboard: 'Statistika',
      dashboardInfo:
        'Bu mənim şəxsi hesablarımdan toplanan statistikamdır. Bu statistikada YouTube, GitHub və s. platformalarında müxtəlif ölçülər izləyirəm.',
      blog: 'Bloq',
      blogInfo: 'Öyrənən zaman zövq aldığım hər şey',
      myName: 'Nasir Mövlamov',
      myJob: 'Proqram təminatı mühəndisi',
      myEnthusiasm: '',
      hobby: 'javascript, react, machine learning, open source ',
      loading: 'Yüklənir...',
      playing: 'Oynanır',
      spotifyPaused: 'Musiqi dayandırıldı',
      currentlyNotListening: 'Hal-hazırda musiqi dinləmir',
      goLatests: 'sonunculara keç',
      recentlyPlayed: 'Sonuncu dinlənilənlər',
      links: 'Linklər',
      jobTitle: 'İş haqqında',
      education: 'Təhsil',
      educationInfo:
        "2022-ci ildə ADNSU-da bakalavr üzrə 'Kompüter mühəndisliyi' təhsilini tamamladım. 2024-cü ildə ADNSU-da  'Süni İntellekt' üzrə təhsilimi bitirdim.",
      ytSubscribers: 'Youtube Abunələr',
      ytViews: 'Youtube Baxışlar',
      ytWatchTime: 'Youtube İzləmə müddəti',
      hour: 'saat',
      thousand: 'min',
      comingSoon: 'Tezliklə',
      questionsAndAnswers: '// suallar və cavablar',
      askAnyQuestion: '// İstənilən növ sualı soruşa bilərsiniz ? yalnız ingilis və türk dilində',
      submit: 'Göndər',
      loading: 'Yüklənir...',
      question: 'Sual',
      answer: 'Cavab',
      recentlyPlayedSpotifySongs: 'Son dinlənilən musiqilər',
      playing: 'Hazırda dinlənilir',
      paused: 'Musiqi dayandırılıb',
      recentlyPlayed: 'Son dinlənilənlər',
    },
  },
  en: {
    translation: {
      home: 'Home',
      about: 'About me',
      dashboard: 'Dashboard',
      dashboardInfo:
        'This is my personal dashboard. I use this dashboard to track various metrics across platforms like YouTube, GitHub, and more.',
      blog: 'Blog',
      blogInfo: 'Everything I enjoyed during learning',
      myName: 'Nasir Movlamov',
      myJob: 'Software engineer',
      myEnthusiasm: 'physics and martial arts enthusiast.',
      hobby: 'learning / talking about js, machine learning, open source etc.',
      loading: 'Loading...',
      playing: 'Playing',
      spotifyPaused: 'Music paused',
      currentlyNotListening: 'Currently not listening',
      goLatests: 'go recently',
      recentlyPlayed: 'Recently played',
      links: 'Links',
      jobTitle: 'Job title',
      education: 'Education',
      educationInfo:
        'I graduated from ASOIU with a BS in Computer Engineering in 2022 and completed an MS in Artificial Intelligence at ASOIU in 2024. I am currently serving in the army.',
      ytSubscribers: 'Youtube Subscribers',
      ytViews: 'Youtube Views',
      ytWatchTime: 'Youtube Watch Time',
      hour: 'hour',
      thousand: 'k',
      comingSoon: 'Coming soon',
      questionsAndAnswers: '// questions and answers',
      askAnyQuestion: '// You can ask any question ? only in english and turkish:/',
      submit: 'Submit',
      loading: 'Loading...',
      question: 'Question',
      answer: 'Answer',
      recentlyPlayedSpotifySongs: 'Recently played spotify songs',
      playing: 'Playing',
      paused: 'Paused',
      recentlyPlayed: 'Recently played',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
