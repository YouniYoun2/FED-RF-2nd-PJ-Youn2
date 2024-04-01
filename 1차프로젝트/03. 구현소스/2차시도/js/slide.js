/* (개인필기) 인터발이란?
일정한 시간 간격으로 지속적으로 반복해서 작업을 실행할 때 사용하는 js함수 */





// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window, "DOMContentLoaded", loadFn);

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
    console.log("로딩완료!");

    // 이동버튼 대상:  .abtn
    const abtn = qsa(".abtn");
    // 변경대상 : #slide
    const slide = qs("#slide");
    // 블릿버튼 : .indic
    let indic = document.querySelector(".indic");
    // console.log(abtn,slide);



    
    // 3개의 슬라이드와 2개의 블릿을 만들기
    for (let i = 1; i < 3; i++) {
        // 슬라이드 넣기
        slide.innerHTML += `
        <li data-seq="${i}">
            <img 
            src="images/visual0${i + 1}.jpg"         
            alt="slide">
        </li>    
        `;
        // 블릿 넣기
/*         indic.innerHTML += `
        <li ${i === 0 ? 'class="on"' : ""}>
            <img src="images/bu-arrow-next.png" alt="">
            <img src="images/bu-arrow-prev.png" alt="">
        </li>
        `; */
    } ////// for ////////

    // li를 생성한 후 그 li다시 수집한다!
    // 블릿의 li까지 수집! indic 변수
    indic = document.querySelectorAll(".indic li");

    // 슬라이드 순번 전역변수
    let snum = 0;

    // 2. 버튼을 모두 이벤트 설정하기
    for (let x of abtn) {
        x.onclick = goSlide;
    } /// for of ///

    // 광클 금지변수
    let prot = false;

    /****************************************** 
     함수명: goSlide
     기능: 슬라이드 이동
     ******************************************/
    function goSlide(evt, sts = true) {
        // evt - 이벤트객체 전달 : PointerEvent{}
        // sts - 버튼 클릭인지, 자동 호출인지 구분하는 변수
        // -> true면 버튼 클릭, false면 자동호출로 구분
        // -> 버튼 클릭시엔 아무것도 안보내므로 기본값 true가 할당되어 적용됨
        console.log("전달변수 : ", evt, sts);

        // 만약 버튼 클릭일 경우 인터발 지우기함수 호출
        if (sts) {
            clearAuto();
        }

        // 광클금지 설정하기 ///////////
        // 클릭신호를 막아서 못들어오게 하고 일정시간후 다시 열어준다!
        if (prot) return; // 돌아가!(함수나감!)
        prot = true; // 잠금! (뒤의호출막기!)
        setTimeout(() => {
            prot = false; // 0.6초후 해제!
        }, 600);
        /////////////////////////////////////

        let isRbtn = sts ? this.classList.contains("ab2") : true;
        // => sts값이 트루냐?
        // 맞으면 -> 버튼을 클릭한 것이므로 this키워드에 의한 .ab2 존재 여부를 물어라
        // 아니면 -> 맞으면 무조건 true값을 할당해라 (자동넘김은 오른쪽 버튼 클릭한 방향으로 가야하니까)



        // 2. 버튼별 분기하기 //////

        // 2-1.오른쪽 버튼일 경우 ////
        if (isRbtn) {
            // (1)먼저 왼쪽으로 이동하기
            slide.style.left = "-100%";
            slide.style.transition = ".6s ease-in-out";

            // (2)이동하는 시간 0.6초간 기다림!
            setTimeout(() => {
                // (2-1) 맨앞 li 맨뒤로 이동
                slide.appendChild(slide.querySelectorAll("li")[0]);
                // 슬라이드 left 값이 -100% 이므로
                // (2-2) left값을 0으로 변경
                slide.style.left = "0";
                // (2-3) left 트랜지션 없애기
                slide.style.transition = "none";
            }, 600);
        } //// if ////

        // 2-2.왼쪽 버튼일 경우 ////
        else {
            let list = slide.querySelectorAll("li");
            // (1)맨뒤 li 맨앞으로 이동하기
            // insertBefore(넣을놈,넣을놈,전놈)
            // insertBefore(맨뒤li,맨앞li)
            slide.insertBefore(list[list.length - 1], list[0]);

            // (2) left 값을 -100%로 변경하여
            // 맨뒤 li가 맨앞으로 온것을 숨긴다!
            // 왼쪽에서 슬라이드 들어올 준비!!!
            slide.style.left = "-100%";
            // 트랜지션이 한번 버튼클릭후 생기므로 없애줌
            slide.style.transition = "none";

            setTimeout(() => {
                // (3) left 값을 0으로 트랜지션하여 들어옴
                slide.style.left = "0";
                slide.style.transition = ".6s ease-in-out";
            }, 0);
        } /// else ///

        // 3.블릿을 위해 읽어올 슬라이드 순번 구하기
        let seq = slide.querySelectorAll("li")[isRbtn ? 1 : 0].getAttribute("data-seq");
        console.log("블릿이 읽어올 슬순번:", seq, "/데이터형:", typeof seq);
        // string - 문자형, number - 숫자형

        // 4. 블릿변경하기 ///////////
        // 모든 클래스 on지우기+현재 순번 클래스 넣기
        indic.forEach((ele, idx) => {
            // ele - 각각의 li, idx - 각각의 순번
            if (idx == seq) {
                // ==으로 비교해야 결과가 나옴
                // ===은 형까지 비교하기때문에 안나옴!
                ele.classList.add("on");    // 현재순번 on넣기
            } /// if ///
            else {
                // 나머지는 on빼기
                ele.classList.remove("on");
            }   // else //
        });     // forEach //
    }           // goSlide 함수 //
} //////////////// loadFn 함수 ///////////////

// 인터발용변수(지울목적)
let autoI;
// 타임아웃용 변수(지울목적)
let autoT;
// 자동넘김호출함수 최초호출하기
autoSlide();

// [자동넘김호출함수].. 유진이는 3초걸림
function autoSlide() {
    // setInterval(함수, 시간)
    // - 일정시간 간격으로 함수를 호출
    // clearInterval(인터발변수)
    // - 변수에 담긴 인터발을 지움(멈춤)
    autoI = setInterval(() => {
        // 값을 2개 보내야함

        // 첫번째 전달값은 이벤트객체가 들어가는 변수이므로 false 값을 쓰고
        // 두번째 전달값은 자동호출임을 알리는 변수이므로 false값을 전달한다.
        goSlide(false, false);
    }, 3000);
} // autoSlide함수 //


// [인터발 지우기함수] //
function clearAuto() {
    // 지우기 확인
    console.log("인터발 지워!");
    // 1. 인터발 지우기
    clearInterval(autoI);
    // 2. 타임아웃 지우기 : 실행쓰나미 방지!
    clearTimeout(autoT);
    // 3. 5초 후 아무 작동도 안하면 다시 인터발 호출
    autoT = setTimeout(() => {
        autoSlide();
    }, 5000);
} /////// clearAuto ///////