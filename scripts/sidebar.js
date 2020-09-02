const sidebar = document.querySelector('.sidebar');
const sidebarCloseBtn = document.querySelector('.sidebar-close');
const sidebarOpenBtn = document.querySelector('.sidebar-open');

sidebarCloseBtn.addEventListener('click', closeSidebar);
sidebarOpenBtn.addEventListener('click', closeSidebar);

//Declarations
function closeSidebar() {
  sidebar.classList.toggle('close');
  sidebarOpenBtn.classList.toggle('show');
}
