var celebrationNames = [
        'Ngô Thị Ngọc Ánh',
        'Ngô Thị Mai',
        'Giang Thị Tình',
        'Giang Thị Hạnh',
        'Trần Thị Hương Ly',
        'Đặng Danh Quảng'
    ];
    var showmore = document.getElementById('show-more');
    showmore.onclick = function(){
        this.classList.add('hidden-tag');
        var listName = document.getElementById('list-Name');
        for ( var i=0;i< celebrationNames.length;i++){
            listName.innerHTML += '<li>' + celebrationNames[i]+ '</li>';
    }
}