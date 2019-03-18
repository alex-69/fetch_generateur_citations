
    const citation = document.querySelector('p');
    const BoutonGenerer = document.querySelector('button');

    BoutonGenerer.addEventListener('click', result);

    function result() {
      fetch('citations.json')
        .then(function (response) {
          if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
          }
          return response.json();
        })
        .then(function (json) {
          var x = Math.floor(Math.random() * json.citations.length);
          var y = Math.floor(Math.random() * json.citations1.length);
          var z = Math.floor(Math.random() * json.citations2.length);

          citation.innerHTML = json.citations[x].phrase + " - " + json.citations1[y].phrase + " - " + json.citations2[z].phrase;


        })
        .catch(function (error) {
          var p = document.createElement('p');
          p.appendChild(
            document.createTextNode('Error: ' + error.message)
          );
          document.body.insertBefore(p, citation);
        })
    }
