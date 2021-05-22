/** Create variables to store the score, number of lives, and dog and bone coordinates**/
var score=0 , lives=3, dogX=6, dogY=10, boneX=8, boneY=0;

/** define the functions to set any element's coordinates**/
        function setLeft(id,x){document.getElementById(id).style.left=x+"px";}
        function setTop(id,y){document.getElementById(id).style.top=y+"px";}

/** define a function that returns a random number between two values**/        
        function randomNumber(low,high){return(Math.floor(low+Math.random()*(1+high-low)));}        

/** The timer will run a function called moveBone every 200 milliseconds - 5 times a second**/  
        var gameTimer=window.setInterval(moveBone,200);

/** Run a function called handleKeys, whenever a key is pressed on the keyboard**/        
        document.onkeydown=handleKeys;

/** Define a function called handleKeys. Information about the key press event will be put into the variable -and/or parameter- called e**/  
        function handleKeys(e){

/** Make dogX go down by 1 -dogX-- means subtract 1 from the value in dogX-, if the code for the left arrow key has been sent**/ 
            if(e.keyCode==37){dogX--;}

/** Make dogX go up by 1 -dogX++ means add to the value in dogX-, if the code for the right arrow key has been passed to the function**/ 
            if(e.keyCode==39){dogX++;}    
            
/** Set the new position for the dog after the left or right key is pushed. **/ 
            setLeft("dog",dogX*50);
            setTop("dog",dogY*50);                 
        }

/** Define the moveBone function - this moves the bone down the page**/  
        function moveBone(){

/** Make the boneY variable go up by one -this can also be typed as boneY++. **/             
            boneY=boneY+=1;

/** Set the new position for the bone once the game starts, boneX only changes if it has been caught or missed. **/ 
            setLeft("bone",boneX*50);
            setTop("bone",boneY*50);  
            
/** Run the missedBone function, if the bone has been missed and has fallen below the dog **/
            if(boneY>dogY+5){missedBone();}      

/** Run the caughtBone function, if the bone has been caught by the dog and they both have the same x and y coordinates **/
            if((dogX==boneX) && (dogY==boneY)){caughtBone();}   
        }    
/** Define the missedBone function - this is what runs the x and y do not meet - when you missed bone - **/
        function missedBone(){

/** Move the bone to the top **/
            boneY=0;   
            
/** Position it a random amount in from the left of the screen **/
            boneX=randomNumber(2,16); 
            
/** Lose a life after you miss the bone **/
            lives--;
            
/** Display how many lives are left **/ 
            document.getElementById("livesTB").innerText="Lives: "+lives;

/** Run the gameOver function, if there are no lives left **/
            if(lives==0){gameOver();}            
        } 
        
/** Define the caughtBone function - this is what runs the x and y do meet - when you catch the bone - **/
        function caughtBone(){

/** Move the bone to the top **/
            boneY=0;   
            
/** Position it a random amount in from the left of the screen **/
            boneX=randomNumber(2,16); 
            
/** Increases the score each time you catch the bone **/
            score++;
            
/** Display the score **/ 
            document.getElementById("scoreTB").innerText="Score: "+score;        
        }

/** Define the gameOver function - this is what runs there are noe lives left - when you run out of lives- **/
        function gameOver(){

/** Show a message telling the player the game is over and show their score **/ 
            alert("Game Over! You scored: "+score);

/** Reload the page and make the game start again when ok button is pressed**/
            location.reload();             
        }