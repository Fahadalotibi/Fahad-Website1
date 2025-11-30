document.addEventListener('DOMContentLoaded', function() {
    
    const alertButton = document.getElementById('alertButton');
    
    if (alertButton) {
        alertButton.addEventListener('click', function() {
            alert('تم النقر على الزر بنجاح! هذه وظيفة JavaScript تفاعلية مطلوبة في المشروع.');
            console.log('تم تنفيذ وظيفة الزر التفاعلي.');
        });
    }

    const contactForm = document.getElementById('contactForm');
    const validationMessage = document.getElementById('validationMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                validationMessage.textContent = 'يرجى ملء جميع الحقول المطلوبة (الاسم، البريد الإلكتروني، الرسالة).';
                validationMessage.style.display = 'block';
            } else {
                validationMessage.style.display = 'none';
                
                alert('تم التحقق من صحة النموذج بنجاح! البيانات جاهزة للإرسال.');
                
                contactForm.reset(); 
            }
        });
    }
});