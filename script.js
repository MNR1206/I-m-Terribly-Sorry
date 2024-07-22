document.getElementById('sorryButton').addEventListener('click', function() {
    var phoneNumber = '6285157590566'; 
    var message = 'Iya, aku maafkan kamu! ❤️';
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=6285157590566' + phoneNumber + '&text=' + encodeURIComponent(message);

    window.open(whatsappUrl, '_blank');
});
