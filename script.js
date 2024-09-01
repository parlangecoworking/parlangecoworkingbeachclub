import CustomSelect from 'vanilla-js-dropdown';
var optgroupSelect = new CustomSelect({
  elem: 'select-optgroup'
});

var simpleSelect = new CustomSelect({
  elem: 'select'
});

function setOption(selectElement, value) {
  var options = selectElement.options;
  for (var i = 0; i < options.length; i++) {
      if (options[i].value == value) {
          selectElement.selectedIndex = i;
          return true;
      }
  }
  return false;
}