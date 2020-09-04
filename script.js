// # DOM Exercise

// **Background**
// Mr. James decided to make a notes about his Income and Expenses every month.

// ### Main Task
// **Make Income and Expenses Apps**

// ## Task 1 : Prepare variable 
// Prepare global variable for data
// ```javascript
    // var posts = []; //isi : object income dan outcome
    var pemasukan = []; // isi : id : number, title : string, type:string, total:number
    var pengeluaran = []; // isi : id : number, title: string, type:string, total:number

    function addData(title,type,total) {

        if (type == "pemasukan") {
            let a = {
                title: title,
                type: type,
                total: total,
            }
            pemasukan.push(a)


        } else if (type == "pengeluaran") {

            let a = {
                title: title,
                type: type,
                total: total,
            }
            pengeluaran.push(a)
        } else {
            return "Invalid Data Type"
        }            

        
    }
    // addData("masak","pemasukan",50000)
    // addData("gaji","pemasukan",5000000)
    // addData("susu","pengeluaran",150000)


    // console.log(pengeluaran);
// ## Task 2 : getData
// Code getData function to read the data from the global variable
// ```javascript
    function getData(get){
        for (let i = 0; i < get.length; i++) {
            // console.log(pengeluaran[i]);
            if (get == "pengeluaran") {
                return pengeluaran
            }
            else if (get == "pemasukan") {
                return pemasukan
            }
            return "Data tidak ditemukan";
            }
    }
    // console.log(getData('pengeluaran')); 
    // console.log(getData('pemasukan')); 


// ```

// ## Task 4 : deleteData
// User can delete post
// ```javascript
    function deleteData(type,id){
        if (type == "pemasukan") {
            pemasukan = delete pemasukan.id;
            return pemasukan
        }
        else if (type == "pengeluaran") {
            pengeluaran = delete pengeluaran.id;
            return pemasukan
    }
}

// ```
// ## Task 5 : Split the files
// Developer can split the files (module.exports and require)
