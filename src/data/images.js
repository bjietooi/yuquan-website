export const IMG = {
  logo: "https://ik.imagekit.io/cr8hodb6q/yuquan/logo-Yuquan.png",
  preschoolLogo: "https://ik.imagekit.io/cr8hodb6q/yuquan/preschool_logo.png",
  enrichmentLogo: "https://ik.imagekit.io/cr8hodb6q/yuquan/enrichment%20logo.png",
  btnPreschool: "https://ik.imagekit.io/cr8hodb6q/yuquan/btn_yuquanpreschool.png",
  // Gateway cutout: transparent PNG cropped to upper body (?tr extract) so the
  // girl reads at the same size as the Preschool cutout — not a full-body shot.
  btnLanguageSchool: "https://ik.imagekit.io/cr8hodb6q/yuquan/btn_yuquanlanguageschool.png?tr=w-566,h-540,cm-extract,fo-top",
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
    // Slot 40 pending re-upload (returns 400) — keeps the original clipping for now.
    { src: "https://ik.imagekit.io/cr8hodb6q/yuquan/testimonial/ShinMin%2004-11-17a.jpg", paper: "新明日报 · Shin Min Daily", date: "Nov 2017" },
    { src: "https://ik.imagekit.io/cr8hodb6q/yuquan/language_client/41_result.webp?tr=w-700", paper: "联合晚报 · Lianhe Wanbao", date: "Jul 2003" },
    { src: "https://ik.imagekit.io/cr8hodb6q/yuquan/language_client/42_result.webp?tr=w-700", paper: "新明日报 · Shin Min Daily", date: "Nov 2003" },
    { src: "https://ik.imagekit.io/cr8hodb6q/yuquan/language_client/43_result.webp?tr=w-700", paper: "联合晚报 · Lianhe Wanbao", date: "Oct 2003" },
  ],
};

/* ── Preschool client photos (uploaded to ImageKit) ──────────────────────
   Slot numbers match the "presch website pic" instruction sheet.
   `?tr=w-<n>` = ImageKit on-the-fly resize so the multi-MB originals ship
   small. Kept separate from IMG so the Language School pages are unaffected. */
const PS_CDN = "https://ik.imagekit.io/cr8hodb6q/yuquan/preschool_client";
const ps = (n, w = 1000) => `${PS_CDN}/${n}_result.webp?tr=w-${w}`;

export const PS = {
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

/* ── Language School client photos (uploaded to ImageKit) ────────────────
   Slot numbers match the "website pic lang sch" instruction sheet.
   NOTE: slots 29, 33, 40, 44, 47, 48, 49 were not available on the CDN at
   wiring time (404/400) — those spots keep their existing images until the
   files are re-uploaded. */
const LSC_CDN = "https://ik.imagekit.io/cr8hodb6q/yuquan/language_client";
const lsc = (n, w = 1000) => `${LSC_CDN}/${n}_result.webp?tr=w-${w}`;

export const LS = {
  hero: [lsc(25), lsc(26), lsc(27)],            // LS home hero collage
  programmes: {                                 // LS "Our Programmes" cards (29 pending)
    preschool: lsc(28, 700),
    secondary: lsc(30, 700),
    adult:     lsc(31, 700),
    holiday:   lsc(32, 700),
  },
  journey: {                                    // About "Our Journey in the Spotlight"
    classroom: lsc(34, 800),
    learning:  lsc(35, 800),
    happy:     lsc(36, 800),
    teaching:  lsc(37, 800),
    immersion: lsc(38, 800),
    community: lsc(39, 800),
  },
  camps: {                                      // Holiday camps (44,47,48,49 pending)
    idiom:    lsc(45, 800),
    compcomp: lsc(46, 800),
  },
};
