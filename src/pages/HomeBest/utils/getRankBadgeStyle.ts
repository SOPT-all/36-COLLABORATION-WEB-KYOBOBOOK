export const getRankBadgeInfo = (rank: number) => {
  const isTop3 = rank <= 3;

  return {
    text: rank === 1 ? `Best ${rank}` : `${rank}`,
    isTop3,
  };
};
