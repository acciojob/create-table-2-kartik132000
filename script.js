function createTable() {
    //Write your code here
	let  = window.prompt("Input number of rows");
	if( === null || .trim() === '' || isNaN(rn) || Number (rn) <=0 ||) return;

	let rn = window.prompt("Input number of rows");
	if(cn === null || cn.trim() === '' || isNaN(cn) || Number (cn) <=0 ||) return;

	rn= Number(rn);
	cn= Number(cn);

	let table = document.getElementById("myTable");
	table.innerHTML = "";
	for(let i=0; i < rn; i++){
		let row = table.insertRow();
		for(let j =0; j < cn; j++){
		let cell = row.insertcell();
			cell.textContent = `Row-${i} column-${j}`;
       }
	}
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("input[type='button']").addEventListener("click", createTable);
});

}
