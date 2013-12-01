// start og tell ned innlegg / replikk
// TODO: kall klokke
// TODO: skift farge eller fjern eller hva

function endSpeech() {
    undrawSpeaker // something something
}

function startSpeech() {
    setInterval( endSpeech, speechLimit );
}

// submit nytt nummer
// submit ny replikk på current
function parseNum( num ) {
    if ( num[0] == 'r' ) {
        num.shift();
        .add(  .getSpeakerByNum( num )
    } else {
        .add(  .getSpeakerByNum( num ) )
    }
}
