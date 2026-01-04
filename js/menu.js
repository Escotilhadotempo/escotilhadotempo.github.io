let ultimoScroll = 0;
const topo = document.querySelector('.topo');

window.addEventListener('scroll', () => {
    const scrollAtual = window.pageYOffset;

    if (scrollAtual > ultimoScroll && scrollAtual > 100) {
        // rolando para baixo → esconde menu
        topo.classList.add('menu-hide');
    } else {
        // rolando para cima → mostra menu
        topo.classList.remove('menu-hide');
    }

    ultimoScroll = scrollAtual;
});
