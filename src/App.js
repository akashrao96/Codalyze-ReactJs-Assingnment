import React from 'react';
import data from './data'

 class App extends React.Component {

  render() {
    console.log('1 -----------------------');

    const filterData = (type) => {
        const dataaa = new Set();
        data.forEach(d => {
            dataaa.add(d[type]);
        });
    
        return [...dataaa];
    }
    
    const getHighestMarks = (arr) => {
        let highest = {marks: 0};
        arr.forEach(d => {
            highest = (d.marks > highest.marks)? { name: d.name, marks: d.marks } : highest;
        });
        return highest;
    };
    var display ='';
    const getHighestMarksInEachSubjects = () => {
      
        const subjects = filterData('subject');
        
        subjects.forEach(sub => {
            const dataForSub = data.filter(d => d.subject === sub);
            const highestMarks = getHighestMarks(dataForSub);
            console.log(sub + '->' + highestMarks.name + ' -> '+highestMarks.marks);
            display += '-----' + sub + '->' + highestMarks.name + ' -> '+highestMarks.marks ;
            
        })
        return display;
    };
    getHighestMarksInEachSubjects();
    
    console.log('2 ---------------------');
    
    const getTotal = (arr) => {
        const marks =  arr.reduce((total, d) =>  total + Number(d.marks), 0);
        return marks;
    }
    
    console.log(getTotal(data) / data.length);
    
    console.log('3 ------------------');
    const students = filterData('name');
    const studentsGreaterThan60 = students.filter( s => {
        const subj = data.filter( d => d.name === s );
        return subj.filter(s => s.marks > 60).length === subj.length;
        }
    );
    console.log(studentsGreaterThan60.toString());
    
    console.log('4---------------');
    const totalMarksPerStudent = students.map( s => {
        const subj = data.filter( d => d.name === s );
        return getTotal(subj);
        }
    );
    console.log((totalMarksPerStudent));
  

  
      return (
       <div>
         <p>1)Print the list of highest marks in each subject and name of the student : <br/> <br/>Output : {display}</p>
         <p>2)What is avarage mark scored by the class across all subjects : <br/> <br/>Output :  {getTotal(data) / data.length} </p>
         <p>3)Print total no  of students getting >60 marks across all : <br/> <br/>Output : {studentsGreaterThan60.toString()}</p>
         <p>4)What is the sum of total marks scored by the topper in the class? Print with name and sum of marks in all subjects : <br/><br/> Output :  {Math.max(...totalMarksPerStudent)}</p>
       </div>
      
      );
    }
  }
export default App;