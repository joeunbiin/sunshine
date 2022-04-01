// 여기서부터 resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램 
var deviceSize = 1024; //반응형 스타일 사이즈로 
// 함수선언
function scrollOX(status) {
    $('html').css({
        overflowY: status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var swh = scrollOX('hidden')
var sws = scrollOX('scroll')
var swd = swh - sws
if (swd > 0) {
    deviceSize = deviceSize - swd
}

var elTxtBoxP2 = document.querySelectorAll('.txtbox .p2')
var pArr = []
for(var i=0; i<elTxtBoxP2.length; i++){
    pArr[i] = elTxtBoxP2[i].textContent
}
var ww
var wh

function init() {
    ww = $(window).width()
    wh = $(window).height()
    $('html').scrollTop(0) //화면 사이즈가 바뀌게 되면 스크롤 맨꼭대기로 가도록
    if (ww > deviceSize && !$('html').hasClass('pc')) {
        $('html').addClass('pc').removeClass('mobile')
        $('.depth1 > li').removeClass('on')
        for (var i=0; i<elTxtBoxP2.length; i++){
            elTxtBoxP2[i].textContent = pArr[i]
        }
    } else if (ww <= deviceSize && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('pc')
        $('#header .nav').removeClass('on') //사이즈 바꿨을때 nav박스 닫혀 있도록
        $('#header .open').removeClass('on') //사이즈 돌아왔을때 x버튼 없어지도록
        for (var i=0; i<elTxtBoxP2.length; i++){
            var text = pArr[i].substring(0, 25)
            elTxtBoxP2[i].textContent = text+'...'
        }
    }
}

init()

$(window).on('resize', function () {
    init()
})
//여기까지 resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램


$('.depth1 > li').on('click', function (e) {
    if ($('html').hasClass('mobile')) { //모바일을 가지고 있을때만 실행함
        e.preventDefault()
        $(this).toggleClass('on').siblings().removeClass('on')
    }
})



$('.depth2 > li').on('click', function(e){
    e.stopPropagation()
    if ( $(this).hasClass('road') ) {
            $('.comBox #content').remove()
            $('.comBox #container').load('road.html #content')
            $('.comBox .title a').eq(1).addClass('on').siblings().removeClass('on')
    }
})


$('.depth1 > li').hover(
    function(){
        if ( $('html').hasClass('pc') ) {
            $(this).addClass('on')
        }
    },
    function(){
        if ( $('html').hasClass('pc') ) {
            $(this).removeClass('on')
        }
    }
)


$('#header .open').on('click', function(){
    $(this).toggleClass('on')
    $(this).next().toggleClass('on')
})


// $('#header .nav .road').on('click', function(){
//     $('.comBox #content').remove()
//     $('.comBox #container').load('road.html #content')
//     $('.comBox .title a').eq(1).addClass('on').siblings().removeClass('on')
// })



$(".article1 .slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 5000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: true,
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i><span>글씨</span></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i><span>글씨</span></button>',
    responsive: [{
        breakpoint: 1025,
        settings: {
            arrows: false
        }
    }]
})


// 미니 슬릭슬라이드
$(".article5 .slide_group2").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: false,
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 3, // 보여질슬라이드수
    slidesToScroll: 1, // 이동슬라이드수
    cssEase: 'linear', // 속도함수(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    centerMode: true, //미니 슬라이드 모드
    centerPadding: "100px", //좌우측 끝에 보여질 이미지 넓이값
    responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 1,
                centerPadding: "150px"
            }
        },
        {
            breakpoint: 501,
            settings: {
                slidesToShow: 1,
                centerMode: false
            }
        }
    ]
})


var elPlaystop = document.querySelector('.article1 .playstop')
var ibtn = elPlaystop.childNodes
elPlaystop.addEventListener('click', function () {
    if (ibtn[0].classList.contains('fa-pause')) {
        $('.article1 .slide_group').slick('slickPause')
        ibtn[0].classList.remove('fa-pause')
        ibtn[0].classList.add('fa-play')
    } else {
        $('.article1 .slide_group').slick('slickPlay')
        ibtn[0].classList.remove('fa-play')
        ibtn[0].classList.add('fa-pause')
    }
})



var article2Near = $('.article2').offset().top - (wh / 2+100)
var article3Near = $('.article3').offset().top - (wh / 2+100)
var article6Near = $('.article6').offset().top - (wh / 2+100)
// css에서 fixed 하지말고 on붙으면 이렇게 스크롤바내려오면 되도록 설정
$(window).on('scroll', function () {
    var sct = $(this).scrollTop()
    if (sct >= 50 && !$('#header').hasClass('on')) {
        $('#header').addClass('on')
        $('.gotop').addClass('on')
    } else if (sct < 50 && $('#header').hasClass('on')) {
        $('#header').removeClass('on')
        $('.gotop').removeClass('on')
    }

    // article2
    if (sct >= article2Near && !$('.article2').hasClass('on')) {
        $('.article2').addClass('on')
    } else if (sct === 0) {
        $('.article2').removeClass('on')
    }


    // article3
    if (sct >= article3Near && !$('.article3').hasClass('on')) {
        $('.article3').addClass('on')
    } else if (sct === 0) {
        $('.article3').removeClass('on')
    }


    
})


//맨위로 버튼 클릭시 부드럽게 스크롤시키기
$('.gotop').on('click', function(e){
    e.preventDefault()
    $('html').animate({scrollTop: 0}, 500)
})




// article6 필터 갤러리
// 스크립트 방법
var elLia = document.querySelectorAll('.title > li > a')
var elImg = document.querySelectorAll('.cont > img')
for (var i=0; i<elLia.length; i++) {
    elLia[i].addEventListener('click', function(e){
        e.preventDefault()
        var href = this.getAttribute('href')
        filter(href)
    })
}
function filter(type){
    for (var j=0; j<elImg.length; j++) {
        if ( elImg[j].classList.contains(type) ) {
            elImg[j].style.display = 'block'
            elImg[j].classList.add('active')
        } else {
            elImg[j].classList.remove('active')
            elImg[j].style.display = 'none'
        }
    }
}


// 제이쿼리 방식
// var href;
// $('.article6 .title a').on('click', function (e) {
//     e.preventDefault()
//     href = $(this).attr('href')
//     $('.cont img').each(function () {
//         if ($(this).hasClass(href)) {
//             $(this).css({
//                 display: 'block'
//             })
//             $(this).addClass('active')
//         } else {
//             $(this).removeClass('active')
//                 .css({
//                     display: 'none'
//                 })
//         }
//     })
// })



// 자바스크립트 방식
// var elLia = document.querySelectorAll('li > a')
// for (var i=0; i<elLia.length; i++) {
//     elLia[i].addEventListener('mouseover', function(){
//         text = this.textContent
//         var datakor = this.getAttribute('date-kor')
//         this.textContent = datakor
//     })
//     elLia[i].addEventListener('mouseover',function(){
//         this.textContent = text
//     })
// }