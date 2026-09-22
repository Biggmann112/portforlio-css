<script>
const tabBtn = document.querySelectorAll ('.tab-btn');
const tabContents = document.querySelectorAll ('.tab-content');

tabBtns.forEach(btn=> {
  Btn.addEventListener('click', () => {
    // remove active from all
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    // add active to clicked
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});


</script>