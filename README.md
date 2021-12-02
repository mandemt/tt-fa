### Introductie
Met deze applicatie kun je bar charts maken, en een kleurenoverzicht zien van een specifieke schilder die een of meerdere schilderijen in het archief van het Rijksmseum heeft hangen. Het is een React.js toepassing gemaakt door mandemt.
Een demo van deze applicatie is te vinden op: https://mandemt-application.herokuapp.com/

Een react app is een collectie van honderden packages, met nog extra packages die zijn toegevoegd door mij zoals D3.
Verder maakt een functie gebruik van de Rijksmuseum API.
### Installeren

clone deze repository met github Desktop of via de terminal in de folder waar je de repository wilt hebben.:

```terminal
git clone https://github.com/mandemt/tt-fa.git
```

Vervolgens zorg je dat je de server opzet met de juiste packages. Dit doe je met het command
```terminal
npm init
```
Hiermee worden alle packages toegevoegd en kun je de development server starten.
De server is dan bereikbaar op het adres `localhost:3000` en daar kun je alvast testen hoe de tools werken.




## Functies 
* Filteren op data voor de bar chart
<p align="center"><img src="https://github.com/mandemt/tt-fd/blob/main/images/filter.png" width="25%"></img></p>

Kies in het dropdown menu een vraag uit de dataset. De gegevens zullen dan vanzelf gerenderd worden als bar chart.
Er zijn standaard vragen als value in het HTML bestand gezet. 

```html
    <select name="filter">
      <option value="zin" selected>Hoeveel zin heb je in de techtrack?</option>
      <option value="verdieping">Op welke verdieping studeer je het liefste?</option>
      <option value="zuivelproduct">Wat is je favoriete zuivelproduct?</option>
      <option value="oogkleur">Wat is je oogkleur?</option>
      <option value="dier">Wat is je favoriete huisdier?</option>
    </select>

```
Als je `option value=""` veranderd naar een value die slaat op een variabele in de dataset, zal die betreffende data vanaf dan geselecteerd worden. Je kunt het proberen door bijvoorbeeld zelf een variabele en waarde aan te maken in de dataset `tt-dataset.json` en deze als value in te stellen in HTML.

* Filteren op frequentie

Je kunt aangeven met de slider welke data je wilt zien van een frequentie 0 - 10. Deze zorgt ervoor dat de bar chart zich aanpast op hoe vaak een variabele voorkomt in de dataset. Als je hem bijvoorbeeld op 10 zet. Krijg je alleen variabelen te zien die meer dan 10 keer zijn voorgekomen.
<p align="center"><img src="https://github.com/mandemt/tt-fd/blob/main/images/tien.png" width="50%"></img></p>

* API data gebruiken om een visualisatie te krijgen. Deze functie laat je een schilder uit de Rijksmuseum API data intypen, waarna je de vijf meest gebruikte verfkleuren door de schilder te zien krijgt. Een mooi en snel overzicht dat interessante resultaten oplevert.

Deze data komt dus van het rijksmuseum, en gebruikt de data facets, dit zijn alle kleuren die een artiest gebruikt, en hoe vaak ze voorkomen in de schilderijen.

Je vindt deze door in de menubalk op 'API data' te kliken.
## Voor meer informatie

* documentatie & bronnen:
* https://d3js.org/
* https://github.com/mandemt/tt-fd/wiki/
* Tech Track uitleg en opdracht: https://github.com/cmda-tt
* Hogeschool van amsterdam
* RijksData: https://data.rijksmuseum.nl/
* Heroku https://heroku.com/
* 

mandemt

