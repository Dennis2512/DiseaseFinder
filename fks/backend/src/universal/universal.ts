/* 
1.  Anfrage Client mit SymptIn
2.  Check ob SymptIn in DataBase 'Symptome' von steht
        a.Wenn nicht rufe Api auf
            -Verbindung zu API aufbauen
            -Suche nach Krankheit bei API mit SymptIn
            -Ausgabe der Ergebnisse von API für SymptIn an Client
        b.Wenn ja Hole Daten und schick sie an Client
3.  Check ob für Ergbenis ein Arzt in der DataBase 'Praxen' steht
        a.Wenn nicht, suche nach Praxis in API für Praxen
            -Gebe immer Allgemeinärzte mit
        b.Wenn ja, gebe Daten von Praxis an Client
            -Gebe immer Allgemeinärzte mit
4.  Lass den Crowler 1mal die Woche laufen um neue Daten in die DB zu schreiben.
*/