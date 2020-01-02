/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Notes

/**********************************************************************************************************/


//Get all student list elements by class name 
const studList = document.getElementsByClassName("student-item cf"); 
//number of students on the page 
const studNum  = studList.length; 
//total number of pages to split the list by
const pagesNum = Math.ceil((studNum/10)); 
//get class that contains the student list html
const listDiv  = document.getElementsByClassName("student-list")[0]; 

/**********************************************************************************************************/

// function will pick up the number
const showPage = () => {


//test variable will be replaced later (currently hardcoded for testing purposes):
   const pageSelected = 1; 
//highest student number (from the array) displayed on the selected page
   const upperLimit   = (pageSelected * 10) - 1;
//lowest  student number (from the array) displayed on the selected page
   const lowerLimit   = (upperLimit - 9);

   //testing
console.log(upperLimit); 
console.log(lowerLimit);



   for(let i = 0; i < studNum; i += 1) {

      let studListElem = studList[i];

      //testing
      console.log(studListElem);      
      console.log(i);


      if(i >= upperLimit && i <= lowerLimit)  {
      
         studListElem.style.display = ''; 

      }
      else {

         studListElem.style.display = 'none';
      }
      

   }
}

/**********************************************************************************************************/

showPage();

/**********************************************************************************************************/
