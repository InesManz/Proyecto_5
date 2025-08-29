const products = [
  // 👕 T-Shirts
  {
    id: 1,
    name: "Burzum",
    price: 25.00,
    size: ["S", "M", "L"],
    color: "White",
    category: "t-shirts",
    type: "clothing",
    image: "/productsimg/clothing/t-shirt/0003_SPLCR---BURZUM_900x.png"
  },
  {
    id: 2,
    name: "Church-black",
    price: 25.00,
    size: ["M", "L", "XL"],
    color: "Black",
    category: "t-shirts",
    type: "clothing",
    image: "/productsimg/clothing/t-shirt/0004_SPLCR---CHURCH-BLACK_900x.png"
  },
  {
    id: 3,
    name: "Church-white",
    price: 25.00,
    size: ["M", "L", "XL"],
    color: "White",
    category: "t-shirts",
    type: "clothing",
    image: "/productsimg/clothing/t-shirt/0005_SPLCR---CHURCH-WHITE_900x.png"
  },
  {
    id: 4,
    name: "Hail Satan",
    price: 25.00,
    size: ["M", "L", "XL"],
    color: "Black",
    category: "t-shirts",
    type: "clothing",
    image: "/productsimg/clothing/t-shirt/HailSatanBlack2_540x.png"
  },
  {
    id: 5,
    name: "Alwayss Tired pink",
    price: 25.00,
    size: ["M", "L", "XL"],
    color: "Pink",
    category: "t-shirts",
    type: "clothing",
    image: "/productsimg/clothing/t-shirt/Mock-It-Stanley_StellaCreatorUnisexT-Shirt_1_2_720x.png"
  },
  {
    id: 6,
    name: "Alwayss Tired yellow",
    price: 25.00,
    size: ["M", "L", "XL"],
    color: "Yellow",
    category: "t-shirts",
    type: "clothing",
    image: "/productsimg/clothing/t-shirt/Mock-It-Stanley_StellaCreatorUnisexT-Shirt_1_720x.png"
  },
  {
    id: 7,
    name: "Zero motivation",
    price: 25.00,
    size: ["M", "L", "XL"],
    color: "White",
    category: "t-shirts",
    type: "clothing",
    image: "/productsimg/clothing/t-shirt/SEPULCRO-ZEROMOTIVATION-01_900x.png"
  },
  {
    id: 8,
    name: "Dissociation",
    price: 25.00,
    size: ["M", "L", "XL"],
    color: "White",
    category: "t-shirts",
    type: "clothing",
    image: "/productsimg/clothing/t-shirt/SPLCR_0007_SPLCR-DISSOCIATION_720x.png"
  },
  {
    id: 9,
    name: "Skull",
    price: 25.00,
    size: ["M", "L", "XL"],
    color: "Black",
    category: "t-shirts",
    type: "clothing",
    image: "/productsimg/clothing/t-shirt/SPLCR_0009_SPLCR-SKULL-TSHIRT_720x.png"
  },
  {
    id: 10,
    name: "Airuned my life",
    price: 25.00,
    size: ["M", "L", "XL"],
    color: "White",
    category: "t-shirts",
    type: "clothing",
    image: "/productsimg/clothing/t-shirt/SPLCR_AIRUINEDMYLIFE_720x.png"
  },
  {
    id: 11,
    name: "Antisocial",
    price: 25.00,
    size: ["M", "L", "XL"],
    color: "White",
    category: "t-shirts",
    type: "clothing",
    image: "/productsimg/clothing/t-shirt/SPLCR_ANTISOCIAL_01_900x.png"
  },
  {
    id: 12,
    name: "Breakfast",
    price: 25.00,
    size: ["M", "L", "XL"],
    color: "White",
    category: "t-shirts",
    type: "clothing",
    image: "/productsimg/clothing/t-shirt/SPLCR-BREAKFAST_48d9c0e4-97df-40cd-bad2-39e8fe9d9db2_720x.png"
  },
  {
    id: 13,
    name: "Comic sans black",
    price: 25.00,
    size: ["M", "L", "XL"],
    color: "Black",
    category: "t-shirts",
    type: "clothing",
    image: "/productsimg/clothing/t-shirt/SPLCR-ComicSans-Black_720x.png"
  },
  {
    id: 14,
    name: "Comic sans yellow",
    price: 25.00,
    size: ["M", "L", "XL"],
    color: "Yellow",
    category: "t-shirts",
    type: "clothing",
    image: "/productsimg/clothing/t-shirt/SPLCR-ComicSans-Yellow_720x.png"
  },
  {
    id: 15,
    name: "Loser kebab",
    price: 25.00,
    size: ["M", "L", "XL"],
    color: "White",
    category: "t-shirts",
    type: "clothing",
    image: "/productsimg/clothing/t-shirt/SPLCRLoserKebab_720x.png"
  },
  {
    id: 16,
    name: "Perro peligrot",
    price: 25.00,
    size: ["M", "L", "XL"],
    color: "White",
    category: "t-shirts",
    type: "clothing",
    image: "/productsimg/clothing/t-shirt/SPLCR-PERROPELIGROT-SHIRT_720x.png"
  },

  // 👕 Sweatshirts
  {
    id: 17,
    name: "Crush Sweatshirt",
    price: 35.00,
    size: ["S", "M", "L", "XL"],
    color: "White",
    category: "sweatshirts",
    type: "clothing",
    image: "/productsimg/clothing/sweatshirts/1735905989420_540x.jpg"
  },
  {
    id: 18,
    name: "Star Sweatshirt",
    price: 35.00,
    size: ["M", "L"],
    color: "Beige",
    category: "sweatshirts",
    type: "clothing",
    image: "/productsimg/clothing/sweatshirts/SPLCR_0011_SPLCR-STAR-BEIGE_720x.png"
  },
  {
    id: 19,
    name: "Hail Satan Sweatshirt",
    price: 35.00,
    size: ["M", "L"],
    color: "Black",
    category: "sweatshirts",
    type: "clothing",
    image: "/productsimg/clothing/sweatshirts/SPLCR-HailSatanCrewneck_720x.png"
  },
  {
    id: 20,
    name: "Perro Peligrot Sweatshirt",
    price: 35.00,
    size: ["M", "L"],
    color: "White",
    category: "sweatshirts",
    type: "clothing",
    image: "/productsimg/clothing/sweatshirts/SPLCR-PERROPELIGROCREWNECK_720x.png"
  },

  // 🎒 Bags
  {
    id: 21,
    name: "Church Black Tote Bag",
    price: 8.00,
    size: ["One size"],
    color: "Black",
    category: "bags",
    type: "accessories",
    image: "/productsimg/accessories/bag/0001_SPLCR---CHURCH-BLACK-TOTE_a8ac3cee-cf9a-4a82-ba64-75c05cbfee21_900x.png"
  },
  {
    id: 22,
    name: "Church Pink Tote Bag",
    price: 8.00,
    size: ["One size"],
    color: "Pink",
    category: "bags",
    type: "accessories",
    image: "/productsimg/accessories/bag/0002_SPLCR---CHURCH-PINK-TOTE_720x.png"
  },
  {
    id: 23,
    name: "Antisocial Tote Bag",
    price: 8.00,
    size: ["One size"],
    color: "White",
    category: "bags",
    type: "accessories",
    image: "/productsimg/accessories/bag/SPLCR_ANTISOCIAL_TOTEBAG_720x.png"
  },

  // 🧢 Caps
  {
    id: 24,
    name: "Black Metal Cap",
    price: 19.99,
    size: ["One size"],
    color: "Black",
    category: "caps",
    type: "accessories",
    image: "/productsimg/accessories/headwear/0000_SPLCR---BLACK-METAL-DAD-CAP_3fc53141-a628-49fc-8273-ed0f1586ca71_900x.png"
  },
  {
    id: 25,
    name: "Star Cap",
    price: 19.99,
    size: ["One size"],
    color: "White",
    category: "caps",
    type: "accessories",
    image: "/productsimg/accessories/headwear/Star-DadCap_2421fadb-176d-4035-a538-7142257f02ee_720x.png"
  },
  {
    id: 26,
    name: "Comic Sans Beige Cap",
    price: 19.99,
    size: ["One size"],
    color: "Beige",
    category: "caps",
    type: "accessories",
    image: "/productsimg/accessories/headwear/SPLCR-ComicSans-BeigeCap_720x.png"
  },
  {
    id: 27,
    name: "Comic Sans Black Cap",
    price: 19.99,
    size: ["One size"],
    color: "Black",
    category: "caps",
    type: "accessories",
    image: "/productsimg/accessories/headwear/SPLCR-ComicSans-BlackCap_720x.png"
  },
  {
    id: 28,
    name: "Alwayss Tired Cap",
    price: 19.99,
    size: ["One size"],
    color: "Black",
    category: "caps",
    type: "accessories",
    image: "/productsimg/accessories/headwear/SPLCR-TIRED-CAP-BLACK-2_8da548a9-f861-4f35-822c-f89640874da6_1080x.jpg"
  },

  // 🩹 Patches
  {
    id: 29,
    name: "Tengo Miedo Embroidered Patch",
    price: 6.00,
    size: ["One size"],
    color: "Multicolor",
    category: "patches",
    type: "accessories",
    image: "/productsimg/accessories/patches/SPLCR-TENGOMIEDO_720x.png"
  },
  {
    id: 30,
    name: "Black Metal Embroidered Patch",
    price: 6.00,
    size: ["One size"],
    color: "Multicolor",
    category: "patches",
    type: "accessories",
    image: "/productsimg/accessories/patches/SPLCR-BLACK-METAL-PATCH_720x.png"
  },
  {
    id: 31,
    name: "Comic Sans Embroidered Patch",
    price: 6.00,
    size: ["One size"],
    color: "Multicolor",
    category: "patches",
    type: "accessories",
    image: "/productsimg/accessories/patches/SPLCR-ComicSans-Patch_720x.png"
  },
  {
    id: 32,
    name: "Trash Embroidered Patch",
    price: 6.00,
    size: ["One size"],
    color: "Multicolor",
    category: "patches",
    type: "accessories",
    image: "/productsimg/accessories/patches/SPLCR-TRASH_540x.png"
  }
];

export default products;
