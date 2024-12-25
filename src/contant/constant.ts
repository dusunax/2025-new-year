const CONCEPTS = [
  { ko: "귀여운", en: "Cute", icon: "🐶", color: "#FFD700" },
  { ko: "정직한", en: "Honest", icon: "🤝", color: "#4CAF50" },
  { ko: "레트로", en: "Retro", icon: "📼", color: "#FF5722" },
  { ko: "모던", en: "Modern", icon: "🏙️", color: "#607D8B" },
  { ko: "아트", en: "Artistic", icon: "🎨", color: "#673AB7" },
  { ko: "도트", en: "8-bit style", icon: "🕹️", color: "#000000" },
  { ko: "클래식", en: "Classic", icon: "🎻", color: "#795548" },
  { ko: "유니크", en: "Unique", icon: "✨", color: "#FF4081" },
  { ko: "컬러풀", en: "Colorful", icon: "🌈", color: "#FFEB3B" },
  { ko: "세련된", en: "Sophisticated", icon: "💼", color: "#455A64" },
  { ko: "아름다운", en: "Beautiful", icon: "🌺", color: "#E91E63" },
  { ko: "몽환적인", en: "Dreamy", icon: "🌌", color: "#9C27B0" },
  { ko: "세레모니얼", en: "Ceremonial", icon: "🎉", color: "#FFC107" },
  { ko: "우아한", en: "Elegant", icon: "👑", color: "#6A1B9A" },
  { ko: "시크", en: "Chic", icon: "🕶️", color: "#212121" },
  { ko: "화려한", en: "Glamorous", icon: "💎", color: "#FFC0CB" },
  { ko: "심플", en: "Simple", icon: "⚪", color: "#eeeeee" },
  { ko: "모던 빈티지", en: "Modern Vintage", icon: "🪞", color: "#A1887F" },
  { ko: "팝 아트", en: "Pop Art", icon: "🖼️", color: "#FF5722" },
  { ko: "로맨틱", en: "Romantic", icon: "❤️", color: "#F44336" },
  { ko: "청량한", en: "Refreshing", icon: "💧", color: "#03A9F4" },
  { ko: "모험적인", en: "Adventurous", icon: "🗺️", color: "#FF9800" },
  { ko: "포근한", en: "Cozy", icon: "🛋️", color: "#D7CCC8" },
  { ko: "편안한", en: "Relaxed", icon: "☁️", color: "#B0BEC5" },
  { ko: "고전적인", en: "Classic", icon: "📚", color: "#795548" },
  { ko: "파스텔", en: "Pastel", icon: "🖍️", color: "#FFCDD2" },
  { ko: "콘서버티브", en: "Conservative", icon: "🏛️", color: "#37474F" },
  { ko: "유니버셜", en: "Universal", icon: "🌎", color: "#2196F3" },
  { ko: "힙스터", en: "Hipster", icon: "☕", color: "#5D4037" },
  { ko: "미니멀리스트", en: "Minimalist", icon: "📐", color: "#ECEFF1" },
];
export type Concept = (typeof CONCEPTS)[number];

const MESSAGES = [
  { ko: "새해 복 많이 받아! 🎉", en: "Happy New Year! 🎉" },
  {
    ko: "행복 가득한 새해 보내! 🥳",
    en: "Wishing you a Happy New Year filled with happiness. 🥳",
  },
  {
    ko: "2025년에는 모든 꿈이 현실이 되길! ✨",
    en: "May all your dreams come true in 2025! ✨",
  },
  {
    ko: "새로운 시작의 기회가 찾아온다! 🚀",
    en: "A chance for new beginnings is coming your way. 🚀",
  },
  {
    ko: "새해에는 더욱 번창해! 🌱",
    en: "Wishing you even more prosperity in the New Year! 🌱",
  },
  {
    ko: "2025년이 행운 가득한 해가 되길 기원해! 🍀",
    en: "Wishing you a year filled with good luck in 2025. 🍀",
  },
  {
    ko: "평화와 기쁨이 가득한 새해 되길! 🕊️",
    en: "Wishing you a New Year full of peace and joy! 🕊️",
  },
  {
    ko: "모든 소원이 이루어질거야! 🌠",
    en: "May all your wishes come true. 🌠",
  },
  {
    ko: "모든 순간이 빛나는 한 해 보내! 💫",
    en: "Hoping every moment shines bright! 💫",
  },
  {
    ko: "새해에는 더 많은 성취와 행운이 있을거야! 🌈",
    en: "Looking forward to more achievements and luck in the New Year. 🌈",
  },
  {
    ko: "새해에는 더 큰 기쁨이 있길! 🎊",
    en: "Here's to even greater joy in the New Year! 🎊",
  },
  {
    ko: "모든 일이 원하는 대로 잘 풀리길! 🙌",
    en: "May everything go your way. 🙌",
  },
  {
    ko: "올해는 더 많은 성공을! 🏆",
    en: "Achieve even more success this year! 🏆",
  },
  {
    ko: "새로운 시작, 새로운 기회야! 🎈",
    en: "New beginnings, new opportunities! 🎈",
  },
  {
    ko: "너의 모든 새로운 도전이 성공으로 이어지길 바랄게! 💪",
    en: "May every new challenge lead to success! 💪",
  },
  {
    ko: "뜻하는 모든 것들이 이루어질 거야. 🌟",
    en: "Everything you wish for will come true. 🌟",
  },
  {
    ko: "새해에는 모든 것이 더 잘될 거야. 🪄",
    en: "Everything will be better in the New Year. 🪄",
  },
  {
    ko: "행운과 행복이 가득한 한 해가 되길! 🦋",
    en: "Wishing you a year full of luck and happiness. 🦋",
  },
  {
    ko: "새해에는 평화와 행복이 가득하기를! 🕊️💐",
    en: "Wishing you a New Year filled with peace and happiness! 🕊️💐",
  },
  {
    ko: "새해에는 믿음과 희망을 갖고 진전을 이루어봐! 🌈",
    en: "Have faith and hope for progress in the New Year. 🌈",
  },
  {
    ko: "더 많은 사랑과 웃음이 있는 해가 되길! ❤️",
    en: "Wishing you a year filled with more love and laughter. ❤️",
  },
  {
    ko: "사랑하는 사람과 함께 특별한 순간을 만들어봐! 🥰",
    en: "Create special moments with your loved ones. 🥰",
  },
  {
    ko: "새해에는 더 많은 성공과 행운이 함께 할거야! 🧚‍♀️",
    en: "May more success and luck be with you in the New Year. 🧚‍♀️",
  },
  {
    ko: "행복한 순간을 만들어봐! 😘",
    en: "Let's create happy moments! 😘",
  },
  {
    ko: "새해에는 새로운 모험을 찾아보자! 🤠",
    en: "Discover new adventures in the New Year. 🤠",
  },
  {
    ko: "건강과 행복이 가득한 새해가 되길! 🙏",
    en: "May health and happiness be with you in the New Year. 🙏",
  },
  {
    ko: "모든 꿈이 이루어질 거야. 🧙‍♀️",
    en: "All your dreams will come true. 🧙‍♀️",
  },
  {
    ko: "새해에는 더 많은 성취를 경험해봐! 🐉",
    en: "Experience more achievements in the New Year. 🐉",
  },
  {
    ko: "새해 복 많이 받아! 💖",
    en: "May you have a Happy New Year! 💖",
  },
  {
    ko: "2025년이 밝고 행복한 해가 되었으면 좋겠어! 🌟",
    en: "Wishing you a bright and happy year in 2025. 🌟",
  },
  {
    ko: "새해에는 모든 일이 원하는 대로 풀릴 거야. 😆",
    en: "In the New Year, everything will go your way. 😆",
  },
];

const getRandomMessage = () =>
  MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

export { getRandomMessage, CONCEPTS, MESSAGES };
