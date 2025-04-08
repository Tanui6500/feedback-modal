const open = document.querySelector('.feedback-button');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const submit = document.querySelector('.submit-feedback');
const feedback = document.querySelector('.feedback-input');

open.onclick = () => {
  modal.style.display = 'flex';
};

close.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};

submit.onclick = () => {
  const text = feedback.value.trim();
  if (text) {
    const time = new Date().toISOString();
    localStorage.setItem(`feedback_${time}`, text);
    alert("Thanks for your feedback!");
    feedback.value = '';
    modal.style.display = 'none';
  } else {
    alert("Please write something.");
  }
};
