var students = [['Dương', 90], ['Hùng', 77], ['Vinh', 88], ['Thịnh', 95], ['Thắng', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (0 < avg && avg < 70){
          console.log("Grade : D");      
          } 
        else if (71 < avg < 80) {
            console.log("Grade : C"); 
                  } 
        else if (81 < avg < 90) 
             {
                console.log("Grade : B"); 
        } else if ( 91 <avg < 100) {
                document.write("Grade : A"); 
}