# Star-Wars-Trivia

Check it out: https://rimante11.github.io/Star-Wars-Trivia/

![2022-03-17](https://user-images.githubusercontent.com/92310100/158796659-a37ca99b-e8d6-4890-8490-2bbe1753c5c3.png)


Inlämningsuppgift 2 - Star Wars Trivia (G/VG)

Beskrivning: Du ska med hjälp av ett API skapa en applikation där användaren kan jämföra en Star Wars-karaktär med andra karaktärer och deras egenskaper!

Använd följande API: https://swapi.dev/
API-endpoint: https://swapi.dev/api/people


Krav

VG-krav 
1 - Skapa en klass som du döper till Character med egenskaperna för name, gender, height, mass,hairColor samt pictureUrl. 
Klassen ska även innehålla metoder för att jämföra karaktärens egna egenskaper med en annan karaktär (se VG krav 3).

Användaren ska kunna välja två karaktärer (Karaktär 1 & 2) med hjälp av varsin dropdown-lista. 
Listorna ska bestå av minst åtta namn på karaktärer från Star Wars-universumet som finns i API:et 
(Observera att du ej behöver göra en fetch för att hämta namnen, utan skriv in de i din HTML).

Användaren ska sedan kunna klicka på en knapp för att hämta data om karaktärerna.

VG-krav 2 - När datat har hämtats, skapa två instanser av Character-klassen, och ge egenskaperna i klassen värden utifrån det 
hämtade datat.

OBS! API:et ger dig inga bilder, så du behöver själv lösa bilder för alla åtta karaktärer din applikation tillåter. (Har du skapat 
en Character-klass så ska du lägga till en bild-URL i egenskapen “pictureUrl” baserat på vilken karaktär som hämtats) använd t.ex Google 
för att hitta bilder för karaktärerna).

Rendera nu ut Karaktär 1 och Karaktär 2 i DOM:en - De ska visas ut med en bild samt namn.

Sedan gör du ett av följande krav:
(G) Skapa en knapp med texten “Compare characters” som i sin tur skriver ut bägge karaktärernas vikt, längd, hårfärg och kön i DOM:en. 
Det ska även framgå på något sätt (med text och/eller färg): 
Vem som är längst
Vem som väger mest

Eller:
VG-krav 3 - Skapa fyra knappar under varje karaktär - När de klickas på, ska karaktären besvara frågor om den andre karaktären. 
Varje knapp ska köra en metod som definieras i din Character-klass.
Frågorna ska besvaras i en textbox under respektive karaktär.
T.ex ska du under Karaktär 1 ha knappar där hen besvarar följande frågor om Karaktär 2:
Vad Karaktär 2:s vikt är - Skriv även ut om Karaktär 2 väger mer/mindre än hen, samt skillnaden i vikt.
Vad Karaktär 2s längd är. - Skriv även ut om Karaktär 2 är längre/kortare än hen, samt skillnaden i längd.
Karaktär 2’s hårfärg. Om det är samma som Karaktär 1, skriv ut detta också.
Karaktär 2’s kön. Om det är samma som Karaktär 1, skriv ut detta också.
Glöm ej att man ska kunna ställa samma frågor till Karaktär 2 också.

