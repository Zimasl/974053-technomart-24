var link = document.querySelector(".blank-write");

if (link) {

  var popup = document.querySelector(".modal-answer");
  var close = popup.querySelector(".modal-close");


  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");
  var message = popup.querySelector("[name=message]");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
  });
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !message.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Нужно заполнить все поля");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }

      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });
}

/*Модалка для активации карты*/


var mapLink = document.querySelector(".map-open");

if (mapLink) {

  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });
}

/*Модалка для активации кнопки купить*/


var buyLink = document.querySelector(".buy");

if (buyLink) {

  var popupCart = document.querySelector(".modal-basket");

  var close = popupCart.querySelector(".modal-close");

  buyLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCart.classList.add("modal-show");
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCart.classList.remove("modal-show");
  });
}
