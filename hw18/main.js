const emojis = document.querySelectorAll('.btn-emoji');
const results = document.querySelectorAll('[id^="result"]');

const counts = Array.from(emojis).fill(0);

function handleClick(index) {
  return () => {
    results[index].innerText = ++counts[index];
  }
}

emojis.forEach((emoji, index) => {
  emoji.onclick = handleClick(index);
});

