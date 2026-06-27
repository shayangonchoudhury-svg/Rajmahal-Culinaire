/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // SPECIALS (Daily Mahala)
  {
    id: 'zaffrani-galouti',
    name: 'Zaffrani Galouti',
    description: 'Melt-in-the-mouth smoked lamb patties infused with 21 secret spices and hand-picked Kashmiri Saffron.',
    price: 1850,
    tags: ['Signature', 'Nut-Free'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBggbo3R3sWR2Rch12sISeSOg4Yn79O3bDx1bK5cxFCmfpI7QJix7Ay0P95nE2PmBqwR9ZkuL8z5_IhE_WM-J7Iv-HpwxeJOZ2v12--USPBtSYdj--K7DRVKJclmIK1Up3KeF8l3kSsZvT08uS6GOIgxxP-nUT70Jk2WQgoVexuR7IVs8MVZ3hv8e6xbRIofXMy-hn1CC5ILar2Fe-tEYXmkGrNANC2n6Cxky9Qt7u5VpeqtjbgPnaw_xEaT8UHCUKVSMpBXEfvw',
    category: 'special'
  },
  {
    id: 'lobster-dum-anari',
    name: 'Lobster Dum Anari',
    description: 'Slow-cooked coastal lobster in a rich pomegranate and hung curd emulsion. A royal delicacy from the Mewar courts.',
    price: 3200,
    tags: ['Premium', 'Seafood'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjfuTNHKTuYr09ayYCI9WJeg5SiI3svm2jIMSuUDkIc5aCPYPCNjjP5W5aXOlRbxnLMdd6CISpL3E0erbo8t4Xu29FtKXnFu02uNCTjovUN24OLCkquMw8pRVDlLjiIhGd59TC-XNkwWsqyIaPg5OCQ9UTf2WafGZAT4e-j3g6fyB-WLezY9d5HtwxppSMtQ4_xPgJ0yPjMg4GuoMYbf5BP4mY1T-5PNEcHA_AmTD-0GBDzDgpPIJsOT4FjgX0GKX2M1iTT8-Y2g',
    category: 'special'
  },
  {
    id: 'truffle-malai',
    name: 'Truffle Malai',
    description: 'Tandoor-charred broccoli florets marinated in a black truffle and cashew cream. The ultimate vegetarian indulgence.',
    price: 1450,
    tags: ['Vegetarian', 'New'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDKyMvTDGBXuiV2RPKoNkKsuxR_Q154GfbTJ3CdAkWWuwFGVqMGjVYuep5unV4fUneeTue5ky0jc7NJVr9WxGdHGzFOGGNYWxcp0xNyjskJWej5j7wZPeeztDRw1-9BtZgVWIH6Z-nyDA5Ymw_HnDO3WaicX_YjofA7UI_wSvOMHLOYqLA7bhcufSyAb9pKC_B7hvEXlUK1ZZKLaAm6ORSnielnroPP4aCU0JGtsuSgI89Hkrkb2j9O42MYRUCZvw4noJ3Ato71g',
    category: 'special'
  },

  // PESHKASH (Appetizers)
  {
    id: 'murgh-shammi-kebab',
    name: 'Murgh Shammi Kebab',
    description: 'Melt-in-your-mouth chicken patties infused with a secret blend of 21 spices, smoked with clove and ghee.',
    price: 850,
    tags: ['Signature', 'Spicy'],
    category: 'peshkash'
  },
  {
    id: 'paneer-soola',
    name: 'Paneer Soola',
    description: 'Hand-crafted cottage cheese marinated in Mathania chili paste and mustard oil, coal-fired to perfection.',
    price: 725,
    tags: ['Vegetarian'],
    category: 'peshkash'
  },
  {
    id: 'rajputana-tikka',
    name: 'Rajputana Tikka',
    description: 'Succulent lamb morsels marinated in yogurt and dried pomegranate seeds, served with mint chutney.',
    price: 1200,
    goldTokens: 12,
    tags: ['Royal Token Exclusive'],
    category: 'peshkash'
  },

  // KHAS KHANA (Main Course)
  {
    id: 'laal-maas',
    name: 'Laal Maas',
    description: 'The legendary fierce mutton curry of the warriors, cooked slowly with Mathania chilies.',
    price: 1450,
    tags: ['Fierce', 'Spicy'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_KOEwqTpDn4gI7pC8WazcNb71O8VZkXMxO7YjjsDH4tcA0cndqU5S2olzxjnbjvLVSbdq24LJZHLV51LkL39nr1VwKUlM2_uh2Yd0auo1qRhvcsY3GV4ypa755zHnAd9bhs9zJyO5P9fqjwjGMu63-QPLRqKBcWdPrj80FsfWe_xi-7M5uBVb3EVRjMEf2u9bWRoyrYr4NeKkrjPzFyPfTL_N1bQ3lTXRtVkkySSTaet2lDfeY-Z12IodcW4lVW_dIVKO5oQTiw',
    category: 'khas-khana'
  },
  {
    id: 'safed-maas',
    name: 'Safed Maas',
    description: 'Mutton in a white gravy of almonds, cashews, and fresh cream.',
    price: 1350,
    tags: ['Mild', 'Rich'],
    category: 'khas-khana'
  },
  {
    id: 'ker-sangri-royale',
    name: 'Ker Sangri Royale',
    description: 'Desert beans and berries tempered with raisins and dry spices.',
    price: 950,
    tags: ['Vegetarian', 'Heritage'],
    category: 'khas-khana'
  },
  {
    id: 'dal-baati-churma',
    name: 'Dal Baati Churma',
    description: 'The soul of Rajasthan. Hard wheat rolls with mixed lentil stew.',
    price: 2500,
    goldTokens: 25,
    tags: ['Vegetarian', 'Royal Token Exclusive'],
    category: 'khas-khana'
  },

  // MEETHA (Desserts)
  {
    id: 'malpua-rabri',
    name: 'Malpua Rabri',
    description: 'Silver-leaf pancakes with thickened milk.',
    price: 450,
    tags: ['Sweet', 'Classic'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9iDhfSiLyeQEeu6erSA-uDgAuc_R0qdhMzdaFRR2mkh5dTrYhbDfF_xMk7YCzNOq6W4YSCENhhlXSKfdKPgDmR5bVrD0Z1hU3CeokKd1vNxeT4gp2wq4gy6iGDIw5CWenV5hjUF7VOm7v7RQQD9aaF-z-OKUe3szW_M_D0-Z7oX110sI-bq4kA7JgrM6Yl-XzMYekh3r4JU166_4uxJdkA2tU__uqxsDrVY1uHhzo1njFZlD7t_rz2iWJPMOn2qibbwWqg8pnVQ',
    category: 'meetha'
  },
  {
    id: 'moong-dal-halwa',
    name: 'Moong Dal Halwa',
    description: 'Rich lentil pudding cooked in pure desi ghee.',
    price: 525,
    tags: ['Traditional', 'Rich'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsAaisv_QTBELR-yzOZODb1OjUfcYKod5lzbM6pprUebntItuIpe_sotryMrNvSLmkTJzFs_UjGuyY_0zyZDzEa_3WC95Q1ON2C-HUZbC6W8uzP0k5I-d-P8n_8bRz-oQDjiMmx01qc8SMAxtVhMvvw7UnUmUFKr9xxDbtRczV54fp_ygSDVarba8JfOc5Vmp9J9zMfbI-xOl3TZbUFjVgNDbk9sBAatBnkPxAwBALH0KmsPkCVnHFiBwBTk8J-C3w6_Qr0HCqPg',
    category: 'meetha'
  },
  {
    id: 'shahi-ghevar',
    name: 'Shahi Ghevar',
    description: 'Traditional honeycomb dessert with saffron.',
    price: 800,
    goldTokens: 8,
    tags: ['Saffron', 'Royal Token Exclusive'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG0DFbmwtUm0w0Z0aCoiw-O2KWMmeAM2eqe_M2JRuK4xoNzsGRWJrrt2QRAPo23p0B9QRDmiDuX69X7bBOEP_LkohaYs9BcKMuAOegZsvB50aMEc5uEIFHtaMg-2YydtAH6wXhH1vXLZKHMzd6yakODv7eysi8AkMlLXpRm35Ad3rNNwD3VWAnEarVlni_6j0987Se6aPu540FKJHHGzXnrOlc_784tDwIm799ClQkqZlp_bDpgFogfYb0Fyk6OdwwkP9cdf69jQ',
    category: 'meetha'
  },
  {
    id: 'meetha-sampler',
    name: 'Meetha Sampler',
    description: 'A curated selection of our finest sweets.',
    price: 850,
    tags: ['Assorted', 'Signature'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3JbSA8Zjlmh_C6aCYDMh7AQYEAfo68xm7BLtEDpZuy2eWg4Q3lAZLPBsK3zMVYmtoTxQIWPIOAN8CMandHxdMS8y8xK9ha2BsTfTrjdXcpCcLq-Zxgt_yvyTAkJ4n9I2SfUMNUi1LQNIUPAnBaE-P7JDAHyux94Hp8jKyIcXyOxsR58q1aFjNP8gsar6dCOtapc-rId5pEBgWlFK5GFyirMqex5xvrTryNFrX-91D2A0Cg1uaLGgmn562sIOzw4EOdptw57N6Zg',
    category: 'meetha'
  }
];
