function add()
         {
           var num1, num2, sum;
           num1 = parseInt(document.getElementById("firstnumber").value);
           num2 = parseInt(document.getElementById("secondnumber").value);
           sum = num1 + num2;
           document.getElementById("answer").value = sum;
         }