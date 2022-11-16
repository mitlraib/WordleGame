var r1c1 =  document.getElementById("r1c2")
var r1c2 =  document.getElementById("r1c2")
var r1c3 =  document.getElementById("r1c3")
var r1c4 =  document.getElementById("r1c4")
var r1c5 =  document.getElementById("r1c5")
var r2c1 =  document.getElementById("r2c1")
var r2c2 =  document.getElementById("r2c2")
var r2c3 =  document.getElementById("r2c3")
var r2c4 =  document.getElementById("r2c4")
var r2c5 =  document.getElementById("r2c5")
var r3c1 =  document.getElementById("r3c1")
var r3c2 =  document.getElementById("r3c2")
var r3c3 =  document.getElementById("r3c3")
var r3c4 =  document.getElementById("r3c4")
var r3c5 =  document.getElementById("r3c5")
var r4c1 =  document.getElementById("r4c1")
var r4c2 =  document.getElementById("r4c2")
var r4c3 =  document.getElementById("r4c3")
var r4c4 =  document.getElementById("r4c4")
var r4c5 =  document.getElementById("r4c5")
var r5c1 =  document.getElementById("r5c1")
var r5c2 =  document.getElementById("r5c2")
var r5c3 =  document.getElementById("r5c3")
var r5c4 =  document.getElementById("r5c4")
var r5c5 =  document.getElementById("r5c5")
var r6c1 =  document.getElementById("r6c1")
var r6c2 =  document.getElementById("r6c2")
var r6c3 =  document.getElementById("r6c3")
var r6c4 =  document.getElementById("r6c4")
var r6c5 =  document.getElementById("r6c5")

   
function locationOpen ( ){
    var isTaken = false
    //עבור על כל הטבלה קוביה - קוביה
    //     // לפני ה if לשים שם קוביה
    //     if (!isTaken){
    //         isTaken = true;
    //     }
        // הראשון שפנוי שים בו

    return isTaken
}
// פונקציה של אשר ומחק

function chooseRandomWord (){
    var chosenWord = " ";
    // בוחרת מילה מתוך מאגר מילים
    // chosenWord = מילה חדשה

    return chosenWord;
}

function coloring(){

}

function isExistWord(){
// איזשהיא לולאה?
    if (r1c5.locationOpen()){
        if (r2c5.locationOpen()){
            if (r3c5.locationOpen()){
                if (r4c5.locationOpen()){
                    if (r5c5.locationOpen()){
                        if (r6c5.locationOpen()){
                            //בדוק האם המילה השישית מופיעה במאגר
                            endGame();

                        }
                        else {
                            //בדוק האם המילה החמישית מופיעה במאגר
                        }
                    }
                    else {
                        //בדוק האם המילה הרביעית מופיעה במאגר
                    }
                }
                else {
                    //בדוק האם המילה השלישית מופיעה במאגר
                }
            }
            else {
                //בדוק האם המילה השניה מופיעה במאגר
            }
            }
        else {
            //בדוק האם המילה הראשונה מופיעה במאגר
        }
}
}

function endGame( ) {
    // if (chooseRandomWord())== מילה{
    //
    // }
}