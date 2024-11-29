document.addEventListener('DOMContentLoaded', () => {
  const elements = document.body.querySelectorAll('*'); // 모든 요소를 선택
  const delay = 100; // 글자 출력 속도 (ms)
  let textArray = [];

  // 모든 텍스트 노드를 추출하여 배열에 저장
  elements.forEach(element => {
    if (element.childNodes.length > 0) {
      element.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
          textArray.push({
            element: node,
            text: node.nodeValue.trim()
          });
          node.nodeValue = ''; // 초기화
        }
      });
    }
  });

  // 재귀적으로 글자 하나씩 출력
  function typeText(index, charIndex = 0) {
    if (index >= textArray.length) return; // 종료 조건

    const { element, text } = textArray[index];
    
    if (charIndex < text.length) {
      element.nodeValue += text[charIndex];
      setTimeout(() => typeText(index, charIndex + 1), delay);
    } else {
      setTimeout(() => typeText(index + 1), delay);
    }
  }

  typeText(0); // 타이핑 시작
});