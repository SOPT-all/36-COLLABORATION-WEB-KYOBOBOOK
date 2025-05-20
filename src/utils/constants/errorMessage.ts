export const ERROR_MESSAGE: Record<
  number,
  {
    default: string;
    [code: number]: string;
  }
> = {
  400: {
    default: '잘못된 요청입니다.',
  },
  401: {
    default: '인증이 필요합니다.',
  },
  403: {
    default: '접근 권한이 없습니다.',
  },
  404: {
    default: '요청한 리소스를 찾을 수 없습니다.',
  },
  500: {
    default: '서버 내부 오류가 발생했습니다.',
  },
  504: {
    default: '서버 응답 시간이 초과되었습니다.',
  },
};
