const api_key = "g8WfBJlKo4Q9KCPMfnZ94DNkXmEYxmtb";

fetch(`https://api.apilayer.com/fixer/symbols`, {
  headers: {
    apikey: api_key,
  },
})
  .then((response) => response.json())
  .then((res) => {
    for (const key in res.symbols) {
      // const option1 = document.createElement("option");
      // option1.value = key;
      // option1.textContent = key;
      // const option2 = document.createElement("option");
      // option2.value = key;
      // option2.textContent = key;
      select1.append(new Option(key, key));
      select2.append(new Option(key, key));
    }
    select1.value = 'ILS';
    select2.value = 'USD';
  });

const convert = document.getElementById("convert");
convert.onclick = function () {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("select1").value;
  const to = document.getElementById("select2").value;
  fetch(
    `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`,
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
      h3.append(
        document.createTextNode(
          `Exchange Rates: ${res.info.rate} Result: ${res.result} ${to}`
        )
      );
      if (div1.firstChild) {
        div1.replaceChild(h3, div1.firstChild);
      } else {
        div1.appendChild(h3);
      }
    })
    .catch((e) => console.log("Error:", e));
};
