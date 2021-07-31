//import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '@laylazi/bootstrap-rtl-scss/scss/bootstrap-rtl.scss';
import './css/custom.css';
import './scss/style.scss';
import './css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all.min';



$(document).ready(function(){
    $('#copyright').text(" جميع الحقوق محفوظة للمطعم لسنة " + new Date().getFullYear());
    $(function () {
        $("#commentForm").validate();
    });
});























