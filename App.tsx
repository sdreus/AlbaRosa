import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="container">

      {/* --- Sidebar --- */}
      <div className="sidebar">
        <img src="/logo.jpg" alt="Logo" style={{ width: "300px", margin: "0 auto", display: "block", marginBottom: "20px" }} />
        <a href="#home">Home</a>
        <a href="#Chi sono">Chi sono</a>
        <a href="#corsi">Corsi e Percorsi</a>
        <a href="#consulenze">Consulenze</a>
        <a href="#Libri">Libri</a>
        <a href="#contatti">Contatti</a>
      </div>

      {/* --- Main Content --- */}
      <div className="main-content">

        {/* Home */}
        <section id="home">
          <h2>Home</h2>
          <p>
            Benvenuti nel nostro sito, uno spazio per scoprire percorsi, consulenze e risorse per sviluppare la consapevolezza e connettersi con i meravigliosi simboli di astrologia e tarocchi e con gli archetipi mitologici, che racchiudono la bellezza e il mistero delle nostre storie uniche e speciali! Ad AlbaRosa abbiamo a cuore l'essenza del nostro andare e del nostro divenire nel mondo, perché un cammino comune é sempre una preziosa occasione di arricchimento e crescita personale. Qui si possono trovare nuovi punti e spunti di osservazione della vita e di tutto ciò che ci circonda, comprese le memorie più  ancestrali, che rechiamo sempre con noi come dote ricevuta da chi ci ha preceduto, e che perciò é importante onorare e rielaborare per lasciare a chi ci seguirà un bagaglio denso di strumenti funzionali alla vita e lieve come i sorrisi che sgorgano dal cuore dei legami più forti e autentici di famiglia, amore e amicizia. Se sei interessato/a ad esplorare tutte le tue potenzialità o a saperne di più, contattaci e sarà un piacere presentarti i nostri servizi e progetti!
          </p>

        </section>

        {/* Tema Natale */}
        <section id="consulenze">
          <h2>Cos'é un Tema Natale? </h2>
          <img src="/medaglione.jpg" alt="Tema Natale" />
          <p>
            Scopri l’arte di leggere il tuo tema natale, con consulenze mirate per interpretare i pianeti, le case, gli aspetti, i transiti, le progressioni o le sinastrie di coppia. Questo percorso ti guiderà attraverso un viaggio affascinante nell’astrologia, con strumenti pratici per comprendere meglio la tua vita, i tuoi punti di forza e le tue sfide o i tuoi blocchi. Ogni sessione è pensata per essere illuminante, chiara e adatta a chi vuole approfondire il proprio cammino personale e spirituale. Il Tema Natale è il nostro ritratto fisico, psichico e comportamentale: un vero e proprio "mandala" (che significa "centro"), spiegato alla luce delle energie zodiacali del segno, dell'ascendente e di tutti gli altri elementi che lo compongono. Come il nome stesso ci dice, è un "tema", cioè il racconto della nostra storia dal momento in cui nasciamo, che rappresenta la mappa per arrivare al nostro nucleo più profondo - il "centro" - grazie alla descrizione di talenti, potenzialita ed eventuali criticità che contiene e "fotografa", così da poter diventare un utile strumento di autocomprensione e di integrazione dei vari aspetti della nostra personalità, per armonizzare e valorizzare il rapporto con noi stessi e con gli altri e sviluppare esperienze di vita sempre più funzionali e appaganti!
          </p>
        </section>

        {/* Tarocchi */}
        <section id="consulenze">
          <h2>La Rotta dei Tarocchi</h2>
          <img src="/rottatarocchi.jpg" alt="Tarocchi" />
          <p>
            Esplora l’universo dei tarocchi per ottenere risposte, consigli e indicazioni sorprendenti! Le letture sono pensate per accompagnarti nel processo decisionale, scoprire dinamiche nascoste e connetterti con la tua intuizione. Le carte parlano attraverso simboli e archetipi, rivelando sfumature della tua esistenza che spesso restano invisibili nella quotidianità. Di fatto, la nostra psiche, non essendo soggetta alle leggi e agli effetti dello spazio-tempo lineare, obbedisce al principio della sincronicità, che collega fra loro emozioni ed eventi in maniera analogica, molto prima che la nostra mente cominci tutti i vari processi di analisi e razionalizzazione di sentimenti, reazioni, intenzioni e accadimenti ordinari o apparentemente fortuiti (in quanto nulla avviene mai per caso!). Perciò, le immagini dei Tarocchi offrono un forte stimolo evocativo rispetto a ciò che ci "abita" o ci succede. Figure, colori, numeri e rappresentazioni degli Arcani Maggiori e Minori sono, da secoli, la sintesi dell'incontro tra mondo esterno e realtà interiore e, con la loro potenza sapienziale, possono rivelarsi una guida efficace sul cammino della vita, nonché uno strumento immediato e sempre attuale per "dialogare" con i vari eventi e momenti della nostra esperienza umana e con l'intimità del nostro essere. 
          </p>
        </section>

        {/* L'opificio delle stelle */}
        <section id="corsi">
          <h2>L'opificio delle stelle</h2>
          <img src="/stelle.jpg" alt="L'opificio delle stelle" />
          <p>
            Corsi base e avanzati di astrologia e tarocchi, counseling astro-psico-genealogico ad personam e seminari esperienziali per Anime Abili!
          </p>
        </section>

        {/* Club delle Mitiche Stelle */}
        <section>
          <h2>Club delle Mitiche Stelle</h2>
          <img src="/clubstelle.jpg" alt="Club delle Mitiche Stelle" />
          <p>
            Unisciti al Club delle Mitiche Stelle, un luogo dedicato a chi ama l’astrologia e la magia dei simboli. Qui puoi partecipare a workshop interattivi, iniziative in presenza e online e momenti di condivisione, approfondendo le tue conoscenze in un contesto amichevole e stimolante!
          </p>
        </section>

        {/* Gattino Rosa */}
        <section>
          <h2>Tema natale per bimbi e altri cuccioli di casa</h2>
          <img src="/gattorosa.jpg" alt="Gattino Rosa" />
          <p>
            Percorso speciale per bambini e famiglie, dove simboli e immagini aiutano a sviluppare l’intuito, la creatività e la comprensione delle emozioni. Le attività sono pensate per stimolare curiosità e immaginazione, in modo divertente e formativo. Come diceva Shakespeare, la nostra natura ha sempre bisogno di abbeverarsi al "latte dell'umana tenerezza"! E cosa c'é di più dolce dei bimbi o degli altri cuccioli di casa? Curiosare fra le loro peculiarità caratteriali può essere un'opportunità di scoperte interessanti e anche un'idea regalo originale per ogni ricorrenza! Esploriamo insieme il tema natale e il temperamento dei piccoli di casa con gioia e attenzione: uno spazio ideale per coinvolgere grandi e piccini con incontri e lavori di gruppo o per analizzare il grafico di nascita di bambini e ragazzi - i futuri campioni della vita!- o dei nostri pets, amici pennuti o a quattro zampe che siano: anche loro, come i figli, i fratellini e i nipotini, arrivano nelle nostre vite per dimostrarci che l'amore é la lingua universale che accomuna tutti i cuori che battono, senza confini o distinzioni e al di là delle parole, perché cure e carezze parlano senza bisogno di traduzioni o maschere, giacché non possono mentire!
          </p>
        </section>

        {/* Anime di Stelle */}
        <section id="corsi">
          <h2>Anime di Stelle e Mito</h2>
          <img src="/animedistelle.jpg" alt="Anime di Stelle" />
          <p>
            Un laboratorio di esperienze, storie e percorsi guidati per chi vuole connettersi con la propria saggezza interiore. Attraverso letture e attività individuali e collettive e riflessioni sui simboli, il percorso “Anime di Stelle e Mito” accompagna ogni partecipante in un cammino di scoperta e consapevolezza, poiché il mito non é mai muto! Infatti, ognuno di noi é portatore di un mito familiare e di uno personale. Approfondire le origini della nostra cultura e di costumi e tradizioni che si tramandano di generazione in generazione significa acquisire nuove chiavi di lettura e ascolto del linguaggio mentale ed emozionale che utilizziamo e scoprirne anche gli echi più lontani, affinché diventino un canto che accompagna la nostra Anima: un'utile "bussola" per orientare scelte, decisioni e comportamenti. E tu, quali miti preferisci? Scopriamolo insieme!
          </p>
        </section>

        {/* La buona stella */}
        <section>
          <h2>La buona stella</h2>
          <img src="/stella.jpg" alt="La buona stella" />
          <p>
            La decodifica dei segni come agenda quotidiana! Il segno zodiacale é un marchio di fabbrica. Conoscerne tutti gli aspetti aiuta ad affrontare più prontamente le molteplici sfumature e i vari contesti della realtà giornaliera e ad apprezzare anche le interazioni più difficili o contraddittorie con gli altri, per migliorare noi stessi e la vita in ogni frangente: perché siamo tutti nati sotto una Buona Stella!
          </p>
        </section>

        {/* Libri */}
   
        <section id="Libri">
          <h2>Libri: L'orto Simbolico</h2>
          <img src="/orto.jpg" alt="Libro Orto Simbolico" />
          <p>
            Scopri il libro “L'Orto Simbolico”, ricco di riflessioni, simbologie linguistiche e suggestioni astrologiche. Ogni pagina è pensata per stimolare consapevolezza e proporre un approccio conoscitivo di tipo umanistico - evolutivo, fra righe che collegano musica, astri e letteratura in modo profondo e originale, per leggere divertendosi e meditando su se stessi!
          </p>
          <a href="https://amzn.eu/d/0aHuWBD" className="amazon-button" target="_blank" rel="noopener noreferrer">
            Acquista su Amazon
          </a>
        </section>

        {/* Video YouTube */}
        <section>
          <h2>Video</h2>
          <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/CMnQucG5Rq8?rel=0&modestbranding=1"
  title="Un viaggio tra gli astri con una poetessa del sud"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>
        </section>

        {/* PowerPoint embedded */}
        <section>
          <h2>Incarnare i Simboli</h2>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vQQCjE8G7_AkkWKzlC1YC4K4j5Ps6yEMEjNtcjzJf2DCyG2V1b0LhqF-abkyp9e_Dl1hX_A9EACiuLJ/embed?start=false&loop=false&delayms=3000"
            frameBorder="0"
            width="960"
            height="569"
            allowFullScreen={true}
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </section>
 
        {/* Chi sono */}   

<section id="Chi sono" className="section">
  <h2>Chi Sono</h2>
  <img 
    src="/teresalezioni.jpg" 
    alt="Foto Chi Sono" 
    className="section-image"
  />
  <p>
    Ciao! Sono Teresa Ancona, astrologa e tarologa professionista diplomata presso Eridanoschool di Lidia Fassio, e mi occupo con passione e serietà di counseling olistico per la relazione d'aiuto, per accompagnare con entusiasmo e dedizione chiunque voglia scoprire il proprio potenziale personale. Amo condividere conoscenze e strumenti pratici per l’autoconsapevolezza, in modo da individuare insieme i metodi e le risorse migliori per esplorare il mondo interiore. Ogni lettura o consulenza è pensata per offrire una guida chiara e concreta e tanti suggerimenti utili per accrescere l'autoconoscenza in modo semplice e diretto. Questo lavoro é una vocazione a cui mi dedico con amore, impegno e spirito di ricerca e scoperta! Ho alle spalle lunghi anni di esperienza in ambito artistico, educativo, turistico e linguistico, lavorando come insegnante di inglese e francese per adulti e bambini, guida e accompagnatrice turistica, dialogue - coach ed interprete e traduttrice per il cinema, l'editoria e il Cirque du Soleil (sono laureata in lingue e in scienze dei beni culturali, abilitata come guida turistica nazionale, diplomata presso la Scuola per Interpreti, con specializzazione in traduzione, e ho la qualifica di operatrice socio - culturale per i servizi di ludoteca). Anche grazie a queste precedenti carriere, e soprattutto a moltissimo studio e alla mia grande curiosità, sono entrata sempre più in contatto col mondo dei simboli e dei significati allegorici e metaforici dell'iconografia e del linguaggio, che mi hanno accompagnata per mano nell'approfondimento degli archetipi e dell'espressione dell'Anima, territorio d'elezione della sfera psicologica e mitologica. AlbaRosa é il progetto del mio cuore, specialmente perché é un omaggio alla mia mamma, che si chiamava Rosalba: fra le stelle del mio cielo, lei é sicuramente la più luminosa! Grazie a tutti per essere qui a percorrere un pezzo di strada con me!
  </p>
</section>


        {/* Contatti */}
        <section id="contatti">
          <h2>Contatti</h2>
          <p>Email: teanc1000@yahoo.com</p>
        </section> Tel/WhatsApp: 3403750889 (ore 9:00 - 13:00/16:00 - 20:00)
      </div>
    </div>
  );
};

export default App;
