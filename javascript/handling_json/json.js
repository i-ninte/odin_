const library=[ 
	{
title: 'this is the title',
	author: 'Arthur',
	status:{
	own: true,
		reading: false,
		read: false,
	}
	
}
					];

let x;

x = library.status.reading= true;

const str= JSON.stringify(library);
console.log(str);
