(function () {
  var counter = 0;

  var createCardContact = function () {

    $("#formula").submit(createContact);
    $("#number").keyup(validarContacto);
  };

  var createContact = function (e) {
    e.preventDefault();
    var $publicacion = $("#tarjeta1");
    var $number = $("#number");
    var $surname = $("#apellido");
    var $phone = $("#celular");
    var $email = $("#email");
    var $buttonContact = $("#boton-agregar-contacto");
    var $numberTitle = $("#number-visual");
    var $acordion = $("#accordion");
    var contactNumber = $number.val();
    var apellidoContacto = $surname.val();
    var contactPhone = $phone.val();
    var contactEmail = $email.val();


    var $equis = $("<span>" + "&times;" + "</span>", {
      "aria-hidden": "true"
    });
    var $remove = $('<button type="button"/>', {
      "class": "close",
      "aria-label": "Close"
    });
    var $card = $("<div />", {
      "class": "panel panel-group"
    });
    var $headerCard = $("<div />", {
      "class": "panel-heading",
      "role": "tab"
    });
    var $titleCard = $("<h4 />", {
      "class": "panel-title"
    });
    var $enlaveCard = $("<a />", {
      "role": "button"
    });
    var $bodyCard = $("<div />");
    var $dataCard = $("<div />", {
      "class": "panel-body"
    });
    var $enlaveData = $("<a />");

    var id = "marcador-" + counter;
    var idbodyCard = "collapse-" + counter;


    $remove.id = id;
    $numberTitle.attr("for", id);
    $bodyCard.id = "tituloTarjeta" + counter;
    $enlaveData.id = "enlaceDatos" + counter;
    //$enlaceTitulo.attr("display","none");
    $enlaveCard.attr("aria-controls", idbodyCard);
    $remove.click(deleteContact);
    $enlaveCard.click(collapse);

    $enlaveData.append(contactEmail);
    $dataCard.append("Mobile: " + contactPhone + ", " + "Email: " + contactEmail);
    $bodyCard.append($dataCard);
    $enlaveCard.append(contactNumber + " " + apellidoContacto);
    $titleCard.append($enlaveCard);
    $headerCard.append($titleCard);
    $card.append($headerCard, $bodyCard);
    $acordion.append($card);
    $remove.append($equis);
    $card.append($remove);


    $number.val("");
    $surname.val("");
    $phone.val("");
    $email.val("");
    $buttonContact.attr("disabled", true);

    counter++;
  };

  var deleteContact = function () {
    $(this).parent().remove();
  };

  var validarContacto = function () {
    var $addButton = $("#boton-agregar-contacto");
    if ($(this).val().trim().length > 0) {
      $addButton.removeAttr("disabled");
    } else {
      $addButton.attr("disabled", true);
    }
  };

  // var tituloColapsar = $("#'enlaceDatos' + counter");
  // console.log(tituloColapsar);
  var collapse = function () {
    var cardHide = $(this).parent().parent().next("div");

    console.log(cardHide);
    if (cardHide.display == "block") {
      $(this).parent().parent().next("div").addClass("ocultar");
    } else {
      $(this).parent().parent().next("div").addClass("mostrar");
      $(this).parent().parent().next("div").css("background-color", "#8b33a1");
      $(this).parent().parent().next("div").css("color", "#ebd8dd");
    }
  };



  $(document).ready(createCardContact);
})();
