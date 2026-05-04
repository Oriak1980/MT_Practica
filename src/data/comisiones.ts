type comissionData = {
    id: number;
    label: string;
    number: number;
    image: string;
    action?: () => void;
};

type mounts = {
    label: string;
    mount: number;
}

type services = {
    service: comissionData['label'];
    type: 'recargas' | 'servicios' | 'tarjetas-regalo' | 'peaje' | 'internet' | 'tesoreria' | 'productos-financieros' | 'productos-catalogo';
    mounts?: mounts[];
    image?: comissionData['image'];
    referenceImage?: string;
    helpText?: string;
};

export const recargas: comissionData[] = [
    { id: 1, label: 'AT-T', number: 3.60, image: '/AT&T.png' },
    { id: 1.1, label: 'AT-T Pospago', number: 3.30, image: '/AT&TPospago.png' },
    { id: 2, label: 'Bait', number: 3.60, image: '/BAIT.png' },
    { id: 3, label: 'ComparTfon', number: 3.60, image: '/COMPARTFON.png' },
    { id: 4, label: 'Diri', number: 3.60, image: '/DIRI.png' },
    { id: 5, label: 'Flash Mobile', number: 3.60, image: '/FLASHMOBILE.png' },
    { id: 6, label: 'FreedomPop', number: 3.60, image: '/FREEDOMPOP.png' },
    { id: 7, label: 'MiMóvil', number: 3.60, image: '/MIMOVIL.png' },
    { id: 8, label: 'Movistar', number: 3.60, image: '/MOVISTAR.png' },
    { id: 8.1, label: 'Movistar Pospago', number: 5.60, image: '/MOVISTARPospago.png' },
    { id: 9, label: 'Netway', number: 3.60, image: '/NETWEY.png' },
    { id: 10, label: 'Oui Móvil', number: 3.60, image: 'OUIMovil.png' },
    { id: 11, label: 'Telcel', number: 3.60, image: '/Telcel-Logo-thmb.png' },
    { id: 11.1, label: 'Telcel Pospago', number: 2.60, image: '/TELCELPospago.png' },
    { id: 11.2, label: 'Paquete Amigo Sin Lítime Telcel', number: 3.60, image: '/PAQUETEAMIGOSINLIMITE.png' },
    { id: 11.3, label: 'Paquete de Internet Telcel', number: 3.60, image: '/PAQUETEDEINTERNET.png' },
    { id: 12, label: 'Pillofon', number: 3.60, image: '/PILLOFON.png' },
    { id: 13, label: 'Soriana Móvil', number: 3.60, image: '/SORIANAMOVIL.png' },
    { id: 14, label: ' StarGo / Virgin', number: 10, image: '/STARGO.png' },
    { id: 15, label: 'Telmovil', number: 3.60, image: '/TELMOVIL.png' },
    { id: 16, label: 'Unefon', number: 3.60, image: '/UNEFON.png' },
    { id: 17, label: 'WiMo Móvil', number: 3.60, image: 'WIMOMOVIL.png' },
    { id: 18, label: 'Yobi', number: 3.60, image: '/YOBI.png' },
];

export const servicios: comissionData[] = [
    { id: 1, label: 'Axtel', number: 4.60, image: '/AXTEL.png' },
    { id: 2, label: 'Blue Telecom', number: 3.30, image: '/BLUETELECOM.png' },
    { id: 3, label: 'CFE', number: 2.50, image: '/CFE.png' },
    { id: 4, label: 'Compania Mexicana de Gas', number: 3.30, image: '/MEXICANADEGAS.png' },
    { id: 5, label: 'Dish', number: 3.30, image: '/DISH.png' },
    { id: 6, label: 'Engine MexiGas', number: 3.30, image: '/ENGIEGAS.png' },
    { id: 7, label: 'HughesNet', number: 7.00, image: '/HUGHESNET.png' },
    { id: 8, label: 'IZZI Telecom', number: 5.00, image: '/IZZI.png' },
    { id: 9, label: 'Megacable', number: 5.00, image: '/MEGACABLE.png' },
    { id: 10, label: 'Naturgy', number: 3.30, image: '/NATURGY.png' },
    { id: 11, label: 'NetTV', number: 3.30, image: '/NETTV.png' },
    { id: 12, label: 'On Internet', number: 3.30, image: '/ONINTERNET.png' },
    { id: 13, label: 'SKY - VeTv', number: 3.30, image: '/SKYVETV.png' },
    { id: 14, label: 'StarGo', number: 6.00, image: '/STARGO.png' },
    { id: 15, label: 'StarTV', number: 6.00, image: '/STARTV.png' },
    { id: 16, label: 'Telmex', number: 3.30, image: '/TELMEX.png' },
    { id: 17, label: 'Totalplay', number: 3.30, image: '/TOTALPLAY.png' },
    { id: 18, label: 'Wizz', number: 5.00, image: '/WIZZ.png' },
    { id: 19, label: 'Zeta Gas', number: 3.30, image: '/ZGAS.png' },
];

export const tesoreria: comissionData[] = [
    { id: 1, label: 'AGUAKAN', number: 3.00, image: '/AGUAKAN.png' },
    { id: 2, label: 'Aguas de Saltillo', number: 3.00, image: '/AGUASDESALTILLO.png' },
    { id: 3, label: 'AMD', number: 3.00, image: '/AMD.png' },
    { id: 4, label: 'CEA', number: 3.00, image: '/CEA.png' },
    { id: 5, label: 'CESPE', number: 3.00, image: '/CESPE.png' },
    { id: 6, label: 'CESPM', number: 3.00, image: '/CESPM.png' },
    { id: 7, label: 'CESPT', number: 3.00, image: '/CESPT.png' },
    { id: 8, label: 'CIAPACOV', number: 3.00, image: '/CIAPACOV.png' },
    { id: 9, label: 'CMAPAS', number: 3.00, image: '/CMAPAS.png' },
    { id: 10, label: 'COMAPA', number: 3.00, image: '/COMAPA.png' },
    { id: 11, label: 'Gobierno de CDMX', number: 2.00, image: '/GOBIERNODELACDMX.png' },
    { id: 12, label: 'Gobierno del Estado de México', number: 2.00, image: '/GOBERNODELESTADODEMEXICO.png' },
    { id: 13, label: 'Gobierno de Hidalgo', number: 2.00, image: '/GOBIERNODEHIDALGO.png' },
    { id: 14, label: 'Gobierno de Jalisco', number: 2.00, image: '/GOBIERNPODEJALISCO.png' },
    { id: 15, label: 'Gobierno de Michoacán', number: 2.00, image: '/GOBIERNODEMICHOACAN.png' },
    { id: 16, label: 'Gobierno de Queretaro', number: 2.00, image: '/GOBIERNODEQUERETARO.png' },
    { id: 17, label: 'Gobierno de Tabasco', number: 2.00, image: '/GOBIERNODETABASCO.png' },
    { id: 18, label: 'Gobierno de Tlaxcala', number: 2.00, image: '/GOBIERNODETLAXCALA.png' },
    { id: 19, label: 'INTERAPAS', number: 3.00, image: '/INTERAPAS.png' },
    { id: 20, label: 'JAPAMI', number: 3.00, image: '/JAPAMI.png' },
    { id: 21, label: 'JMAS', number: 3.00, image: '/JMAS.png' },
    { id: 22, label: 'JUMAPA', number: 3.00, image: '/JUMAPA.png' },
    { id: 23, label: 'JUMAPAM', number: 3.00, image: '/JUMAPAM.png' },
    { id: 24, label: 'SACMEX', number: 6.00, image: '/SACMEX.png' },
    { id: 25, label: 'SADM', number: 3.00, image: '/SADM.png' },
    { id: 26, label: 'SEAPAL', number: 3.00, image: '/SEAPAL.png' },
    { id: 27, label: 'SIAPA', number: 3.00, image: '/SIAPA.png' },
    { id: 28, label: 'SIMAS', number: 3.00, image: '/SIMAS.png' },
    { id: 29, label: 'SOAPAP', number: 3.00, image: '/SOAPAP.png' },
];
export const giftCards: comissionData[] = [
    { id: 1, label: 'Amazon', number: 1.20, image: '/AMAZON.png' },
    { id: 2, label: 'Anamex', number: 3.60, image: '/ANEMEX.png' },
    { id: 3, label: 'Bitdefender', number: 6.00, image: '/BITDEFENDER.png' },
    { id: 4, label: 'Blizard', number: 2.40, image: '/BLIZZARD.png' },
    { id: 5, label: 'Cinemex', number: 3.60, image: '/CINEMEX.png' },
    { id: 6, label: 'Cinemex Premium', number: 3.60, image: '/CINEMEXPREMIUM.png' },
    { id: 7, label: 'Cinépolis', number: 3.60, image: '/CINEPOLIS.png' },
    { id: 8, label: 'Cinépolis Dulcería', number: 3.60, image: '/CINEPOLISDULCERIA.png' },
    { id: 9, label: 'Cinépolis VIP', number: 3.60, image: '/CINEPOLISVIP.png' },
    { id: 10, label: 'CrunchyRoll', number: 6.00, image: '/CRUNCHYROLL.png' },
    { id: 11, label: 'enviaflores.com', number: 4.80, image: '/ENVIAFLORESCOM.png' },
    { id: 12, label: 'FacturaFiel,', number: 6.00, image: '/FACTURAFIEL.png' },
    { id: 13, label: 'Google Play', number: 1.20, image: '/GOOGLEPLAY.png' },
    { id: 14, label: 'Grupo Reforma', number: 3.60, image: '/REFORMA.png' },
    { id: 15, label: 'Innovasport', number: 3.60, image: '/INNOVASPORT.png' },
    { id: 16, label: 'Kaspesrsky', number: 6.00, image: '/KASPERSKY.png' },
    { id: 17, label: 'Krispy Kreme', number: 6.00, image: '/KRISPYKREME.png' },
    { id: 18, label: 'librerías Gandhi', number: 4.80, image: '/LIBRERIASGANDHI.png' },
    { id: 19, label: 'Liverpool', number: 1.20, image: '/LIVERPOOL.png' },
    { id: 20, label: 'Minecraft', number: 2.40, image: '/MINECRAFT.png' },
    { id: 21, label: 'Netflix', number: 1.20, image: '/NETFLIX.png' },
    { id: 22, label: 'Nintnedo eShop', number: 3.60, image: '/NINTENDOESHOP.png' },
    { id: 23, label: 'Nintendo Switch Online', number: 3.60, image: '/NINTENDOSWITCHONLINE.png' },
    { id: 24, label: 'Paramount+', number: 6.00, image: '/PARAMOUNT.png' },
    { id: 25, label: 'Playstation', number: 2.40, image: '/PLAYSTATION.png' },
    { id: 26, label: 'Prime', number: 3.00, image: '/PRIME.png' },
    { id: 27, label: 'Rixty', number: 2.40, image: '/RIXTY.png' },
    { id: 28, label: 'Spotify', number: 1.80, image: '/SPOTIFY.png' },
    { id: 29, label: 'Starbucks Card', number: 3.60, image: '/STARBUCKSCARDS.png' },
    { id: 30, label: 'Uber', number: 1.20, image: '/UBER.png' },
    { id: 31, label: 'Uber Eats', number: 3.00, image: '/UBEREATS.png' },
    { id: 32, label: 'Xbox', number: 7.00, image: '/XBOX.png' },
    { id: 33, label: 'Xbox Game Pass Core', number: 7.00, image: '/XBOXGAMEPASSCORE.png' },
    { id: 34, label: 'Xbox Game Pass Ultimate', number: 3.60, image: '/XBOXGAMEPASS.png' },
];
export const peaje: comissionData[] = [
    { id: 1, label: 'Omnibus de México', number: 0.00, image: '/OMNIBUSDEMEXICO.png' },
    { id: 2, label: 'Pase', number: 3.00, image: '/PASE.png' },
    { id: 3, label: 'Televía', number: 3.00, image: '/TELEVIA.png' },
];

export const internet: comissionData[] = [
    { id: 1, label: 'Bait Internet en Casa', number: 7.00, image: '/BAIT.png' },
    { id: 2, label: 'Bait Internet Portátil', number: 7.00, image: '/BAIT.png' },
    { id: 3, label: 'JRMovil MiFi', number: 7.00, image: '/JRMOVIL.png' },
    { id: 4, label: 'Netway Internet Prepago', number: 7.00, image: '/NETWEYInternetprepago.png' },
    { id: 5, label: 'Newww Fi', number: 7.00, image: '/NEWWWFI.png' },
    { id: 6, label: 'Newww Fi Internet Hogar', number: 7.00, image: '/NEWWWINTERNETENTUHOGAR.png' },
    { id: 7, label: 'Valor Internet en Casa', number: 7.00, image: '/VALORINTERNETENCASA.png' },
    { id: 8, label: 'Valor Internet Móvil', number: 7.00, image: '/VALORINTERNETMOVIL.png' },
];

export const productosFinacieros: comissionData[] = [
    { id: 1, label: 'Aportación SAR', number: 1.00, image: '/APORTACIONSAR.png' },
    { id: 2, label: 'Infonavit', number: 3.00, image: '/INFONAVIT.png' },
];

export const productosCatalogo: comissionData[] = [
    { id: 1, label: 'Arabela', number: 5.00, image: '/ARABELA.png' },
    { id: 2, label: 'Avon', number: 1.20, image: '/AVON.png' },
    { id: 3, label: 'Elektra.com', number: 6.00, image: '/ELEKTRA.png' },
    { id: 4, label: 'Fuller', number: 5.00, image: '/FULLER.png' },
    { id: 5, label: 'Herbalife', number: 4.00, image: '/HERBALIFE.png' },
    { id: 6, label: 'Ilusión', number: 4.00, image: '/ILUSION.png' },
    { id: 7, label: 'Jafra', number: 1.20, image: '/JAFRA.png' },
    { id: 8, label: 'LBEL Belcorp', number: 5.00, image: '/LBEL.png' },
    { id: 9, label: 'Natura', number: 1.20, image: '/NATURA.png' },
    { id: 10, label: 'NaturalBesa', number: 5.00, image: '/NATURALBESA.png' },
    { id: 11, label: 'Oriflame', number: 5.00, image: '/ORIFLAME.png' },
    { id: 12, label: 'Stanhome', number: 5.00, image: '/STANHOME.png' },
    { id: 13, label: 'Swiss Just', number: 4.00, image: '/SWISSJUST.png' },
    { id: 14, label: 'Terramar Brands', number: 5.00, image: '/TERRAMARBRANDS.png' },
    { id: 15, label: 'Tupperware', number: 4.00, image: '/TUPPERWARE.png' },
    { id: 16, label: 'Yanbal', number: 6.00, image: '/YANBAL.png' },
    { id: 17, label: 'Yves Rocher', number: 5.00, image: '/YVESROCHER.png' },
    { id: 18, label: 'Zermat', number: 5.00, image: '/ZERMAT.png' },
];

export const ATT: services[] = [
    {
        service: recargas[0].label,
        type: 'recargas',
        image: recargas[0].image,
        mounts: [
            { label: 'Recarga $10', mount: 10 },
            { label: 'Recarga $15', mount: 15 },
            { label: 'Recarga $20', mount: 20 },
            { label: 'Recarga: $30', mount: 30 },
            { label: 'Recarga: $50', mount: 50 },
            { label: 'Recarga: $70', mount: 70 },
            { label: 'Recarga: $100', mount: 100 },
            { label: 'Recarga: $150', mount: 150 },
            { label: 'Recarga: $200', mount: 200 },
            { label: 'Recarga: $300', mount: 300 },
            { label: 'Recarga: $500', mount: 500 },
        ],
    }
];

export const Telcel: services[] = [
    {
        service: recargas[12].label,
        type: 'recargas',
        image: recargas[12].image,
        mounts: [
            { label: 'Recarga $10', mount: 10 },
            { label: 'Recarga $15', mount: 15 },
            { label: 'Recarga $20', mount: 20 },
            { label: 'Recarga: $30', mount: 30 },
            { label: 'Recarga: $50', mount: 50 },
            { label: 'Recarga: $70', mount: 70 },
            { label: 'Recarga: $100', mount: 100 },
            { label: 'Recarga: $150', mount: 150 },
            { label: 'Recarga: $200', mount: 200 },
            { label: 'Recarga: $300', mount: 300 },
            { label: 'Recarga: $500', mount: 500 },
        ]
    }
];

export const ATTPospago: services[] = [
    {
        service: recargas[1].label,
        type: 'recargas',
        image: recargas[1].image,
        referenceImage: '/cat.jpeg',
        helpText: 'Estimado cliente en caso de presentar algún inconveniente con su recarga, por favor comuníquese al número de atención a clientes de AT&T 800 101 4444 para que puedan brindarle la asistencia necesaria.'
    }
];

export const Axtel: services[] = [
    {
        service: servicios[0].label,
        type: 'servicios',
        image: servicios[0].image,
        referenceImage: '/cat.jpeg',
        helpText: 'Para cualquier duda con el pago de tu factura ASTEL favor de llamar al 800 515 1414. Conserva tu comprobante de pago. Tu pago se vera reflejado en un lapso de 24 horas habiles.',
    }
];

export const BlueTelecom: services[] = [
    {
        service: servicios[1].label,
        type: 'servicios',
        image: servicios[1].image,
        helpText: 'En caso de tener algun problema con tu pago, favor de comunicarse al Servico de Atención a Clientes de Blue Telecom al número 800 123 4567, para que puedan brindarte la asistencia necesaria. Conserva tu comprobante de pago.',
    }
];

export const CFE: services[] = [
    {
        service: servicios[2].label,
        type: 'servicios',
        image: servicios[2].image,
        referenceImage: '/cat.jpeg',
        helpText: 'Para cualquier duda o aclaración con el pago de tu recibo CFE favor de llamar al 071. Conserva tu comprobante de pago. Tu pago se vera reflejado en un lapso de 24 horas habiles.',
    }
];

export const AGUAKAN: services[] = [
    {
        service: tesoreria[0].label,
        type: 'tesoreria',
        image: tesoreria[0].image,
        referenceImage: ' cat.jpeg',
        helpText: 'Para cualquier duda o aclaración con el pago de tu recibo AGUAKAN favor de llamar al 800 120 7777. Conserva tu comprobante de pago. Tu pago se vera reflejado en un lapso de 24 horas habiles.',
    }
];

export const AguasDeSaltillo: services[] = [
    {
        service: tesoreria[1].label,
        type: 'tesoreria',
        image: tesoreria[1].image,
        referenceImage: ' cat.jpeg',
        helpText: 'Para cualquier duda o aclaración con el pago de tu recibo AGUAS DE SALTILLO favor de llamar al 800 500 9000. Conserva tu comprobante de pago. Tu pago se vera reflejado en un lapso de 24 horas habiles.',
    }
];

export const AMD: services[] = [
    {
        service: tesoreria[2].label,
        type: 'tesoreria',
        image: tesoreria[2].image,
        referenceImage: ' cat.jpeg',
        helpText: 'Para cualquier duda o aclaración con el pago de tu recibo AMD favor de llamar al 800 123 4567. Conserva tu comprobante de pago. Tu pago se vera reflejado en un lapso de 24 horas habiles.',
    }
];

export const Amazon: services[] = [
    {
        service: giftCards[0].label,
        type: 'tarjetas-regalo',
        image: giftCards[0].image,
        mounts: [
            { label: 'Amazon $100', mount: 100 },
            { label: 'Amazon $300', mount: 300 },
            { label: 'Amazon $500', mount: 500 },
            { label: 'Amazon $800', mount: 800 },
            { label: 'Amazon $1000', mount: 1000 },
        ]
    }
];

export const Anamex: services[] = [
    {
        service: giftCards[1].label,
        type: 'tarjetas-regalo',
        image: giftCards[1].image,
        mounts: [
            {label: 'Plan Familiar', mount: 600},
        ],
    }
];