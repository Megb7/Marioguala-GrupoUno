export const products = [
    {
        id: 1,
        name: 'Monitor',
        price: 150000,
        despcription: 'Monitor Gamer Acer Nitro 27 180Hz WQHD 1440p LCD FreeSync',
        stock: 15,
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_981961-CBT72576238879_102023-F.webp',
        categoria: 'perifericos'

    },
    {
        id: 2,
        name: 'Escritorio',
        price: 90000,
        despcription: 'Escritorio gamer inspire negro',
        stock: 20,
        img: 'https://rimage.ripley.cl/home.ripley/Attachment/MKP/629/MPM00007523418/full_image-1.jpg',
        categoria: 'muebles'

    },
    {
        id: 3,
        name: 'Silla Gamer',
        price: 50000,
        despcription: 'Silla Gamer Profesional GX2000 con Reposapiés-Negro Vidita',
        stock: 7,
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/114328608_01/w=1500,h=1500,fit=pad',
        categoria: 'muebles'

    },
    {
        id: 4,
        name: 'Teclado',
        price: 45000,
        despcription: 'Teclado Mecánico TKL Gamer Switch KB869 Negro',
        stock: 20,
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/113147458_01/w=800,h=800,fit=pad',
        categoria: 'perifericos'

    },
    {
        id: 5,
        name: 'Monitor',
        price: 220000,
        despcription: 'Monitor gamer msi optix g24c 144hz 1ms freesync d-port hdmi 1920x1080',
        stock: 24,
        img: 'https://tecnosaga.cl/images/productos/9mpqwqht0b71temg49kfmyvn66mg0g.jpg',
        categoria: 'perifericos'
    },
    {
        id: 6,
        name: 'Escritorio',
        price: 240000,
        despcription: 'Escritorio Gamer Vekkahome Link Negro Verde',
        stock: 9,
        img: 'https://www.lapolar.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw949fccc7/images/large/1CC22347772.jpg?sw=1200&sh=1200&sm=fit',
        categoria: 'muebles'
    },
    {
        id: 7,
        name: 'Mouse',
        price: 20000,
        despcription: 'Mouse Gamer Razer Cobra Pro Rgb Color Negro',
        stock: 6,
        img: 'https://http2.mlstatic.com/D_NQ_NP_796748-MLU79276154391_092024-O.webp',
        categoria: 'perifericos'
    },
    {
        id: 8,
        name: 'Teclado',
        price: 30000,
        despcription: 'Teclado gamer Redragon Kumara K552 QWERTY Outemu Red español España color negro con luz rainbow',
        stock: 9,
        img: 'https://http2.mlstatic.com/D_NQ_NP_636746-MLA52350707355_112022-O.webp',
        categoria: 'perifericos'
    },
    {
        id: 9,
        name: 'Silla Gamer',
        price: 59900,
        despcription: 'Silla Gamer Reclinable Con Reposapiés Moderna Ergonómica',
        stock: 11,
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/124014798_01/w=1500,h=1500,fit=pad',
        categoria: 'muebles'
    },
];




export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const filterProductsByCategory = (categoria) => {
    return products.filter(product => product.categoria === categoria);
};