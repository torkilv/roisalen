// this renders the speakerlist queue. 
// it needs a reference to a root <ul> or <ol> element to work.
//
// typically, you'd initialize it like this:
//
// var myQueue = new speakerlistView( document.getElementById("myList") )



function SpeakerQueueView(rootHTMLelement) {

    this.rootHTMLelement = rootHTMLelement;
    this.suffix = ;

    this.drawSpeaker = drawSpeaker;
    this.undrawSpeaker = undrawSpeaker;

    function drawSpeaker(speaker, id) {
        this.countSpeakers++;
        temp = document.createElement("li");
        temp.setAttribute('id',id);
        temp.innerHTML = "<span class=\"num\">" + speaker.number + \
                         "</span> <span class=\"name\"" + speaker.name + \
                         "</span>" + "<span onclick=\"undrawSpeaker(" + \
                         countSpeakers + ")\">X</span>";
        this.rootHTMLelement.appendChild( temp );
    }

    function undrawSpeaker( id ) {
        this.rootHTMLelement.removeChild( document.getElementById( id ) );
    }

}
