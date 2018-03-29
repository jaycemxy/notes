var jQuery = function (nodeOrSelector) {
  var nodes = {};
  if (typeof nodeOrSelector === 'string') {
    nodes = document.querySelectorAl(nodeOrSelector);
  } else if (typeof nodeOrSelector instanceof Node) {
    nodes = {
      nodeOrSelector,
    };
  }
  let allDiv = document.querySelectorAll(nodes);
  return {
    addClass: function (value) {
      for (let i = 0; i < allDiv.length; i++) {
        allDiv[i].classList.add(value);
      }
    },
    setContext: function (text) {
      for (let i = 0; i < allDiv.length; i++) {
        allDiv[i].textContent = text;
      }
    },
  };
};

var $ = window.$ = jQuery;

var $div = $('div');

$div.addClass('red');
$div.setContext('hi');