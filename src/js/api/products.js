/**
 * Funciones para llamar a todos los
 * servicios de la API para productos
 */

import { ProductDbDto } from './dtos/product.js';
import lipBalmImg from '../../assets/imgs/lip_balm.webp';
import maskImg from '../../assets/imgs/mascarilla.webp';
import propolioImg from '../../assets/imgs/propolio.webp';
import honeyImg from '../../assets/imgs/honey1.webp';
import { NewProductDto } from './dtos/newProduct.js';

const stubProducts = [
  new ProductDbDto(
    1,
    'COSMETICO',
    40,
    lipBalmImg,
    'Labial de miel para hidratar tus labios',
    'Labial de miel',
    250,
    100,
    'g'
  ),
  new ProductDbDto(
    2,
    'COSMETICO',
    60,
    lipBalmImg,
    'Labial de miel para hidratar tus labios',
    'Labial de miel',
    300,
    100,
    'g'
  ),
  new ProductDbDto(
    3,
    'COSMETICO',
    60,
    maskImg,
    'Mascarilla facial para hidratar el rostro',
    'Mascarilla facial',
    300,
    100,
    'g'
  ),
  new ProductDbDto(
    4,
    'COSMETICO',
    100,
    maskImg,
    'Mascarilla facial para hidratar el rostro',
    'Mascarilla facial',
    450,
    190,
    'g'
  ),
  new ProductDbDto(
    5,
    'DULCE',
    60,
    propolioImg,
    'Perlas de miel con propolio para la resequedad en la garganta',
    'Perlas de miel',
    80,
    190,
    'g'
  ),
  new ProductDbDto(
    6,
    'Miel',
    1,
    honeyImg,
    'Miel de abeja 100% natural',
    'Miel',
    150,
    190,
    'l'
  ),
];

let ids = 0;
const products2 = [
  new ProductDbDto(
    ids++, 
    "OTROS", 
    10, 
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410344/DulceNectar/velas_miel_tbvfwq.webp",
    "Vela de cera de abeja natural con escénica de miel",
    "Vela aromática",
    50,
    200,
    'g'
  ),
  new ProductDbDto(
    ids++,
    "COSMETICO",
    90,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410344/DulceNectar/suero_ss29ik.webp",
    "Crema para el rostro revitalizante con extracto de miel",
    "Crema facial",
    300,
    100,
    'g'
  ),
  new ProductDbDto(
    ids++,
    "HIGIENE",
    40,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410343/DulceNectar/shampoo_barra_jyiveu.webp",
    "Shampoo en barra con extracto de miel",
    "Shampoo dulce néctar",
    199,
    100,
    'g'
  ),
  new ProductDbDto(
    ids++,
    "SALUD",
    0.3,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410343/DulceNectar/propoleo_yedoro.webp",
    "Propóleo de abeja",
    "Propóleo",
    400,
    40,
    'l'
  ),
  new ProductDbDto(
    ids++,
    "DULCE",
    60,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410342/DulceNectar/perlas_miel_ppzyhx.webp",
    "Dulce perlas me miel con Eucalipto",
    "Perlas de miel",
    250,
    200,
    'g'
  ),
  new ProductDbDto(
    ids++,
    "DULCE",
    60,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410342/DulceNectar/nueces_miel_tzsdgc.webp",
    "Nueces endulzadas con miel",
    "Nueces miel",
    400,
    100,
    'g'
  ),
  new ProductDbDto(
    ids++,
    "MIEL",
    0.5,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410341/DulceNectar/miel_frasco_xqeqrl.webp",
    "Miel de abeja 100% natural sin añadidos",
    "Miel",
    100,
    400,
    'l'
  ),
  new ProductDbDto(
    ids++,
    "MIEL",
    0.5,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410341/DulceNectar/miel_flor_mezquite_aoxxsk.webp",
    "Miel de abeja recolectora de flor de Mezquite",
    "Miel mezquite",
    1000,
    200,
    'l'
  ), 
  new ProductDbDto(
    ids++,
    "COSMETICO",
    50,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410340/DulceNectar/mascarilla_wgy5q8.webp",
    "Mascarilla facial con jalea real",
    "Mascarilla facial",
    500,
    250,
    'g'
  ),
  new ProductDbDto(
    ids++,
    "COSMETICO",
    10,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410340/DulceNectar/lip_balm_pypicp.webp",
    "Labial con esencia de miel",
    "Labial miel",
    300,
    240,
    'g'
  ),
  new ProductDbDto(
    ids++,
    "MIEL",
    0.3,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410339/DulceNectar/jalea_real_gdadap.webp",
    "Jalea real de abeja sin procesar",
    "Jalea real",
    1000,
    100,
    'l'
  ),
  new ProductDbDto(
    ids++,
    "HIGIENE",
    40,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410339/DulceNectar/jabon_miel_cafe_lyyd97.webp",
    "Jabón vegetal para el cuerpo con extracto de miel",
    "Jabón dulce néctar",
    150,
    230,
    'g'
  ),
  new ProductDbDto(
    ids++,
    "HIGIENE",
    40,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410338/DulceNectar/jabon_miel_h1ptjc.webp",
    "Jabón corporal con extracto mie miel",
    "Jabón miel",
    90,
    230,
    'g'
  ),
  new ProductDbDto(
    ids++,
    "DULCE",
    100,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410338/DulceNectar/gomitas_miel_naranja_rjf7sx.webp",
    "Gomitas de dulce de miel con naranja",
    "Gomitas",
    130,
    210,
    'g'
  ),
  new ProductDbDto(
    ids++,
    "DULCE",
    90,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410338/DulceNectar/honey_stick_iidvis.webp",
    "Palillos de dulce sólido de miel de abeja",
    "Palillos dulces",
    150,
    230,
    'g'
  ),
  new ProductDbDto(
    ids++,
    "DULCE",
    100,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410337/DulceNectar/caramelo_miel_tqlmaz.webp",
    "Dulces sólido de miel de abeja",
    "Dulce de miel",
    80,
    600,
    'g'
  ),
  new ProductDbDto(
    ids++,
    "HIGIENE",
    0.2,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410337/DulceNectar/esencia_miel_n6aeol.webp",
    "Esencia de olor a miel y cera",
    "Esencia de miel",
    300,
    123,
    'l'
  ),
  new ProductDbDto(
    ids++,
    "HORNEADOS",
    60,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410337/DulceNectar/galletas_miel_avena_j2inaf.webp",
    "Galletas de avena endulzados con miel",
    "Galleta miel",
    50,
    421,
    'g'
  ),
  new ProductDbDto(
    ids++,
    "HIGIENE",
    60,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410337/DulceNectar/acondicionador_miel_limon_vplz2i.webp",
    "Acondicionador sólido para el cabello con extracto de miel",
    "Acondicionador",
    200,
    42,
    'g'
  ),
  new ProductDbDto(
    ids++,
    "COSMETICO",
    0.3,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410337/DulceNectar/desmaquillante_miel_kssnqo.webp",
    "Desmaquillaje con esencia de miel",
    "Desmaquillaje",
    400,
    123,
    'l'
  ),
  new ProductDbDto(
    ids++,
    "SALUD",
    0.3,
    "https://res.cloudinary.com/dxhbjjkbh/image/upload/v1697410337/DulceNectar/crema_aht7pl.webp",
    "Crema humectante corporal con esencia de miel",
    "Crema corporal",
    250,
    100,
    'l'
  )
]

const stubWeekProductDb = [
  new ProductDbDto(
    1,
    'COSMETICO',
    40,
    lipBalmImg,
    'Labial de miel para hidratar tus labios',
    'Labial de miel',
    250,
    100,
    'g'
  ),
  new ProductDbDto(
    4,
    'COSMETICO',
    100,
    maskImg,
    'Mascarilla facial para hidratar el rostro',
    'Mascarilla facial',
    450,
    190,
    'g'
  ),
  new ProductDbDto(
    5,
    'DULCE',
    60,
    propolioImg,
    'Perlas de miel con propolio para la resequedad en la garganta',
    'Perlas de miel',
    80,
    190,
    'g'
  ),
  new ProductDbDto(
    6,
    'Miel',
    1,
    honeyImg,
    'Miel de abeja 100% natural',
    'Miel',
    150,
    190,
    'l'
  ),
];

/**
 * Obtiene los productos de la Api GET /api/products
 * @returns Product
 */
export async function getProducts() {
  return products2;
}

/**
 * 
 * @param {NewProductDto} product 
 * @returns 
 */
export async function createProduct(product) {

  return new ProductDbDto(
    Math.floor(Math.random()*10000),
    product.category,
    product.gram,
    product.imgUrl,
    product.info,
    product.name,
    product.price,
    product.stock,
    product.typeGram
  )
}

/**
 * Obtiene los productos de la Api GET /api/products/week
 * @returns Product
 */
export async function getWeekProducts() {
  return stubWeekProductDb;
}
