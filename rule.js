/*
	NOTE: It is recommended to play around with the ATTENTION parts to see the difference!
*/

function example_one()
{
	var input = document.getElementById('inputValue_one').value;
	var x = 1; 
	var y = 2;
	
	
	//function outputs the User given input, in browser
	function Show(text)
	{
		var result = document.getElementById('result_one');

		result.innerHTML = "Your input is " + text;
	}
	
	
	
	//------ATTENTION: Parse error, if function is put inside parenthesis------//
	x = y 
	Show(input);
	
}


//Activates examples
function Keywords(RETURN, THROW, BREAK, CONTINUE)
{
	if(RETURN)
	{	
		var result 		= document.getElementById('result_two');
		var user_input	= document.getElementById('inputValue_two').value;
		
		result.innerHTML = example_two(user_input);
		
	}
	else if(THROW)
	{
		
		example_three();
		
	}
	else if(BREAK)
	{
		
		example_four();
		
	}
	else if(CONTINUE)
	{
		
		example_five();
		
	}
}


//RETURN
function example_two(text)
{
	//------ATTENTION: No parse error, but doesn`t return "text"------//
	return
	text;
}



//THROW
function example_three()
{
	var result = document.getElementById('result_three');
		
	try
	{
		//Always true, so error is always thrown
		if(true) 
		{
			//------ATTENTION: Parse error, if there is a newline after throw------//
			throw "Error-Message"

		}
		
	}
	catch(error)
	{
		//Outputs error
		result.innerHTML =  error;
	}
		
}



//BREAK
function example_four()
{
	//Deleting old content 
	var result = document.getElementById('result_four');
	result.innerHTML = "";
	
	//Preparing <li></li>
	var tag = document.createElement("LI");
	
	//This is how a label is defined. 
	firstLabel: 
	
		for(var i = 0; i < 4; i++)
		{
			//Appending "i" values as text into browser
			var node = document.createTextNode(i + ", ");
			tag.appendChild(node);
			result.appendChild(tag);
			
			
			if(i === 1)
			{
				//Another label
				secondLabel:
				
					for(var j  = 0; j < 4; j++)
					{
						//Appending a message into browser
						node = document.createTextNode("-----Trying to break first label------, ");
						tag.appendChild(node);
						result.appendChild(tag);
						
						//------ATTENTION: No parse error, but does break second Label not first------//
						break 
						firstLabel;
					}
				
			}
			
		}	
		
}



//CONTINUE
function example_five()
{
	//Deleting old content 
	var result = document.getElementById('result_five');
	result.innerHTML = "";
	
	//Preparing <li></li>
	var tag = document.createElement("LI");
	
	//This is how a label is defined. 
	firstLabel: 	
					
		for(var i = 0; i < 4; i++)
		{
			//Appending "i" values as text into browser			
			var node = document.createTextNode(i + ", ");
			tag.appendChild(node);
			result.appendChild(tag);
			
			
			//Another label
			secondLabel:
							
				for(var j  = 0; j < 2; j++)
				{				
					
					//Appending "j" values as text into browser
					node = document.createTextNode("j=" + j + ", ");
					tag.appendChild(node);
					result.appendChild(tag);							
					
					//------ATTENTION: No parse error, but does continue second Label not first------//	
					continue 
					firstLabel;

				}
				
		}	
		
		
}



