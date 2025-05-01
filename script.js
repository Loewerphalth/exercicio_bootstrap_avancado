document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links da navbar
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Adiciona o evento de clique para cada link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove a classe active de todos os links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Adiciona a classe active ao link clicado
            this.classList.add('active');
            
            // Obtém o ID da seção alvo
            const targetId = this.getAttribute('href');
            
            // Encontra o elemento alvo
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcula a posição do elemento alvo
                const targetPosition = targetElement.offsetTop - 70; // 70px é a altura da navbar
                
                // Rola suavemente até o elemento alvo
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Adiciona a classe active ao link correspondente à seção visível
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.col-12[id]');
        const scrollPosition = window.scrollY + 100; // 100px de offset
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});