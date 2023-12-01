document.addEventListener('keyup', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.drum-kit .inner-item[data-key="${e.keyCode}"]`);
  if (!audio) return; // Nếu phím gõ không khớp với audio thì không thực hiện các câu lệnh bên dưới.

  audio.currentTime = 0; // reset lại thời gian bật audio về 0.
  audio.play(); // bật audio.
  key.classList.add("inner-playing");

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('inner-playing')
  }

  const keys = document.querySelectorAll('.drum-kit .inner-item');

  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});

// Sự kiện transitionend: Để lắng nghe khi transition trong CSS chạy xong thì sẽ kích hoạt một hàm nào đó.