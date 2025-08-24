<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> 
$(function () {
    var newsObject = {
        'op': 'LoadItems',
        'listUrl': '/path/to/your/news', // تعديل المسار
        'viewName': 'Home'
    };
    LoadData(newsObject, BindNews);
});

var BindNews = function BindNews(data, listName) {
    var html_content = '';
    if (data != undefined && data.length > 0) {
        $.each(data, function (key, item) {
            var url = listName + "/" + item.FileLeafRef; // تعديل المسار
            html_content += `<div class="news-item">
                                <a href="${url}" title="${item.Title}">
                                    <h3>${item.Title}</h3>
                                    <p>${item.Comments}</p>
                                </a>
                            </div>`;
        });
        $('#newsContainer').html(html_content); // تأكد من وجود عنصر بهذا المعرف في HTML
    }
}
