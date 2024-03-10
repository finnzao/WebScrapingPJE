import { launch } from 'puppeteer';

(async () => {
    // Inicializa o navegador headless
    const browser = await launch();
    const page = await browser.newPage();

    // Vá para a página de login e insira as credenciais
    await page.goto('https://pje.tjba.jus.br/pje/login.seam');
    await page.type('input#username.form-control', 'seu_usuario');
    await page.type('input[name="password"]', 'sua_senha');

    // Enviar o formulário de login
    await Promise.all([
        page.click('button#login_button_id'), // Substitua pelo seletor correto do botão de login
        page.waitForNavigation({ waitUntil: 'networkidle0' }), // Espera pela próxima página ser carregada
    ]);

    // // Função para raspar os itens da lista
    // const scrapeItems = async (page) => {
    //     // Substitua pelos seletores corretos dos itens da lista
    //     const itemsSelector = '.item_selector';
    //     await page.waitForSelector(itemsSelector);

    //     // Executa o script no contexto da página e retorna os dados dos itens
    //     const items = await page.$$eval(itemsSelector, (items) => {
    //         // Extrai informações dos elementos
    //         return items.map((item) => {
    //             // Substitua com os seletores corretos dentro de cada item
    //             const title = item.querySelector('.title_selector').innerText;
    //             const date = item.querySelector('.date_selector').innerText;
    //             // Adicione mais campos conforme necessário
    //             return { title, date };
    //         });
    //     });

    //     return items;
    // };

    // // Raspar os itens da primeira página
    // const items = await scrapeItems(page);
    console.log(items);

    // Aqui você adicionaria a lógica de navegação pela paginação, chamando `scrapeItems(page)` para cada página
    // ...

    // Fechar o navegador após a raspagem estar completa
    await browser.close();
})();