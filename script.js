document.addEventListener('DOMContentLoaded', function() {
    // الحصول على جميع الأزرار الخاصة بتنزيل التطبيقات
    const downloadButtons = document.querySelectorAll('.download-btn');

    // إضافة حدث لكل زر
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // منع الانتقال الفوري للرابط

            let spinner = document.getElementById('fullscreen-spinner');
            if (!spinner) {
                // إنشاء عنصر spinner إذا لم يكن موجودًا
                spinner = document.createElement('div');
                spinner.id = 'fullscreen-spinner';
                spinner.className = 'fullscreen-spinner';
                document.body.appendChild(spinner);
            }

            spinner.style.display = 'block'; // إظهار الدوار في منتصف الصفحة

            // بعد 3 ثوانٍ، سيتم توجيه المستخدم لتحميل الملف
            setTimeout(() => {
                window.location.href = event.target.href;
            }, 3000);
        });
    });
});