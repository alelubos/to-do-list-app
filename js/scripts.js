(function () {
  let input = $("input");
  input.trigger("focus");

  input.on("keydown", (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      newItem();
    }
  });

  $("#reset").on("click", resetInputValue);

  function resetInputValue() {
    input.val("");
    input.trigger("focus");
  }

  function newItem() {
    // Create new todo item
    let input = $("input");
    let inputValue = input.val();
    let li = $("<li></li>").text(inputValue);

    // Add todo to list if not empty
    if (inputValue === "") {
      return;
    } else {
      $("#list").append(li);
      resetInputValue();
      input.trigger("focus");
    }

    //Crossing out an item from the list of items:
    function crossOut() {
      li.toggleClass("strike");
    }

    li.on("dblclick", crossOut);

    //Adding the delete button "X":
    let trash = $("<trash></trash>").text("♻️");
    li.append(trash);

    trash.on("click", deleteListItem);
    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem() {
      li.addClass("delete");
    }
    // 4. Reordering the items -FUNCTION from jQuery UI?-:
    $("#list").sortable();
  }
})();
