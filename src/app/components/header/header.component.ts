import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

} 

if (typeof document !== 'undefined') {
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger!.addEventListener("click", mobileMenu);

function mobileMenu() {
  if  (hamburger != null && navMenu != null){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
  }
    

}

function closeMenu() {
  
  if  (hamburger != null && navMenu != null){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    
  }
    
}
}

if (typeof document !== 'undefined') {
  const dropdown = document.querySelector(".dropdown");
  
  
 dropdown!.addEventListener("click", mobileMenu);
  
  function mobileMenu() {
    if  (dropdown != null){
      dropdown.classList.toggle("active");
      
      
    }
      
  
  }
  
  function closeMenu() {
    
    if  (dropdown != null){
      dropdown.classList.remove("active");
      
    }
      
  }
  }
