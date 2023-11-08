export type VideoObject = {
  src: string;
  title: string;
  id: string;
  duration: number;
  user: {
    name: string;
    avatar: string;
  };
  tags: string[];
  thumbnail: string;
};

export const videoObjects: VideoObject[] = [
  {
    src: "https://sergioacostadev.com/media/nt4vewq3.mp4",
    title: "Ichika Nito being Ichika Nito",
    id: "nt4vewq3",
    duration: 61.1,
    user: {
      name: "Sergio Acosta",
      avatar: "sergio.jpeg",
    },
    tags: ["guitar", "ichika", "nito", "music"],
    thumbnail: "https://sergioacostadev.com/media/nt4vewq3.jpg",
  },
  {
    src: "https://sergioacostadev.com/media/rcq344z9.mp4",
    title: "Alejandro se convierte en culturista",
    id: "rcq344z9",
    duration: 14.442,
    user: {
      name: "Sergio Acosta",
      avatar: "sergio.jpeg",
    },
    tags: ["alejandro", "culturista", "humor", "comedy", "sergio"],
    thumbnail: "https://sergioacostadev.com/media/rcq344z9.jpg",
  },
  {
    src: "https://sergioacostadev.com/media/z1eswhll.mp4",
    title: "Dani Acosta, Sunikens - Fugaz (Full EP Visualizer)",
    id: "z1eswhll",
    duration: 435,
    user: {
      name: "Sergio Acosta",
      avatar: "sergio.jpeg",
    },
    tags: ["dani", "acosta", "sunikens", "music", "dani acosta", "fugaz"],
    thumbnail: "https://sergioacostadev.com/media/z1eswhll.jpg",
  },
  {
    src: "https://sergioacostadev.com/media/c9y9vv89.mp4",
    title: "Anhelo - Dani Acosta (Audio Oficial)",
    id: "c9y9vv89",
    duration: 149.68,
    user: {
      name: "Sergio Acosta",
      avatar: "sergio.jpeg",
    },
    tags: ["dani", "acosta", "music", "dani acosta", "anhelo"],
    thumbnail: "https://sergioacostadev.com/media/c9y9vv89.jpg",
  },
  {
    src: "https://sergioacostadev.com/media/20bl0e3o.mp4",
    title: "Dani Acosta - Relajao'",
    id: "20bl0e3o",
    duration: 149.049,
    user: {
      name: "Sergio Acosta",
      avatar: "sergio.jpeg",
    },
    tags: ["dani", "acosta", "music", "dani acosta", "relajao", "relajao'"],
    thumbnail: "https://sergioacostadev.com/media/20bl0e3o.jpg",
  },
  {
    src: "https://sergioacostadev.com/media/1ynvkryg.mp4",
    title: "Experiencia Visual en Vieja Catedral de Francia",
    id: "1ynvkryg",
    duration: 16.9192,
    user: {
      name: "Sergio Acosta",
      avatar: "sergio.jpeg",
    },
    tags: ["francia", "catedral", "visual", "experience", "sergio"],
    thumbnail: "https://sergioacostadev.com/media/1ynvkryg.jpg",
  },
  {
    src: "https://sergioacostadev.com/media/xscejp4p.mp4",
    title: "Dani Acosta, Sunikens - Infidelidad",
    id: "xscejp4p",
    duration: 157.209,
    user: {
      name: "Sergio Acosta",
      avatar: "sergio.jpeg",
    },
    tags: ["dani", "acosta", "sunikens", "music", "dani acosta", "infidelidad"],
    thumbnail: "https://sergioacostadev.com/media/xscejp4p.jpg",
  },
  {
    src: "https://sergioacostadev.com/media/3b93vzdm.mp4",
    title: "Gol Kirian Rodríguez - Las Palmas vs Granada 24/09/2023",
    id: "3b93vzdm",
    duration: 10.3965,
    user: {
      name: "Sergio Acosta",
      avatar: "sergio.jpeg",
    },
    tags: ["kirian", "gol", "las palmas", "granada", "football", "soccer"],
    thumbnail: "https://sergioacostadev.com/media/3b93vzdm.jpg",
  },
  {
    src: "https://sergioacostadev.com/media/l76rff22.mp4",
    title: "Gol Marc Cardona 97' - Las Palmas vs Celta de Vigo 2/10/2023",
    id: "l76rff22",
    duration: 16.3895,
    user: {
      name: "Sergio Acosta",
      avatar: "sergio.jpeg",
    },
    tags: ["cardona", "gol", "las palmas", "celta", "football", "soccer"],
    thumbnail: "https://sergioacostadev.com/media/l76rff22.jpg",
  },
];
