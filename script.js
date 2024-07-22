document.getElementById('sorryButton').addEventListener('click', function() {
    var message = 'Iya, aku maafkan kamu! ❤️';
    var whatsappUrl = 'https://wa.me/6285157590566'  + '?text=' + encodeURIComponent(message);

    window.open(whatsappUrl, '_blank');
});
