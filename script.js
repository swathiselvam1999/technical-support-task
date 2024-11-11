function toggleOption(optionId) {
   
    document.querySelectorAll('.box').forEach(box => box.classList.remove('active'));

    const selectedBox = document.getElementById(optionId);
    selectedBox.classList.add('active');
}


