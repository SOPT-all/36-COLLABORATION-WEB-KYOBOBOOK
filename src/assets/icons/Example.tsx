// svgr 기반 공통 Icon 컴포넌트 사용 예시
// -----------------------------------------------------
// ✅ name: 아이콘 이름 (src/assets/icons/index.ts의 iconMap 키 값 기준)
// ✅ fill: 아이콘 색상 지정 (SVG 내부가 fill="current"여야 적용됨)
// ✅ width / height: 아이콘 크기 설정 (기본값: 24px)
// -----------------------------------------------------
// ⚠️ SVG 파일 내부 <path>의 fill 속성이 고정값(#000 등)이면 색상 변경이 적용되지 않음
//     반드시 fill="current"로 되어 있어야 외부 스타일이 적용됨!
//     ex) ic_search.svg 파일 확인
// -----------------------------------------------------
// 🔍 사용 가능한 name 값은 src/assets/icons/index.ts의 iconMap에서 확인 가능

import Icon from '../../components/Icon';

export default function Example() {
  return (
    <>
      {/* 기본 아이콘 */}
      <Icon name="home" />
      {/* 색상 지정 */}
      <Icon name="search" fill="red" />
      {/* 크기 지정 */}
      <Icon name="add" width={40} height={40} />
    </>
  );
}
