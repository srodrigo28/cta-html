/* ==========================================================================
   CONFIGURAÇÃO DE SEO - TREINADEV
   Arquivo: seo-config.js
   Função: Centralizar variáveis de SEO e injetar no HTML dinamicamente.
   ========================================================================== */

// 1. Definição das Variáveis de SEO (Edite aqui para mudar em todo o site)
const seoData = {
    // Título que aparece na aba do navegador e no link azul do Google (Max 60 caracteres)
    title: "TreinaDev | Aulas Particulares de FlutterFlow e Programação",
    
    // Descrição curta que aparece abaixo do título no Google. Vital para o clique (CTR) (Max 160 caracteres)
    description: "Acelere sua carreira com mentoria particular de FlutterFlow. Aprenda criando apps reais com um professor experiente. Agende sua aula grátis!",
    
    // Palavras-chave para motores de busca antigos (O Google ignora hoje, mas outros usam)
    keywords: "aulas flutterflow, professor particular programação, mentoria dev, criar aplicativos, curso flutterflow, agendamento aula",
    
    // Autor do site/conteúdo
    author: "Sebastião Rodrigo - TreinaDev",
    
    // Define a URL "oficial" desta página para evitar punição por conteúdo duplicado
    canonical: window.location.href, // Pega a URL atual automaticamente
    
    // Cor do tema para navegadores mobile (barra de endereço do Chrome no Android)
    themeColor: "#4f46e5", // Cor Indigo usada no seu site
    
    // --- OPEN GRAPH (Para ficar bonito quando compartilhar no WhatsApp, Facebook, LinkedIn) ---
    ogType: "website", // Tipo de conteúdo
    ogImage:  "http://treina-dev-site.vercel.app/start.png", // Imagem que aparece no WhatsApp (peguei a thumb do seu vídeo)
    
    // --- TWITTER CARDS (Para ficar bonito no Twitter/X) ---
    twitterCard: "summary_large_image", // Cartão com imagem grande
};

// 2. Função que constrói o SEO no <head> do HTML
function carregarSEO() {
    // Seleciona a tag <head> do documento
    const head = document.head;

    // --- DEFINIÇÃO DO TÍTULO ---
    // Atualiza o título da página
    document.title = seoData.title; 

    // --- FUNÇÃO AUXILIAR PARA CRIAR META TAGS ---
    // Cria tags <meta> de forma organizada para não repetir código
    const criarMeta = (name, content, isProperty = false) => {
        const meta = document.createElement('meta'); // Cria o elemento HTML <meta>
        if (isProperty) {
            meta.setAttribute('property', name); // Usa 'property' para Open Graph (Facebook/Zap)
        } else {
            meta.setAttribute('name', name); // Usa 'name' para tags padrão do Google
        }
        meta.setAttribute('content', content); // Insere o conteúdo da variável
        head.appendChild(meta); // Adiciona a tag criada dentro do <head>
    };

    // --- INJEÇÃO DAS TAGS PADRÃO (GOOGLE) ---
    // Injeta a descrição do site
    criarMeta('description', seoData.description);
    
    // Injeta as palavras-chave
    criarMeta('keywords', seoData.keywords);
    
    // Injeta o autor
    criarMeta('author', seoData.author);
    
    // Define como os robôs devem comportar (indexar a página e seguir os links)
    criarMeta('robots', 'index, follow');
    
    // Define a cor do navegador mobile
    criarMeta('theme-color', seoData.themeColor);

    // --- INJEÇÃO DO OPEN GRAPH (WHATSAPP / FACEBOOK) ---
    // Título para redes sociais
    criarMeta('og:title', seoData.title, true);
    
    // Descrição para redes sociais
    criarMeta('og:description', seoData.description, true);
    
    // Imagem de destaque no WhatsApp (Thumbnail)
    criarMeta('og:image', seoData.ogImage, true);
    
    // URL do site para redes sociais
    criarMeta('og:url', seoData.canonical, true);
    
    // Tipo do site
    criarMeta('og:type', seoData.ogType, true);
    
    // Nome do site
    criarMeta('og:site_name', 'TreinaDev', true);
    
    // Localização (Brasil)
    criarMeta('og:locale', 'pt_BR', true);

    // --- INJEÇÃO DO TWITTER CARD ---
    // Define o estilo do cartão no Twitter
    criarMeta('twitter:card', seoData.twitterCard);
    
    // Título no Twitter
    criarMeta('twitter:title', seoData.title);
    
    // Descrição no Twitter
    criarMeta('twitter:description', seoData.description);
    
    // Imagem no Twitter
    criarMeta('twitter:image', seoData.ogImage);

    // --- TAG CANONICAL ---
    // Cria o link canonical (importante para SEO técnico)
    const linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    linkCanonical.setAttribute('href', seoData.canonical);
    head.appendChild(linkCanonical);

    console.log("SEO Carregado com Sucesso via Javascript! 🚀");
}

// Executa a função assim que o script é lido
carregarSEO();