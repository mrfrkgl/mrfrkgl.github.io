document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    const body = document.body;

    if (splashScreen) {
        // Animasyonun başlayacağı kaydırma eşiği.
        const scrollThreshold = 100;

        function checkScroll() {
            // Eğer sayfa 100px'den fazla kaydırılmışsa veya URL'de #content varsa
            // header'ı küçült.
            if (window.scrollY > scrollThreshold || window.location.hash === '#content') {
                splashScreen.classList.add('scrolled');
                body.classList.add('scrolled');
            } else {
                splashScreen.classList.remove('scrolled');
                body.classList.remove('scrolled');
            }
        }

        // Sayfa yüklendiğinde ve her kaydırma eyleminde kontrolü yap
        window.addEventListener('scroll', checkScroll);
        checkScroll(); // Sayfa ilk yüklendiğinde de durumu kontrol et
    }

    // Sayfa yüklendiğinde URL'de #mr-faruk varsa gizle
    if (window.location.hash === '#mr-faruk') {
        // Sayfayı yenilemeden URL'den etiketi kaldır
        // Bu, #mr-faruk:target CSS kuralını geçersiz kılar ve bölümü gizler.
        history.pushState(null, '', window.location.pathname + window.location.search);
    }

    // "Yukarı Çık" butonu için özel scroll davranışı
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Butonun varsayılan link davranışını engelle
            window.scrollTo({
                top: 0, // Sayfanın en üstüne git
                behavior: 'smooth' // Yumuşak bir şekilde kaydır
            });
        });
    }
});