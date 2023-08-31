const api_key = "g8WfBJlKo4Q9KCPMfnZ94DNkXmEYxmtb";
const convert = document.getElementById("convert");
convert.onclick = function () {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("select1").value;
  const to = document.getElementById("select2").value;
  console.log(`${amount} ${from} ${to}`);
  fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`,
    {
      headers: {
        apikey: api_key,
      },
    }
  )
    .then((response) => response.json())
    .then((res) => {
      const div1 = document.getElementById("div1");
      const h3 = document.createElement("h3");
      h3.append(document.createTextNode(`Rate: ${res.info.rate} Result: ${res.result} ${to}`));
      if (div1.firstChild) {
        div1.replaceChild(h3, div1.firstChild);
      } else {
        div1.appendChild(h3);
      }
    });
};