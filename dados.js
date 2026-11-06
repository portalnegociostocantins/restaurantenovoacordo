// Dados padrão do site Restaurante Novo Acordo
// Este arquivo é gerado pelo painel admin.html (botão "Publicar"). Pode ser editado à mão, mas o painel é mais fácil.
const defaultSiteData = {
    "_version": "2026-11-06T04:00:00.000Z",

    "seo": {
        "title": "Restaurante Novo Acordo | Buffet e comida caseira em Palmas - TO",
        "description": "Restaurante Novo Acordo em Palmas - TO: buffet variado, pratos do dia com sabor de comida caseira e ambiente aconchegante. Veja o cardápio de hoje e como chegar.",
        "siteUrl": ""
    },

    "brand": {
        "name": "NOVO ACORDO",
        "sub": "RESTAURANTE • BUFFET",
        "fullName": "Restaurante Novo Acordo",
        "logoImage": ""
    },

    "nav": {
        "ctaLabel": "Fale conosco"
    },

    "theme": {
        "bg": "#15100c",
        "bgAlt": "#1d1611",
        "card": "#271d16",
        "text": "#f6efe6",
        "muted": "#bba99a",
        "accent": "#e0a03a",
        "accent2": "#c8553d",
        "headingFont": "Playfair Display",
        "bodyFont": "Montserrat"
    },

    "sections": [
        { "id": "hero",       "visible": true, "inNav": true,  "navLabel": "Início" },
        { "id": "today",      "visible": true, "inNav": true,  "navLabel": "Cardápio de Hoje" },
        { "id": "highlights", "visible": true, "inNav": false, "navLabel": "Destaques" },
        { "id": "menu",       "visible": true, "inNav": true,  "navLabel": "Cardápio" },
        { "id": "gallery",    "visible": true, "inNav": true,  "navLabel": "Galeria" },
        { "id": "about",      "visible": true, "inNav": true,  "navLabel": "Sobre" },
        { "id": "reviews",    "visible": true, "inNav": false, "navLabel": "Avaliações" },
        { "id": "location",   "visible": true, "inNav": true,  "navLabel": "Como Chegar" },
        { "id": "cta",        "visible": true, "inNav": false, "navLabel": "Reservar" }
    ],

    "hero": {
        "badge": "RESTAURANTE & BUFFET",
        "title": "Comida com sabor de casa, servida com carinho todos os dias",
        "desc": "No Novo Acordo você encontra um buffet variado, pratos do dia bem temperados e um ambiente aconchegante para almoçar com tranquilidade.",
        "bgImage": "imagens/buffet-1.jpg",
        "sideImage": "imagens/prato-feijao-legumes.jpg",
        "btnWa": "Peça pelo WhatsApp",
        "btnMaps": "Como Chegar",
        "btn3Label": "Ver cardápio de hoje",
        "btn3Url": "#hoje",
        "chips": [
            { "icon": "fas fa-bowl-food", "text": "Buffet variado" },
            { "icon": "fas fa-utensils", "text": "Pratos do dia" },
            { "icon": "fas fa-couch", "text": "Ambiente aconchegante" }
        ]
    },

    "today": {
        "subtitle": "O QUE TEM PRA HOJE",
        "title": "Cardápio de Hoje",
        "desc": "Veja o que está no nosso buffet. O cardápio pode variar conforme o dia e a disponibilidade.",
        "showDate": false,
        "updatedText": "",
        "weekly": false,
        "emptyText": "O cardápio de hoje ainda não foi publicado. Chame a gente no WhatsApp e confira!",
        "note": "",
        "groups": [
            { "title": "Pratos Principais", "icon": "fas fa-drumstick-bite", "items": "Almôndegas ao molho\nFrango acebolado" },
            { "title": "Acompanhamentos", "icon": "fas fa-bowl-rice", "items": "Arroz branco\nCaldo da casa\nMacarrão\nBatata frita" }
        ],
        "days": [
            { "day": "Segunda-feira", "groups": [] },
            { "day": "Terça-feira",   "groups": [] },
            { "day": "Quarta-feira",  "groups": [] },
            { "day": "Quinta-feira",  "groups": [] },
            { "day": "Sexta-feira",   "groups": [] },
            { "day": "Sábado",        "groups": [] },
            { "day": "Domingo",       "groups": [] }
        ]
    },

    "highlights": {
        "subtitle": "POR QUE ESCOLHER O NOVO ACORDO",
        "title": "Tudo o que você procura para uma boa refeição",
        "desc": "",
        "items": [
            { "icon": "fas fa-bowl-food", "title": "Buffet Variado", "desc": "Pratos quentes, guarnições e acompanhamentos para você montar o prato do seu jeito." },
            { "icon": "fas fa-fire-burner", "title": "Sabor Caseiro", "desc": "Receitas bem temperadas, preparadas com cuidado para lembrar a comida de casa." },
            { "icon": "fas fa-couch", "title": "Ambiente Aconchegante", "desc": "Espaço agradável, com tijolinhos e madeira, ideal para almoçar com calma." },
            { "icon": "fas fa-heart", "title": "Atendimento Atencioso", "desc": "Equipe pronta para receber você e sua família com simpatia." }
        ]
    },

    "menu": {
        "subtitle": "NOSSO CARDÁPIO",
        "title": "Do buffet ao prato montado",
        "desc": "Escolha entre o buffet completo ou os pratos montados da casa.",
        "footnote": "Valores e itens podem sofrer alterações. Em caso de dúvida, chame a gente no WhatsApp.",
        "categories": [
            {
                "name": "Buffet",
                "items": [
                    {
                        "name": "Buffet Self-service",
                        "desc": "Monte o seu prato com a variedade do dia: arroz, feijão, guarnições, carnes e acompanhamentos.",
                        "price": "Consulte valor",
                        "badge": "Mais pedido",
                        "photo": "imagens/buffet-2.jpg"
                    }
                ]
            },
            {
                "name": "Pratos Montados",
                "items": [
                    {
                        "name": "Prato do Dia — Feijão com Legumes",
                        "desc": "Arroz branco, feijão, legumes (chuchu, cenoura e abóbora) e caldo com calabresa.",
                        "price": "Consulte valor",
                        "badge": "",
                        "photo": "imagens/prato-feijao-legumes.jpg"
                    },
                    {
                        "name": "Prato com Bife Acebolado e Ovo",
                        "desc": "Arroz, bife acebolado, couve refogada, ovo frito e acompanhamento da casa.",
                        "price": "Consulte valor",
                        "badge": "",
                        "photo": "imagens/prato-bife-ovo.jpg"
                    }
                ]
            }
        ]
    },

    "gallery": {
        "subtitle": "GALERIA",
        "title": "Um gostinho do que você encontra por aqui",
        "desc": "",
        "photos": [
            { "src": "imagens/buffet-1.jpg", "caption": "Buffet do dia" },
            { "src": "imagens/prato-feijao-legumes.jpg", "caption": "Prato com feijão, legumes e caldo com calabresa" },
            { "src": "imagens/buffet-2.jpg", "caption": "Opções quentes e acompanhamentos" },
            { "src": "imagens/prato-bife-ovo.jpg", "caption": "Bife acebolado com ovo frito e couve" }
        ]
    },

    "about": {
        "subtitle": "CONHEÇA O NOVO ACORDO",
        "title": "Um acordo feito de sabor, cuidado e boa companhia",
        "p1": "O Restaurante Novo Acordo existe para servir comida bem feita, com tempero caseiro e atendimento acolhedor. Cada prato é preparado com cuidado para que a sua refeição seja o melhor momento do seu dia.",
        "p2": "Seja para o almoço de todo dia, um encontro com a família ou uma pausa no trabalho, nosso buffet foi pensado para agradar todos os gostos.",
        "image": "imagens/prato-bife-ovo.jpg",
        "features": [
            { "icon": "fas fa-heart", "text": "Atendimento atencioso" },
            { "icon": "fas fa-couch", "text": "Ambiente acolhedor" },
            { "icon": "fas fa-utensils", "text": "Sabor em cada prato" }
        ]
    },

    "reviews": {
        "subtitle": "QUEM JÁ PROVOU",
        "title": "O que dizem nossos clientes",
        "desc": "Veja as avaliações reais no Google e conte também como foi a sua experiência.",
        "googleBtnLabel": "Ver avaliações no Google",
        "googleUrl": "https://www.google.com/maps/place/Restaurante+Novo+Acordo/@-10.182545,-48.3432167,17z/data=!4m9!1m2!29m1!3sd50671da-4046-4ca4-937b-4e1081cc6cdd!3m5!1s0x9324cb14555c5f17:0xc2b0cc64a6d5c883!8m2!3d-10.182545!4d-48.3384531!16s%2Fg%2F11jcnvg_d4?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "items": []
    },

    "location": {
        "subtitle": "VENHA NOS VISITAR",
        "title": "Horários e Localização",
        "desc": "Estamos esperando por você. Veja como chegar e os nossos horários de funcionamento.",
        "address": "Palmas - TO (veja a localização exata no mapa)",
        "lat": "-10.182545",
        "lng": "-48.3384531",
        "zoom": 17,
        "mapEmbedUrl": "",
        "hours": [],
        "hoursNote": "",
        "btnMaps": "Abrir no Google Maps",
        "btnCall": "Ligar agora"
    },

    "cta": {
        "title": "Bateu a fome? Venha almoçar no Novo Acordo!",
        "desc": "Fale com a gente pelo WhatsApp ou venha direto: o buffet está te esperando.",
        "btnWa": "CHAMAR NO WHATSAPP",
        "btnMaps": "COMO CHEGAR",
        "bgImage": "imagens/buffet-2.jpg"
    },

    "contact": {
        "phone": "",
        "whatsapp": "",
        "waMessage": "Olá! Gostaria de saber mais sobre o Restaurante Novo Acordo.",
        "email": "",
        "mapsUrl": "https://www.google.com/maps/place/Restaurante+Novo+Acordo/@-10.182545,-48.3432167,17z/data=!4m9!1m2!29m1!3sd50671da-4046-4ca4-937b-4e1081cc6cdd!3m5!1s0x9324cb14555c5f17:0xc2b0cc64a6d5c883!8m2!3d-10.182545!4d-48.3384531!16s%2Fg%2F11jcnvg_d4?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
        "floatingWhatsapp": true,
        "footerSub": "Comida com sabor de casa.",
        "copyright": "Restaurante Novo Acordo. Todos os direitos reservados.",
        "showAdminLink": true,
        "socials": [
            { "icon": "fab fa-instagram", "label": "Instagram", "url": "" },
            { "icon": "fab fa-facebook", "label": "Facebook", "url": "" }
        ]
    },

    "security": {
        "passwordHash": "34c1746f05216f00b9fc9f52e53a30649d704f257ab499936656d2c67586e2c2"
    }
};
