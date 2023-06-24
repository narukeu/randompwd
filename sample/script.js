// 定义一个函数，用于生成随机字符串
function generateRandomString(length, upperCase, digits, symbols, estring) {
  // 定义一个字符串，包含所有可能的字符
  let chars = `abcdefghijklmnopqrstuvwxyz${
    upperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : ""
  }${digits ? "0123456789" : ""}${symbols ? "~!@#$%^&*()" : ""}${estring}`;

  // 定义一个空字符串，用于存放生成的随机字符串
  let result = "";
  // 循环length次，每次从chars中随机选取一个字符，拼接到result中
  for (var i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * chars.length);
    result += chars.charAt(index);
  }
  // 返回生成的随机字符串
  return result;
}

// 定义一个函数，用于获取用户的输入和选择，并调用generateRandomString函数
function generate() {
  // 获取输入框的元素对象
  let input = document.getElementById("length");
  // 获取输入框的值，转换为整数
  let length = parseInt(input.value);

  //获取额外字符串
  let estring = document.getElementById("estring").value;

  // 获取多选框的元素对象
  let checkboxes = document.getElementsByName("options");

  // 定义两个布尔变量，用于记录用户是否选择了生成大写字母和数字
  let upperCase = false;
  let digits = false;
  let symbols = false;
  // 遍历多选框，检查用户的选择
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      if (checkboxes[i].value == "upperCase") {
        upperCase = true;
      }
      if (checkboxes[i].value == "digits") {
        digits = true;
      }
      if (checkboxes[i].value == "symbols") {
        digits = true;
      }
    }
  }
  // 调用generateRandomString函数，传入用户的输入和选择，得到随机字符串
  var randomString = generateRandomString(
    length,
    upperCase,
    digits,
    symbols,
    estring
  );
  // 获取显示结果的元素对象
  const output = document.getElementById("output");
  // 把随机字符串显示在网页上
  output.innerHTML = randomString;
}
