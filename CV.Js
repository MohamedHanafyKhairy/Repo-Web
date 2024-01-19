// اكتب هذا الكود في ملف JavaScript خاص بك أو في الجزء السفلي من صفحتك
document.addEventListener('DOMContentLoaded', function () {
    // احصل على الروابط
    var homeLink = document.getElementById('home-link');
    var servicesLink = document.getElementById('services-link');

    // احصل على الـ divs
    var homeDiv = document.getElementById('home-div');
    var servicesDiv = document.getElementById('services-div');

    // قم بإضافة حدث النقر لكل رابط
    homeLink.addEventListener('click', function () {
        // قم بإخفاء جميع الـ divs
        homeDiv.style.display = 'block';
        servicesDiv.style.display = 'none';
    });

    servicesLink.addEventListener('click', function () {
        // قم بإخفاء جميع الـ divs
        homeDiv.style.display = 'none';
        servicesDiv.style.display = 'block';
    });
});
