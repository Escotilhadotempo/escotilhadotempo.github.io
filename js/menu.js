let ultimoScroll = 0;
const topo = document.querySelector('.topo');

window.addEventListener('scroll', () => {
    const scrollAtual = window.pageYOffset;

    if (scrollAtual > ultimoScroll && scrollAtual > 100) {
        // rolando para baixo → esconde menu
        topo.style.top = "-120px";
    } else {
        // rolando para cima → mostra menu
        topo.style.top = "0";
    }

    ultimoScroll = scrollAtual;
});
