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
      title: "Women",
      items: {
        item1: {
          id: "item1",
          title: "Nike Sportswear Windrunner",
          subtitle: "Women's Jacket",
          imageUrl: "https://i.imgur.com/6ZbHKIr.jpg",
          price: 69.95,
          images: {
            image1: "https://i.imgur.com/oKIiJCR.jpg",
            image2: "https://i.imgur.com/AVWqDRU.jpg",
            image3: "https://i.imgur.com/0yk57Sw.jpg",
          },
        },
        item2: {
          id: "item2",
          title: "Nike Sportswear Gym Vintage",
          subtitle: "Women's Shorts",
          imageUrl: "https://i.imgur.com/Uvkn7oO.jpg",
          price: 32.95,
          images: {
            image1: "https://i.imgur.com/2ps12tQ.jpg",
            image2: "https://i.imgur.com/oy3ED1O.jpg",
            image3: "https://i.imgur.com/jFDFEwQ.jpg",
          },
        },
        item3: {
          id: "item3",
          title: "Nike Sportswear NSW",
          subtitle: "Women's Crew",
          imageUrl: "https://i.imgur.com/1w4AGiq.jpg",
          price: 69.95,
          images: {
            image1: "https://i.imgur.com/4nM3mvC.jpg",
            image2: "https://i.imgur.com/qdUx7OG.jpg",
          },
        },
        item4: {
          id: "item4",
          title: "Nike Sportswear Heritage",
          subtitle: "Womens's Short-Sleeve Top",
          imageUrl: "https://i.imgur.com/TTcdshu.jpg",
          price: 24.95,
          images: {
            image1: "https://i.imgur.com/bBGAHH3.jpg",
            image2: "https://i.imgur.com/KMpueUZ.jpg",
          },
        },
        item5: {
          id: "item5",
          title: "Nike Air",
          subtitle: "Women's Bodysuit",
          imageUrl: "https://i.imgur.com/ynYgmOP.jpg",
          price: 39.95,
          images: {
            image1: "https://i.imgur.com/p56s2MV.jpg",
            image2: "https://i.imgur.com/qN7qLhE.jpg",
          },
        },
        item6: {
          id: "item6",
          title: "Nike Sportswear Swoosh",
          subtitle: "Women's Trousers",
          imageUrl: "https://i.imgur.com/mdps8Fd.jpg",
          price: 54.95,
          images: {
            image1: "https://i.imgur.com/kPU5jsC.jpg",
            image2: "https://i.imgur.com/8R8sUlB.jpg",
            image3: "https://i.imgur.com/FxTrK2g.jpg",
          },
        },
        item7: {
          id: "item7",
          title: "Nike Sportswear Tech Fleece Windrunner",
          subtitle: " Women's Full-Zip Hoodie ",
          imageUrl: "https://i.imgur.com/kXUcjgS.jpg",
          price: 89.95,
          images: {
            image1: "https://i.imgur.com/djVoMn8.jpg",
            image2: "https://i.imgur.com/APdI6PU.jpg",
            image3: "https://i.imgur.com/wdW9PUe.jpg",
          },
        },
        item8: {
          id: "item8",
          title: "Nike Sportwear Tech Fleece",
          subtitle: " Women's Trousers ",
          imageUrl: "https://i.imgur.com/K5ErfNc.jpg",
          price: 79.95,
          images: {
            image1: "https://i.imgur.com/zlC1YQq.jpg",
          },
        },
        item9: {
          id: "item9",
          title: "Nike Sportswear Down-Fill",
          subtitle: "Women's Windrunner Jacket",
          imageUrl: "https://i.imgur.com/rS8aFgG.jpg",
          price: 139.95,
          images: {
            image1: "https://i.imgur.com/AoLHkVN.jpg",
            image2: "https://i.imgur.com/B6xE0pN.jpg",
          },
        },
        item10: {
          id: "item10",
          title: "Jordan Utility",
          subtitle: "Women's Flight Suit",
          imageUrl: "https://i.imgur.com/MeAVawv.jpg",
          price: 114.95,
          images: {
            image1: "https://i.imgur.com/xuE2MNT.jpg",
            image2: "https://i.imgur.com/npIwFwO.jpg",
            image3: "https://i.imgur.com/SnDImY3.jpg",
          },
        },
      },
    },
    men: {
      id: "men",
      title: "Men",
      items: {
        item11: {
          id: "item11",
          title: "Nike Sportswear",
          subtitle: "Men's Short-Sleeve Top",
          imageUrl: "https://i.imgur.com/wP6a2rb.jpg",
          price: 34.95,
          images: {
            image1: "https://i.imgur.com/f7nye3H.jpg",
            image2: "https://i.imgur.com/tIMFmfS.jpg",
            image3: "https://i.imgur.com/cw9tyTx.jpg",
          },
        },
        item12: {
          id: "item12",
          title: "Nike Air",
          subtitle: "Men's Trousers",
          imageUrl: "https://i.imgur.com/vTCELhU.jpg",
          price: 59.95,
          images: {
            image1: "https://i.imgur.com/H95af6R.jpg",
            image2: "https://i.imgur.com/0eDR59n.jpg",
          },
        },
        item13: {
          id: "item13",
          title: "Nike Sportswear",
          subtitle: "Men's Hooded Jacket",
          imageUrl: "https://i.imgur.com/fEWjcsn.jpg",
          price: 94.95,
          images: {
            image1: "https://i.imgur.com/7Tpxk4I.jpg",
            image2: "https://i.imgur.com/LreD0Rp.jpg",
            image3: "https://i.imgur.com/wDa4obX.jpg",
          },
        },
        item14: {
          id: "item14",
          title: "Nike Sportswear",
          subtitle: "Men's Woven Shorts",
          imageUrl: "https://i.imgur.com/T0NOTbL.jpg",
          price: 59.95,
          images: {
            image1: "https://i.imgur.com/csane4H.jpg",
            image2: "https://i.imgur.com/oLsiIZE.jpg",
          },
        },
        item15: {
          id: "item15",
          title: "Nike Sportswear Windrunner",
          subtitle: "Men's Jacket",
          imageUrl: "https://i.imgur.com/ILfdJMI.jpg",
          price: 99.95,
          images: {
            image1: "https://i.imgur.com/qqHF0zK.jpg",
            image2: "https://i.imgur.com/o4edHvL.jpg",
            image3: "https://i.imgur.com/ViNT7CP.jpg",
          },
        },
        item16: {
          id: "item16",
          title: "Nike Sportswear",
          subtitle: "Men's Short-Sleeve Top",
          imageUrl: "https://i.imgur.com/tNT0DFN.jpg",
          price: 34.95,
          images: {
            image1: "https://i.imgur.com/8fJMAOS.jpg",
            image2: "https://i.imgur.com/RLPHXQw.jpg",
            image3: "https://i.imgur.com/EuBbBoE.jpg",
          },
        },
        item17: {
          id: "item17",
          title: "Nike Sportswear Tech Fleece",
          subtitle: "Men's Full-Zip Hoodie",
          imageUrl: "https://i.imgur.com/5olFldT.jpg",
          price: 59.95,
          images: {
            image1: "https://i.imgur.com/zcL3uyu.jpg",
            image2: "https://i.imgur.com/nu0ZvTF.jpg",
          },
        },
        item18: {
          id: "item18",
          title: "Nike Sportswear Tech Fleece",
          subtitle: " Men's Joggers",
          imageUrl: "https://i.imgur.com/pHuZHha.jpg",
          price: 79.95,
          images: {
            image1: "https://i.imgur.com/CymDZwW.jpg",
            image2: "https://i.imgur.com/MdrvQz0.jpg",
          },
        },
        item19: {
          id: "item19",
          title: "Nike Pro",
          subtitle: "Men's Pullover Hoodie",
          imageUrl: "https://i.imgur.com/yXuN557.jpg",
          price: 74.95,
          images: {
            image1: "https://i.imgur.com/fqReAs3.jpg",
            image2: "https://i.imgur.com/lb1fQjU.jpg",
            image3: "https://i.imgur.com/MzEaRno.jpg",
          },
        },
        item20: {
          id: "item20",
          title: "Jordan Jumpman Classics HBR",
          subtitle: "Men's Short-Sleeve Crew",
          imageUrl: "https://i.imgur.com/9KDEStW.jpg",
          price: 29.95,
          images: {
            image1: "https://i.imgur.com/1UcC9oJ.jpg",
            image2: "https://i.imgur.com/FOWwBgT.jpg",
            image3: "https://i.imgur.com/GFmTbuT.jpg",
          },
        },
      },
    },
    kids: {
      id: "kids",
      title: "Kids",
      items: {
        item21: {
          id: "item21",
          title: "Nike Sportswear",
          subtitle: "Older Kids' (Boys') Fleece Jacket",
          imageUrl: "https://i.imgur.com/Ns809rt.jpg",
          price: 54.95,
          images: {
            image1: "https://i.imgur.com/3pd7xQL.jpg",
            image2: "https://i.imgur.com/VrXPgef.jpg",
            image3: "https://i.imgur.com/tQD9phT.jpg",
          },
        },
        item22: {
          id: "item22",
          title: "Nike Sportswear Tech Fleece",
          subtitle: "Older Kids' (Boys') Full-Zip Hoodie",
          imageUrl: "https://i.imgur.com/jk2yuIo.jpg",
          price: 74.95,
          images: {
            image1: "https://i.imgur.com/TebrPfR.jpg",
          },
        },
        item23: {
          id: "item23",
          title: "Nike Sportswear Tech Fleece",
          subtitle: "Older Kids' (Boys') Trousers",
          imageUrl: "https://i.imgur.com/33dR5pF.jpg",
          price: 59.95,
          images: {
            image1: "https://i.imgur.com/6dtsM8H.jpg",
            image2: "https://i.imgur.com/g9pjjst.jpg",
          },
        },
        item24: {
          id: "item24",
          title: "Nike Sportswear Tech Fleece",
          subtitle: "Younder Kids' (Boys') Full-Zip Hoodie",
          imageUrl: "https://i.imgur.com/gHZ03nR.jpg",
          price: 64.95,
          images: {
            image1: "https://i.imgur.com/RkOaXyT.jpg",
          },
        },
        item25: {
          id: "item25",
          title: "Nike Sportswear Tech Fleece",
          subtitle: "Baby (0-9M) Full-Zip Overall",
          imageUrl: "https://i.imgur.com/GuYuLHS.jpg",
          price: 59.95,
          images: {},
        },
        item26: {
          id: "item26",
          title: "Nike Sportswear",
          subtitle: "Older Kids' T-Shirt",
          imageUrl: "https://i.imgur.com/SJLHNfe.jpg",
          price: 19.95,
          images: {
            image1: "https://i.imgur.com/E7QJvcE.jpg",
            image2: "https://i.imgur.com/GQBrXXG.jpg",
            image3: "https://i.imgur.com/yUmXxec.jpg",
          },
        },
        item27: {
          id: "item27",
          title: "Nike Sportswear Swoosh",
          subtitle: "Older Kids' (Boys') Full-Zip Hoodie",
          imageUrl: "https://i.imgur.com/a3QGe6d.jpg",
          price: 44.95,
          images: {
            image1: "https://i.imgur.com/LIPJWkn.jpg",
            image2: "https://i.imgur.com/lBRuhH6.jpg",
            image3: "https://i.imgur.com/tvXbv9e.jpg",
          },
        },
        item28: {
          id: "item28",
          title: "Nike Sportswear",
          subtitle: "Older Kids' (Boys') Shorts",
          imageUrl: "https://i.imgur.com/y6QMRIH.jpg",
          price: 24.95,
          images: {
            image1: "https://i.imgur.com/2zHC8xx.jpg",
            image2: "https://i.imgur.com/xglTWmh.jpg",
            image3: "https://i.imgur.com/Mg4MmQS.jpg",
          },
        },
        item29: {
          id: "item29",
          title: "Nike Sportswear Swoosh",
          subtitle: "Older Kids' Hoodie",
          imageUrl: "https://i.imgur.com/PwIodal.jpg",
          price: 39.95,
          images: {
            image1: "https://i.imgur.com/whsTfq8.jpg",
            image2: "https://i.imgur.com/ud14Nb4.jpg",
            image3: "https://i.imgur.com/Mg4MmQS.jpg",
          },
        },
        item30: {
          id: "item30",
          title: "Nike Sportswear Swoosh",
          subtitle: "Older Kids' Joggers",
          imageUrl: "https://i.imgur.com/MC1d3DZ.jpg",
          price: 34.95,
          images: {
            image1: "https://i.imgur.com/W7CWM6p.jpg",
            image2: "https://i.imgur.com/pIsYMtP.jpg",
            image3: "https://i.imgur.com/xi0PEsG.jpg",
          },
        },
      },
    },
    menshoes: {
      id: "menshoes",
      title: "Men's Shoes",
      items: {
        item31: {
          id: "item31",
          title: "Air Max 90 Premium",
          subtitle: "Men's Shoe",
          imageUrl: "https://i.imgur.com/99RuStw.jpg",
          price: 114.95,
          images: {
            image1: "https://i.imgur.com/fWqyis8.jpg",
            image2: "https://i.imgur.com/fL48knb.jpg",
            image3: "https://i.imgur.com/ui02oiG.jpg",
          },
        },
        item32: {
          id: "item32",
          title: "Nike Air Force 1 '07 LV8",
          subtitle: "Men's Shoe",
          imageUrl: "https://i.imgur.com/sXTLVHq.jpg",
          price: 89.95,
          images: {
            image1: "https://i.imgur.com/hhCeKBF.jpg",
            image2: "https://i.imgur.com/l2ajlcJ.jpg",
            image3: "https://i.imgur.com/UMnulI4.jpg",
          },
        },
        item33: {
          id: "item33",
          title: "Nike Air Max 97",
          subtitle: "men's Shoe",
          imageUrl: "https://i.imgur.com/k0hh3Ya.jpg",
          price: 149.95,
          images: {
            image1: "https://i.imgur.com/DcrUj8L.jpg",
            image2: "https://i.imgur.com/hgL9eDX.jpg",
            image3: "https://i.imgur.com/VgZ1CNU.jpg",
          },
        },
        item34: {
          id: "item34",
          title: "Nike Blazer Mid Vintage '77",
          subtitle: "Shoe",
          imageUrl: "https://i.imgur.com/YMGrh8v.jpg",
          price: 89.95,
          images: {
            image1: "https://i.imgur.com/guwXFeF.jpg",
            image2: "https://i.imgur.com/ADx4Txv.jpg",
            image3: "https://i.imgur.com/3WBq2mv.jpg",
          },
        },
        item35: {
          id: "item35",
          title: "Nike Blazer Mid '77 Vintage",
          subtitle: "Shoe",
          imageUrl: "https://i.imgur.com/F65N7kL.jpg",
          price: 89.95,
          images: {
            image1: "https://i.imgur.com/7HAKJg5.jpg",
            image2: "https://i.imgur.com/8o99PfG.jpg",
            image3: "https://i.imgur.com/ae7RdIz.jpg",
          },
        },
        item36: {
          id: "item36",
          title: "Nike Blazer Mid Vintage '77",
          subtitle: "Men's Shoe",
          imageUrl: "https://i.imgur.com/wscFoEP.jpg",
          price: 89.95,
          images: {
            image1: "https://i.imgur.com/PsSEInI.jpg",
            image2: "https://i.imgur.com/ytwWYiZ.jpg",
            image3: "https://i.imgur.com/4H04Fyr.jpg",
          },
        },
        item37: {
          id: "item37",
          title: "Jordan Zoom '92",
          subtitle: "Men's Shoe",
          imageUrl: "https://i.imgur.com/aJmX8hP.jpg",
          price: 129.95,
          images: {
            image1: "https://i.imgur.com/f0zqpPP.jpg",
            image2: "https://i.imgur.com/RdymEAq.jpg",
            image3: "https://i.imgur.com/Rh3JeWU.jpg",
          },
        },
        item38: {
          id: "item38",
          title: "Nike Air Max Plus",
          subtitle: "Men's Shoe",
          imageUrl: "https://i.imgur.com/nJuqKmf.jpg",
          price: 139.95,
          images: {
            image1: "https://i.imgur.com/C4aMOgZ.jpg",
            image2: "https://i.imgur.com/6WQuB8q.jpg",
            image3: "https://i.imgur.com/CRkc6YV.jpg",
          },
        },
        item39: {
          id: "item39",
          title: "Nike Air Max 90",
          subtitle: "Men's Shoe",
          imageUrl: "https://i.imgur.com/fHM0BrZ.jpg",
          price: 114.95,
          images: {
            image1: "https://i.imgur.com/YeZ7Sms.jpg",
            image2: "https://i.imgur.com/xIP9yKh.jpg",
            image3: "https://i.imgur.com/FT15n1X.jpg",
          },
        },
        item40: {
          id: "item40",
          title: "Nike React Infinity Run Flyknit",
          subtitle: "Men's Running Shoe",
          imageUrl: "https://i.imgur.com/pzaZMiB.jpg",
          price: 124.95,
          images: {
            image1: "https://i.imgur.com/ONZs9xS.jpg",
            image2: "https://i.imgur.com/CQmPXdG.jpg",
            image3: "https://i.imgur.com/hDABZkM.jpg",
          },
        },
      },
    },
    womenshoes: {
      id: "womenshoes",
      title: "Women's Shoes",
      items: {
        item41: {
          id: "item41",
          title: "Nike Blazer Mid Vintage '77",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/yWAW13u.jpg",
          price: 89.95,
          images: {
            image1: "https://i.imgur.com/Uh38ZcR.jpg",
            image2: "https://i.imgur.com/nRDEx56.jpg",
            image3: "https://i.imgur.com/L185dSz.jpg",
          },
        },
        item42: {
          id: "item42",
          title: "Nike Air Max 90",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/rWmFDaM.jpg",
          price: 114.95,
          images: {
            image1: "https://i.imgur.com/f39hYpJ.jpg",
            image2: "https://i.imgur.com/mwnUWNf.jpg",
            image3: "https://i.imgur.com/Wimwved.jpg",
          },
        },
        item43: {
          id: "item43",
          title: "Nike React Vision",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/MvCqjed.jpg",
          price: 114.95,
          images: {
            image1: "https://i.imgur.com/Ku0aJyI.jpg",
            image2: "https://i.imgur.com/3bLhprK.jpg",
            image3: "https://i.imgur.com/gIaIYpS.jpg",
          },
        },
        item44: {
          id: "item44",
          title: "Nike Air Max 90",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/A9S1Ha2.jpg",
          price: 114.95,
          images: {
            image1: "https://i.imgur.com/siCNNbf.jpg",
            image2: "https://i.imgur.com/aTpw3fU.jpg",
            image3: "https://i.imgur.com/LVEQmOq.jpg",
          },
        },
        item45: {
          id: "item45",
          title: "Nike React Vision",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/rWmFDaM.jpg",
          price: 114.95,
          images: {
            image1: "https://i.imgur.com/M9sswzj.jpg",
            image2: "https://i.imgur.com/jUEBiTv.jpg",
            image3: "https://i.imgur.com/Tu3hFv6.jpg",
          },
        },
        item46: {
          id: "item46",
          title: "Nike Air Zoom SuperRep",
          subtitle: "Women's HIIT Class Shoe",
          imageUrl: "https://i.imgur.com/XlyjMLi.jpg",
          price: 104.95,
          images: {
            image1: "https://i.imgur.com/DU3VirU.jpg",
            image2: "https://i.imgur.com/zxtMz2e.jpg",
            image3: "https://i.imgur.com/eXDxILz.jpg",
          },
        },
        item47: {
          id: "item47",
          title: "Nike Air Max 2090",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/1wXsmQ9.jpg",
          price: 129.95,
          images: {
            image1: "https://i.imgur.com/X4YP9DP.jpg",
            image2: "https://i.imgur.com/pFcHU5L.jpg",
            image3: "https://i.imgur.com/TIRCMrE.jpg",
          },
        },
        item48: {
          id: "item48",
          title: "Nike Air MAx Verona",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/tI5UTOr.jpg",
          price: 104.95,
          images: {
            image1: "https://i.imgur.com/NvgJDdy.jpg",
            image2: "https://i.imgur.com/SJcPOKS.jpg",
            image3: "https://i.imgur.com/gLY9uOV.jpg",
          },
        },
        item49: {
          id: "item49",
          title: "Nike Air Max 90",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/tHmQgLq.jpg",
          price: 114.95,
          images: {
            image1: "https://i.imgur.com/KejUoGB.jpg",
            image2: "https://i.imgur.com/KL9HVx5.jpg",
            image3: "https://i.imgur.com/pEMYRo3.jpg",
          },
        },
        item50: {
          id: "item50",
          title: "Nike Air Max 2090",
          subtitle: "Women's Shoe",
          imageUrl: "https://i.imgur.com/0ECAEqp.jpg",
          price: 129.95,
          images: {
            image1: "https://i.imgur.com/qv6kL74.jpg",
            image2: "https://i.imgur.com/AFLUl73.jpg",
            image3: "https://i.imgur.com/3ahGEKm.jpg",
          },
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
    // case SORT_COLLECTION_BY_VALUE: {
    //   // sortName -> price, name
    //   const { collectionName, sortOrder, sortName } = action.payload;
    //   const copyCollection = { ...state.collections[collectionName] };

    //   const sortedItemsPrice = copyCollection.items.sort((a, b) => {
    //     if (a.price < b.price) return -1;
    //     if (a.price > b.price) return 1;
    //     return 0;
    //   });

    //   return {
    //     ...state,
    //     collections: {
    //       ...state.collections,
    //       [collectionName]: {
    //         ...state.collections[collectionName],
    //         items: sortedItemsPrice,
    //       },
    //     },
    //   };
    // }

    default:
      return state;
  }
};

export default shopReducer;
