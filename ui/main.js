console.log('Loaded!');

var button = document.getElementById('counter');
button.onclick = function() {
    
    //Make a request object from the counter endpoint
    
    //Capture the response and store it in a variable
    
    //Render the variable in the correct span
    counter = counter + 1;
    document.getElementById('count').innerHTML = counter.toString();
    
    
    
};