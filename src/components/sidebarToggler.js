const sidebarToggle = ()=>{
    const navbar = document.querySelector(".myNavbar");
    const sidebar = document.querySelector(".sidebar");
    const page = document.querySelector('.page');

    navbar?.classList.toggle("opacity-0");
    sidebar?.classList.toggle("activeSidebar");
    page?.classList.toggle("activeSidebar");
}

export default sidebarToggle;