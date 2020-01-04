/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Notes

/**********************************************************************************************************/

//Get all student list elements by class name 
const studList  = document.getElementsByClassName("student-item cf"); 
//number of students on the page 
const studNum   = studList.length; 
//total number of pages to split the list by
const pagesNum  = Math.ceil((studNum/10)); 
//get class that contains the student list html
const listDiv   = document.getElementsByClassName("student-list")[0]; 
//capture div element ; used for getting ul tag's parent element
const studUl = document.getElementsByTagName("ul")[0];
//get parent element to which navigation/pagination buttons will be appended
const studDiv = studUl.parentNode; 

/**********************************************************************************************************/
// create function which will display a maximum of 10 stuent list items from the page selected

const showPage = (selectedPage) => {

   //display a maximum of 10 students on the page when the page loads
      const firstPage = selectedPage; 
   //highest student number (from the array) displayed on the selected page
      const upperLimit   = (firstPage * 10) - 1;  
   //lowest  student number (from the array) displayed on the selected page
      const lowerLimit   = (upperLimit - 9); // 
   //for loop will loop through all student items and only display the items within the calculated
   //limits above which change depending on the page selected
      for(let i = 0; i < studNum; i += 1) {
   
         let studListElem = studList[i];
   
         if(i >= lowerLimit  && i <= upperLimit)  {    
            studListElem.style.display = ''; 
         }
         else {
            studListElem.style.display = 'none';
         }      
      }
   }
/**********************************************************************************************************/
   //on page load display first 10 items from the list
   showPage(1);

/**********************************************************************************************************/
//create pagination/links

const navDiv = document.createElement("div"); 
studDiv.appendChild(navDiv); 
navDiv.className = "pagination"; 

//loop will create all the buttons required for the navigation & apply click event listener to each
for(let i = 0; i < pagesNum; i += 1) {

   //create list item
   let navListItem = document.createElement('li'); 
   //append list item to navigation div
   navDiv.appendChild(navListItem);
   //create a tag which will trigger the showPage function depending on the selecte page
   let navListLink = document.createElement('a');
   navListLink.textContent =  (i + 1);   
   //add click event listener which triggers a function based on the page selected
   navListLink.addEventListener('click', () => { 

      showPage(navListLink.textContent);
      

   });

   navListItem.appendChild(navListLink);  

}
/**********************************************************************************************************/
//add search functionality 

//create div which will contain the search box
const searchDiv = document.createElement("div"); 
searchDiv.classNAme = "search-div";

//get parent element to which the search div will be inserted
const searchParent = document.getElementsByClassName("page-header cf")[0]; 

//append search div to parent element
searchParent.appendChild(searchDiv); 

//create div which will contain the search box
const searchBox = document.createElement("input"); 
searchBox.type = "text";

//append search box to search div 
searchDiv.appendChild(searchBox); 




//create search button
let searchButton = document.createElement('button'); 
searchButton.textContent = "Search";
//append list item to navigation div
searchDiv.appendChild(searchButton);

/**********************************************************************************************************/