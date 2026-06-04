export const IMG = {
  logo: "https://ik.imagekit.io/cr8hodb6q/yuquan/logo-Yuquan.png",
  preschoolLogo: "https://ik.imagekit.io/cr8hodb6q/yuquan/preschool_logo.png",
  enrichmentLogo: "https://ik.imagekit.io/cr8hodb6q/yuquan/enrichment%20logo.png",
  btnPreschool: "https://ik.imagekit.io/cr8hodb6q/yuquan/btn_yuquanpreschool.png",
  btnLanguageSchool: "https://ik.imagekit.io/cr8hodb6q/yuquan/btn_yuquanlanguageschool.png",
  sprouts: "https://ik.imagekit.io/cr8hodb6q/yuquan/sprouts.png",
  founder: "https://ik.imagekit.io/cr8hodb6q/yuquan/happy%20student%20images.png",
  students: [
    "https://ik.imagekit.io/cr8hodb6q/yuquan/student_image1.png",
    "https://ik.imagekit.io/cr8hodb6q/yuquan/student%20image2.png",
    "https://ik.imagekit.io/cr8hodb6q/yuquan/student%20image3.png",
  ],
  kindergarten: "https://ik.imagekit.io/cr8hodb6q/yuquan/kindergarten/RYC_6331.jpeg",
  tuition: [
    "https://ik.imagekit.io/cr8hodb6q/yuquan/tuition/DSC09686.JPG",
    "https://ik.imagekit.io/cr8hodb6q/yuquan/tuition/DSC09682.JPG",
  ],
  press: [
    { src: "https://ik.imagekit.io/cr8hodb6q/yuquan/testimonial/ShinMin%2004-11-17a.jpg", paper: "新明日报 · Shin Min Daily", date: "Nov 2017" },
    { src: "https://ik.imagekit.io/cr8hodb6q/yuquan/testimonial/WanBao%2003-7-19.JPG", paper: "联合晚报 · Lianhe Wanbao", date: "Jul 2003" },
    { src: "https://ik.imagekit.io/cr8hodb6q/yuquan/testimonial/ShinMin%2003-11-10.TIF?tr=f-jpg", paper: "新明日报 · Shin Min Daily", date: "Nov 2003" },
    { src: "https://ik.imagekit.io/cr8hodb6q/yuquan/testimonial/WanBao%2003-10-30.TIF?tr=f-jpg", paper: "联合晚报 · Lianhe Wanbao", date: "Oct 2003" },
  ],
};

/* ── Preschool client photos (uploaded to ImageKit) ──────────────────────
   Slot numbers match the "presch website pic" instruction sheet.
   `?tr=w-<n>` = ImageKit on-the-fly resize so the multi-MB originals ship
   small. Kept separate from IMG so the Language School pages are unaffected. */
const PS_CDN = "https://ik.imagekit.io/cr8hodb6q/yuquan/preschool_client";
const ps = (n, w = 1000) => `${PS_CDN}/${n}_result.webp?tr=w-${w}`;

export const PS = {
  gatewayLS: ps(1, 700),                        // gateway · Language School card
  hero: [ps(2), ps(3), ps(4)],                  // preschool home hero collage
  why: [ps(5, 700), ps(6, 700), ps(7, 700), ps(8, 700), ps(9, 700)], // Why-Choose cards
  daily: {                                      // "A Day at Yuquan" strip
    morning:     ps(10, 800),
    friends:     ps(11, 800),
    story:       ps(12, 800),
    chinese:     ps(13, 800),
    composition: ps(14, 800),
    garden:      ps(15, 800),
  },
  storyHero: [ps(16), ps(17), ps(18)],          // Story page hero collage
  special: {                                    // Special Programmes
    tableTennis:     ps(19, 600),
    calligraphy:     ps(20, 600),
    teaAppreciation: ps(21, 600),
    melodica:        ps(22, 600),
    chineseArt:      ps(23, 600),
  },
  location: ps(24, 1100),                       // Location page centre photo
};
