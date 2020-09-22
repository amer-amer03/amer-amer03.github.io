import {
  FETCH_COLLECTIONS_PENDING,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_ERROR,
  SORT_COLLECTION_BY_VALUE,
} from "./const";

const initialState = {
  collections: {
    women: {
      id: "women",
      title: "Women's Clothing",
      items: {
        item1: {
          id: "item1",
          collectionId: "women",
          title: "Nike Sportswear Windrunner",
          subtitle: "Women's Jacket",
          imageUrl: "https://i.imgur.com/6ZbHKIr.jpg",
          price: 69.95,
          images: {
            image1: "https://i.imgur.com/oKIiJCR.jpg",
            image2: "https://i.imgur.com/AVWqDRU.jpg",
            image3: "https://i.imgur.com/0yk57Sw.jpg",
          },
          info:
            "A legendary look gets back to its roots with the Nike Sportswear Windrunner Jacket. It features water-repellent details to give you coverage in rough weather, just like the 1978 original.",
          color: "Black/Black/White",
          size: "Model is wearing size M and is 5'10 (178cm approx.)",
          fit: "Loose fit for a roomy feel",
        },
        item2: {
          id: "item2",
          collectionId: "women",
          title: "Nike Sportswear Gym Vintage",
          subtitle: "Women's Shorts",
          imageUrl: "https://i.imgur.com/Uvkn7oO.jpg",
          price: 32.95,
          images: {
            image1: "https://i.imgur.com/2ps12tQ.jpg",
            image2: "https://i.imgur.com/oy3ED1O.jpg",
            image3: "https://i.imgur.com/jFDFEwQ.jpg",
          },
          info:
            "Made from a lightweight blend of organic cotton and recycled cotton, the Nike Sportswear Gym Vintage Shorts elevate a wardrobe staple with heritage vibes and a soft, comfortable fit. This product is made from at least 50% sustainable materials, using a blend of recycled polyester and organic cotton fabrics. The blend is at least 10% recycled fabric or at least 10% organic cotton fabric.",
          color: "Black/Sail",
          size: "Model is wearing size M and is 5'10' (178cm approx.)",
          fit: "Slim fit for a tailored feel",
        },
        item3: {
          id: "item3",
          collectionId: "women",
          title: "Nike Sportswear NSW",
          subtitle: "Women's Crew",
          imageUrl: "https://i.imgur.com/1w4AGiq.jpg",
          price: 69.95,
          images: {
            image1: "https://i.imgur.com/4nM3mvC.jpg",
            image2: "https://i.imgur.com/qdUx7OG.jpg",
          },
          info:
            "The Nike Sportswear NSW Crew is a lightweight sweatshirt with a smooth, sturdy feel. The printed graphic at the chest works with the oversized fit for a street-ready look.",
          color: "Light Bone/White/Black",
          size: "Model is wearing size S and is 5'9' (175cm approx.)",
          fit: "Oversized fit for a baggy, spacious feel",
        },
        item4: {
          id: "item4",
          collectionId: "women",
          title: "Nike Sportswear Heritage",
          subtitle: "Womens's Short-Sleeve Top",
          imageUrl: "https://i.imgur.com/TTcdshu.jpg",
          price: 24.95,
          images: {
            image1: "https://i.imgur.com/bBGAHH3.jpg",
            image2: "https://i.imgur.com/KMpueUZ.jpg",
          },
          info:
            "Make it memorable in the Nike Sportswear Heritage Short-Sleeve Top, a classic look in soft jersey fabric. A colour-blocked chevron design throws it back to Windrunner style.",
          color: "Black/White/White",
          size: "Model is wearing size S and is 5'9' (175cm approx.)",
          fit: "Standard fit for a relaxed, easy feel",
        },
        item5: {
          id: "item5",
          collectionId: "women",
          title: "Nike Air",
          subtitle: "Women's Bodysuit",
          imageUrl: "https://i.imgur.com/ynYgmOP.jpg",
          price: 39.95,
          images: {
            image1: "https://i.imgur.com/p56s2MV.jpg",
            image2: "https://i.imgur.com/qN7qLhE.jpg",
          },
          info:
            "Engineered detailing throughout gives the Nike Air Bodysuit a fresh look ready for mix-and-match layering. Sweat-wicking stretch fabric keeps you feeling cool and dry throughout the day.",
          color: "Black/White",
          size: "Model is wearing size M and is 5'11' (180cm approx.)",
          fit: "Tight fit for a body-hugging feel",
        },
        item6: {
          id: "item6",
          collectionId: "women",
          title: "Nike Sportswear Swoosh",
          subtitle: "Women's Trousers",
          imageUrl: "https://i.imgur.com/mdps8Fd.jpg",
          price: 54.95,
          images: {
            image1: "https://i.imgur.com/kPU5jsC.jpg",
            image2: "https://i.imgur.com/8R8sUlB.jpg",
            image3: "https://i.imgur.com/FxTrK2g.jpg",
          },
          info:
            "The Nike Sportswear Trousers combine utility details with the signature look and feel of tracksuit bottoms to help you move through the work week with confidence. Vertical seams and flap cargo pockets polish the look.",
          color: "Black/White",
          size: "Model is wearing size S and is 5'10' (178cm approx.)",
          fit: "Standard fit for a relaxed, easy feel",
        },
        item7: {
          id: "item7",
          collectionId: "women",
          title: "Nike Sportswear Tech Fleece Windrunner",
          subtitle: " Women's Full-Zip Hoodie ",
          imageUrl: "https://i.imgur.com/kXUcjgS.jpg",
          price: 89.95,
          images: {
            image1: "https://i.imgur.com/djVoMn8.jpg",
            image2: "https://i.imgur.com/APdI6PU.jpg",
            image3: "https://i.imgur.com/wdW9PUe.jpg",
          },
          info:
            "The Nike Sportswear Tech Fleece Hoodie is made from double-sided spacer fabric to harness your body heat to create added warmth without extra bulk or weight.",
          color: "Beyond Pink/Black",
          size: "Model is wearing size S and is 5'9' (175cm approx.)",
          fit: "Standard fit for a relaxed, easy feel",
        },
        item8: {
          id: "item8",
          collectionId: "women",
          title: "Nike Sportwear Tech Fleece",
          subtitle: " Women's Trousers ",
          imageUrl: "https://i.imgur.com/K5ErfNc.jpg",
          price: 79.95,
          images: {
            image1: "https://i.imgur.com/zlC1YQq.jpg",
          },
          info:
            "The Nike Sportswear Tech Fleece Trousers add warmth to your look without extra weight or bulk. Signature details provide a premium look ready for everyday wear.",
          color: "Beyond Pink/Black",
          size: "",
          fit: "Standard fit for a relaxed, easy feel",
        },
        item9: {
          id: "item9",
          collectionId: "women",
          title: "Nike Sportswear Down-Fill",
          subtitle: "Women's Windrunner Jacket",
          imageUrl: "https://i.imgur.com/rS8aFgG.jpg",
          price: 139.95,
          images: {
            image1: "https://i.imgur.com/AoLHkVN.jpg",
            image2: "https://i.imgur.com/B6xE0pN.jpg",
          },
          info:
            "Leveraging the timeless warmth of down, the Nike Sportswear Windrunner Jacket combines heritage design with a lightweight construction fill to help keep you cosy and warm regardless of the weather. The smooth shell fabric is made from recycled fibres and features a Repel finish that shakes off light moisture to help keep you dry. This product is made from at least 50% recycled polyester fabric.",
          color: "Black/Black/White",
          size: "Model is wearing size S and is 5'9' (175cm approx.)",
          fit: "Standard fit for a relaxed, easy feel",
        },
        item10: {
          id: "item10",
          collectionId: "women",
          title: "Jordan Utility",
          subtitle: "Women's Flight Suit",
          imageUrl: "https://i.imgur.com/MeAVawv.jpg",
          price: 114.95,
          images: {
            image1: "https://i.imgur.com/xuE2MNT.jpg",
            image2: "https://i.imgur.com/npIwFwO.jpg",
            image3: "https://i.imgur.com/SnDImY3.jpg",
          },
          info:
            "Fashion and function intersect in the Jordan Utility Flight Suit. A strappy spin on the iconic silhouette, it's made from lightweight woven fabric with secure cargo pockets. Extended webbing detail brings some unexpected attitude.",
          color: "Spruce Aura/Spruce Aura/Gridiron",
          size: "Model is wearing size S and is 5'9' (175cm approx.)",
          fit: "Standard fit for a relaxed, easy feel",
        },
      },
    },
    men: {
      id: "men",
      title: "Men's Clothing",
      items: {
        item11: {
          id: "item11",
          collectionId: "men",
          title: "Nike Sportswear",
          subtitle: "Men's Short-Sleeve Top",
          imageUrl: "https://i.imgur.com/wP6a2rb.jpg",
          price: 34.95,
          images: {
            image1: "https://i.imgur.com/f7nye3H.jpg",
            image2: "https://i.imgur.com/tIMFmfS.jpg",
            image3: "https://i.imgur.com/cw9tyTx.jpg",
          },
          info:
            "The Nike Sportswear Hype Hike Top brings the energy of the outdoors to a style ready for the streets. Inspired by the landscape surrounding Nike World Headquarters, the all-over print features trees and mountains found in the Pacific Northwest. This product is made from 100% recycled polyester fabric.",
          color: "Starfish/Black",
          size: "Model is wearing size L and is 6'2' (188cm approx.)",
          fit: "Loose fit for a roomy feel",
        },
        item12: {
          id: "item12",
          collectionId: "men",
          title: "Nike Air",
          subtitle: "Men's Trousers",
          imageUrl: "https://i.imgur.com/vTCELhU.jpg",
          price: 59.95,
          images: {
            image1: "https://i.imgur.com/H95af6R.jpg",
            image2: "https://i.imgur.com/0eDR59n.jpg",
          },
          info:
            "Inspired by classic tracksuit bottoms, the Nike Air Trousers feature utility-inspired panelling at the knees for durability during wear. Convenient pocket details and a tapered leg complete the look to help keep you cruising through your commute in comfort.",
          color: "Black/Black/Black/White",
          size: "Model is wearing size M and is 6'0' (183cm approx.)",
          fit: "Loose fit for a roomy feel",
        },
        item13: {
          id: "item13",
          collectionId: "men",
          title: "Nike Sportswear",
          subtitle: "Men's Hooded Jacket",
          imageUrl: "https://i.imgur.com/fEWjcsn.jpg",
          price: 94.95,
          images: {
            image1: "https://i.imgur.com/7Tpxk4I.jpg",
            image2: "https://i.imgur.com/LreD0Rp.jpg",
            image3: "https://i.imgur.com/wDa4obX.jpg",
          },
          info:
            "The Nike Sportswear Woven Jacket features useful details inspired by outdoor apparel to keep you prepared for whatever you encounter in the streets. Taking design cues from vintage outdoor gilets, this panelled style offers a heritage aesthetic and build ready to help you navigate your day to day in style.",
          color: "Fossil/Black",
          size: "Model is wearing size L and is 6'2' (188cm approx.)",
          fit: "Standard fit for a relaxed, easy feel",
        },
        item14: {
          id: "item14",
          collectionId: "men",
          title: "Nike Sportswear",
          subtitle: "Men's Woven Shorts",
          imageUrl: "https://i.imgur.com/T0NOTbL.jpg",
          price: 59.95,
          images: {
            image1: "https://i.imgur.com/csane4H.jpg",
            image2: "https://i.imgur.com/oLsiIZE.jpg",
          },
          info:
            "The Nike Sportswear Shorts are made from woven fabric to help you stay comfortable when the weather gets warm. A mesh lining is lightweight and breathable.",
          color: "Black/Gunsmoke/White",
          size: "Model is wearing size L and is 6'2' (188cm approx.)",
          fit: "Standard fit has a relaxed, easy feel",
        },
        item15: {
          id: "item15",
          collectionId: "men",
          title: "Nike Sportswear Windrunner",
          subtitle: "Men's Jacket",
          imageUrl: "https://i.imgur.com/ILfdJMI.jpg",
          price: 99.95,
          images: {
            image1: "https://i.imgur.com/qqHF0zK.jpg",
            image2: "https://i.imgur.com/o4edHvL.jpg",
            image3: "https://i.imgur.com/ViNT7CP.jpg",
          },
          info:
            "Looking to reduce waste at every step of production, we designed the Nike Sportswear Windrunner Jacket with recycled materials and new, efficient construction methods. This product is made from at least 75% recycled polyester fabric.",
          color: "Deep Royal Blue/Game Royal/White",
          size: "Model is wearing size M and is 6'0' (183cm approx.)",
          fit: "Standard fit for a relaxed, easy feel",
        },
        item16: {
          id: "item16",
          collectionId: "men",
          title: "Nike Sportswear",
          subtitle: "Men's Short-Sleeve Top",
          imageUrl: "https://i.imgur.com/tNT0DFN.jpg",
          price: 34.95,
          images: {
            image1: "https://i.imgur.com/8fJMAOS.jpg",
            image2: "https://i.imgur.com/RLPHXQw.jpg",
            image3: "https://i.imgur.com/EuBbBoE.jpg",
          },
          info:
            "Made from recycled and organic material, the Nike Sportswear Top is a mid-weight jersey ready for everyday wear. This product is made from 100% sustainable materials, using a blend of both recycled cotton and organic cotton fabrics. The blend is at least 10% recycled fabric or at least 10% organic cotton fabric.",
          color: "Multi-Colour/White/Multi-Colour",
          size: "Model is wearing size M and is 6'0' (183cm approx.)",
          fit: "Standard fit for a relaxed, easy feel",
        },
        item17: {
          id: "item17",
          collectionId: "men",
          title: "Nike Sportswear Tech Fleece",
          subtitle: "Men's Full-Zip Hoodie",
          imageUrl: "https://i.imgur.com/5olFldT.jpg",
          price: 59.95,
          images: {
            image1: "https://i.imgur.com/zcL3uyu.jpg",
            image2: "https://i.imgur.com/nu0ZvTF.jpg",
          },
          info:
            "The Nike Sportswear Tech Fleece Full-Zip Hoodie is made from a double-sided spacer fabric for added warmth without extra weight. A slightly taller collar in the hood helps keep you dry in cold, wet weather.",
          color: "Game Royal/Black",
          size: "Model is wearing size M and is 6'0' (183cm approx.)",
          fit: "Standard fit for a relaxed, easy feel",
        },
        item18: {
          id: "item18",
          collectionId: "men",
          title: "Nike Sportswear Tech Fleece",
          subtitle: " Men's Joggers",
          imageUrl: "https://i.imgur.com/pHuZHha.jpg",
          price: 79.95,
          images: {
            image1: "https://i.imgur.com/CymDZwW.jpg",
            image2: "https://i.imgur.com/MdrvQz0.jpg",
          },
          info:
            "Ready for cooler weather, the Nike Sportswear Tech Fleece Joggers feature an updated fit perfect for everyday wear. Roomy through the thigh, this tapered design narrows at the knee to give you a comfortable feel without losing the clean, tailored look you love. Tall ribbed cuffs complete the jogger look while a zipped pocket on the right leg provides secure small-item storage and elevates the look.",
          color: "Game Royal/Black",
          size: "Model is wearing size M and is 6'0' (183cm approx.)",
          fit:
            "Slim around the hip, relaxed down through the thigh and knee, with a tapered leg",
        },
        item19: {
          id: "item19",
          collectionId: "men",
          title: "Nike Pro",
          subtitle: "Men's Pullover Hoodie",
          imageUrl: "https://i.imgur.com/yXuN557.jpg",
          price: 74.95,
          images: {
            image1: "https://i.imgur.com/fqReAs3.jpg",
            image2: "https://i.imgur.com/lb1fQjU.jpg",
            image3: "https://i.imgur.com/MzEaRno.jpg",
          },
          info:
            "The Nike Pro Hoodie combines high-stretch fabric and sweat-wicking power with the broken-in feel of your favourite sweatshirt. It's everything you need to stay warm to and from the gym, but comfortable enough to take anywhere.",
          color: "Obsidian/Black",
          size: "Model is wearing size M",
          fit: "Loose fit for a roomy feel",
        },
        item20: {
          id: "item20",
          collectionId: "men",
          title: "Jordan Jumpman Classics HBR",
          subtitle: "Men's Short-Sleeve Crew",
          imageUrl: "https://i.imgur.com/9KDEStW.jpg",
          price: 29.95,
          images: {
            image1: "https://i.imgur.com/1UcC9oJ.jpg",
            image2: "https://i.imgur.com/FOWwBgT.jpg",
            image3: "https://i.imgur.com/GFmTbuT.jpg",
          },
          info:
            "Celebrate MJ and his legacy in the Jordan Jumpman Classics HBR. Made from premium cotton, this lifestyle tee has a roomy fit.",
          color: "White/Black/Red",
          size: "Model is wearing size M and is 5'11' (180cm approx.)",
          fit: "Standard fit for a relaxed, easy feel",
        },
      },
    },
    kids: {
      id: "kids",
      title: "Kids Clothing",
      items: {
        item21: {
          id: "item21",
          collectionId: "kids",
          title: "Nike Sportswear",
          subtitle: "Older Kids' (Boys') Fleece Jacket",
          imageUrl: "https://i.imgur.com/Ns809rt.jpg",
          price: 54.95,
          images: {
            image1: "https://i.imgur.com/3pd7xQL.jpg",
            image2: "https://i.imgur.com/VrXPgef.jpg",
            image3: "https://i.imgur.com/tQD9phT.jpg",
          },
          info:
            "When the weather turns bad, the Nike Sportswear Jacket helps cover you from the elements. It's made from water-repellent fabric and a fleece interior to help keep you warm and dry.",
          color: "Medium Olive/Legion Green/Medium Olive/White",
          size: "",
          fit: "Standard fit for a relaxed, easy feel",
        },
        item22: {
          id: "item22",
          collectionId: "kids",
          title: "Nike Sportswear Tech Fleece",
          subtitle: "Older Kids' (Boys') Full-Zip Hoodie",
          imageUrl: "https://i.imgur.com/7Nbzx6Y.jpg",
          price: 74.95,
          images: {
            image1: "https://i.imgur.com/VT5V8Ua.jpg",
            image2: "https://i.imgur.com/ykJbnlZ.jpg",
            image3: "https://i.imgur.com/4QqzKHd.jpg",
          },
          info:
            "Make the most of chilly days with the Nike Sportswear Tech Fleece Hoodie. This full-zip is all about our innovative premium fleece that's soft, lightweight and warm. Added bonus: There's a zipped pocket on your left sleeve.",
          color: "Cargo Khaki/Black",
          size: "",
          fit: "Standard fit for a relaxed, easy feel",
        },
        item23: {
          id: "item23",
          collectionId: "kids",
          title: "Nike Sportswear Tech Fleece",
          subtitle: "Older Kids' (Boys') Trousers",
          imageUrl: "https://i.imgur.com/33dR5pF.jpg",
          price: 59.95,
          images: {
            image1: "https://i.imgur.com/6dtsM8H.jpg",
            image2: "https://i.imgur.com/g9pjjst.jpg",
          },
          info:
            "Make the most of chilly days with the Nike Sportswear Tech Fleece Trousers. These everyday joggers are all about our innovative premium fleece that's super-soft, lightweight and warm.",
          color: "Cargo Khaki/Black",
          size: "",
          fit: "Standard fit for a relaxed, easy feel",
        },
        item24: {
          id: "item24",
          collectionId: "kids",
          title: "Nike Sportswear Tech Fleece",
          subtitle: "Younder Kids' (Boys') Full-Zip Hoodie",
          imageUrl: "https://i.imgur.com/gHZ03nR.jpg",
          price: 64.95,
          images: {
            image1: "https://i.imgur.com/RkOaXyT.jpg",
          },
          info:
            "The Nike Sportswear Tech Fleece Hoodie is made from warm, lightweight fabric to help keep little ones cosy without extra layers.",
          color: " Dark Grey Heather",
          size: "",
          fit: "",
        },
        item25: {
          id: "item25",
          collectionId: "kids",
          title: "Nike Sportswear Tech Fleece",
          subtitle: "Baby (0-9M) Full-Zip Overall",
          imageUrl: "https://i.imgur.com/GuYuLHS.jpg",
          price: 59.95,
          images: {},
          info:
            "Keep them warm and comfy in the Nike Sportswear Tech Fleece Overall, made from fleece that feels soft and gentle against skin.",
          color: "Dark Grey Heather",
          size: "",
          fit: "",
        },
        item26: {
          id: "item26",
          collectionId: "kids",
          title: "Nike Sportswear",
          subtitle: "Older Kids' T-Shirt",
          imageUrl: "https://i.imgur.com/SJLHNfe.jpg",
          price: 19.95,
          images: {
            image1: "https://i.imgur.com/E7QJvcE.jpg",
            image2: "https://i.imgur.com/GQBrXXG.jpg",
            image3: "https://i.imgur.com/yUmXxec.jpg",
          },
          info:
            "Show everyone something cool with the Nike Sportswear T-Shirt. Watch the graphic change colour in sunlight while you're playing and having fun.",
          color: "Washed Coral",
          size: "",
          fit: "Standard fit for a relaxed, easy feel",
        },
        item27: {
          id: "item27",
          collectionId: "kids",
          title: "Nike Sportswear Swoosh",
          subtitle: "Older Kids' (Boys') Full-Zip Hoodie",
          imageUrl: "https://i.imgur.com/a3QGe6d.jpg",
          price: 44.95,
          images: {
            image1: "https://i.imgur.com/LIPJWkn.jpg",
            image2: "https://i.imgur.com/lBRuhH6.jpg",
            image3: "https://i.imgur.com/tvXbv9e.jpg",
          },
          info:
            "When it's grab-and-go time, reach for the Nike Sportswear Swoosh Hoodie. This classic full-zip is soft, cosy and warm. Plus, it has a stripe down each sleeve with mini Swoosh designs. How many can you spot?",
          color: "Pacific Blue",
          size: "",
          fit: "Standard fit for a relaxed, easy feel",
        },

        item28: {
          id: "item28",
          collectionId: "kids",
          title: "Nike Sportswear",
          subtitle: "Older Kids' (Boys') Shorts",
          imageUrl: "https://i.imgur.com/y6QMRIH.jpg",
          price: 24.95,
          images: {
            image1: "https://i.imgur.com/2zHC8xx.jpg",
            image2: "https://i.imgur.com/xglTWmh.jpg",
            image3: "https://i.imgur.com/Mg4MmQS.jpg",
          },
          info:
            "Warm up or cool down in the Nike Sportswear Shorts. These shorts are lined down the side with Swooshes and are made from soft knit fabric to keep you comfortable.",
          color: "Pacific Blue",
          size: "",
          fit: "Standard fit for a relaxed, easy feel",
        },
        item29: {
          id: "item29",
          collectionId: "kids",
          title: "Nike Sportswear Swoosh",
          subtitle: "Older Kids' Hoodie",
          imageUrl: "https://i.imgur.com/PwIodal.jpg",
          price: 39.95,
          images: {
            image1: "https://i.imgur.com/whsTfq8.jpg",
            image2: "https://i.imgur.com/ud14Nb4.jpg",
            image3: "https://i.imgur.com/Mg4MmQS.jpg",
          },
          info:
            "When it's grab-and-go time, reach for the Nike Sportswear Swoosh Hoodie. This classic design is soft, cosy and warm. Plus, it has a stripe down each sleeve with mini Swoosh designs. How many can you spot?",
          color: "Pacific Blue",
          size: "",
          fit: "Standard fit for a relaxed, easy feel",
        },
        item30: {
          id: "item30",
          collectionId: "kids",
          title: "Nike Sportswear Swoosh",
          subtitle: "Older Kids' Joggers",
          imageUrl: "https://i.imgur.com/MC1d3DZ.jpg",
          price: 34.95,
          images: {
            image1: "https://i.imgur.com/W7CWM6p.jpg",
            image2: "https://i.imgur.com/pIsYMtP.jpg",
            image3: "https://i.imgur.com/xi0PEsG.jpg",
          },
          info:
            "Whether you're lounging around or heading out, throw on the Nike Sportswear Swoosh Joggers. This classic is soft, cosy and warm. Plus, it has a stripe down each leg with mini Swoosh designs. How many can you spot?",
          color: "Football Grey",
          size: "",
          fit: "Slim fit for a tailored cut",
        },
      },
    },
    menshoes: {
      id: "menshoes",
      title: "Men's Trainers & Shoes",
      items: {
        item31: {
          id: "item31",
          collectionId: "menshoes",
          title: "Air Max 90 Premium",
          subtitle: "Men's Shoe",
          imageUrl: "https://i.imgur.com/99RuStw.jpg",
          price: 114.95,
          images: {
            image1: "https://i.imgur.com/fWqyis8.jpg",
            image2: "https://i.imgur.com/fL48knb.jpg",
            image3: "https://i.imgur.com/ui02oiG.jpg",
          },
          info:
            "Nothing as fly, nothing as comfortable, nothing as proven—the Nike Air Max 90 stays true to its OG roots with the iconic Waffle outsole, stitched overlays and classic TPU accents. Celebrating the home and away kits of your favourite teams, the soft leather upper features a rub-away material that reveals a secondary colour through normal wear while Max Air cushioning adds comfort to your journey.",
          color: "Sail/Midnight Navy/Gum Medium Brown/University Red",
          size: "",
          fit: "",
        },
        item32: {
          id: "item32",
          collectionId: "menshoes",
          title: "Nike Air Force 1 '07 LV8",
          subtitle: "Men's Shoe",
          imageUrl: "https://i.imgur.com/sXTLVHq.jpg",
          price: 89.95,
          images: {
            image1: "https://i.imgur.com/hhCeKBF.jpg",
            image2: "https://i.imgur.com/l2ajlcJ.jpg",
            image3: "https://i.imgur.com/UMnulI4.jpg",
          },
          info:
            "Elevate to legendary status in the Nike Air Force 1 '07 LV8. Refreshed colours highlight the premium details that landed this iconic design at the pinnacle of sneaker culture.",
          color: "White/Glacier Ice/Gum Light Brown/Chile Red",
          size: "",
          fit: "",
        },
        item33: {
          id: "item33",
          collectionId: "menshoes",
          title: "Nike Air Max 97",
          subtitle: "Men's Shoe",
          imageUrl: "https://i.imgur.com/k0hh3Ya.jpg",
          price: 149.95,
          images: {
            image1: "https://i.imgur.com/DcrUj8L.jpg",
            image2: "https://i.imgur.com/hgL9eDX.jpg",
            image3: "https://i.imgur.com/VgZ1CNU.jpg",
          },
          info:
            "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colours and crisp details, it lets you ride in first-class comfort.",
          color: "White/Black/Wolf Grey",
          size: "",
          fit: "",
        },
        item34: {
          id: "item34",
          collectionId: "menshoes",
          title: "Nike Blazer Mid Vintage '77",
          subtitle: "Shoe",
          imageUrl: "https://i.imgur.com/YMGrh8v.jpg",
          price: 89.95,
          images: {
            image1: "https://i.imgur.com/guwXFeF.jpg",
            image2: "https://i.imgur.com/ADx4Txv.jpg",
            image3: "https://i.imgur.com/3WBq2mv.jpg",
          },
          info:
            "Gear up for the day in ultimate cool and comfort with the Nike Blazer Mid Vintage '77. Leather and canvas in the upper have a vibe that comes straight from the vault. A big, bold Swoosh design joins other hand-drawn graphics including '1977' and 'Nike Blazer Mid' to give the feeling of a favourite pair you've customised yourself.",
          color: "White/Platinum Tint/Black",
          size: "",
          fit: "",
        },
        item35: {
          id: "item35",
          collectionId: "menshoes",
          title: "Nike Blazer Mid '77 Vintage",
          subtitle: "Shoe",
          imageUrl: "https://i.imgur.com/F65N7kL.jpg",
          price: 89.95,
          images: {
            image1: "https://i.imgur.com/7HAKJg5.jpg",
            image2: "https://i.imgur.com/8o99PfG.jpg",
            image3: "https://i.imgur.com/ae7RdIz.jpg",
          },
          info:
            "The Nike Blazer Mid '77 Vintage harnesses the old-school look of Nike Basketball with a vintage midsole finish, making it look like you've been saving them for years.",
          color: "White/Sail/Worn Brick",
          size: "",
          fit: "",
        },
        item36: {
          id: "item36",
          collectionId: "menshoes",
          title: "Nike Blazer Mid Vintage '77",
          subtitle: "Men's Shoe",
          imageUrl: "https://i.imgur.com/wscFoEP.jpg",
          price: 89.95,
          images: {
            image1: "https://i.imgur.com/PsSEInI.jpg",
            image2: "https://i.imgur.com/ytwWYiZ.jpg",
            image3: "https://i.imgur.com/4H04Fyr.jpg",
          },
          info:
            "The Nike Blazer Mid Vintage '77 harnesses the old-school look of Nike Basketball with a vintage midsole finish, making it look like you've been saving them for years.",
          color: "White/Sail/Platinum Tint/White",
          size: "",
          fit: "",
        },
        item37: {
          id: "item37",
          collectionId: "menshoes",
          title: "Jordan Zoom '92",
          subtitle: "Men's Shoe",
          imageUrl: "https://i.imgur.com/aJmX8hP.jpg",
          price: 129.95,
          images: {
            image1: "https://i.imgur.com/f0zqpPP.jpg",
            image2: "https://i.imgur.com/RdymEAq.jpg",
            image3: "https://i.imgur.com/Rh3JeWU.jpg",
          },
          info:
            "A nod to '90s basketball shoes, the Jordan Zoom '92 focuses on comfort, while tapping into the irreverent spirit of that era's designs. A stretchy-fit sleeve and underfoot cushioning offer a comfortable fit. '90s-inspired details give the shoe its retro flavour.",
          color: "White/True Red/Metallic Silver/Obsidian",
          size: "",
          fit: "",
        },
        item38: {
          id: "item38",
          collectionId: "menshoes",
          title: "Nike Air Max Plus",
          subtitle: "Men's Shoe",
          imageUrl: "https://i.imgur.com/nJuqKmf.jpg",
          price: 139.95,
          images: {
            image1: "https://i.imgur.com/C4aMOgZ.jpg",
            image2: "https://i.imgur.com/6WQuB8q.jpg",
            image3: "https://i.imgur.com/CRkc6YV.jpg",
          },
          info:
            "The Nike Air Max Plus features Tuned Air that offers premium stability and support. The elements that made the OG Air Max Plus famous are still here, like the Max Air units, TPU waves that resemble leaves from a palm tree and a midsole shank that looks like a whale's tail. Regrind material on the outsole changes up the look.",
          color: "White/Laser Orange/Midnight Navy/Total Orange",
          size: "",
          fit: "",
        },
        item39: {
          id: "item39",
          collectionId: "menshoes",
          title: "Nike Air Max 90",
          subtitle: "Men's Shoe",
          imageUrl: "https://i.imgur.com/fHM0BrZ.jpg",
          price: 114.95,
          images: {
            image1: "https://i.imgur.com/YeZ7Sms.jpg",
            image2: "https://i.imgur.com/xIP9yKh.jpg",
            image3: "https://i.imgur.com/FT15n1X.jpg",
          },
          info:
            "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG roots with stitched overlays and classic TPU accents. Bold accents highlight the iconic design.",
          color: "Black/Dark Smoke Grey/Iron Grey/Black",
          size: "",
          fit: "",
        },
        item40: {
          id: "item40",
          collectionId: "menshoes",
          title: "Nike React Infinity Run Flyknit",
          subtitle: "Men's Running Shoe",
          imageUrl: "https://i.imgur.com/pzaZMiB.jpg",
          price: 124.95,
          images: {
            image1: "https://i.imgur.com/ONZs9xS.jpg",
            image2: "https://i.imgur.com/CQmPXdG.jpg",
            image3: "https://i.imgur.com/hDABZkM.jpg",
          },
          info:
            "The Nike React Infinity Run Flyknit is inspired by your running world—from the grey pavement to the golden sunlight that peaks through the trees. This shoe is designed to help reduce injury and keep you doing what you love. More foam and improved upper details provide a secure and cushioned feel.",
          color: "Particle Grey/Pure Platinum/Black/Dark Grey",
          size: "",
          fit: "",
        },
      },
    },
    womenshoes: {
      id: "womenshoes",
      title: "Women's Trainers & Shoes",
      items: {
        item41: {
          id: "item41",
          collectionId: "womenshoes",
          title: "Nike Blazer Mid Vintage '77",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/yWAW13u.jpg",
          price: 89.95,
          images: {
            image1: "https://i.imgur.com/Uh38ZcR.jpg",
            image2: "https://i.imgur.com/nRDEx56.jpg",
            image3: "https://i.imgur.com/L185dSz.jpg",
          },
          info:
            "The Nike Blazer Mid '77 Vintage harnesses the old-school look of Nike b-ball with a retro midsole finish, making it look like you've been saving them for years. Its luscious suede, throwback Swoosh and padded collar make it a modern staple. The ultra-clean colours add a crisp look that completes any outfit.",
          color: "White/Sail/Light Bone",
          size: "",
          fit: "",
        },
        item42: {
          id: "item42",
          collectionId: "womenshoes",
          title: "Nike Air Max 90",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/rWmFDaM.jpg",
          price: 114.95,
          images: {
            image1: "https://i.imgur.com/f39hYpJ.jpg",
            image2: "https://i.imgur.com/mwnUWNf.jpg",
            image3: "https://i.imgur.com/Wimwved.jpg",
          },
          info:
            "The Nike Air Max 90 stays true to its OG roots with the iconic Waffle sole, stitched overlays and classic TPU accents. Fresh, seasonal colours give a modern look while Max Air cushioning adds comfort to your journey.",
          color: "White/Volt/Barely Volt",
          size: "",
          fit: "",
        },
        item43: {
          id: "item43",
          collectionId: "womenshoes",
          title: "Nike React Vision",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/MvCqjed.jpg",
          price: 114.95,
          images: {
            image1: "https://i.imgur.com/Ku0aJyI.jpg",
            image2: "https://i.imgur.com/3bLhprK.jpg",
            image3: "https://i.imgur.com/gIaIYpS.jpg",
          },
          info:
            "Journey to dreamlike comfort in the Nike React Vision. Layered textures, intricate lines and cool colours combine in a design influenced by the exaggerated world of our dreams. The React foam and a super-soft tongue add surreal cushioning to your step.",
          color: "Celestine Blue/Light Silver/Light Bone/Metallic Platinum",
          size: "",
          fit: "",
        },
        item44: {
          id: "item44",
          collectionId: "womenshoes",
          title: "Nike Air Max 90",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/A9S1Ha2.jpg",
          price: 114.95,
          images: {
            image1: "https://i.imgur.com/siCNNbf.jpg",
            image2: "https://i.imgur.com/aTpw3fU.jpg",
            image3: "https://i.imgur.com/LVEQmOq.jpg",
          },
          info:
            "The Nike Air Max 90 stays true to its OG running roots with its iconic Waffle outsole, stitched overlays and classic, colour-accented TPU details. Fresh new hues add energy to the look while Max Air cushioning adds comfort to your journey.",
          color: "Sail/Ghost/Black",
          size: "",
          fit: "",
        },
        item45: {
          id: "item45",
          collectionId: "womenshoes",
          title: "Nike React Vision",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/FYiZpOg.jpg",
          price: 114.95,
          images: {
            image1: "https://i.imgur.com/M9sswzj.jpg",
            image2: "https://i.imgur.com/jUEBiTv.jpg",
            image3: "https://i.imgur.com/Tu3hFv6.jpg",
          },
          info:
            "The Nike React Vision is a story of surreal comfort. Layered textures, shapes and vivid colours are combined in a design influenced by the exaggerated world of our dreams, while React foam and an ultra-plush tongue provide surreal comfort. DIMSIX on the tongue tab rises high off the collar to add just a touch of Nike's own origin story.",
          color: "Crimson Tint/Atomic Pink/Cucumber Calm/Desert Berry",
          size: "",
          fit: "",
        },
        item46: {
          id: "item46",
          collectionId: "womenshoes",
          title: "Nike Air Zoom SuperRep",
          subtitle: "Women's HIIT Class Shoe",
          imageUrl: "https://i.imgur.com/XlyjMLi.jpg",
          price: 104.95,
          images: {
            image1: "https://i.imgur.com/DU3VirU.jpg",
            image2: "https://i.imgur.com/zxtMz2e.jpg",
            image3: "https://i.imgur.com/eXDxILz.jpg",
          },
          info:
            "The Nike Air Zoom SuperRep is designed for circuit training, HIIT, short runs and other fast-paced exercise. Zoom Air cushioning in the forefoot combines with a wide, supportive heel to keep you moving and lifting comfortably.",
          color: "Guava Ice/Platinum Violet/Sail/Metallic Red Bronze",
          size: "",
          fit: "",
        },
        item47: {
          id: "item47",
          collectionId: "womenshoes",
          title: "Nike Air Max 2090",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/1wXsmQ9.jpg",
          price: 129.95,
          images: {
            image1: "https://i.imgur.com/X4YP9DP.jpg",
            image2: "https://i.imgur.com/pFcHU5L.jpg",
            image3: "https://i.imgur.com/TIRCMrE.jpg",
          },
          info:
            "Bring the past into the future with the Nike Air Max 2090. Inspired by the iconic Air Max 90, this shoe features Nike Air cushioning underfoot that adds unparalleled comfort, while transparent mesh on the upper blend with timeless OG features for an edgy, modernised look.",
          color: "White/Wolf Grey/Pure Platinum/White",
          size: "",
          fit: "",
        },
        item48: {
          id: "item48",
          collectionId: "womenshoes",
          title: "Nike Air Max Verona",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/tI5UTOr.jpg",
          price: 104.95,
          images: {
            image1: "https://i.imgur.com/NvgJDdy.jpg",
            image2: "https://i.imgur.com/SJcPOKS.jpg",
            image3: "https://i.imgur.com/gLY9uOV.jpg",
          },
          info:
            "As the first Air Max released exclusively for women in 1992, the Nike Air Max Verona re-imagines the traditional running silhouette. The Air Max 200 unit cushions every step and gives a lifted feel to your ride.",
          color: "White/Pure Platinum/Glacier Ice/Pink Glow",
          size: "",
          fit: "",
        },
        item49: {
          id: "item49",
          collectionId: "womenshoes",
          title: "Nike Air Max 90",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/tHmQgLq.jpg",
          price: 114.95,
          images: {
            image1: "https://i.imgur.com/KejUoGB.jpg",
            image2: "https://i.imgur.com/KL9HVx5.jpg",
            image3: "https://i.imgur.com/pEMYRo3.jpg",
          },
          info:
            "Lace into sneaker royalty in the Nike Air Max 90. Fresh colours bring the iconic design to life with the same cushioned feel you know and trust.",
          color: "Black/White/Pink Blast/Metallic Silver",
          size: "",
          fit: "",
        },
        item50: {
          id: "item50",
          collectionId: "womenshoes",
          title: "Nike Air Max 2090",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/0ECAEqp.jpg",
          price: 129.95,
          images: {
            image1: "https://i.imgur.com/qv6kL74.jpg",
            image2: "https://i.imgur.com/AFLUl73.jpg",
            image3: "https://i.imgur.com/3ahGEKm.jpg",
          },
          info:
            "Bring the past into the future with the Nike Air Max 2090, a bold look inspired by the DNA of the iconic Air Max 90. Brand-new Nike Air cushioning underfoot adds unparalleled comfort while transparent mesh and vibrantly coloured textile on the upper blend with timeless OG features for an edgy, modernised look.",
          color: "White/Pink Foam/Lotus Pink/Black",
          size: "",
          fit: "",
        },
      },
    },
  },
  isPending: false,
  errorMessage: "",
};
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_PENDING: {
      return {
        ...state,
        isPending: true,
      };
    }
    case FETCH_COLLECTIONS_SUCCESS: {
      return {
        ...state,
        isPending: false,
        collections: action.payload,
      };
    }
    case FETCH_COLLECTIONS_ERROR: {
      return {
        ...state,
        pending: false,
        errorMessage: action.payload,
      };
    }
    case SORT_COLLECTION_BY_VALUE:
      {
        const { collectionId, sortOrder } = action.payload;
        const copyCollection = { ...state.collections[collectionId] };

        if (sortOrder === "des") {
          const arrayItemsPrice = Object.values(copyCollection.items).sort(
            (a, b) => {
              if (b.price < a.price) return -1;
              if (b.price > a.price) return 1;
              return 0;
            }
          );
          const convertedToObjectSortedItemsPrice = Object.assign(
            {},
            ...arrayItemsPrice.map((object) => ({ [object.id]: object }))
          );
          return {
            ...state,
            collections: {
              ...state.collections,
              [collectionId]: {
                ...state.collections[collectionId],
                items: convertedToObjectSortedItemsPrice,
              },
            },
          };
        } else if (sortOrder === "asc") {
          const arrayItemsPrice = Object.values(copyCollection.items).sort(
            (a, b) => {
              if (a.price < b.price) return -1;
              if (a.price > b.price) return 1;
              return 0;
            }
          );
          const convertedToObjectSortedItemsPrice = Object.assign(
            {},
            ...arrayItemsPrice.map((object) => ({ [object.id]: object }))
          );

          return {
            ...state,
            collections: {
              ...state.collections,
              [collectionId]: {
                ...state.collections[collectionId],
                items: convertedToObjectSortedItemsPrice,
              },
            },
          };
        }
      }
      break;
    default:
      return state;
  }
};

export default shopReducer;
