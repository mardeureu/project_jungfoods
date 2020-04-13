/* 버거메뉴 */
function burgerMenuBtn() {
    if (globalNav.className == "menuVisible") {
        globalNav.className = ""
    } else {
        globalNav.className = "menuVisible"
    }
}

// 스크롤, top 버튼, 메인 제품, 헤더 커졌을 때 감지 못하는것, height 스크롤 하단 못찾는것. 