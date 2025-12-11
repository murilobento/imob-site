import { Property } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Residência com Piscina no Centro",
    type: "Casa",
    purpose: "Venda",
    price: 850000,
    address: {
      street: "Rua das Palmeiras, 450",
      neighborhood: "Centro",
      city: "Regente Feijó",
      state: "SP"
    },
    features: {
      beds: 3,
      baths: 2,
      parking: 2,
      area: 180
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrDxU5yk1ODMWlq5ybuzWv5pCDQncRCLsXW3HgLk5iRRN8C-vLrlMPlt-DKuT9Cz5XRrkIh76eBqZ1_FcfTR2OBIQNV_X9hHiyEgKPVaHTbrC0tMug4V2zNbFd1dwO_WgeyL7VEleY6yYkkTBUlry7dL_9LlM6GC_IdShNR7GE8Ox6_CaB89Zmypq9oIx0Fyz77nYu-PxVkuDT7FpNb2QZXFvgUttGJkPfuNBmEGTJzorNehT2C-J5J-cQ56W-z0mpwEeNAUbl8sg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1naILicanbkrNcBEGfsqqwpd7ooFBmHsrw8zwWTbqz4SE4QNu6DxFs_0Eq5aF9QkBdfItTD0F1Xi_Qu9fbPUx3ecC9dC3HklwXeDeo0Ye7v6hpIdK9LBxNJ_SyGPVfNf8ORXLHSxEeIIUNGNPtLkcygTIA_tqRYmIF3e2cXVIQvBRuEScH3muGTdnQVGXzzdz_DB3uPeMiEtmlQEMsDObfZX6yfQvbVnACiyyNHwYOlHsPkP55vF7phLP0p4NKD1vgVsWhENOOo8",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDI7h1-YazLlizng8QE2ElRn4aykEpaH70l1FBOxsZylz6dQ0_hNOYvOjsRyeIfi6YtgB3YFfDQ-YRkA0CayAx4C_pQDsl9q1Ww8OuCj0M7Qk5zU8s9x_fcF9fTMTDrNgian0i1EbRPziKyBboc495givk7lvcWsxDbEbzWw_4xYwhR2ySDgxqv8yz9uDpYuL07izEGX_A4Ld6oJvg4YtrjbvqAFB7UB8tBi42lmcGXBMwf219tYigPIeIKFQQX-iCLGlxq2Qhf3wE",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBia6bONMagxDpYDZuLrF5SOI8TWZWF_fybVhCwgx1Luz1Il053Gjgi5Rql89rB8SxkWqAbqlYYPhvzp8j0C0ldOsHy_IeDv-eEJpnwVRXb2-CI1crnN2KhzBL13qprds1tYeM9s5OL9P92JkuWAUK_GPy7mDbEiGJwMusa20Zxd5sp9PW1rOTREcNOjN5xXNX1CgDof74WuONoxHSIzbIMcM5ZGwkvn_YVVD8sy6xuDDhDFOqNvs-L4IygCMOZ-0ZHMDIZA0R1otw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIXIHDPJVnfT6HLR_ICUmbIxJ3RgnldgTjDYmrIivl5Ie9KM8VgAp7rEwmOihA5dwnhtaGWj7VkZmHf5_Bs2tKjWspWp-sCRW2eqZFNmItkdtThIpYas0MPtzbmo1hfy_Il8tPQl7RjwlOYTLxChUDkNjyG0foZ2Eb3l4mKJqGsYX7zLHopZVMhRHt_CTVUXWHjivOT9mKV793zcVQENMtwrY--HdZUAmbZsecfk4oqG7ENcMGU7HmkZSyaHDInv6M3M2cp_zBJh4"
    ],
    isNew: true,
    isFeatured: true,
    description: "Espetacular residência localizada no coração de Regente Feijó. Esta casa foi projetada para oferecer o máximo de conforto e sofisticação para sua família. Com um projeto arquitetônico moderno, ela integra perfeitamente as áreas de convívio com o lazer.",
    agent: {
      name: "João Rodrigues",
      creci: "12345-F",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0RKDOltihECq5DaSWHXr6wD13TzbUVfa9cAmLeYztSUgQEk3VartyBsh_sS6UMdMFG03dwF-EjUES4b1IG1g-FWgohDW3c8EINGoGLfY2EFgo5cYNGPU9kbWL02X9OcQN3jL1cRbbil501jcEFsJ0hAxe4qiFyB5_fsCc04AZ7Smp65AT9j5tyJFeYkDiOCJ3ASIWHkS-KNLeekSHkFFO6oFsn5m4-L5HXx3G72X-EHolBQp8Xe1-nh4gFAVW8jxtk0RRa8kv7LY"
    }
  },
  {
    id: 2,
    title: "Sobrado 3 Dormitórios",
    type: "Sobrado",
    purpose: "Aluguel",
    price: 2500,
    priceSuffix: "/mês",
    address: {
      neighborhood: "Jardim Tropical",
      city: "Regente Feijó",
      state: "SP"
    },
    features: {
      beds: 3,
      baths: 3,
      parking: 1,
      area: 145
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1naILicanbkrNcBEGfsqqwpd7ooFBmHsrw8zwWTbqz4SE4QNu6DxFs_0Eq5aF9QkBdfItTD0F1Xi_Qu9fbPUx3ecC9dC3HklwXeDeo0Ye7v6hpIdK9LBxNJ_SyGPVfNf8ORXLHSxEeIIUNGNPtLkcygTIA_tqRYmIF3e2cXVIQvBRuEScH3muGTdnQVGXzzdz_DB3uPeMiEtmlQEMsDObfZX6yfQvbVnACiyyNHwYOlHsPkP55vF7phLP0p4NKD1vgVsWhENOOo8"
    ],
    isFeatured: true
  },
  {
    id: 3,
    title: "Casa de Luxo c/ Área Gourmet",
    type: "Casa",
    purpose: "Venda",
    price: 1200000,
    address: {
      neighborhood: "Condomínio Fechado",
      city: "Pres. Prudente",
      state: "SP"
    },
    features: {
      beds: 4,
      baths: 4,
      parking: 4,
      area: 280
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDI7h1-YazLlizng8QE2ElRn4aykEpaH70l1FBOxsZylz6dQ0_hNOYvOjsRyeIfi6YtgB3YFfDQ-YRkA0CayAx4C_pQDsl9q1Ww8OuCj0M7Qk5zU8s9x_fcF9fTMTDrNgian0i1EbRPziKyBboc495givk7lvcWsxDbEbzWw_4xYwhR2ySDgxqv8yz9uDpYuL07izEGX_A4Ld6oJvg4YtrjbvqAFB7UB8tBi42lmcGXBMwf219tYigPIeIKFQQX-iCLGlxq2Qhf3wE"
    ],
    isFeatured: true
  },
  {
    id: 4,
    title: "Casa Térrea Moderna",
    type: "Casa",
    purpose: "Venda",
    price: 580000,
    address: {
      neighborhood: "Vila Nova",
      city: "Regente Feijó",
      state: "SP"
    },
    features: {
      beds: 3,
      baths: 2, // Assuming from similar data
      parking: 2,
      area: 150
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMzMw2eKmbC9Tv4ulUPFnNFUXHBg0dca7G_91KmrTPxba-z5YCH2WSAasbWUZu_uyFBKD95AlwpMzn2hJDhhh67TLF0JAq24Hv9ao_ZhOSAxLkjhIjPLS4RRLuEik3lRW7nOB93dzrcHYUYOjjw2PUkpHInfNAMWKVmgTtwl4HTBPUQ_GprkeMVd18fnJo5LwJPISl-CprxNtBepv1o77cnQ_kCoo9_xUvD_DU4l7QQFRK6anHmSJKdBDfu26ObbLUz1zP-xunGps"
    ]
  },
  {
    id: 5,
    title: "Apt Mobiliado Centro",
    type: "Apartamento",
    purpose: "Aluguel",
    price: 1800,
    priceSuffix: "/mês",
    address: {
      neighborhood: "Centro",
      city: "Regente Feijó",
      state: "SP"
    },
    features: {
      beds: 2,
      baths: 1,
      parking: 1,
      area: 85
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBia6bONMagxDpYDZuLrF5SOI8TWZWF_fybVhCwgx1Luz1Il053Gjgi5Rql89rB8SxkWqAbqlYYPhvzp8j0C0ldOsHy_IeDv-eEJpnwVRXb2-CI1crnN2KhzBL13qprds1tYeM9s5OL9P92JkuWAUK_GPy7mDbEiGJwMusa20Zxd5sp9PW1rOTREcNOjN5xXNX1CgDof74WuONoxHSIzbIMcM5ZGwkvn_YVVD8sy6xuDDhDFOqNvs-L4IygCMOZ-0ZHMDIZA0R1otw"
    ]
  },
  {
    id: 6,
    title: "Casa com Quintal",
    type: "Casa",
    purpose: "Venda",
    price: 420000,
    address: {
      neighborhood: "Portal do Sol",
      city: "Regente Feijó",
      state: "SP"
    },
    features: {
      beds: 2,
      baths: 1,
      parking: 2,
      area: 110
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIXIHDPJVnfT6HLR_ICUmbIxJ3RgnldgTjDYmrIivl5Ie9KM8VgAp7rEwmOihA5dwnhtaGWj7VkZmHf5_Bs2tKjWspWp-sCRW2eqZFNmItkdtThIpYas0MPtzbmo1hfy_Il8tPQl7RjwlOYTLxChUDkNjyG0foZ2Eb3l4mKJqGsYX7zLHopZVMhRHt_CTVUXWHjivOT9mKV793zcVQENMtwrY--HdZUAmbZsecfk4oqG7ENcMGU7HmkZSyaHDInv6M3M2cp_zBJh4"
    ]
  }
];
