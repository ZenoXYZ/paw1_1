const ex1_button = document.getElementById("ex1_button");
const ex1_content = document.getElementById("ex1_content");

function z1_1()
{
  let content = [];

  for (let i = 0; i < 10; i++)
  {
    content.push(i);
  };

  ex1_content.textContent = content.join(",");
}

ex1_button.addEventListener('click', z1_1);