// Aguarda o carregamento completo do documento antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Seleciona todos os itens da lista que são clicáveis
    const videoItems = document.querySelectorAll('.video-item');
    
    // 2. Seleciona todos os elementos que serão atualizados
    const mainPlayer = document.getElementById('main-player');
    const mainTitleElement = document.querySelector('.video-principal h2');
    const mainChannelElement = document.getElementById('main-channel'); // NOVO ELEMENTO
    const mainDescriptionElement = document.getElementById('main-description');
    
    // Verifica se os elementos principais existem antes de continuar
    if (!mainPlayer || !mainDescriptionElement || !mainTitleElement || !mainChannelElement) {
        console.error("Erro: Um ou mais elementos principais (iframe, título, canal ou descrição) não foram encontrados no HTML.");
        // Removi a tag <h2> e adicionei o ID #main-title para o querySelector funcionar melhor
        return; 
    }

    // 3. Itera sobre cada item da lista e adiciona um "ouvinte de evento"
    videoItems.forEach(item => {
        item.addEventListener('click', () => {
            
            // 4. Obtém os dados dos atributos 'data-'
            const newLink = item.getAttribute('data-link');
            const newTitle = item.getAttribute('data-title');
            const newChannel = item.getAttribute('data-channel'); // NOVO DADO
            const newDescription = item.getAttribute('data-desc');

            // 5. Atualiza o atributo 'src' do iframe principal com o novo link
            if (newLink) {
                mainPlayer.src = newLink;
                console.log('Vídeo carregado:', newTitle);
            }
            
            // 6. Atualiza o TÍTULO, CANAL e DESCRIÇÃO do vídeo principal
            if (newTitle) {
                mainTitleElement.textContent = newTitle;
            }
            
            if (newChannel) {
                mainChannelElement.textContent = `Canal: ${newChannel}`;
            } else {
                mainChannelElement.textContent = ''; // Limpa se o dado estiver faltando
            }
            
            if (newDescription) {
                mainDescriptionElement.textContent = `Descrição: ${newDescription}`;
            }

            // Efeito visual para indicar qual item está selecionado
            videoItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // 7. Simula o clique no primeiro item ao carregar a página
    if (videoItems.length > 0) {
        videoItems[0].click();
    }
});

