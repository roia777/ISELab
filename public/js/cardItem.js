

$('#catalogButton').on('click', function () {
    showCatalog();
})

function showCatalog() {
    $('#currentContent').html($('#catalog-div').html())  ;

    $.ajax({
        url:'/items/get',
        dataType:"json",
        success: function (data) {
            data.forEach( (item) => {
                let card = `
                           <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
    <a href="#"><img class="card-img-top" src="${item.imageUrl}" alt=""></a>
    <div class="card-body">
    <h4 class="card-title">
    <a href="#"> ${item.head1} </a>
</h4>
<h5> ${item.price} </h5>
<p class="card-text"> ${item.description} </p>
</div>
<div class="card-footer">
    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
</div>
</div>
</div>
                `
                $('#catalog-items').html($('#catalog-items').html() + card)
            })
        }
    });
}