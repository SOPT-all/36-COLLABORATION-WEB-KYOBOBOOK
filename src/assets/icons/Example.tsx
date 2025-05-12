// svgr 사용 예시

import Icon from '../../components/Icon';

export default function Example() {
  return (
    <>
      {/* 기본 아이콘 */}
      <Icon name="home" />
      {/* 색상 지정 */}
      {/* 
        1. fill="red" ➡️ 원하는 색으로 속성 채우기
        2. 사용할 svg 파일에 가서 <path>의 fill 속성을 fill="current"로 변경
        ex) ic_search.svg 파일 확인!
      */}
      <Icon name="search" fill="red" />
      {/* 크기 지정 */}
      <Icon name="add" width={40} height={40} />
    </>
  );
}
