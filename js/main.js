let cssSelector = anime ({
    targets: '#block',
    translateY: 300
  });
  let elements = document.querySelectorAll('#threeAnime');

anime({
    targets: elements,
    translateX: 270
  });
anime({
    targets: '#circle',
    left: '240px',
    backgroundColor: '#000',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad'
  });
