import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const language = localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next)
  .init({
    lng: language, // default language
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources: {
      en: {
        translation: {
          Home: "Home",
          Contact: "Contact",
          About: "About",
          Content: "Content",
          CallNow: "Call Now",
          VisitNow: "Visit Now",
          AboutUs: "About us",
          ContactUs: "Contact us",
          OurContent: "Our Content",
          OurGoal: "Our Mission",
          OurMission: "is to illuminate minds and inspire hearts across the world through the power of knowledge and awareness. We strive to create a platform that fosters personal growth, cultural appreciation, and social consciousness.",
          MakeYour: "Make Your",
          SocialMedia: "Social Media",
          MoreValuable: "More",
          Valueable: "Valueable",
          SeeMore: "See more",
          AboutUsContent: "Welcome to Steps, a vibrant social media platform dedicated to spreading knowledge and awareness across the world. Our mission is to inspire and empower individuals through thought-provoking quotes, engaging reels, and insightful content that resonates with the heart and mind.",
          Hero: "Empowering minds, one quote at a time. Explore our curated collection of inspiring quotes and reels, and discover the wisdom that will propel you forward. Join the movement and take your first step towards a brighter future.",
          Footer: "Join our community of like-minded individuals who are passionate about spreading knowledge and awareness. Follow us on social media to stay updated on our latest quotes, reels, and insights. Together, let's take steps towards a more informed and inspired world.",
          Reserved: "All right reserved.",
          ContactHeader: "Stay Connected with Steps",
          ContactHeaderText: "Follow us on social media for daily doses of inspiration and knowledge.",
          EachQoute: "Every quote",
          EachReel: "Every reel",
          EachStory: "Every story",
          EachQouteText: "has the potential to spark meaningful conversations and drive positive change.",
          EachReelText: "has the ability to inspire others and develop positive values ​​in them.",
          EachStoryText: "has the ability to develop personal skills and work to support them.",
          WeBelieve: "We Believe that",
          ContentText: "Our commitment is to curate content that resonates with our audience, encouraging them to reflect, engage, and take action in their lives and communities.",
          ContentTitle1: "Inspiring Quotes",
          ContentTitle2: "Thoughtful Writings",
          ContentTitle3: "Personal Growth",
          ContentTitle4: "Social Awareness",
          ContentDesc1: "A curated selection of quotes to inspire and motivate your journey.",
          ContentDesc2: "Engaging articles that spark reflection and meaningful discussions.",
          ContentDesc3: "Resources and tips to help you unlock your full potential.",
          ContentDesc4: "Content that raises awareness and encourages positive change.",
        },
      },
      ar: {
        translation: {
          Home: "الصفحة الرئيسية",
          Contact: "التواصل",
          About: "عنَا",
          Content: "المحتوى",
          CallNow: "اتصل الآن",
          VisitNow: "زرنا الآن",
          AboutUs: "من نحن",
          ContactUs: "تواصل معنا",
          OurContent: "محتوانا",
          OurGoal: "هدفنا",
          MakeYour: "أجعل تجربتك",
          SocialMedia: "الرقمية",
          More: "أكثر",
          Valueable: "نفعاً",
          SeeMore: "عرض المزيد",
          AboutUsContent: "مرحبًا بكم في Steps، وهي منصة تواصل اجتماعي نابضة بالحياة مخصصة لنشر المعرفة والوعي في جميع أنحاء العالم. تتمثل مهمتنا في إلهام الأفراد وتمكينهم من خلال الاقتباسات المثيرة للتفكير، والمقاطع الجذابة، والمحتوى الثاقب الذي يتردد صداه في القلب والعقل.",
          Hero: "تمكين العقول، اقتباس تلو الآخر. استكشف مجموعتنا المختارة من الاقتباسات الملهمة والمقاطع الصوتية، واكتشف الحكمة التي ستدفعك إلى الأمام. انضم إلى مجتمعنا واتخذ خطوتك الأولى نحو مستقبل أكثر إشراقًا.",
          Footer: "انضم إلى مجتمعنا من الأفراد ذوي التفكير المماثل والشغف بنشر المعرفة والوعي. تابعنا على وسائل التواصل الاجتماعي لتبقى على اطلاع بأحدث اقتباساتنا ومقاطعنا ورؤانا. معًا، دعونا نتخذ خطوات نحو عالم أكثر اطلاعًا وإلهامًا.",
          Reserved: "جميح الحقوق محفوظة لدى",
          ContactHeader: "ابق على اتصال مع Steps",
          ContactHeaderText: "تابعونا على وسائل التواصل الاجتماعي للحصول على جرعات يومية من الإلهام والمعرفة.",
          OurMission: "هو تنوير العقول وإلهام القلوب في جميع أنحاء العالم من خلال قوة المعرفة والوعي. نحن نسعى جاهدين لإنشاء منصة تعزز النمو الشخصي والتقدير الثقافي والوعي الاجتماعي.",
          EachQoute: "كل اقتباس",
          EachReel: "كل فيديو",
          EachStory: "كل قصة",
          EachQouteText: "لديه القدرة على إثارة محادثات هادفة ودفع التغيير الإيجابي.",
          EachReelText: "لديه القدرة على إلهام الأخرين وتنمية القيم الإيجابية لديهم.",
          EachStoryText: "لديها القدرة على تطوير المهارات الشخصية والعمل على دعمها.",
          WeBelieve: "نحن نؤمن بأن",
          ContentText: "التزامنا هو اختيار المحتوى الذي يتردد صداه مع جمهورنا، وتشجيعهم على التأمل والمشاركة واتخاذ الإجراءات في حياتهم ومجتمعاتهم.",
          ContentText: "إن التزامنا هو اختيار المحتوى الذي يتردد صداه لدى جمهورنا، وتشجيعهم على التأمل والمشاركة واتخاذ الإجراءات في حياتهم ومجتمعاتهم.",
          ContentTitle1: "اقتباسات ملهمة",
          ContentTitle2: "كتابات مدروسة",
          ContentTitle3: "النمو الشخصي",
          ContentTitle4: "الوعي الاجتماعي",
          ContentDesc1: "مجموعة مختارة من الاقتباسات لإلهام وتحفيز رحلتك.",
          ContentDesc2: "مقالات جذابة تثير التأمل والمناقشات الهادفة.",
          ContentDesc3: "موارد ونصائح لمساعدتك على إطلاق العنان لإمكاناتك الكاملة.",
          ContentDesc4: "محتوى يزيد الوعي ويشجع التغيير الإيجابي.",
        },
      },
      // Add more languages here
    },
  });

export default i18n;