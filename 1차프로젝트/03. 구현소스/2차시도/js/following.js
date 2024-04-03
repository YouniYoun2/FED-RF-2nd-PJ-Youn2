const contBox = document.querySelector(".cont-box");

// html코드 변수
let hcode = "";

////////////////////////////////////////////////////
//////// div > a href class="link" 잡아야함 ////////
//////////// 그래야 색 반전효과 가능 ///////////////
///////////////////////////////////////////////////

// 3. 코드넣기
contBox.innerHTML = hcode;

// [2] 따라다니는 원 세팅하기
// 1-1. 움직일 대상 : .mover
const mover = document.querySelector(".mover");
// 1-2. 이벤트 대상 : body
const myBody = document.body;

console.log("대상 : ", mover, myBody);

// 2. 이벤트 대상에 마우스무브 이벤트가 발생할때
// 무버가 마우스 포인터 따라다니기 기능 구현
myBody.onmousemove = (e) => {
    mover.style.top = e.clientY + "px"; /* mover가 fixed면 Y축은 보이는 화면을 기준으로 해야함. 그래서 pageY가 아닌 clientY를 사용했음 */
    mover.style.left = e.pageX + "px";
}; // mousemove //

// 3. 이벤트 대상 구역에(화면에 마우스가) 들어올 때만 (마우스효과가)보이기 / 나가면 숨기기
myBody.onmouseenter = () => {
    mover.style.opacity = 1;
};  // mouseenter //
myBody.onmouseleave = () => {
    mover.style.opacity = 0;
};  // mouseleave //




// 4. a요소(글자부분)에 오버시 원 커지게 하기
// 대상 : .link
const link = document.querySelectorAll('.link');
// console.log(link);
link.forEach((ele)=>{
    // a요소에 마우스 들어올 때 
    ele.onmouseenter = () => {
        mover.style.transform = "translate(-50%, -50%) scale(4)";
    };  // mouseenter //
    // a요소에서 마우스 나갈 때 
    ele.onmouseleave = () => {
        mover.style.transform = "translate(-50%, -50%) scale(1)";
    };  // mouseleave //
}); // forEach //