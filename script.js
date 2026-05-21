let expression = "";

    function append(value){
        expression += value;
        document.getElementById("result").innerText = expression;
    }

    function clearAll(){
        expression = "";
        document.getElementById("result").innerText = "0";
        document.getElementById("history").innerText = "";
    }

    function del(){
        expression = expression.slice(0,-1);
        document.getElementById("result").innerText = expression || "0";
    }

    function calculate(){
            document.getElementById("history").innerText = expression;
            expression = eval(expression);
            document.getElementById("result").innerText = expression;
    }
