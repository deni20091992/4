    var list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if(ev.target.tagName === "LI") {
            ev.target.classList.toggle('checked');
        } else if(ev.target.tagName === "SPAN") {
            var div = ev.target.parentNode;
            div.remove();
        }
    }, false);

    var addelement = document.getElementById('addBtn');
    addelement.addEventListener( "click" , function() {
        var inputValue = document.getElementById('toDoList').value;
        var inputData = document.getElementById('adddata').value;
        var p = document.createTextNode(inputData + " | " + inputValue);
        var li = document.createElement('li');
        li.appendChild(p);
        if (inputData == ""){
            alert("Заполните дату")
        }
        else if (inputValue == ""){
            alert("Введите дело")
        }
        else {
            document.getElementById('list').appendChild(li);
        }
        document.getElementById('toDoList').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("Удалить");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    });

    var delList = document.getElementById('dellBtn');
    delList.addEventListener( "click" , function() {
        var li = document.getElementsByTagName('li');
        for (var i = 0; i < li.length; i++) {
            li[i].style.display = 'none';
        }
    });