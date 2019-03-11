function handleCheckItem(){
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    const listItem = $(this).closest("li");
    const shoppingItem = $(listItem).find('.shopping-item');
    if(shoppingItem.hasClass("shopping-item__checked")){
      $(shoppingItem).removeClass("shopping-item__checked");  
    }else{
      $(shoppingItem).addClass("shopping-item__checked");
    }
  });
}

function handleAddItem(){
  function newItem(itemName){
    return `
      <li>
        <span class="shopping-item">${itemName}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    `
  }

  $('#js-shopping-list-form').on('click', 'button', function(event){
    event.preventDefault();
    const itemEntry = $('#shopping-list-entry').val();
    if(itemEntry){
      $('.shopping-list').append(newItem(itemEntry));
    }
    $('#shopping-list-entry').val('');
  })
}

function handleRemoveItem(){
  $('.shopping-list').on('click', '.shopping-item-delete', function(event){
    const listItem = $(this).closest("li");
    listItem.remove();
  });
}

$(handleCheckItem);
$(handleAddItem);
$(handleRemoveItem);