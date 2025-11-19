document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona os elementos principais
    const mainPlayer = document.getElementById('main-player');
    const mainTitle = document.getElementById('main-title');
    const mainChannel = document.getElementById('main-channel');
    const mainDescription = document.getElementById('main-description');
    
    // 2. Seleciona todos os itens da lista
    const videoItems = document.querySelectorAll('.opcoes-videos .video-item');

    // Função principal para atualizar o Player
    const updateMainVideo = (link, title, channel, description) => {
        if (mainPlayer) {
            mainPlayer.src = link;
        }
        if (mainTitle) {
            mainTitle.textContent = title;
        }
        if (mainChannel) {
            mainChannel.textContent = channel;
        }
        if (mainDescription) {
            mainDescription.textContent = description;
        }
        console.log(`[DEBUG] Player atualizado para: ${title} (${link})`); // Ajuda no diagnóstico
    };

    // Função para gerenciar a classe 'active'
    const setActiveItem = (clickedItem) => {
        videoItems.forEach(item => {
            item.classList.remove('active');
        });
        clickedItem.classList.add('active');
    };

    // 3. Adiciona o Listener de Clique para cada item
    videoItems.forEach(item => {
        item.addEventListener('click', () => {
            
            // Extração concisa dos data-atributos
            const { 
                link, 
                title, 
                channel, 
                desc: description // Renomeia 'desc' para 'description'
            } = item.dataset;

            // 4. Atualiza o player principal
            updateMainVideo(link, title, channel, description);

            // 5. Atualiza a aparência do item ativo
            setActiveItem(item);
        });
    });

    // 6. Inicialização: Simula o clique no primeiro item para carregar o estado inicial
    if (videoItems.length > 0) {
        // Dispara o evento de clique no primeiro item
        videoItems[0].click();
    }
});