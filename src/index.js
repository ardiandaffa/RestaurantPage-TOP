import * as Tab from './tab'
import * as Menu from './menu'
import * as Contact from './contact'

// Declare div content
const contentDiv = document.getElementById('content');

// Navigation
let navigation = document.createElement('div');
navigation.innerHTML = Tab.createTab();

// Append Tab to div content
contentDiv.append(navigation);

// Populating main page using DOM
let webTitle = document.createElement('h1');
webTitle.innerText = "Pizza Restaurant"
let mainContent = document.createElement('div');
mainContent.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nibh metus, consectetur ut erat vitae, vestibulum dignissim ipsum. Praesent at velit commodo, scelerisque libero eu, iaculis enim. Nam sed orci ac mauris dictum interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur ut nisl dictum, aliquet risus vel, eleifend velit. Aliquam vehicula turpis nec purus volutpat lobortis. Etiam gravida orci aliquam pharetra ultrices. Duis nec efficitur ex. Sed sit amet velit ligula. Donec sapien ipsum, mollis eget lacinia eu, pretium eget urna. Nam sodales et lorem porttitor bibendum. Morbi turpis urna, lobortis vel tincidunt vel, efficitur quis diam."
mainContent.classList.add('content-container-main');
contentDiv.append(webTitle);
contentDiv.append(mainContent);

// Function to wipe out content from div content
function wipeOut(){
    contentDiv.innerHTML = "";
    contentDiv.append(navigation);
};

// Add event listener to all tab navigation
const tabs = document.getElementsByClassName('a-class');

// When home clicked
tabs[0].addEventListener("click", () => {
    wipeOut();
    contentDiv.append(navigation);
    contentDiv.append(webTitle);
    contentDiv.append(mainContent);
});

tabs[1].addEventListener("click", () => {
    wipeOut();
    let menuContent = document.createElement('div');
    menuContent.innerHTML = Menu.createMenu();
    contentDiv.append(menuContent);
});

tabs[2].addEventListener("click", () => {
    wipeOut();
    let contactContent = document.createElement('div');
    contactContent.innerHTML = Contact.createContact();
    contentDiv.append(contactContent);
});
