function fillingStar(index, rating) {
  const starTotal = 5;

  const starPercentage = (rating / starTotal) * 100;
  const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  document.querySelectorAll('.stars-inner')[index].style.width = starPercentageRounded;
}

export default fillingStar;
