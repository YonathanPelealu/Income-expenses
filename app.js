// # DOM Exercise

// **Background**
// Mr. James decided to make a notes about his Income and Expenses every month.

// ### Main Task
// **Make Income and Expenses Apps**

// ## Task 1 : Prepare variable 
// Prepare global variable for data
// ```javascript
    // var posts = []; //isi : object income dan outcome
    var income = []; // isi : id : number, title : string, type:string, total:number
    var expenses = []; // isi : id : number, title: string, type:string, total:number
    var title = document.getElementById("title").value;
    var type = document.getElementsByName("type").value;
    var amount = document.getElementsByName("amount").value; 
    // document.getElementById("demo").innerHTML = "Hello WorWor"

    function addData(title,type,amount) {
        if (type == "income") {
            let a = {
                title: title,
                type: type,
                amount: amount,
    }
            income.push(a)


        } else if (type == "expenses") {

            let a = {
                title: title,
                type: type,
                total: total,
            }
            expenses.push(a)
        } else {
            return "Invalid Data Type"
        }             
    }
    // addData("masak","pemasukan",50000)
    // addDataincomepemasukan",5000000)
    // addData("susu","expenses",150000)


    // console.log(expenses);
// ## Task 2 : 
// Code getData functiincomed the data from the global variable
// incomeript
    function getData(type){
            if (input == "expenses") {
                return expenses
            }
            else if (input == "income") {
                return income
              }
            return "Data tidak ditemukan";
            }
     
    // console.log(getData('expenses')); 
    // console.log(getData('income')); 


// ```

// ## Task 4 : deleteData
// User can delete post
// ```javascript
    function deleteData(type,id){
        if (type == "income") {
            pemasukan = delete pemasukan.id;
            return pemasukan
        }
        else if (type == "expenses") {
            pengeluaran = delete pengeluaran.id;
            return pemasukan
    }
}
button.addEventListener("click",function() {addData(title,type,amount)})
document.getElementById("if-empty").innerHTML = "hello people of the world, bradcasting live from this place"
// document.getElementById("amount").innerHTML = td "hello" td

// ```
// ## Task 5 : Split the files
// Developer can split the files (module.exports and require)
