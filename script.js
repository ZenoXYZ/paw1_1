const ex1_button = document.getElementById("ex1_button");
const ex1_content = document.getElementById("ex1_content");

const ex2_text = document.getElementById("ex2_text");
const ex2_content = document.getElementById("ex2_content");

function z1_1()
{
  let content = [];

  for (let i = 0; i < 10; i++)
  {
    content.push(i);
  };

  ex1_content.textContent = content.join(",");
}

function z1_2(e)
{
  const content = e.target.value;

  let isValid = true;
  
  ex2_content.textContent = "";

  if(content.length != 9)
  {
    ex2_content.innerHTML += "Długość numeru musi być równa 9<br>";
    isValid = false;
  }

  if(/[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]/g.test(content))
  {
    ex2_content.innerHTML += "Numer nie może zawierać liter<br>";
    isValid = false;
  }

  if(/[^0-9]/.test(content))
  {
    ex2_content.innerHTML += "Numer nie może zawierać znaków specjalnych<br>";
    isValid = false;
  }

  if(isValid)
  {
    ex2_content.innerHTML = "Numer telefonu jest poprawny";
  }
}

ex1_button.addEventListener('click', z1_1);

ex2_text.addEventListener("input", z1_2);