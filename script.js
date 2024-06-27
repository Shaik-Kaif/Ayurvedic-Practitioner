const closeButton = document.getElementById('close-button');
    const overlay = document.getElementById('overlay');

    closeButton.addEventListener('click', () => {
      overlay.classList.add('hidden');
    });


function textPage(){
  window.location.href = "quiz-index.html";
}