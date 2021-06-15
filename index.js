// 사각형의 넓이 구하기

// 함수 선언식

function getRectangleArea(width, height){
  let rectangleArea =  width * height
  return rectangleArea
}

// 함수 표현식

let getRectangleArea = function (width, height){
    let rectangleArea = width * height
    return rectangleArea
}

// 화살표 함수

let getRectangleArea = (width, height) => width * height