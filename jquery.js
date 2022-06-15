function applyHandlers(el) {
  const actions = ["click", "blur", "change", "contextmenu", "error"];

  el.on = function(action, callback) {
    el.addEventListener(action, callback);
  }

  for (const action of actions) {
    el[action] = function(callback) {
      el.on(action, callback);
    }
  }

  return el;
}

function applyCSS(el) {
  // Classes
  el.addClass = function(className) {
    if (el.classList)
      return el.classList.add(className);

    el.className += " " + className;
  }

  el.removeClass = function(className) {
    if (el.classList)
      return el.classList.remove(className);

    el.className = el.className.replace(className, "");
  }

  el.hasClass = function(className) {
    if (el.classList)
      return el.classList.contains(className);

    return el.className.search(className) > -1;
  }

  el.toggleClass = function(className) {
    if (el.hasClass(className) === true)
      return el.removeClass(className);

    return el.addClass(className);
  }

  // CSS
  el.css = function(property, value) {
    el.style[property] = value;
  }
}

function applyCore(el) {
  el.html = function(data) {
    el.innerHTML = data;
  }

  el.ready = function(callback) {
    el.addEventListener("DOMContentLoaded", callback);
  }
}

const $ = function(query) {
  // Grabbing element by query
  const el = typeof query === "string" ? document.querySelector(query) : query;

  // Event Handlers
  applyHandlers(el);

  // CSS Handlers
  applyCSS(el);

  // HTML Manipulations
  applyCore(el);

  return el;
}

// Ready feature
$.ready = function(callback) {
  document.addEventListener("DOMContentLoaded", callback);
}
